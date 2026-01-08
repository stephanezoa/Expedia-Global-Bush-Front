import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Filter, Star, ChevronRight, X, Check, Heart, TrendingUp, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pays1 from "../assets/pays1.jpg"
import { useNavigate } from 'react-router-dom'; 



const HotelsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    destination: 'Tallinn',
    checkIn: 'Dec 28',
    checkOut: 'Dec 29',
    travelers: '2 travelers, 1 room'
  });

  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState('recommended');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    amenities: [],
    priceRange: [30, 400],
    propertyType: [],
    paymentType: []
  });

  const popularAreas = [
    { name: 'Old Town Tallinn', count: 42 },
    { name: 'City Centre', count: 78 },
    { name: 'Kesklinn', count: 56 },
    { name: 'Põhja-Tallinn', count: 23 },
    { name: 'Mustamäe', count: 18 }
  ];

  const popularAmenities = [
    { name: 'Breakfast included', icon: '🍳' },
    { name: 'Free WiFi', icon: '📶' },
    { name: 'Spa', icon: '💆' },
    { name: 'Pool', icon: '🏊' },
    { name: 'Fitness center', icon: '💪' },
    { name: 'Parking', icon: '🅿️' },
    { name: 'Airport shuttle', icon: '🚌' },
    { name: 'Pet friendly', icon: '🐾' }
  ];

  const propertyTypes = [
    { name: 'Hotel', count: 124 },
    { name: 'Apartment', count: 67 },
    { name: 'Guest house', count: 23 },
    { name: 'Hostel', count: 15 },
    { name: 'Resort', count: 8 },
    { name: 'Villa', count: 5 }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Mövenpick Hotel Tallinn',
      location: 'City Centre, Tallinn',
      rating: 9.2,
      reviews: 1427,
      category: 'Exceptional',
      price: 150,
      originalPrice: 180,
      discount: '17%',
      description: 'Experience splendid views of Tallinn. Our hotel features different rooms and suites offering stunning views of Tallinn.',
      amenities: ['Free WiFi', 'Spa', 'Indoor pool', 'Fitness center', 'Restaurant'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      tags: ['Recently renovated', 'Reserve now, pay later', 'Eco-certified'],
      coordinates: { lat: 59.4369, lng: 24.7536 }
    },
    {
      id: 2,
      name: 'Radisson Blu Hotel Olümpia',
      location: 'City Centre, Tallinn',
      rating: 8.7,
      reviews: 892,
      category: 'Excellent',
      price: 125,
      originalPrice: 155,
      discount: '19%',
      description: 'Enjoy sweeping views of Tallinn from our rooftop bar and restaurant.',
      amenities: ['Free WiFi', 'Spa', 'Fitness center', 'Restaurant', 'Bar'],
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w-800&auto=format&fit=crop',
      tags: ['City view', 'Business center', 'Breakfast included'],
      coordinates: { lat: 59.4339, lng: 24.7546 }
    },
    {
      id: 3,
      name: 'Park Inn by Radisson Meriton',
      location: 'City Centre, Tallinn',
      rating: 8.4,
      reviews: 654,
      category: 'Very Good',
      price: 98,
      originalPrice: 120,
      discount: '18%',
      description: 'Modern hotel with convenient access to all major attractions.',
      amenities: ['Free WiFi', 'Fitness center', 'Restaurant', 'Parking'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w-800&auto=format&fit=crop',
      tags: ['Family friendly', 'Central location', 'Pet friendly'],
      coordinates: { lat: 59.4359, lng: 24.7556 }
    },
    {
      id: 4,
      name: 'Swissôtel Tallinn',
      location: 'City Centre, Tallinn',
      rating: 9.0,
      reviews: 1103,
      category: 'Exceptional',
      price: 175,
      originalPrice: 210,
      discount: '17%',
      description: 'Luxury hotel with panoramic views and premium amenities.',
      amenities: ['Free WiFi', 'Spa', 'Pool', 'Multiple restaurants', 'Concierge'],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w-800&auto=format&fit=crop',
      tags: ['Luxury', 'Spa', 'Fine dining'],
      coordinates: { lat: 59.4349, lng: 24.7566 }
    },
    {
      id: 5,
      name: 'Hotel Telegraaf',
      location: 'Old Town, Tallinn',
      rating: 9.3,
      reviews: 876,
      category: 'Exceptional',
      price: 195,
      originalPrice: 235,
      discount: '17%',
      description: 'Historic luxury hotel located in the heart of Old Town.',
      amenities: ['Free WiFi', 'Spa', 'Michelin-star restaurant', 'Wine cellar'],
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w-800&auto=format&fit=crop',
      tags: ['Historic', 'Luxury', 'Fine dining'],
      coordinates: { lat: 59.4379, lng: 24.7576 }
    },
    {
      id: 6,
      name: 'Hestia Hotel Europa',
      location: 'Kesklinn, Tallinn',
      rating: 8.1,
      reviews: 432,
      category: 'Very Good',
      price: 85,
      originalPrice: 105,
      discount: '19%',
      description: 'Comfortable hotel with great value in central location.',
      amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Family rooms'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w-800&auto=format&fit=crop',
      tags: ['Budget friendly', 'Family rooms', 'Central'],
      coordinates: { lat: 59.4389, lng: 24.7586 }
    }
  ];

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => {
      const currentValues = [...prev[category]];
      const index = currentValues.indexOf(value);
      
      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(value);
      }
      
      return {
        ...prev,
        [category]: currentValues
      };
    });
  };

  const handleSearch = () => {
    // Logique de recherche
    console.log('Searching with:', searchParams, selectedFilters);
  };

  const clearFilters = () => {
    setSelectedFilters({
      area: [],
      amenities: [],
      priceRange: [30, 400],
      propertyType: [],
      paymentType: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 relative min-h-[400px]"
          style={{
              backgroundImage: `url(${Pays1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
          }}>
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-blue-500/50 z-0"></div>
          
          {/* Contenu principal positionné au-dessus de l'overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              {/* Titre et description */}
              <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">Find Your Perfect Stay</h1>
                  <p className="text-blue-100 text-lg">Discover amazing hotels at unbeatable prices</p>
              </div>
              
              {/* Formulaire de recherche */}
              <div className="bg-white rounded-xl border border-gray-300 p-6 shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* Destination */}
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                              Destination
                          </label>
                          <div className="relative">
                              <input
                                  type="text"
                                  value={searchParams.destination}
                                  onChange={(e) => setSearchParams({...searchParams, destination: e.target.value})}
                                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                  placeholder="Where do you want to stay?"
                              />
                              <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          </div>
                      </div>

                      {/* Dates */}
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                              Check-in / Check-out
                          </label>
                          <div className="relative">
                              <input
                                  type="text"
                                  value={`${searchParams.checkIn} - ${searchParams.checkOut}`}
                                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white cursor-pointer"
                                  readOnly
                                  onClick={() => {/* Ouvrir le calendrier */}}
                              />
                              <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          </div>
                      </div>

                      {/* Travelers */}
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                              Travelers
                          </label>
                          <div className="relative">
                              <input
                                  type="text"
                                  value={searchParams.travelers}
                                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white cursor-pointer"
                                  readOnly
                                  onClick={() => {/* Ouvrir le sélecteur de voyageurs */}}
                              />
                              <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          </div>
                      </div>

                      {/* Search Button */}
                      <div className="flex items-end">
                          <button
                              onClick={handleSearch}
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                              <Search className="w-5 h-5" />
                              Search Hotels
                          </button>
                      </div>
                  </div>
                  
                  {/* Options supplémentaires (optionnel) */}
                  <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                              <input 
                                  type="checkbox" 
                                  id="flexibleDates" 
                                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                              />
                              <label htmlFor="flexibleDates" className="ml-2 text-sm text-gray-700">
                                  Flexible dates
                              </label>
                          </div>
                          <div className="flex items-center">
                              <input 
                                  type="checkbox" 
                                  id="directOnly" 
                                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                              />
                              <label htmlFor="directOnly" className="ml-2 text-sm text-gray-700">
                                  Direct deals only
                              </label>
                          </div>
                      </div>
                      
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          Advanced filters →
                      </button>
                  </div>
              </div>
          </div>
      </div>
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear all
                </button>
              </div>

              {/* Popular Filters */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Popular filters</h4>
                <div className="space-y-3">
                  {popularAreas.map((area, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.area.includes(area.name)}
                          onChange={() => toggleFilter('area', area.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{area.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{area.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Amenities</h4>
                <div className="space-y-3">
                  {popularAmenities.map((amenity, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.amenities.includes(amenity.name)}
                          onChange={() => toggleFilter('amenities', amenity.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{amenity.icon} {amenity.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Property type</h4>
                <div className="space-y-3">
                  {propertyTypes.map((type, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.propertyType.includes(type.name)}
                          onChange={() => toggleFilter('propertyType', type.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{type.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{type.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Price per night</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="30"
                    max="400"
                    value={selectedFilters.priceRange[1]}
                    onChange={(e) => setSelectedFilters({
                      ...selectedFilters,
                      priceRange: [selectedFilters.priceRange[0], parseInt(e.target.value)]
                    })}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>${selectedFilters.priceRange[0]}</span>
                    <span>${selectedFilters.priceRange[1]}+</span>
                  </div>
                </div>
              </div>

              {/* Payment Type */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Payment type</h4>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.paymentType.includes('pay_later')}
                      onChange={() => toggleFilter('paymentType', 'pay_later')}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-3 text-gray-700">Reserve now, pay later</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.paymentType.includes('free_cancellation')}
                      onChange={() => toggleFilter('paymentType', 'free_cancellation')}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-3 text-gray-700">Free cancellation</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header with sort options */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Hotels in Tallinn</h1>
                  <p className="text-gray-600 mt-1">Sun, Dec 28 - Mon, Dec 29 • 2 travelers, 1 room</p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition"
                  >
                    <Filter className="w-4 h-4" />
                    More filters
                  </button>
                  <select 
                    value={activeSort}
                    onChange={(e) => setActiveSort(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                  >
                    <option value="recommended">Sort by: Recommended</option>
                    <option value="price_low">Price (low to high)</option>
                    <option value="price_high">Price (high to low)</option>
                    <option value="rating">Guest rating</option>
                    <option value="distance">Distance from center</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Hotels List */}
            <div className="space-y-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} onClick={() => navigate(`/hotels/${hotel.id}`)} className="bg-white cursor-pointer rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Hotel Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                      {hotel.discount && (
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                            Save {hotel.discount}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hotel Info */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                            <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{hotel.location}</span>
                          </div>
                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="ml-1 font-bold">{hotel.rating}</span>
                              <span className="ml-1">{hotel.category}</span>
                            </div>
                            <span className="text-gray-600">({hotel.reviews} reviews)</span>
                          </div>
                          <p className="mt-4 text-gray-700 line-clamp-2">{hotel.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                {amenity}
                              </span>
                            ))}
                            {hotel.amenities.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                +{hotel.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {hotel.tags.map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="mt-4 md:mt-0 md:ml-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {hotel.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">${hotel.originalPrice}</span>
                            )}
                            <div className="text-3xl font-bold text-gray-900">${hotel.price}</div>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">per night</div>
                          <div className="text-sm text-gray-600 mt-1">+ $18 taxes & fees</div>
                          <div className="mt-4 space-y-2">
                            <button  onClick={() => navigate(`/hotels/${hotel.id}`)} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                              Reserve now
                            </button>
                            <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
                              Reserve now, pay later
                            </button>
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            You will not be charged yet
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map View Button */}
            <div className="mt-8 text-center">
              <Link to="/hotels/map">
                <button className="px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition flex items-center gap-2 mx-auto">
                  <MapPin className="w-5 h-5" />
                  View on map
                </button>
              </Link>
            </div>

            {/* Compare Properties Banner */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compare properties</h3>
              <p className="text-gray-600 mb-4">Get a side-by-side view of up to 5 properties.</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                Start comparing
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelsPage;