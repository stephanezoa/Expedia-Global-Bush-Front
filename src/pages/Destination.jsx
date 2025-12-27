import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, Filter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pays1 from "../assets/pays1.jpg";

const DESTINATIONS = [
    {
        id: 1,
        name: "Paris, France",
        image: "/src/assets/paris.jpg",
        description: "La ville de l'amour et des lumières",
        rating: 4.8,
        reviews: 1245,
        price: 899,
        duration: "5 jours",
        category: ["Culture", "Romantique"],
        featured: true
    },
    // ... (le reste de vos destinations reste inchangé)
];

const CATEGORIES = [
    "Toutes",
    "Plage",
    "Montagne",
    "Culture",
    "Aventure",
    "Romantique",
    "Gastronomie",
    "Luxe",
    "Histoire"
];

export default function Destinations() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Toutes");
    const [sortBy, setSortBy] = useState("popular");
    const [filteredDestinations, setFilteredDestinations] = useState(DESTINATIONS);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        filterDestinations();
    }, [searchTerm, selectedCategory, sortBy]);

    const filterDestinations = () => {
        setIsLoading(true);
        
        let filtered = DESTINATIONS.filter(destination => {
            const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 destination.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = selectedCategory === "Toutes" || 
                                   destination.category.includes(selectedCategory);
            
            return matchesSearch && matchesCategory;
        });

        // Tri
        switch(sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                filtered.sort((a, b) => b.reviews - a.reviews);
        }

        setTimeout(() => {
            setFilteredDestinations(filtered);
            setIsLoading(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={Pays1}
                        alt="Destinations du monde"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
                        Explorez le <span className="text-yellow-300">Monde</span>
                    </h1>
                    <p className="text-xl text-center max-w-2xl mb-8 opacity-90">
                        Découvrez les destinations les plus incroyables et planifiez votre prochaine aventure
                    </p>
                    
                    {/* Barre de recherche */}
                    <div className="w-full max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Rechercher une destination..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="container mx-auto px-4 py-12">
                {/* Filtres et tris */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* Catégories */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full transition ${selectedCategory === category 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    {/* Tri */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5 text-gray-600" />
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="popular">Les plus populaires</option>
                            <option value="rating">Meilleures notes</option>
                            <option value="price-low">Prix croissant</option>
                            <option value="price-high">Prix décroissant</option>
                        </select>
                    </div>
                </div>

                {/* Affichage des destinations */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {filteredDestinations.length} Destinations {selectedCategory !== "Toutes" && `en ${selectedCategory}`}
                            </h2>
                            <p className="text-gray-600">
                                Trouvez votre prochaine escapade idéale
                            </p>
                        </div>
                        
                        {/* Grille des destinations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredDestinations.map((destination) => (
                                <Link 
                                    key={destination.id}
                                    to={`/destination/${destination.id}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img 
                                                src={destination.image} 
                                                alt={destination.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {destination.featured && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                                                        POPULAIRE
                                                    </span>
                                                </div>
                                            )}
                                            <div className="absolute bottom-4 right-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 font-bold rounded-lg">
                                                    {destination.price}€
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Contenu */}
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                                                    {destination.name}
                                                </h3>
                                                <div className="flex items-center">
                                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                    <span className="ml-1 font-semibold">{destination.rating}</span>
                                                    <span className="text-gray-400 ml-1">({destination.reviews})</span>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {destination.description}
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {destination.category.map((cat) => (
                                                    <span 
                                                        key={cat}
                                                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center text-gray-500">
                                                    <MapPin className="w-5 h-5 mr-2" />
                                                    <span>{destination.duration}</span>
                                                </div>
                                                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
                                                    Voir détails
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {filteredDestinations.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <Search className="w-16 h-16 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                                    Aucune destination trouvée
                                </h3>
                                <p className="text-gray-500">
                                    Essayez de modifier vos critères de recherche
                                </p>
                            </div>
                        )}
                    </>
                )}
                
                {/* Section inspirante */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Prêt à vivre votre prochaine aventure ?
                        </h2>
                        <p className="text-lg mb-6 opacity-90">
                            Nos experts en voyages sont là pour vous aider à créer l'itinéraire parfait
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
                                Parler à un expert
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                                Voir nos offres spéciales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}