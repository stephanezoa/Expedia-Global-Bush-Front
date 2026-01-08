import React, { useState } from 'react';
import { 
  Car, Star, MapPin, Calendar, Clock, Users, Luggage, 
  Fuel, Settings, Shield, Check, ChevronDown, ChevronUp,
  Heart, Share2, Phone, Mail, Navigation, CreditCard,
  Battery, Wifi, Bluetooth, Navigation as NavIcon, Sun,
  Droplets, Volume2, Camera, Package, Key
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('Paris CDG Airport');
  const [dropoffLocation, setDropoffLocation] = useState('Paris CDG Airport');

  // Données de la voiture
  const car = {
    id: 1,
    name: 'Toyota Corolla Hybrid 2024',
    category: 'Compact',
    type: 'Hybrid Sedan',
    supplier: 'Avis',
    supplierRating: 4.2,
    reviews: 1284,
    price: 45,
    originalPrice: 58,
    discount: '22%',
    totalPrice: 180,
    description: 'The Toyota Corolla Hybrid combines excellent fuel efficiency with modern features, perfect for city driving and longer trips alike.',
    
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&auto=format&fit=crop', category: 'exterior' },
      { id: 2, url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop', category: 'interior' },
      { id: 3, url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&auto=format&fit=crop', category: 'dashboard' },
      { id: 4, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop', category: 'rear' },
      { id: 5, url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop', category: 'side' },
      { id: 6, url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&auto=format&fit=crop', category: 'front' }
    ],

    specifications: {
      transmission: 'Automatic',
      fuel: 'Hybrid',
      seats: 5,
      bags: 2,
      doors: 4,
      engine: '1.8L 4-cylinder Hybrid',
      horsepower: '121 hp',
      fuelEfficiency: '53 mpg combined',
      year: 2024,
      color: 'Silver Metallic',
      mileage: 'Unlimited'
    },

    features: [
      { name: 'Air Conditioning', icon: <Droplets className="w-5 h-5" />, category: 'comfort' },
      { name: 'Automatic Transmission', icon: <Settings className="w-5 h-5" />, category: 'driving' },
      { name: 'Bluetooth', icon: <Bluetooth className="w-5 h-5" />, category: 'entertainment' },
      { name: 'GPS Navigation', icon: <NavIcon className="w-5 h-5" />, category: 'navigation' },
      { name: 'USB Ports', icon: <Battery className="w-5 h-5" />, category: 'charging' },
      { name: 'Keyless Entry', icon: <Key className="w-5 h-5" />, category: 'security' },
      { name: 'Backup Camera', icon: <Camera className="w-5 h-5" />, category: 'safety' },
      { name: 'Cruise Control', icon: <Car className="w-5 h-5" />, category: 'driving' },
      { name: 'Sunroof', icon: <Sun className="w-5 h-5" />, category: 'comfort' },
      { name: 'Premium Audio', icon: <Volume2 className="w-5 h-5" />, category: 'entertainment' },
      { name: 'Heated Seats', icon: '🔥', category: 'comfort' },
      { name: 'Lane Assist', icon: '🛣️', category: 'safety' }
    ],

    included: [
      'Unlimited mileage',
      'Full insurance coverage',
      '24/7 roadside assistance',
      'Free cancellation up to 48h before',
      'No hidden fees',
      'Taxes and VAT included'
    ],

    policies: {
      minimumAge: 21,
      license: 'Valid driver\'s license required',
      deposit: '$200 security deposit',
      fuel: 'Full-to-full policy',
      smoking: 'Non-smoking vehicle',
      pets: 'Pets allowed with fee',
      additionalDrivers: '$15 per additional driver'
    },

    extras: [
      { id: 1, name: 'Additional Driver', price: 15, daily: true, description: 'Add another driver to the rental' },
      { id: 2, name: 'Child Seat', price: 25, daily: false, description: 'Child safety seat (ages 1-4)' },
      { id: 3, name: 'Booster Seat', price: 20, daily: false, description: 'Booster seat (ages 4-8)' },
      { id: 4, name: 'GPS Unit', price: 12, daily: true, description: 'Portable GPS navigation system' },
      { id: 5, name: 'WiFi Hotspot', price: 10, daily: true, description: 'Mobile WiFi for up to 5 devices' },
      { id: 6, name: 'Reduced Excess', price: 25, daily: true, description: 'Reduce insurance excess to $250' },
      { id: 7, name: 'Full Protection', price: 35, daily: true, description: 'Zero excess, full coverage' },
      { id: 8, name: 'Winter Tires', price: 50, daily: false, description: 'Winter/snow tires (seasonal)' }
    ],

    pickupInfo: {
      location: 'Avis Counter - Terminal 2E',
      address: 'Paris Charles de Gaulle Airport, 95700 Roissy-en-France',
      hours: 'Mon-Sun: 6:00 AM - 11:59 PM',
      phone: '+33 1 70 46 92 12',
      shuttle: 'Free shuttle from terminals'
    },

    supplierInfo: {
      name: 'Avis',
      rating: 4.2,
      totalCars: '10,000+',
      founded: 1946,
      features: ['24/7 support', 'Multiple locations', 'New fleet', 'Green vehicles']
    }
  };

  const handleReserve = () => {
    navigate('/booking/car', {
      state: {
        car: car,
        extras: selectedExtras,
        pickupLocation,
        dropoffLocation
      }
    });
  };

  const handleViewGallery = () => {
    navigate(`/cars/${id}/gallery`);
  };

  const toggleExtra = (extraId) => {
    setSelectedExtras(prev => {
      if (prev.includes(extraId)) {
        return prev.filter(id => id !== extraId);
      } else {
        return [...prev, extraId];
      }
    });
  };

  const calculateTotal = () => {
    const basePrice = car.price * 4;
    const extrasTotal = selectedExtras.reduce((total, extraId) => {
      const extra = car.extras.find(e => e.id === extraId);
      return total + (extra.daily ? extra.price * 4 : extra.price);
    }, 0);
    return basePrice + extrasTotal;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-1">›</span>
            <Link to="/cars" className="text-blue-600 hover:underline">Cars</Link>
            <span className="mx-1">›</span>
            <Link to="/cars/paris" className="text-blue-600 hover:underline">Paris Car Rentals</Link>
            <span className="mx-1">›</span>
            <span className="text-gray-800 font-medium">{car.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Car Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 text-gray-600">{car.supplier} • {car.category}</span>
                </div>
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold">{car.supplierRating}</span>
                  <span className="ml-1">Excellent</span>
                  <span className="ml-1 text-gray-600">({car.reviews} reviews)</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {car.images.slice(0, 4).map((image, index) => (
              <div key={image.id} className="relative">
                <img
                  src={image.url}
                  alt={`Car ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {index === 3 && (
                  <button
                    onClick={handleViewGallery}
                    className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center text-white font-bold hover:bg-black/70 transition"
                  >
                    <div className="text-center">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <span>View all {car.images.length} photos</span>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Settings className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900">{car.specifications.transmission}</div>
              <div className="text-sm text-gray-600">Transmission</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Fuel className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900">{car.specifications.fuel}</div>
              <div className="text-sm text-gray-600">Fuel Type</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900">{car.specifications.seats} seats</div>
              <div className="text-sm text-gray-600">Passengers</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Luggage className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900">{car.specifications.bags} bags</div>
              <div className="text-sm text-gray-600">Luggage</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this car</h2>
              <p className="text-gray-700 mb-6">{car.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="font-medium text-gray-900 mb-2">Specifications</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Year:</span>
                      <span className="font-medium">{car.specifications.year}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Engine:</span>
                      <span className="font-medium">{car.specifications.engine}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Horsepower:</span>
                      <span className="font-medium">{car.specifications.horsepower}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fuel Efficiency:</span>
                      <span className="font-medium">{car.specifications.fuelEfficiency}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Color:</span>
                      <span className="font-medium">{car.specifications.color}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">Included in price</div>
                  <ul className="space-y-2">
                    {car.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Features & Equipment</h2>
                <button
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  {showAllFeatures ? 'Show less' : 'Show all'}
                  {showAllFeatures ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(showAllFeatures ? car.features : car.features.slice(0, 6)).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pick-up & Drop-off */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pick-up & Drop-off</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Pick-up Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium">{car.pickupInfo.location}</div>
                        <div className="text-sm text-gray-600 mt-1">{car.pickupInfo.address}</div>
                        <div className="text-sm text-gray-500 mt-1">{car.pickupInfo.shuttle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{car.pickupInfo.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{car.pickupInfo.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Drop-off Information</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="font-medium text-gray-900 mb-1">Return to same location</div>
                      <div className="text-sm text-gray-600">No additional fees for returning to pick-up location</div>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="font-medium text-gray-900 mb-1">Fuel Policy</div>
                      <div className="text-sm text-gray-600">Full-to-full: Return with full tank</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Policies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rental Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Age Requirements</div>
                    <div className="text-sm text-gray-600">Minimum age: {car.policies.minimumAge} years</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">License</div>
                    <div className="text-sm text-gray-600">{car.policies.license}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Security Deposit</div>
                    <div className="text-sm text-gray-600">{car.policies.deposit} (blocked on credit card)</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Additional Information</div>
                    <div className="text-sm text-gray-600">{car.policies.smoking}</div>
                    <div className="text-sm text-gray-600">{car.policies.pets}</div>
                    <div className="text-sm text-gray-600">{car.policies.additionalDrivers}</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <div className="font-medium text-gray-900">24/7 Roadside Assistance</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Available throughout your rental period</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your rental</h3>
              
              <div className="space-y-6">
                {/* Price Summary */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">Daily rate</div>
                    <div className="flex items-center gap-2">
                      {car.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${car.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-gray-900">${car.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>4 days × ${car.price}</span>
                    <span className="font-medium">${car.price * 4}</span>
                  </div>
                </div>

                {/* Dates */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pick-up</span>
                    <div className="text-right">
                      <div className="font-medium">Mon, Dec 23 • 10:00</div>
                      <div className="text-gray-500">Paris CDG Airport</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Drop-off</span>
                    <div className="text-right">
                      <div className="font-medium">Fri, Dec 27 • 10:00</div>
                      <div className="text-gray-500">Same location</div>
                    </div>
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Add extras (optional)</h4>
                  <div className="space-y-2">
                    {car.extras.slice(0, 4).map(extra => (
                      <label key={extra.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedExtras.includes(extra.id)}
                            onChange={() => toggleExtra(extra.id)}
                            className="w-4 h-4 text-blue-600 rounded"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{extra.name}</div>
                            <div className="text-xs text-gray-500">{extra.description}</div>
                          </div>
                        </div>
                        <div className="font-medium text-gray-900">
                          ${extra.daily ? `${extra.price}/day` : extra.price}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between font-bold text-gray-900 mb-2">
                    <span>Total price</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="text-sm text-gray-500">Includes taxes, fees, and selected extras</div>
                </div>

                {/* Reserve Button */}
                <button 
                  onClick={handleReserve}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Reserve now
                  </div>
                </button>

                {/* Protection Info */}
                <div className="text-center text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Shield className="w-4 h-4" />
                    <span>Full protection included</span>
                  </div>
                  <div>Free cancellation until 48h before pick-up</div>
                </div>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About {car.supplier}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🅰️</div>
                  <div>
                    <div className="font-bold text-gray-900">{car.supplier}</div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{car.supplierRating} • {car.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>{car.supplierInfo.totalCars} cars in fleet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Founded in {car.supplierInfo.founded}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.supplierInfo.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need help?</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Call {car.supplier}</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Email supplier</span>
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
      <Footer />
    </div>
  );
};

export default CarDetailPage;