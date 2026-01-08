import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Grid, ZoomIn, Download, Share2, Car, Settings, Users, Fuel } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CarGalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Front View' },
    { id: 2, url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop', category: 'interior', title: 'Dashboard' },
    { id: 3, url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&auto=format&fit=crop', category: 'interior', title: 'Front Seats' },
    { id: 4, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Rear View' },
    { id: 5, url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Side View' },
    { id: 6, url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Angled View' },
    { id: 7, url: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=1200&auto=format&fit=crop', category: 'interior', title: 'Back Seats' },
    { id: 8, url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop', category: 'details', title: 'Wheels' },
    { id: 9, url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&auto=format&fit=crop', category: 'interior', title: 'Infotainment System' },
    { id: 10, url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&auto=format&fit=crop', category: 'details', title: 'Headlights' },
    { id: 11, url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&auto=format&fit=crop', category: 'exterior', title: 'Night Mode' },
    { id: 12, url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop', category: 'interior', title: 'Steering Wheel' }
  ];

  const categories = [
    { id: 'all', label: 'All photos', count: images.length },
    { id: 'exterior', label: 'Exterior', count: images.filter(img => img.category === 'exterior').length },
    { id: 'interior', label: 'Interior', count: images.filter(img => img.category === 'interior').length },
    { id: 'details', label: 'Details', count: images.filter(img => img.category === 'details').length }
  ];

  const carDetails = {
    name: 'Toyota Corolla Hybrid 2024',
    supplier: 'Avis',
    price: '$45/day',
    features: ['Automatic', 'Hybrid', '5 Seats', 'Air Conditioning']
  };

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
            <button onClick={() => console.log('Download')} className="hover:text-gray-300">
              <Download className="w-6 h-6" />
            </button>
            <button onClick={() => console.log('Share')} className="hover:text-gray-300">
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
              ← Back to car details
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{carDetails.name}</h1>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>{carDetails.supplier}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">{carDetails.price}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {carDetails.features.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openImage(image, index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-medium mb-1">{image.title}</div>
                  <div className="text-sm text-gray-300 capitalize">{image.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="mt-8 text-center text-gray-400">
          <Camera className="w-5 h-5 inline mr-2" />
          Showing {filteredImages.length} of {images.length} photos
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default CarGalleryPage;