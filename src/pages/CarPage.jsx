import React, { useState } from 'react';
import { Search, Calendar, MapPin, Filter, Car, Star, Shield, GasPump, Users, Settings, Clock, Check, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const CarsPage = () => {
  const [searchParams, setSearchParams] = useState({
    location: 'Paris',
    pickUpDate: 'Mon, Dec 23',
    dropOffDate: 'Fri, Dec 27',
    pickUpTime: '10:00',
    dropOffTime: '10:00'
  });

  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState('recommended');
  const [selectedFilters, setSelectedFilters] = useState({
    carType: [],
    transmission: [],
    fuelType: [],
    supplier: [],
    features: [],
    priceRange: [30, 200]
  });

  const carTypes = [
    { name: 'Compact', icon: '🚗', count: 42 },
    { name: 'Economy', icon: '🚙', count: 38 },
    { name: 'Midsize', icon: '🚘', count: 56 },
    { name: 'Standard', icon: '🚗', count: 45 },
    { name: 'Full Size', icon: '🚙', count: 32 },
    { name: 'SUV', icon: '🚙', count: 67 },
    { name: 'Minivan', icon: '🚐', count: 23 },
    { name: 'Luxury', icon: '🏎️', count: 18 },
    { name: 'Convertible', icon: '🚗', count: 12 },
    { name: 'Electric', icon: '🔌', count: 25 }
  ];

  const features = [
    { name: 'Air Conditioning', icon: '❄️' },
    { name: 'Automatic Transmission', icon: '⚙️' },
    { name: 'Bluetooth', icon: '📱' },
    { name: 'GPS', icon: '📍' },
    { name: 'USB Port', icon: '🔌' },
    { name: 'Heated Seats', icon: '🔥' },
    { name: 'Sunroof', icon: '☀️' },
    { name: 'Parking Sensors', icon: '🚗' }
  ];

  const suppliers = [
    { name: 'Avis', rating: 4.2, logo: '🅰️' },
    { name: 'Hertz', rating: 4.4, logo: '🇭' },
    { name: 'Europcar', rating: 4.1, logo: '🇪' },
    { name: 'Sixt', rating: 4.3, logo: '🇸' },
    { name: 'Budget', rating: 4.0, logo: '🇧' },
    { name: 'Enterprise', rating: 4.5, logo: '🇪' },
    { name: 'Alamo', rating: 4.2, logo: '🇦' },
    { name: 'National', rating: 4.3, logo: '🇳' }
  ];

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla Hybrid',
      category: 'Compact',
      type: 'Hybrid',
      supplier: 'Avis',
      supplierRating: 4.2,
      price: 45,
      originalPrice: 58,
      discount: '22%',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
      features: ['Automatic', 'Air Conditioning', 'Bluetooth', 'GPS', '5 Seats'],
      fuel: 'Hybrid',
      transmission: 'Automatic',
      seats: 5,
      bags: 2,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Full Coverage Included'
    },
    {
      id: 2,
      name: 'BMW 3 Series',
      category: 'Luxury',
      type: 'Sedan',
      supplier: 'Sixt',
      supplierRating: 4.3,
      price: 89,
      originalPrice: 110,
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop',
      features: ['Automatic', 'Leather Seats', 'Premium Sound', 'Navigation', 'Heated Seats'],
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 5,
      bags: 2,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Premium Coverage'
    },
    {
      id: 3,
      name: 'Ford Explorer',
      category: 'SUV',
      type: 'Large SUV',
      supplier: 'Hertz',
      supplierRating: 4.4,
      price: 75,
      originalPrice: 95,
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
      features: ['Automatic', '4WD', 'Third Row', 'Roof Rails', 'Parking Sensors'],
      fuel: 'Diesel',
      transmission: 'Automatic',
      seats: 7,
      bags: 4,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Full Coverage Included'
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      category: 'Electric',
      type: 'Sedan',
      supplier: 'Enterprise',
      supplierRating: 4.5,
      price: 99,
      originalPrice: 125,
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop',
      features: ['Electric', 'Autopilot', 'Premium Interior', 'Panoramic Roof', 'Fast Charging'],
      fuel: 'Electric',
      transmission: 'Automatic',
      seats: 5,
      bags: 2,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Premium Electric Coverage'
    },
    {
      id: 5,
      name: 'Volkswagen Golf',
      category: 'Economy',
      type: 'Hatchback',
      supplier: 'Europcar',
      supplierRating: 4.1,
      price: 38,
      originalPrice: 48,
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
      features: ['Manual', 'Air Conditioning', 'Bluetooth', 'Cruise Control', '5 Seats'],
      fuel: 'Petrol',
      transmission: 'Manual',
      seats: 5,
      bags: 3,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Basic Coverage'
    },
    {
      id: 6,
      name: 'Mercedes-Benz C-Class',
      category: 'Luxury',
      type: 'Sedan',
      supplier: 'National',
      supplierRating: 4.3,
      price: 105,
      originalPrice: 135,
      discount: '22%',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop',
      features: ['Automatic', 'Premium Package', 'Burmester Sound', 'Massage Seats', '360 Camera'],
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 5,
      bags: 2,
      unlimitedMileage: true,
      freeCancellation: true,
      mileage: 'Unlimited',
      insurance: 'Premium Luxury Coverage'
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
    console.log('Searching cars with:', searchParams, selectedFilters);
  };

  const clearFilters = () => {
    setSelectedFilters({
      carType: [],
      transmission: [],
      fuelType: [],
      supplier: [],
      features: [],
      priceRange: [30, 200]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-xl border border-gray-300 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                    placeholder="City or airport"
                  />
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Pick-up Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up</label>
                <div className="relative">
                  <input
                    type="text"
                    value={`${searchParams.pickUpDate} ${searchParams.pickUpTime}`}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                    readOnly
                  />
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Drop-off Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off</label>
                <div className="relative">
                  <input
                    type="text"
                    value={`${searchParams.dropOffDate} ${searchParams.dropOffTime}`}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                    readOnly
                  />
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <div className="relative">
                  <input
                    type="text"
                    value="4 days"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            {/* Same Location Toggle */}
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Return car to same location</span>
              </label>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-2 text-sm text-gray-700">Driver aged 25+</span>
              </label>
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

              {/* Car Type */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Car Type</h4>
                <div className="space-y-3">
                  {carTypes.map((type, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.carType.includes(type.name)}
                          onChange={() => toggleFilter('carType', type.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{type.icon} {type.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{type.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Transmission */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Transmission</h4>
                <div className="space-y-3">
                  {['Automatic', 'Manual'].map((trans, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.transmission.includes(trans)}
                          onChange={() => toggleFilter('transmission', trans)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{trans}</span>
                      </div>
                      <span className="text-sm text-gray-500">42</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel Type */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Fuel Type</h4>
                <div className="space-y-3">
                  {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((fuel, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.fuelType.includes(fuel)}
                          onChange={() => toggleFilter('fuelType', fuel)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-3 text-gray-700">{fuel}</span>
                      </div>
                      <span className="text-sm text-gray-500">24</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Features</h4>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <label key={index} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.features.includes(feature.name)}
                        onChange={() => toggleFilter('features', feature.name)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-3 text-gray-700">{feature.icon} {feature.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Price per day</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="30"
                    max="200"
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
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header with sort options */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Car rentals in {searchParams.location}</h1>
                  <p className="text-gray-600 mt-1">{searchParams.pickUpDate} - {searchParams.dropOffDate} • Same location</p>
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
                    <option value="popular">Most popular</option>
                    <option value="rating">Supplier rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Popular Suppliers */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular suppliers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {suppliers.map((supplier, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{supplier.logo}</div>
                      <div>
                        <div className="font-medium text-gray-900">{supplier.name}</div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">{supplier.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View cars →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cars List */}
            <div className="space-y-6">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Car Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                      {car.discount && (
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                            Save {car.discount}
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                            {car.category}
                          </div>
                          <div className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                            {car.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Car Info */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                              <Link to={`/cars/${car.id}`}>{car.name}</Link>
                            </h3>
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span className="font-bold">{car.supplierRating}</span>
                              <span className="text-gray-600">({car.supplier})</span>
                            </div>
                          </div>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Settings className="w-4 h-4" />
                              <span>{car.transmission}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <GasPump className="w-4 h-4" />
                              <span>{car.fuel}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{car.seats} seats</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Luggage className="w-4 h-4" />
                              <span>{car.bags} bags</span>
                            </div>
                          </div>

                          {/* Included Features */}
                          <div className="mb-4">
                            <div className="text-sm text-gray-700 mb-2">Included:</div>
                            <div className="flex flex-wrap gap-2">
                              {car.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Policies */}
                          <div className="flex flex-wrap gap-4">
                            {car.unlimitedMileage && (
                              <div className="flex items-center gap-2 text-sm text-green-600">
                                <Check className="w-4 h-4" />
                                <span>Unlimited mileage</span>
                              </div>
                            )}
                            {car.freeCancellation && (
                              <div className="flex items-center gap-2 text-sm text-green-600">
                                <Check className="w-4 h-4" />
                                <span>Free cancellation</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                              <Shield className="w-4 h-4" />
                              <span>{car.insurance}</span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="mt-4 md:mt-0 md:ml-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {car.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">${car.originalPrice}</span>
                            )}
                            <div className="text-3xl font-bold text-gray-900">${car.price}</div>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">per day</div>
                          <div className="text-sm text-gray-600 mt-1">+ $12 taxes & fees</div>
                          <div className="text-sm text-gray-500 mt-1">Total: <span className="font-bold">${car.price * 4}</span></div>
                          
                          <div className="mt-4 space-y-2">
                            <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                              Reserve now
                            </button>
                            <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
                              View details
                            </button>
                          </div>
                          
                          <div className="mt-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Free cancellation until 48h before pick-up
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tips for renting a car</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">📋 Required documents</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Valid driver's license</li>
                    <li>• Credit card in driver's name</li>
                    <li>• Passport or ID</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">🔑 Pick-up process</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check for existing damage</li>
                    <li>• Verify fuel policy</li>
                    <li>• Review insurance options</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">💡 Best practices</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Book in advance for better rates</li>
                    <li>• Compare fuel policies</li>
                    <li>• Consider excess insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;