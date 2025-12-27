import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
    StarIcon, 
    MapPinIcon, 
    CalendarIcon, 
    UsersIcon,
    HeartIcon as HeartSolid,
    ShareIcon,
    ChevronLeftIcon,
    PhoneIcon,
    GlobeAltIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline, ArrowRightIcon } from "@heroicons/react/24/outline";

const DESTINATION_DETAILS = {
    1: {
        id: 1,
        name: "Paris, France",
        country: "France",
        continent: "Europe",
        description: "Paris, la capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré.",
        longDescription: "Paris est divisée en 20 arrondissements, chacun avec son propre caractère et ses attractions uniques. De Montmartre avec sa vue imprenable et son ambiance artistique au Quartier Latin avec ses ruelles historiques et sa vie étudiante animée, chaque coin de Paris raconte une histoire. La ville est également connue pour ses musées de classe mondiale comme le Louvre, le Musée d'Orsay et le Centre Pompidou, ainsi que pour sa scène culinaire exceptionnelle qui va des boulangeries traditionnelles aux restaurants étoilés Michelin.",
        highlights: [
            "Tour Eiffel - Symbole emblématique de Paris",
            "Louvre - Le plus grand musée d'art au monde",
            "Notre-Dame - Chef-d'œuvre de l'architecture gothique",
            "Champs-Élysées - Avenue la plus célèbre du monde",
            "Montmartre - Quartier des artistes et de Sacré-Cœur"
        ],
        rating: 4.8,
        reviews: 1245,
        price: 899,
        duration: "5 jours",
        bestTime: "Avril-Juin & Septembre-Octobre",
        languages: ["Français", "Anglais"],
        currency: "Euro (€)",
        images: [
            "/src/assets/paris-1.jpg",
            "/src/assets/paris-2.jpg",
            "/src/assets/paris-3.jpg",
            "/src/assets/paris-4.jpg",
            "/src/assets/paris-5.jpg"
        ],
        itinerary: [
            { day: 1, title: "Arrivée et Découverte", activities: ["Arrivée à CDG", "Installation à l'hôtel", "Tour Eiffel au coucher du soleil", "Dîner croisière sur la Seine"] },
            { day: 2, title: "Art et Histoire", activities: ["Visite du Louvre", "Jardin des Tuileries", "Place de la Concorde", "Opéra Garnier"] },
            { day: 3, title: "Montmartre et Culture", activities: ["Basilique du Sacré-Cœur", "Place du Tertre", "Moulin Rouge", "Dîner dans un bistrot typique"] },
            { day: 4, title: "Gastronomie et Shopping", activities: ["Cours de pâtisserie", "Marché Rue Mouffetard", "Shopping au Marais", "Soirée cabaret"] },
            { day: 5, title: "Départ", activities: ["Petit-déjeuner final", "Derniers achats", "Transfert à l'aéroport"] }
        ],
        packages: [
            { name: "Basique", price: 699, includes: ["Hôtel 3*", "Petits-déjeuners", "Transferts", "Guide audio"] },
            { name: "Confort", price: 899, includes: ["Hôtel 4*", "Petits-déjeuners", "Visites guidées", "Croisière Seine"], popular: true },
            { name: "Luxe", price: 1299, includes: ["Hôtel 5*", "Repas inclus", "Guide privé", "Expériences VIP"] }
        ],
        climate: "Océanique tempéré",
        visa: "Visa Schengen requis pour certains pays",
        safety: "Très sûr, précautions standard recommandées"
    }
};

