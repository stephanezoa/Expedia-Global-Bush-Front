import React, { useState, useEffect, useRef } from 'react';
import { Plane, Hotel, Car, Package, MapPin, Calendar, Users, Search, Ship, ArrowLeftRight, X, Ticket, ChevronDown } from 'lucide-react';

const ExpediaSearchBar = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState('stays');
  const [tripType, setTripType] = useState('round-trip');
  const [carType, setCarType] = useState('rental');
  const [flightCabinClass, setFlightCabinClass] = useState('economy');
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState('');
  const [calendarDate, setCalendarDate] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timePickerType, setTimePickerType] = useState('');
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  
  // États pour les séjours
  const [staysData, setStaysData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: { adults: 2, children: 0, rooms: 1 },
    addFlight: false,
    addCar: false
  });

  // États pour les vols
  const [flightsData, setFlightsData] = useState({
    departure: 'Yaoundé',
    destination: 'Douala',
    departureDate: '',
    returnDate: '',
    travelers: { adults: 1, children: 0, infants: 0 }
  });

  // États pour les voitures
  const [carsData, setCarsData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    sameLocation: true,
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '10:30',
    dropoffTime: '10:30',
    driverAge: '30'
  });

  // États pour les packages
  const [packagesData, setPackagesData] = useState({
    departure: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: { adults: 2, children: 0, rooms: 1 },
    partialStay: false
  });

  // États pour les activités
  const [activitiesData, setActivitiesData] = useState({
    destination: '',
    date: '',
    travelers: { adults: 2, children: 0 }
  });

  // États pour les croisières
  const [cruisesData, setCruisesData] = useState({
    destination: '',
    duration: '7',
    departureDate: '',
    travelers: { adults: 2, children: 0 }
  });

  const [showTravelersModal, setShowTravelersModal] = useState(false);
  const [currentTravelersType, setCurrentTravelersType] = useState('');
  const calendarRef = useRef(null);
  const timePickerRef = useRef(null);
  const promoModalRef = useRef(null);

  // Initialiser les dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const formatDate = (date) => {
      return date.toISOString().split('T')[0];
    };

    setStaysData(prev => ({
      ...prev,
      checkIn: formatDate(tomorrow),
      checkOut: formatDate(new Date(tomorrow.getTime() + 86400000))
    }));

    setFlightsData(prev => ({
      ...prev,
      departureDate: formatDate(nextWeek),
      returnDate: formatDate(new Date(nextWeek.getTime() + 86400000 * 7))
    }));

    setCarsData(prev => ({
      ...prev,
      pickupDate: formatDate(tomorrow),
      dropoffDate: formatDate(new Date(tomorrow.getTime() + 86400000))
    }));

    setPackagesData(prev => ({
      ...prev,
      checkIn: formatDate(tomorrow),
      checkOut: formatDate(new Date(tomorrow.getTime() + 86400000 * 2))
    }));

    setActivitiesData(prev => ({
      ...prev,
      date: formatDate(tomorrow)
    }));

    setCruisesData(prev => ({
      ...prev,
      departureDate: formatDate(new Date(today.getFullYear(), today.getMonth() + 1, 1))
    }));
  }, []);

  // Formater la date pour l'affichage
  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const formatDateRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${formatDisplayDate(start)} – ${formatDisplayDate(end)} (${diffDays} nuits)`;
  };

  // Gestion des voyageurs
  const handleTravelersChange = (type, field, value) => {
    const updateTravelers = (prev) => ({
      ...prev,
      [field]: Math.max(0, Math.min(value, field === 'adults' ? 10 : field === 'children' ? 8 : field === 'infants' ? 4 : 5))
    });

    switch (type) {
      case 'stays':
        setStaysData(prev => ({
          ...prev,
          travelers: updateTravelers(prev.travelers)
        }));
        break;
      case 'flights':
        setFlightsData(prev => ({
          ...prev,
          travelers: updateTravelers(prev.travelers)
        }));
        break;
      case 'packages':
        setPackagesData(prev => ({
          ...prev,
          travelers: updateTravelers(prev.travelers)
        }));
        break;
      case 'activities':
        setActivitiesData(prev => ({
          ...prev,
          travelers: updateTravelers(prev.travelers)
        }));
        break;
      case 'cruises':
        setCruisesData(prev => ({
          ...prev,
          travelers: updateTravelers(prev.travelers)
        }));
        break;
    }
  };

  const getTravelersText = (travelers, includeRooms = false) => {
    const parts = [];
    if (travelers.adults > 0) {
      parts.push(`${travelers.adults} adulte${travelers.adults > 1 ? 's' : ''}`);
    }
    if (travelers.children > 0) {
      parts.push(`${travelers.children} enfant${travelers.children > 1 ? 's' : ''}`);
    }
    if (travelers.infants > 0) {
      parts.push(`${travelers.infants} bébé${travelers.infants > 1 ? 's' : ''}`);
    }
    if (includeRooms && travelers.rooms > 0) {
      parts.push(`${travelers.rooms} chambre${travelers.rooms > 1 ? 's' : ''}`);
    }
    return parts.join(', ');
  };

  // Composant Calendrier
  const DateCalendar = ({ type, currentDate, onSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };

    const today = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    const handleDateSelect = (date) => {
      const formattedDate = date.toISOString().split('T')[0];
      onSelect(formattedDate);
      setShowCalendar(false);
    };

    const goToPreviousMonth = () => {
      setCurrentMonth(new Date(year, month - 1, 1));
    };

    const goToNextMonth = () => {
      setCurrentMonth(new Date(year, month + 1, 1));
    };

    const monthNames = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    return (
      <div className="absolute z-50 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
        <div className="flex justify-between items-center mb-4">
          <button onClick={goToPreviousMonth} className="p-2 hover:bg-gray-100 rounded">
            ←
          </button>
          <h3 className="font-medium">
            {monthNames[month]} {year}
          </h3>
          <button onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded">
            →
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map(day => (
            <div key={day} className="text-center text-sm text-gray-500 font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => (
            <button
              key={index}
              onClick={() => date && handleDateSelect(date)}
              disabled={!date}
              className={`h-8 w-8 rounded text-sm ${
                date
                  ? currentDate === date.toISOString().split('T')[0]
                    ? 'bg-blue-600 text-white'
                    : date < today
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'hover:bg-gray-100'
                  : ''
              }`}
            >
              {date ? date.getDate() : ''}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setShowCalendar(false)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  };

  // Composant Sélecteur d'heure
  const TimePicker = ({ type, currentTime, onSelect }) => {
    const hours = Array.from({length: 24}, (_, i) => i);
    const minutes = ['00', '15', '30', '45'];

    return (
      <div className="absolute z-50 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64">
        <h3 className="font-medium mb-3">Sélectionner l'heure</h3>
        <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto">
          {hours.map(hour => (
            minutes.map(minute => {
              const time = `${hour.toString().padStart(2, '0')}:${minute}`;
              return (
                <button
                  key={time}
                  onClick={() => {
                    onSelect(time);
                    setShowTimePicker(false);
                  }}
                  className={`p-2 text-sm rounded ${
                    currentTime === time
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {time}
                </button>
              );
            })
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setShowTimePicker(false)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  };

  // Composant Modal pour les voyageurs
  const TravelersModal = ({ type }) => {
    const travelers = (() => {
      switch (type) {
        case 'stays': return staysData.travelers;
        case 'flights': return flightsData.travelers;
        case 'packages': return packagesData.travelers;
        case 'activities': return activitiesData.travelers;
        case 'cruises': return cruisesData.travelers;
        default: return { adults: 0, children: 0, rooms: 0 };
      }
    })();

    const includeRooms = type === 'stays' || type === 'packages';
    const includeInfants = type === 'flights';

    return (
      <div className="absolute z-50 top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 travelers-input">
        <div className="space-y-4">
          {/* Adultes */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Adultes</div>
              <div className="text-sm text-gray-500">13 ans et plus</div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleTravelersChange(type, 'adults', travelers.adults - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={travelers.adults <= 1}
              >
                -
              </button>
              <span className="w-8 text-center font-medium">{travelers.adults}</span>
              <button
                onClick={() => handleTravelersChange(type, 'adults', travelers.adults + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={travelers.adults >= 10}
              >
                +
              </button>
            </div>
          </div>

          {/* Enfants */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Enfants</div>
              <div className="text-sm text-gray-500">2-12 ans</div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleTravelersChange(type, 'children', travelers.children - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={travelers.children <= 0}
              >
                -
              </button>
              <span className="w-8 text-center font-medium">{travelers.children}</span>
              <button
                onClick={() => handleTravelersChange(type, 'children', travelers.children + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={travelers.children >= 8}
              >
                +
              </button>
            </div>
          </div>

          {/* Bébés (pour les vols) */}
          {includeInfants && (
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Bébés</div>
                <div className="text-sm text-gray-500">Moins de 2 ans</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleTravelersChange(type, 'infants', travelers.infants - 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={travelers.infants <= 0}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{travelers.infants}</span>
                <button
                  onClick={() => handleTravelersChange(type, 'infants', travelers.infants + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={travelers.infants >= 4}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Chambres (pour séjours et packages) */}
          {includeRooms && (
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Chambres</div>
                <div className="text-sm text-gray-500">Pour votre séjour</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleTravelersChange(type, 'rooms', travelers.rooms - 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={travelers.rooms <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{travelers.rooms}</span>
                <button
                  onClick={() => handleTravelersChange(type, 'rooms', travelers.rooms + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={travelers.rooms >= 5}
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowTravelersModal(false)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Appliquer
          </button>
        </div>
      </div>
    );
  };

  // Modal pour code promo
  const PromoCodeModal = () => (
    <div className="absolute z-50 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64" ref={promoModalRef}>
      <h3 className="font-medium mb-3">Code promo</h3>
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Entrez votre code"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setShowPromoModal(false)}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
        >
          Annuler
        </button>
        <button
          onClick={() => {
            console.log('Code promo appliqué:', promoCode);
            setShowPromoModal(false);
          }}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Appliquer
        </button>
      </div>
    </div>
  );

  // Gestion de la recherche
  const handleSearch = () => {
    const searchData = {
      type: activeTab,
      data: {}
    };

    switch (activeTab) {
      case 'stays':
        searchData.data = staysData;
        break;
      case 'flights':
        searchData.data = { ...flightsData, tripType, cabinClass: flightCabinClass };
        break;
      case 'cars':
        searchData.data = { ...carsData, carType };
        break;
      case 'packages':
        searchData.data = packagesData;
        break;
      case 'things':
        searchData.data = activitiesData;
        break;
      case 'cruises':
        searchData.data = cruisesData;
        break;
    }

    console.log('Search data:', searchData);
    
    if (onSearch) {
      onSearch(searchData);
    }
  };

  // Gestion des clics en dehors des modals
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCalendar && calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
      if (showTimePicker && timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowTimePicker(false);
      }
      if (showTravelersModal && !event.target.closest('.travelers-input')) {
        setShowTravelersModal(false);
      }
      if (showPromoModal && promoModalRef.current && !promoModalRef.current.contains(event.target)) {
        setShowPromoModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar, showTimePicker, showTravelersModal, showPromoModal]);

  // Stays Tab
  const StaysSearch = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Destination */}
        <div className="md:col-span-4">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Où ?</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={staysData.destination}
                onChange={(e) => setStaysData({...staysData, destination: e.target.value})}
                placeholder="Tallinn, Harju County, Estonia"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-3 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Dates</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('stays-range');
                setCalendarDate(staysData.checkIn);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
            >
              {staysData.checkIn && staysData.checkOut ? 
                formatDateRange(staysData.checkIn, staysData.checkOut) : 'Sélectionner les dates'}
            </button>
            {showCalendar && calendarType === 'stays-range' && (
              <DateCalendar
                type="stays-range"
                currentDate={calendarDate}
                onSelect={(date) => {
                  if (!staysData.checkIn) {
                    setStaysData({...staysData, checkIn: date});
                  } else if (!staysData.checkOut) {
                    setStaysData({...staysData, checkOut: date});
                  } else {
                    setStaysData({...staysData, checkIn: date, checkOut: ''});
                  }
                }}
              />
            )}
          </div>
        </div>

        {/* Travelers */}
        <div className="md:col-span-3 relative">
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Voyageurs</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCurrentTravelersType('stays');
                setShowTravelersModal(true);
              }}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
            >
              {getTravelersText(staysData.travelers, true)}
            </button>
            {showTravelersModal && currentTravelersType === 'stays' && (
              <TravelersModal type="stays" />
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-2 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Rechercher
          </button>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex items-center space-x-4">
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={staysData.addFlight}
            onChange={(e) => setStaysData({...staysData, addFlight: e.target.checked})}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
          />
          <span className="ml-2 text-sm text-gray-700">Ajouter un vol</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={staysData.addCar}
            onChange={(e) => setStaysData({...staysData, addCar: e.target.checked})}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
          />
          <span className="ml-2 text-sm text-gray-700">Ajouter une voiture</span>
        </label>
      </div>
    </div>
  );

  // Flights Tab
  const FlightsSearch = () => (
    <div className="space-y-4">
      {/* Trip Type Selector */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setTripType('round-trip')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            tripType === 'round-trip'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Aller-retour
        </button>
        <button
          onClick={() => setTripType('one-way')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            tripType === 'one-way'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Aller simple
        </button>
        <button
          onClick={() => {
            const cabinClasses = ['economy', 'premium', 'business', 'first'];
            const currentIndex = cabinClasses.indexOf(flightCabinClass);
            const nextIndex = (currentIndex + 1) % cabinClasses.length;
            setFlightCabinClass(cabinClasses[nextIndex]);
          }}
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          {flightCabinClass === 'economy' ? 'Économique' : 
           flightCabinClass === 'premium' ? 'Premium' :
           flightCabinClass === 'business' ? 'Affaires' : 'Première'}
        </button>
        <button 
          onClick={() => {
            setCurrentTravelersType('flights');
            setShowTravelersModal(true);
          }}
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          <Users className="inline w-4 h-4 mr-1" />
          {getTravelersText(flightsData.travelers)}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* From */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">De</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" />
              <input
                type="text"
                value={flightsData.departure}
                onChange={(e) => setFlightsData({...flightsData, departure: e.target.value})}
                className="w-full pl-10 pr-3 py-3  text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-teal-600 font-medium"
                placeholder="De..."
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex items-end justify-center pb-3">
          <button 
            onClick={() => {
              setFlightsData({
                ...flightsData,
                departure: flightsData.destination,
                destination: flightsData.departure
              });
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition border border-gray-300"
          >
            <ArrowLeftRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* To */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">À</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type="text"
                value={flightsData.destination}
                onChange={(e) => setFlightsData({...flightsData, destination: e.target.value})}
                className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-orange-600 font-medium"
                placeholder="À..."
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-2 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Départ</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('flight-departure');
                setCalendarDate(flightsData.departureDate);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {flightsData.departureDate ? formatDisplayDate(flightsData.departureDate) : 'Sélectionner'}
            </button>
            {showCalendar && calendarType === 'flight-departure' && (
              <DateCalendar
                type="flight-departure"
                currentDate={calendarDate}
                onSelect={(date) => setFlightsData({...flightsData, departureDate: date})}
              />
            )}
          </div>
        </div>

        {/* Return Date or Duration */}
        {tripType === 'round-trip' ? (
          <div className="md:col-span-2 relative" ref={calendarRef}>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Retour</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                onClick={() => {
                  setCalendarType('flight-return');
                  setCalendarDate(flightsData.returnDate);
                  setShowCalendar(true);
                }}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
              >
                {flightsData.returnDate ? formatDisplayDate(flightsData.returnDate) : 'Sélectionner'}
              </button>
              {showCalendar && calendarType === 'flight-return' && (
                <DateCalendar
                  type="flight-return"
                  currentDate={calendarDate}
                  onSelect={(date) => setFlightsData({...flightsData, returnDate: date})}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Durée</label>
            <input
              type="text"
              value="2 – 8 nuits"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm"
              readOnly
            />
          </div>
        )}

        {/* Search Button */}
        <div className="md:col-span-1 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Options supplémentaires */}
      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <span className="ml-2 text-sm text-gray-700">Trouver un logement avec Kiwi.com Hotels</span>
        </label>
      </div>
    </div>
  );

  // Cars Tab
  const CarsSearch = () => (
    <div className="space-y-4">
      {/* Car Type Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setCarType('rental')}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition ${
            carType === 'rental'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Location de voiture
        </button>
        <button
          onClick={() => setCarType('airport')}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition ${
            carType === 'airport'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Transport aéroport
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Pick-up */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Prise en charge</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={carsData.pickupLocation}
                onChange={(e) => setCarsData({...carsData, pickupLocation: e.target.value})}
                placeholder="Aéroport, ville..."
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Drop-off */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Restitution</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={carsData.sameLocation ? "Même lieu" : carsData.dropoffLocation}
                onChange={(e) => setCarsData({...carsData, dropoffLocation: e.target.value})}
                onFocus={() => setCarsData({...carsData, sameLocation: false})}
                placeholder={carsData.sameLocation ? "Même lieu" : "Lieu de restitution"}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-2 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Dates</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('car-pickup');
                setCalendarDate(carsData.pickupDate);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {carsData.pickupDate ? formatDisplayDate(carsData.pickupDate) : 'Sélectionner'}
            </button>
            {showCalendar && calendarType === 'car-pickup' && (
              <DateCalendar
                type="car-pickup"
                currentDate={calendarDate}
                onSelect={(date) => setCarsData({...carsData, pickupDate: date})}
              />
            )}
          </div>
        </div>

        {/* Pick-up time */}
        <div className="md:col-span-1 relative" ref={timePickerRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Prise</label>
          <div className="relative">
            <button
              onClick={() => {
                setTimePickerType('pickup');
                setShowTimePicker(true);
              }}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {carsData.pickupTime}
            </button>
            {showTimePicker && timePickerType === 'pickup' && (
              <TimePicker
                type="pickup"
                currentTime={carsData.pickupTime}
                onSelect={(time) => setCarsData({...carsData, pickupTime: time})}
              />
            )}
          </div>
        </div>

        {/* Drop-off time */}
        <div className="md:col-span-1 relative" ref={timePickerRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Restitution</label>
          <div className="relative">
            <button
              onClick={() => {
                setTimePickerType('dropoff');
                setShowTimePicker(true);
              }}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {carsData.dropoffTime}
            </button>
            {showTimePicker && timePickerType === 'dropoff' && (
              <TimePicker
                type="dropoff"
                currentTime={carsData.dropoffTime}
                onSelect={(time) => setCarsData({...carsData, dropoffTime: time})}
              />
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-2 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700">Âge du conducteur:</label>
          <select 
            value={carsData.driverAge}
            onChange={(e) => setCarsData({...carsData, driverAge: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            {Array.from({length: 51}, (_, i) => i + 25).map(age => (
              <option key={age} value={age}>{age} ans</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowPromoModal(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            Codes promo
          </button>
          {showPromoModal && <PromoCodeModal />}
        </div>
      </div>
    </div>
  );

  // Packages Tab
  const PackagesSearch = () => (
    <div className="space-y-4">
      {/* Package Type Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium">
          Séjour inclus
        </span>
        <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium">
          Vol inclus
        </span>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
          Voiture
        </button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
          Économique
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Leaving from */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Départ de</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={packagesData.departure}
                onChange={(e) => setPackagesData({...packagesData, departure: e.target.value})}
                placeholder="Seattle, WA (SEA-Seattle...)"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Swap */}
        <div className="md:col-span-1 flex items-end justify-center pb-2.5">
          <button 
            onClick={() => {
              setPackagesData({
                ...packagesData,
                departure: packagesData.destination,
                destination: packagesData.departure
              });
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition border border-gray-300"
          >
            <ArrowLeftRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Going to */}
        <div className="md:col-span-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={packagesData.destination}
                onChange={(e) => setPackagesData({...packagesData, destination: e.target.value})}
                placeholder="Destination..."
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-2 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Dates</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('package-range');
                setCalendarDate(packagesData.checkIn);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {packagesData.checkIn && packagesData.checkOut ? 
                `${formatDisplayDate(packagesData.checkIn)} - ${formatDisplayDate(packagesData.checkOut)}` : 'Sélectionner'}
            </button>
            {showCalendar && calendarType === 'package-range' && (
              <DateCalendar
                type="package-range"
                currentDate={calendarDate}
                onSelect={(date) => {
                  if (!packagesData.checkIn) {
                    setPackagesData({...packagesData, checkIn: date});
                  } else if (!packagesData.checkOut) {
                    setPackagesData({...packagesData, checkOut: date});
                  } else {
                    setPackagesData({...packagesData, checkIn: date, checkOut: ''});
                  }
                }}
              />
            )}
          </div>
        </div>

        {/* Travelers */}
        <div className="md:col-span-2 relative">
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Voyageurs</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCurrentTravelersType('packages');
                setShowTravelersModal(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 text-sm"
            >
              {getTravelersText(packagesData.travelers, true)}
            </button>
            {showTravelersModal && currentTravelersType === 'packages' && (
              <TravelersModal type="packages" />
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-1 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Checkbox */}
      <label className="flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          checked={packagesData.partialStay}
          onChange={(e) => setPackagesData({...packagesData, partialStay: e.target.checked})}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
        />
        <span className="ml-2 text-sm text-gray-700">Je n'ai besoin d'un logement que pour une partie de mon séjour</span>
      </label>
    </div>
  );

  // Things to do Tab
  const ThingsToDoSearch = () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Recherchez des événements sportifs, concerts ou festivals ?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Rechercher des billets d'événement
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Going to */}
        <div className="md:col-span-5">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Destination</label>
            <div className="relative">
              <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={activitiesData.destination}
                onChange={(e) => setActivitiesData({...activitiesData, destination: e.target.value})}
                placeholder="Activités, visites, spectacles..."
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-4 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('activity');
                setCalendarDate(activitiesData.date);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
            >
              {activitiesData.date ? formatDisplayDate(activitiesData.date) : 'Sélectionner'}
            </button>
            {showCalendar && calendarType === 'activity' && (
              <DateCalendar
                type="activity"
                currentDate={calendarDate}
                onSelect={(date) => setActivitiesData({...activitiesData, date})}
              />
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-3 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Rechercher
          </button>
        </div>
      </div>

      {/* Travelers (simplifié) */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700">Adultes:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleTravelersChange('activities', 'adults', activitiesData.travelers.adults - 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={activitiesData.travelers.adults <= 1}
            >
              -
            </button>
            <span className="w-6 text-center">{activitiesData.travelers.adults}</span>
            <button
              onClick={() => handleTravelersChange('activities', 'adults', activitiesData.travelers.adults + 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={activitiesData.travelers.adults >= 10}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700">Enfants:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleTravelersChange('activities', 'children', activitiesData.travelers.children - 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={activitiesData.travelers.children <= 0}
            >
              -
            </button>
            <span className="w-6 text-center">{activitiesData.travelers.children}</span>
            <button
              onClick={() => handleTravelersChange('activities', 'children', activitiesData.travelers.children + 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={activitiesData.travelers.children >= 8}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Cruises Tab
  const CruisesSearch = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Destination */}
        <div className="md:col-span-4">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Destination</label>
            <div className="relative">
              <Ship className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={cruisesData.destination}
                onChange={(e) => setCruisesData({...cruisesData, destination: e.target.value})}
                placeholder="Caraïbes, Méditerranée..."
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Durée</label>
          <select
            value={cruisesData.duration}
            onChange={(e) => setCruisesData({...cruisesData, duration: e.target.value})}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm appearance-none bg-white"
          >
            <option value="3">3+ nuits</option>
            <option value="7">7+ nuits</option>
            <option value="10">10+ nuits</option>
            <option value="14">14+ nuits</option>
          </select>
        </div>

        {/* Date */}
        <div className="md:col-span-3 relative" ref={calendarRef}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Date de départ</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={() => {
                setCalendarType('cruise');
                setCalendarDate(cruisesData.departureDate);
                setShowCalendar(true);
              }}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
            >
              {cruisesData.departureDate ? formatDisplayDate(cruisesData.departureDate) : 'Sélectionner'}
            </button>
            {showCalendar && calendarType === 'cruise' && (
              <DateCalendar
                type="cruise"
                currentDate={calendarDate}
                onSelect={(date) => setCruisesData({...cruisesData, departureDate: date})}
              />
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-3 flex items-end">
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Rechercher une croisière
          </button>
        </div>
      </div>

      {/* Travelers */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700">Adultes:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleTravelersChange('cruises', 'adults', cruisesData.travelers.adults - 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={cruisesData.travelers.adults <= 1}
            >
              -
            </button>
            <span className="w-6 text-center">{cruisesData.travelers.adults}</span>
            <button
              onClick={() => handleTravelersChange('cruises', 'adults', cruisesData.travelers.adults + 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={cruisesData.travelers.adults >= 10}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-700">Enfants:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleTravelersChange('cruises', 'children', cruisesData.travelers.children - 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={cruisesData.travelers.children <= 0}
            >
              -
            </button>
            <span className="w-6 text-center">{cruisesData.travelers.children}</span>
            <button
              onClick={() => handleTravelersChange('cruises', 'children', cruisesData.travelers.children + 1)}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              disabled={cruisesData.travelers.children >= 8}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto ">
        {/* Search Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 "> 
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 overflow-x-auto border-b border-gray-200 pb-px flex justify-center items-center ">
            {[
              { id: 'stays', icon: Hotel, label: 'Séjours' },
              { id: 'flights', icon: Plane, label: 'Vols' },
              { id: 'cars', icon: Car, label: 'Voitures' },
              { id: 'packages', icon: Package, label: 'Destinations' },
              { id: 'things', icon: Ticket, label: 'Activités' },
              { id: 'cruises', icon: Ship, label: 'Croisières' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex justify-center items-center gap-2 px-6 py-3 min-w-max transition relative ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium whitespace-nowrap">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'stays' && <StaysSearch />}
            {activeTab === 'flights' && <FlightsSearch />}
            {activeTab === 'cars' && <CarsSearch />}
            {activeTab === 'packages' && <PackagesSearch />}
            {activeTab === 'things' && <ThingsToDoSearch />}
            {activeTab === 'cruises' && <CruisesSearch />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpediaSearchBar;