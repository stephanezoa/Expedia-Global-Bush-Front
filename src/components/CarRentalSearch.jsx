import { useState, useRef, useEffect } from "react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Car,
  ChevronDown,
  ChevronUp,
  Timer,
  Tag
} from "lucide-react";

// Hook click outside
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Composant simple de sélection de dates
function SimpleDatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [dates, setDates] = useState("mar. 23 déc. → mer. 24 déc.");
  const wrapperRef = useRef();
  
  useClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-800">{dates}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-4">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                ←
              </button>
              <span className="font-semibold">décembre 2025</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                →
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  className={`
                    h-8 w-8 flex items-center justify-center text-sm rounded
                    ${day >= 23 && day <= 24 ? 'bg-blue-500 text-white' : ''}
                    ${day === 23 ? 'rounded-l-full' : ''}
                    ${day === 24 ? 'rounded-r-full' : ''}
                    ${day > 23 && day < 24 ? 'bg-blue-100' : ''}
                    hover:bg-gray-100
                  `}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="text-sm">
              <div className="text-gray-500">Sélection</div>
              <div className="font-semibold">{dates}</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
            >
              Valider
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CarRentalSearch() {
  const [showDiscountCodes, setShowDiscountCodes] = useState(false);
  const [sameReturnLocation, setSameReturnLocation] = useState(true);
  const [driverAge, setDriverAge] = useState("");
  
  const discountRef = useRef();
  
  useClickOutside(discountRef, () => setShowDiscountCodes(false));
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching cars...");
  };

  const timeOptions = [
    "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-6">
        {/* Ligne 1 : Locations et dates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Locations */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Aéroport, ville ou hôtel"
                  className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder={sameReturnLocation ? "Même lieu de retour" : "Lieu de retour différent"}
                  disabled={sameReturnLocation}
                  className={`w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl ${
                    sameReturnLocation 
                      ? 'bg-gray-50 text-gray-500 cursor-not-allowed' 
                      : 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
              </div>
            </div>
            
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                checked={sameReturnLocation}
                onChange={(e) => setSameReturnLocation(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded"
              />
              <span className="text-sm text-gray-700">Même lieu de retour</span>
            </label>
          </div>
          
          {/* Dates */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Période de location
              </label>
              <SimpleDatePicker />
            </div>
          </div>
          
          {/* Heures */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Heure de prise
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">10 h 30</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Heure de retour
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">10 h 30</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ligne 2 : Options et bouton */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-500 rounded"
                />
                <div className="text-sm text-gray-700">
                  Conducteur de moins de 30 ans ou plus de 70 ans
                </div>
              </label>
              
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Âge"
                  value={driverAge}
                  onChange={(e) => setDriverAge(e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="18"
                  max="99"
                />
                <span className="text-sm text-gray-500">ans</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              Les jeunes conducteurs et les conducteurs âgés pourraient devoir payer des frais supplémentaires.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Code promo */}
            <div className="relative" ref={discountRef}>
              <button
                type="button"
                onClick={() => setShowDiscountCodes(!showDiscountCodes)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Tag className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Code promo</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${
                  showDiscountCodes ? 'rotate-180' : ''
                }`} />
              </button>
              
              {showDiscountCodes && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-10">
                  <div className="space-y-4">
                    <div className="font-medium text-gray-800">Codes de réduction</div>
                    
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Entrez votre code promo"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        className="w-full py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                      >
                        Appliquer le code
                      </button>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Codes d'entreprise, militaires et autres réductions disponibles
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Bouton de recherche */}
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200 flex items-center gap-2 min-w-[140px] justify-center"
            >
              <Car className="w-5 h-5" />
              Rechercher
            </button>
          </div>
        </div>
        
        {/* Note informative */}
        <div className="text-center text-sm text-gray-500">
          <p>Les membres économisent 10% minimum sur plus de 100 000 hôtels avec les Points</p>
        </div>
      </form>
    </div>
  );
}