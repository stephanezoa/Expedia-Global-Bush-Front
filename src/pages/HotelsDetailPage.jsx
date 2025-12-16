import React, { useState } from 'react';
import { 
  Star, MapPin, Heart, ChevronLeft, ChevronRight, 
  Wifi, Coffee, Car, Dumbbell, Wine, Utensils,
  Users, Calendar, Shield, Check, X, Camera,
  Share2, ExternalLink, ChevronDown, ChevronUp,
  Phone, Mail, Navigation
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const HotelDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    checkIn: 'Dec 28',
    checkOut: 'Dec 29',
    travelers: '2 travelers, 1 room'
  });

  // Données de l'hôtel (dans un cas réel, récupérer depuis une API)
  const hotel = {
    id: 1,
    name: 'Mövenpick Hotel Tallinn',
    location: 'City Centre, Tallinn',
    rating: 9.2,
    reviews: 1427,
    category: 'Exceptional',
    description: 'Experience splendid views of Tallinn. Our hotel features different rooms and suites offering stunning views of Tallinn.',
    
    highlights: [
      {
        title: 'Service, relax, repeat',
        description: 'Unwind and rejuvenate at the top-rated spa, offering the ultimate in tranquility.'
      },
      {
        title: 'Indoor pool',
        description: 'Enjoy your local relaxation in the indoor pool — a new find in this area.'
      },
      {
        title: 'Discover nearby landmarks',
        description: 'Visit Tallinn Christmas Markets and other historic sites.'
      }
    ],

    amenities: [
      { name: 'Free WiFi', icon: <Wifi className="w-5 h-5" /> },
      { name: 'Indoor pool', icon: '🏊' },
      { name: 'Full-service spa', icon: '💆' },
      { name: 'Fitness center', icon: <Dumbbell className="w-5 h-5" /> },
      { name: 'Buffet breakfast', icon: <Coffee className="w-5 h-5" /> },
      { name: 'Fine-dining restaurant', icon: <Utensils className="w-5 h-5" /> },
      { name: 'Bar/Lounge', icon: <Wine className="w-5 h-5" /> },
      { name: 'Self-parking', icon: <Car className="w-5 h-5" /> },
      { name: 'Room service', icon: '🛎️' },
      { name: 'Concierge', icon: '💁' },
      { name: 'Business center', icon: '💼' },
      { name: 'Meeting rooms', icon: '👥' },
      { name: 'Laundry service', icon: '🧺' },
      { name: 'Dry cleaning', icon: '👔' },
      { name: 'Air conditioning', icon: '❄️' },
      { name: 'Minibar', icon: '🍸' }
    ],

    nearbyAttractions: [
      { name: 'Tallinn Christmas Markets', distance: '9 min walk', icon: '🎄' },
      { name: 'Tallinn Central Market', distance: '9 min walk', icon: '🛒' },
      { name: 'Town Hall Square', distance: '12 min walk', icon: '🏛️' },
      { name: 'Tallinn (TLL-Lennart Meri)', distance: '5 min drive', icon: '✈️' }
    ],

    rooms: [
      {
        id: 1,
        name: 'Superior Room, 1 Double Bed',
        size: '269 sq ft',
        beds: '1 Double Bed',
        occupancy: 'Sleeps 2',
        wifi: 'Free WiFi',
        features: ['City view', 'Air conditioning', 'Minibar', 'Safe'],
        cancellation: {
          type: 'Fully refundable',
          deadline: 'before Dec 27',
          details: 'Cancel up to 24 hours before check-in for a full refund'
        },
        price: 150,
        originalPrice: 180,
        discount: '17%',
        taxes: '+ $21 taxes & fees',
        paymentNote: 'Reserve now, pay later available'
      },
      {
        id: 2,
        name: 'Superior Room, 1 Double Bed, Balcony',
        size: '269 sq ft',
        beds: '1 Double Bed',
        occupancy: 'Sleeps 2',
        wifi: 'Free WiFi',
        features: ['City view', 'Balcony', 'Air conditioning', 'Minibar'],
        cancellation: {
          type: 'Fully refundable',
          deadline: 'before Dec 14',
          details: 'Cancel up to 24 hours before check-in for a full refund'
        },
        price: 175,
        originalPrice: 210,
        discount: '17%',
        taxes: '+ $25 taxes & fees',
        paymentNote: 'Reserve now, pay later available'
      },
      {
        id: 3,
        name: 'Superior Room, 2 Twin Beds',
        size: '269 sq ft',
        beds: '2 Twin Beds',
        occupancy: 'Sleeps 2',
        wifi: 'Free WiFi',
        features: ['City view', 'Air conditioning', 'Minibar', 'Safe'],
        cancellation: {
          type: 'Fully refundable',
          deadline: 'before Dec 27',
          details: 'Cancel up to 24 hours before check-in for a full refund'
        },
        price: 160,
        originalPrice: 195,
        discount: '18%',
        taxes: '+ $23 taxes & fees',
        paymentNote: 'Reserve now, pay later available'
      },
      {
        id: 4,
        name: 'Executive Suite',
        size: '430 sq ft',
        beds: '1 King Bed',
        occupancy: 'Sleeps 3',
        wifi: 'Free WiFi',
        features: ['City view', 'Separate living area', 'Executive lounge access', 'Premium amenities'],
        cancellation: {
          type: 'Fully refundable',
          deadline: 'before Dec 27',
          details: 'Cancel up to 48 hours before check-in for a full refund'
        },
        price: 250,
        originalPrice: 310,
        discount: '19%',
        taxes: '+ $35 taxes & fees',
        paymentNote: 'Reserve now, pay later available'
      }
    ],

    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      children: 'Children stay free',
      pets: 'Pets not allowed',
      smoking: 'Non-smoking property'
    },

    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop', category: 'room' },
      { id: 2, url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop', category: 'bathroom' },
      { id: 3, url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop', category: 'exterior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop', category: 'amenities' },
      { id: 5, url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop', category: 'pool' },
      { id: 6, url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop', category: 'dining' },
      { id: 7, url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop', category: 'common' },
      { id: 8, url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop', category: 'spa' }
    ]
  };

  const handleReserve = (roomId) => {
    navigate(`/booking/${roomId}`, {
      state: {
        hotel: hotel,
        room: hotel.rooms.find(r => r.id === roomId),
        dates: selectedDates
      }
    });
  };

  const handleViewGallery = () => {
    navigate(`/hotels/${id}/gallery`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-1">›</span>
            <Link to="/hotels" className="text-blue-600 hover:underline">Hotels</Link>
            <span className="mx-1">›</span>
            <Link to="/hotels/tallinn" className="text-blue-600 hover:underline">Tallinn Hotels</Link>
            <span className="mx-1">›</span>
            <span className="text-gray-800 font-medium">{hotel.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Hotel Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 text-gray-600">{hotel.location}</span>
                </div>
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold">{hotel.rating}</span>
                  <span className="ml-1">{hotel.category}</span>
                  <span className="ml-1 text-gray-600">({hotel.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Image Gallery Preview */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {hotel.images.slice(0, 4).map((image, index) => (
              <div key={image.id} className="relative">
                <img
                  src={image.url}
                  alt={`Hotel ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                {index === 3 && (
                  <button
                    onClick={handleViewGallery}
                    className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center text-white font-bold hover:bg-black/70 transition"
                  >
                    <div className="text-center">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <span>View all {hotel.images.length} photos</span>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hotel.highlights.map((highlight, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Property */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
              <p className="text-gray-700 mb-6">{hotel.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {hotel.amenities.slice(0, 6).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-blue-600">
                      {amenity.icon}
                    </div>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
              
              {hotel.amenities.length > 6 && (
                <div>
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showAllAmenities ? (
                      <>
                        <ChevronUp className="w-5 h-5" />
                        Show less amenities
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5" />
                        Show all {hotel.amenities.length} amenities
                      </>
                    )}
                  </button>
                  
                  {showAllAmenities && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {hotel.amenities.slice(6).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-blue-600">
                            {amenity.icon}
                          </div>
                          <span className="text-gray-700">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Discover nearby landmarks</h2>
              <div className="space-y-4">
                {hotel.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{attraction.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{attraction.name}</div>
                        <div className="text-sm text-gray-600">{attraction.distance}</div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Choose your room</h2>
                  <p className="text-gray-600 mt-1">Showing {hotel.rooms.length} of {hotel.rooms.length} rooms</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <div className="font-medium">Dec 28 - Dec 29</div>
                    <div className="text-gray-600">2 travelers, 1 room</div>
                  </div>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                    Change dates
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {hotel.rooms.map((room) => (
                  <div key={room.id} className="border border-gray-300 rounded-xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-3 text-gray-700">
                              <span>✓ {room.size}</span>
                              <span>✓ {room.beds}</span>
                              <span>✓ {room.occupancy}</span>
                              <span>✓ {room.wifi}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {room.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Cancellation Policy */}
                          <div className="mt-4 p-4 bg-green-50 rounded-lg">
                            <div className="font-bold text-gray-900 mb-1">{room.cancellation.type}</div>
                            <div className="text-gray-600 text-sm">{room.cancellation.details}</div>
                          </div>
                        </div>

                        {/* Price and Booking */}
                        <div className="mt-6 lg:mt-0 lg:ml-6 lg:text-right">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            {room.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">${room.originalPrice}</span>
                            )}
                            <div className="text-3xl font-bold text-gray-900">${room.price}</div>
                          </div>
                          <div className="text-sm text-gray-500 mb-2">per night</div>
                          <div className="text-sm text-gray-600 mb-4">{room.taxes}</div>
                          
                          <div className="space-y-3">
                            <button
                              onClick={() => handleReserve(room.id)}
                              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                            >
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
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your stay</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">$150</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check-in</span>
                    <span className="font-medium">Dec 28</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check-out</span>
                    <span className="font-medium">Dec 29</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Travelers</span>
                    <span className="font-medium">2 travelers, 1 room</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between font-bold text-gray-900 mb-2">
                    <span>Total price</span>
                    <span>$168</span>
                  </div>
                  <div className="text-sm text-gray-500">Includes taxes & fees</div>
                </div>

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition">
                  Continue to checkout
                </button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Book with confidence
                </div>
              </div>
            </div>

            {/* Hotel Policies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Property policies</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Check-in / Check-out</div>
                  <div className="text-sm text-gray-600">
                    Check-in: {hotel.policies.checkIn} • Check-out: {hotel.policies.checkOut}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Children</div>
                  <div className="text-sm text-gray-600">{hotel.policies.children}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Pets</div>
                  <div className="text-sm text-gray-600">{hotel.policies.pets}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Smoking</div>
                  <div className="text-sm text-gray-600">{hotel.policies.smoking}</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact property</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Call property</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Email property</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  <Navigation className="w-5 h-5" />
                  <span className="font-medium">Get directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;