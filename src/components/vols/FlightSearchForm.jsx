import React, { useState, useEffect } from 'react';

// Icônes (remplacez par vos icônes réelles)
const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
</svg>;

const Calendar = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 4h10v1H6V6zm0 3h10v1H6V9zm0 3h7v1H6v-1z" clipRule="evenodd" />
</svg>;

const Users = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.5 5.5 0 00-11 0v3h11z" />
</svg>;

const Search = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
</svg>;

const FlightSearchForm = () => {
  // === État général ===
  const [tripType, setTripType] = useState('roundtrip');
  const [departure, setDeparture] = useState(''); // Code IATA
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // === Autocomplétion ===
  const [airports, setAirports] = useState([]);
  const [loadingAirports, setLoadingAirports] = useState(true);
  const [departureInput, setDepartureInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  // === Passagers ===
  const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [showTravelersModal, setShowTravelersModal] = useState(false);

  // === Chargement ===
  const [isSearching, setIsSearching] = useState(false);

  // === Charger les aéroports ===
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/airports');
        if (!response.ok) throw new Error('Failed to fetch airports');
        const data = await response.json();
        setAirports(data);
      } catch (error) {
        console.error('Error loading airports:', error);
      } finally {
        setLoadingAirports(false);
      }
    };
    fetchAirports();
  }, []);

  // === Filtrer les aéroports ===
  const filterAirports = (input) => {
    if (!input.trim()) return [];
    const term = input.toLowerCase();
    return airports.filter(airport =>
      airport.Code.toLowerCase().includes(term) ||
      airport.Name.toLowerCase().includes(term) ||
      airport.City.toLowerCase().includes(term) ||
      airport.Country.toLowerCase().includes(term)
    ).slice(0, 8);
  };

  // === Gestion de la sélection ===
  const selectAirport = (airport, isDeparture) => {
    if (isDeparture) {
      setDeparture(airport.Code);
      setDepartureInput(`${airport.City} (${airport.Code})`);
      setShowFromSuggestions(false);
    } else {
      setDestination(airport.Code);
      setDestinationInput(`${airport.City} (${airport.Code})`);
      setShowToSuggestions(false);
    }
  };

  // === Gestion des passagers ===
  const updateTravelers = (type, delta) => {
    setTravelers(prev => {
      const newValue = prev[type] + delta;
      if (newValue < 0) return prev;
      if (type === 'infants' && newValue > prev.adults) return prev; // Nourrissons ≤ adultes
      return { ...prev, [type]: newValue };
    });
  };

  // === Soumission ===
  const handleSearch = async () => {
    if (!departure || !destination || !departDate) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setIsSearching(true);
    try {
      const originDestInfo = [{
        departureDate: departDate,
        airportOriginCode: departure,
        airportDestinationCode: destination
      }];

      if (tripType === 'roundtrip') {
        if (!returnDate) {
          alert('Veuillez sélectionner une date de retour.');
          setIsSearching(false);
          return;
        }
        originDestInfo[0].returnDate = returnDate;
      }

      const payload = {
        user_id: "WainfenVictor_testAPI",
        user_password: "WainfenVictorTest@2025",
        access: "Test",
        ip_address: "127.0.0.1",
        journeyType: tripType === 'roundtrip' ? 'Return' : 'OneWay',
        OriginDestinationInfo: originDestInfo,
        class: "Economy",
        adults: travelers.adults,
        childs: travelers.children,
        infants: travelers.infants,
        requiredCurrency: "USD"
      };

      const response = await fetch('http://localhost:8000/api/v1/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.detail || 'Erreur lors de la recherche');
      }

      const data = await response.json();
      console.log('Résultats de recherche:', data);
      // ICI : Rediriger vers la page de résultats
      // ex: navigate('/results', { state: data });

    } catch (error) {
      console.error('Search error:', error);
      alert('Erreur lors de la recherche : ' + error.message);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl">
      {/* Trip Type */}
      <div className="flex border-b mb-6">
        {['roundtrip', 'oneway', 'multiday'].map(type => (
          <button
            key={type}
            className={`px-6 py-3 font-medium ${
              tripType === type 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setTripType(type)}
          >
            {type === 'roundtrip' ? 'Roundtrip' : 
             type === 'oneway' ? 'One-way' : 'Multi-day'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Departure */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Leaving from</label>
          <div className="relative">
            <input
              type="text"
              value={departureInput}
              onChange={(e) => {
                setDepartureInput(e.target.value);
                setShowFromSuggestions(true);
              }}
              onFocus={() => setShowFromSuggestions(true)}
              placeholder="City or airport"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            {showFromSuggestions && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                {loadingAirports ? (
                  <li className="p-3 text-gray-500">Chargement...</li>
                ) : filterAirports(departureInput).map(airport => (
                  <li
                    key={airport.Code}
                    className="p-3 hover:bg-blue-50 cursor-pointer flex justify-between"
                    onClick={() => selectAirport(airport, true)}
                  >
                    <span>{airport.City} ({airport.Code})</span>
                    <span className="text-gray-500 text-sm">{airport.Country}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Destination */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Going to</label>
          <div className="relative">
            <input
              type="text"
              value={destinationInput}
              onChange={(e) => {
                setDestinationInput(e.target.value);
                setShowToSuggestions(true);
              }}
              onFocus={() => setShowToSuggestions(true)}
              placeholder="City or airport"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            {showToSuggestions && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                {loadingAirports ? (
                  <li className="p-3 text-gray-500">Chargement...</li>
                ) : filterAirports(destinationInput).map(airport => (
                  <li
                    key={airport.Code}
                    className="p-3 hover:bg-blue-50 cursor-pointer flex justify-between"
                    onClick={() => selectAirport(airport, false)}
                  >
                    <span>{airport.City} ({airport.Code})</span>
                    <span className="text-gray-500 text-sm">{airport.Country}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {tripType === 'roundtrip' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Travelers */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
          <div className="relative">
            <input
              type="text"
              value={`${travelers.adults} Adult${travelers.adults > 1 ? 's' : ''}, ${travelers.children} Child${travelers.children !== 1 ? 'ren' : ''}`}
              readOnly
              onClick={() => setShowTravelersModal(true)}
              className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer"
            />
            <Users className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-50"
          >
            {isSearching ? 'Searching...' : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Search
              </>
            )}
          </button>
        </div>
      </div>

      {/* Add hotel checkbox */}
      <div className="mt-6 flex items-center">
        <input type="checkbox" id="addHotel" className="w-4 h-4 text-blue-600 rounded" />
        <label htmlFor="addHotel" className="ml-2 text-sm text-gray-700">
          Add a place to stay
        </label>
      </div>

      {/* Modal Passagers */}
      {showTravelersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Travelers</h3>
            
            <div className="space-y-4">
              {/* Adults */}
              <div className="flex justify-between items-center">
                <span>Adults</span>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateTravelers('adults', -1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.adults <= 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{travelers.adults}</span>
                  <button 
                    onClick={() => updateTravelers('adults', 1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.adults >= 9}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center">
                <span>Children</span>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateTravelers('children', -1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.children <= 0}
                  >
                    -
                  </button>
                  <span className="mx-3">{travelers.children}</span>
                  <button 
                    onClick={() => updateTravelers('children', 1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.children >= 9}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex justify-between items-center">
                <span>Infants</span>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateTravelers('infants', -1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.infants <= 0}
                  >
                    -
                  </button>
                  <span className="mx-3">{travelers.infants}</span>
                  <button 
                    onClick={() => updateTravelers('infants', 1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    disabled={travelers.infants >= travelers.adults}
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-gray-500">(≤ Adults)</span>
              </div>
            </div>

            <button
              onClick={() => setShowTravelersModal(false)}
              className="mt-6 w-full bg-gray-200 hover:bg-gray-300 py-2 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearchForm;