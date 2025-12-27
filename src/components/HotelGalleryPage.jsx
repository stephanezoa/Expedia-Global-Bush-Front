import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Grid, ZoomIn, Download, Share2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

const HotelGalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Données d'images (dans un cas réel, récupérer depuis une API)
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop', category: 'room', title: 'Superior Room' },
    { id: 2, url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&auto=format&fit=crop', category: 'bathroom', title: 'Luxury Bathroom' },
    { id: 3, url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Hotel Exterior' },
    { id: 4, url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&auto=format&fit=crop', category: 'amenities', title: 'Spa Area' },
    { id: 5, url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&auto=format&fit=crop', category: 'pool', title: 'Indoor Pool' },
    { id: 6, url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&auto=format&fit=crop', category: 'dining', title: 'Restaurant' },
    { id: 7, url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&auto=format&fit=crop', category: 'common', title: 'Lobby' },
    { id: 8, url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop', category: 'spa', title: 'Spa Treatment Room' },
    { id: 9, url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&auto=format&fit=crop', category: 'room', title: 'Executive Suite' },
    { id: 10, url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&auto=format&fit=crop', category: 'bathroom', title: 'Bathroom Details' },
    { id: 11, url: 'https://images.unsplash.com/photo-1564501049418-3c27787f5e7c?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Night View' },
    { id: 12, url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop', category: 'dining', title: 'Breakfast Buffet' },
    { id: 13, url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop', category: 'room', title: 'Double Room' },
    { id: 14, url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&auto=format&fit=crop', category: 'bathroom', title: 'Bathroom Amenities' },
    { id: 15, url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Main Entrance' },
    { id: 16, url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&auto=format&fit=crop', category: 'amenities', title: 'Fitness Center' }
  ];

  const categories = [
    { id: 'all', label: 'All photos', count: images.length },
    { id: 'room', label: 'Rooms', count: images.filter(img => img.category === 'room').length },
    { id: 'bathroom', label: 'Bathroom', count: images.filter(img => img.category === 'bathroom').length },
    { id: 'exterior', label: 'Exterior', count: images.filter(img => img.category === 'exterior').length },
    { id: 'amenities', label: 'Amenities', count: images.filter(img => img.category === 'amenities').length },
    { id: 'pool', label: 'Pool', count: images.filter(img => img.category === 'pool').length },
    { id: 'dining', label: 'Dining', count: images.filter(img => img.category === 'dining').length },
    { id: 'common', label: 'Common areas', count: images.filter(img => img.category === 'common').length },
    { id: 'spa', label: 'Spa', count: images.filter(img => img.category === 'spa').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredImages.length - 1;
    if (newIndex >= filteredImages.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const downloadImage = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage.url;
      link.download = `hotel-image-${selectedImage.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const shareImage = async () => {
    if (navigator.share && selectedImage) {
      try {
        await navigator.share({
          title: selectedImage.title,
          text: 'Check out this hotel photo',
          url: selectedImage.url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateImage(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
            onClick={() => navigateImage(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-white">
            <button onClick={downloadImage} className="hover:text-gray-300">
              <Download className="w-6 h-6" />
            </button>
            <button onClick={shareImage} className="hover:text-gray-300">
              <Share2 className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-300">
              <ZoomIn className="w-6 h-6" />
            </button>
          </div>
          
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <div className="font-bold text-lg">{selectedImage.title}</div>
              <div className="text-gray-300">
                {currentIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Gallery Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 mb-2">
            <button onClick={() => navigate(-1)} className="text-blue-400 hover:text-blue-300">
              ← Back to hotel
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Mövenpick Hotel Tallinn</h1>
              <div className="flex items-center gap-2 text-gray-300">
                <Camera className="w-5 h-5" />
                <span>{images.length} photos</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Grid className="w-5 h-5" />
                Grid view
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 space-x-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openImage(image, index)}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-medium">{image.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="mt-8 text-center text-gray-400">
          Showing {filteredImages.length} of {images.length} photos
        </div>
      </div>
    </div>
  );
};

export default HotelGalleryPage;