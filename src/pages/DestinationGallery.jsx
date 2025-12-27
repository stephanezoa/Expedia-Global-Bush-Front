import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
    HeartIcon,
    ShareIcon,
    ArrowDownTrayIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const GALLERY_DATA = {
    1: {
        id: 1,
        name: "Paris en Images",
        description: "Découvrez la beauté de Paris à travers ces magnifiques photographies",
        categories: ["Monuments", "Culture", "Gastronomie", "Vie Nocturne"],
        images: [
            {
                id: 1,
                url: "/src/assets/paris-gallery-1.jpg",
                title: "Tour Eiffel au coucher du soleil",
                description: "Vue imprenable sur la Tour Eiffel depuis le Trocadéro",
                category: "Monuments",
                likes: 245,
                featured: true
            },
            {
                id: 2,
                url: "/src/assets/paris-gallery-2.jpg",
                title: "Notre-Dame de Paris",
                description: "La célèbre cathédrale gothique sur l'île de la Cité",
                category: "Monuments",
                likes: 189,
                featured: false
            },
            {
                id: 3,
                url: "/src/assets/paris-gallery-3.jpg",
                title: "Montmartre",
                description: "Les ruelles pittoresques du quartier des artistes",
                category: "Culture",
                likes: 167,
                featured: true
            },
            {
                id: 4,
                url: "/src/assets/paris-gallery-4.jpg",
                title: "Café parisien",
                description: "Un café typique dans le Quartier Latin",
                category: "Gastronomie",
                likes: 134,
                featured: false
            },
            {
                id: 5,
                url: "/src/assets/paris-gallery-5.jpg",
                title: "Seine la nuit",
                description: "Les lumières de Paris se reflétant sur la Seine",
                category: "Vie Nocturne",
                likes: 278,
                featured: true
            },
            {
                id: 6,
                url: "/src/assets/paris-gallery-6.jpg",
                title: "Le Louvre",
                description: "La pyramide du Louvre sous un ciel bleu",
                category: "Monuments",
                likes: 156,
                featured: false
            },
            {
                id: 7,
                url: "/src/assets/paris-gallery-7.jpg",
                title: "Macarons",
                description: "Les célèbres macarons parisiens",
                category: "Gastronomie",
                likes: 198,
                featured: true
            },
            {
                id: 8,
                url: "/src/assets/paris-gallery-8.jpg",
                title: "Champs-Élysées",
                description: "L'avenue la plus célèbre du monde",
                category: "Monuments",
                likes: 167,
                featured: false
            },
            {
                id: 9,
                url: "/src/assets/paris-gallery-9.jpg",
                title: "Opéra Garnier",
                description: "Le chef-d'œuvre architectural de l'opéra",
                category: "Culture",
                likes: 145,
                featured: false
            }
        ],
        videos: [
            {
                id: 1,
                url: "/src/assets/paris-video-1.mp4",
                title: "Paris en 4K",
                duration: "2:45"
            },
            {
                id: 2,
                url: "/src/assets/paris-video-2.mp4",
                title: "Balade dans Montmartre",
                duration: "1:30"
            }
        ]
    }
};