export default function DestinationDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState(1);
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        // Simulation de chargement des données
        setTimeout(() => {
            setDestination(DESTINATION_DETAILS[id] || DESTINATION_DETAILS[1]);
        }, 300);
    }, [id]);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 pt-6">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                    <ChevronLeftIcon className="w-5 h-5 mr-2" />
                    Retour aux destinations
                </button>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8">
                {/* Galerie d'images principale */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                    <div className="relative h-96">
                        <img 
                            src={destination.images[selectedImage]} 
                            alt={destination.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Boutons d'action */}
                        <div className="absolute top-6 right-6 flex gap-3">
                            <button 
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                            >
                                {isFavorite ? 
                                    <HeartSolid className="w-6 h-6 text-red-500" /> : 
                                    <HeartOutline className="w-6 h-6 text-white" />
                                }
                            </button>
                            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                                <ShareIcon className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        
                        {/* Miniatures */}
                        <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto pb-2">
                            {destination.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${selectedImage === index ? 'border-yellow-400' : 'border-white/50'}`}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${destination.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Informations principales */}
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center mb-2">
                            <MapPinIcon className="w-5 h-5 mr-2" />
                            <span className="text-lg">{destination.country} • {destination.continent}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">{destination.name}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <StarIcon className="w-6 h-6 text-yellow-400 fill-current" />
                                <span className="ml-1 text-xl font-bold">{destination.rating}</span>
                                <span className="ml-1 opacity-90">({destination.reviews} avis)</span>
                            </div>
                            <div className="flex items-center">
                                <CalendarIcon className="w-5 h-5 mr-2" />
                                <span>{destination.duration}</span>
                            </div>
                            <div className="px-4 py-1 bg-yellow-400 text-black font-bold rounded-full">
                                À partir de {destination.price}€
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne gauche - Description et itinéraire */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de {destination.name}</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {destination.description}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {destination.longDescription}
                            </p>
                            
                            {/* Points forts */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Points forts</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {destination.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start">
                                            <ArrowRightIcon className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Itinéraire */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinéraire détaillé</h2>
                            <div className="space-y-6">
                                {destination.itinerary.map((day) => (
                                    <div key={day.day} className="border-l-4 border-blue-500 pl-6 py-2">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                                                J{day.day}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{day.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {day.activities.map((activity, index) => (
                                                <li key={index} className="flex items-center text-gray-700">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Réservation et infos */}
                    <div className="space-y-8">
                        {/* Forfaits */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre forfait</h2>
                            <div className="space-y-4">
                                {destination.packages.map((pkg, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setSelectedPackage(index)}
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition ${selectedPackage === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="font-bold text-lg">{pkg.name}</h3>
                                            <span className="text-2xl font-bold text-blue-600">{pkg.price}€</span>
                                        </div>
                                        <ul className="space-y-2 mb-4">
                                            {pkg.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {pkg.popular && (
                                            <div className="text-center">
                                                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-bold rounded-full">
                                                  LE PLUS POPULAIRE
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            <button className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition text-lg">
                                Réserver maintenant
                            </button>
                        </div>

                        {/* Informations pratiques */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CalendarIcon className="w-5 h-5 text-blue-500 mr-3" />
                                    <div>
                                        <div className="font-semibold">Meilleure période</div>
                                        <div className="text-gray-600">{destination.bestTime}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ClockIcon className="w-5 h-5 text-blue-500 mr-3" />
                                    <div>
                                        <div className="font-semibold">Durée recommandée</div>
                                        <div className="text-gray-600">{destination.duration}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <GlobeAltIcon className="w-5 h-5 text-blue-500 mr-3" />
                                    <div>
                                        <div className="font-semibold">Langues</div>
                                        <div className="text-gray-600">{destination.languages.join(", ")}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <UsersIcon className="w-5 h-5 text-blue-500 mr-3" />
                                    <div>
                                        <div className="font-semibold">Visa</div>
                                        <div className="text-gray-600">{destination.visa}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Assistance */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
                            <p className="mb-4 opacity-90">
                                Nos experts voyages sont disponibles 7j/7 pour vous conseiller
                            </p>
                            <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition flex items-center justify-center">
                                <PhoneIcon className="w-5 h-5 mr-2" />
                                Contacter un expert
                            </button>
                        </div>
                    </div>
                </div>

                {/* Galerie complète */}
                <div className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Galerie photos</h2>
                        <button 
                            onClick={() => setShowGallery(true)}
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            Voir toutes les photos
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {destination.images.slice(0, 4).map((img, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedImage(index);
                                    setShowGallery(true);
                                }}
                                className="relative h-48 rounded-xl overflow-hidden group"
                            >
                                <img 
                                    src={img} 
                                    alt={`Galerie ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Avis */}
                <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Avis des voyageurs</h2>
                    <div className="flex items-center mb-6">
                        <div className="text-5xl font-bold mr-4">{destination.rating}</div>
                        <div>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon 
                                        key={i} 
                                        className={`w-6 h-6 ${i < Math.floor(destination.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mt-1">Basé sur {destination.reviews} avis</p>
                        </div>
                    </div>
                    <button className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
                        Voir tous les avis
                    </button>
                </div>
            </div>

            {/* Modal Galerie */}
            {showGallery && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <button 
                            onClick={() => setShowGallery(false)}
                            className="absolute top-6 right-6 text-white z-10 p-2"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="relative w-4/5 h-4/5">
                            <img 
                                src={destination.images[selectedImage]} 
                                alt="Gallery"
                                className="w-full h-full object-contain"
                            />
                            
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {destination.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-3 h-3 rounded-full ${selectedImage === index ? 'bg-white' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : destination.images.length - 1)}
                            className="absolute left-6 text-white p-4"
                        >
                            <ChevronLeftIcon className="w-8 h-8" />
                        </button>
                        <button 
                            onClick={() => setSelectedImage(prev => prev < destination.images.length - 1 ? prev + 1 : 0)}
                            className="absolute right-6 text-white p-4"
                        >
                            <ArrowRightIcon className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}