export default function DestinationGallery() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [gallery, setGallery] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Toutes");
    const [selectedImage, setSelectedImage] = useState(null);
    const [likedImages, setLikedImages] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // 'grid' ou 'masonry'

    useEffect(() => {
        setTimeout(() => {
            setGallery(GALLERY_DATA[id] || GALLERY_DATA[1]);
        }, 300);
    }, [id]);

    if (!gallery) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const filteredImages = gallery.images.filter(img => {
        const matchesCategory = selectedCategory === "Toutes" || img.category === selectedCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            img.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ["Toutes", ...new Set(gallery.images.map(img => img.category))];

    const handleLike = (imageId) => {
        const newLiked = new Set(likedImages);
        if (newLiked.has(imageId)) {
            newLiked.delete(imageId);
        } else {
            newLiked.add(imageId);
        }
        setLikedImages(newLiked);
    };

    const downloadImage = (imageUrl, imageTitle) => {
        // Simulation de téléchargement
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${imageTitle}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute top-6 left-6 flex items-center hover:text-yellow-300 transition"
                    >
                        <ChevronLeftIcon className="w-5 h-5 mr-2" />
                        Retour
                    </button>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">{gallery.name}</h1>
                    <p className="text-lg text-center max-w-2xl opacity-90">{gallery.description}</p>
                </div>
            </div>

            {/* Contrôles */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    {/* Recherche */}
                    <div className="relative w-full md:w-64">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher une photo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Catégories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full transition ${selectedCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Mode d'affichage */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-lg ${viewMode === "grid" ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                            ▦
                        </button>
                        <button
                            onClick={() => setViewMode("masonry")}
                            className={`p-2 rounded-lg ${viewMode === "masonry" ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                            ▤
                        </button>
                    </div>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600">{gallery.images.length}</div>
                        <div className="text-gray-600">Photos</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-purple-600">{gallery.videos.length}</div>
                        <div className="text-gray-600">Vidéos</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-green-600">
                            {gallery.images.reduce((sum, img) => sum + img.likes, 0).toLocaleString()}
                        </div>
                        <div className="text-gray-600">J'aime</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-yellow-600">
                            {gallery.images.filter(img => img.featured).length}
                        </div>
                        <div className="text-gray-600">Photos populaires</div>
                    </div>
                </div>

                {/* Galerie d'images */}
                <div className={`${viewMode === "grid" ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'columns-1 md:columns-2 lg:columns-3'} gap-4`}>
                    {filteredImages.map(image => (
                        <div 
                            key={image.id} 
                            className={`relative group mb-4 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${image.featured ? 'ring-2 ring-yellow-400' : ''}`}
                        >
                            {/* Image */}
                            <button
                                onClick={() => setSelectedImage(image)}
                                className="relative w-full h-64 overflow-hidden"
                            >
                                <img 
                                    src={image.url} 
                                    alt={image.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Badge catégorie */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                                        {image.category}
                                    </span>
                                </div>
                                
                                {image.featured && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                                            POPULAIRE
                                        </span>
                                    </div>
                                )}
                                
                                {/* Overlay info */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                                    <p className="text-white/80 text-sm">{image.description}</p>
                                </div>
                            </button>
                            
                            {/* Actions */}
                            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => handleLike(image.id)}
                                    className={`p-2 rounded-full ${likedImages.has(image.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-white'}`}
                                >
                                    <HeartIcon className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => downloadImage(image.url, image.title)}
                                    className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white"
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                </button>
                                <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white">
                                    <ShareIcon className="w-5 h-5" />
                                </button>
                            </div>
                            
                            {/* Likes */}
                            <div className="absolute bottom-4 left-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <HeartIcon className="w-5 h-5 mr-1" />
                                <span>{image.likes}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune photo trouvée</h3>
                        <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                    </div>
                )}

                {/* Section Vidéos */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Vidéos de {gallery.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {gallery.videos.map(video => (
                            <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                                <div className="relative h-64">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        Regarder la vidéo
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        {/* Bouton fermer */}
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white z-10 p-2 hover:bg-white/20 rounded-full transition"
                        >
                            <XMarkIcon className="w-8 h-8" />
                        </button>
                        
                        {/* Image */}
                        <div className="relative max-w-4xl max-h-[80vh]">
                            <img 
                                src={selectedImage.url} 
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            
                            {/* Informations */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                                <p className="mb-4">{selectedImage.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                            {selectedImage.category}
                                        </span>
                                        <div className="ml-4 flex items-center">
                                            <HeartIcon className="w-5 h-5 mr-1" />
                                            <span>{selectedImage.likes}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleLike(selectedImage.id)}
                                            className={`p-2 rounded-full ${likedImages.has(selectedImage.id) ? 'bg-red-500' : 'bg-white/20'} hover:bg-white/30 transition`}
                                        >
                                            <HeartIcon className="w-5 h-5" />
                                        </button>
                                        <button 
                                            onClick={() => downloadImage(selectedImage.url, selectedImage.title)}
                                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                                        >
                                            <ArrowDownTrayIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Navigation */}
                        <button 
                            onClick={() => {
                                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                                const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                                setSelectedImage(filteredImages[prevIndex]);
                            }}
                            className="absolute left-6 text-white p-4 hover:bg-white/20 rounded-full transition"
                        >
                            <ChevronLeftIcon className="w-8 h-8" />
                        </button>
                        <button 
                            onClick={() => {
                                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                                const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                                setSelectedImage(filteredImages[nextIndex]);
                            }}
                            className="absolute right-6 text-white p-4 hover:bg-white/20 rounded-full transition"
                        >
                            <ChevronRightIcon className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Partagez vos photos !</h3>
                    <p className="mb-6 max-w-2xl mx-auto opacity-90">
                        Vous avez visité cette destination ? Partagez vos meilleures photos avec notre communauté.
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition">
                        Ajouter mes photos
                    </button>
                </div>
            </div>
        </div>
    );
}