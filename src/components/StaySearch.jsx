import { useState, useRef, useEffect } from "react";
import { 
  UserRound, 
  Baby, 
  MapPinHouse, 
  Calendar,
  CalendarClock,
  Plane,
  Hotel,
  Home,
  Building,
  Star
} from "lucide-react";

/**
 * Hook pour détecter clic à l'extérieur
 */
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

/**
 * Composant StaySearch - Recherche de séjours
 */
export default function StaySearch({ onSearch }) {
  // État pour le type de séjour
  const [stayType, setStayType] = useState("hotel"); // hotel | apartment | resort | villa
  const [durationType, setDurationType] = useState("nights"); // nights | dates
  
  // Passagers/chambres
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  
  // Durée
  const [nights, setNights] = useState(7);
  
  // Dropdown states
  const [openStayType, setOpenStayType] = useState(false);
  const [openDuration, setOpenDuration] = useState(false);
  const [openPax, setOpenPax] = useState(false);
  
  // Refs
  const stayTypeRef = useRef();
  const durationRef = useRef();
  const paxRef = useRef();
  
  useClickOutside(stayTypeRef, () => setOpenStayType(false));
  useClickOutside(durationRef, () => setOpenDuration(false));
  useClickOutside(paxRef, () => setOpenPax(false));
  
  // Helpers
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  
  const stayTypeLabel = (type) => {
    switch (type) {
      case "hotel": return "Hôtel";
      case "apartment": return "Appartement";
      case "resort": return "Complexe";
      case "villa": return "Villa";
      default: return type;
    }
  };
  
  const stayTypeIcon = (type) => {
    switch (type) {
      case "hotel": return <Hotel className="w-4 h-4" />;
      case "apartment": return <Building className="w-4 h-4" />;
      case "resort": return <Home className="w-4 h-4" />;
      case "villa": return <Star className="w-4 h-4" />;
      default: return <Hotel className="w-4 h-4" />;
    }
  };
  
  const durationLabel = () => {
    if (durationType === "nights") {
      return `${nights} nuit${nights > 1 ? 's' : ''}`;
    }
    return "Dates spécifiques";
  };
  
  const paxSummary = () => {
    const totalGuests = adults + children;
    return `${rooms} chambre${rooms > 1 ? 's' : ''} • ${totalGuests} voyageur${totalGuests > 1 ? 's' : ''}`;
  };
  
  // Handle search
  const handleSearch = (e) => {
    e?.preventDefault?.();
    const payload = {
      stayType,
      durationType,
      nights,
      rooms,
      adults,
      children
    };
    if (onSearch) onSearch(payload);
    else console.log("Stay search payload:", payload);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="space-y-4">
        {/* TOP ROW: Séjour Type & Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Type de séjour */}
          <div ref={stayTypeRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenStayType(!openStayType)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-3">
                {stayTypeIcon(stayType)}
                <span className="font-medium text-gray-800">{stayTypeLabel(stayType)}</span>
              </div>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform ${openStayType ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openStayType && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
                {[
                  { value: "hotel", label: "Hôtel", icon: <Hotel className="w-4 h-4" /> },
                  { value: "apartment", label: "Appartement", icon: <Building className="w-4 h-4" /> },
                  { value: "resort", label: "Complexe", icon: <Home className="w-4 h-4" /> },
                  { value: "villa", label: "Villa", icon: <Star className="w-4 h-4" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      setStayType(type.value);
                      setOpenStayType(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 ${
                      stayType === type.value ? 'bg-blue-50 text-blue-600' : ''
                    } ${type.value === "villa" ? '' : 'border-b border-gray-100'}`}
                  >
                    {type.icon}
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Durée du séjour */}
          <div ref={durationRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenDuration(!openDuration)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-3">
                <CalendarClock className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-800">{durationLabel()}</span>
              </div>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform ${openDuration ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openDuration && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                <div className="space-y-4">
                  {/* Sélecteur nuits */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">Nombre de nuits</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setNights(n => clamp(n - 1, 1, 30))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">−</span>
                        </button>
                        <span className="w-10 text-center font-medium text-lg">{nights}</span>
                        <button
                          type="button"
                          onClick={() => setNights(n => clamp(n + 1, 1, 30))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>± 3 jours flexibles</span>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setDurationType("dates");
                      setOpenDuration(false);
                    }}
                    className="w-full py-2.5 text-center border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Choisir des dates spécifiques
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setOpenDuration(false)}
                    className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                  >
                    Valider
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Passagers & Chambres */}
          <div ref={paxRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenPax(!openPax)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-3">
                <UserRound className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-800">{paxSummary()}</span>
              </div>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform ${openPax ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openPax && (
              <div className="absolute z-50 right-0 md:left-0 mt-1 w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                <div className="space-y-5">
                  <h4 className="font-semibold text-gray-800">Chambres et voyageurs</h4>
                  
                  {/* Chambres */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Chambres</div>
                        <div className="text-sm text-gray-500">Max. 4 par séjour</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setRooms(r => clamp(r - 1, 1, 4))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">−</span>
                        </button>
                        <span className="w-8 text-center font-medium">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms(r => clamp(r + 1, 1, 4))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Adultes */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <UserRound className="w-4 h-4" />
                          <span className="font-medium">Adultes</span>
                        </div>
                        <div className="text-sm text-gray-500">+18 ans</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(a => clamp(a - 1, 1, 8))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">−</span>
                        </button>
                        <span className="w-8 text-center font-medium">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(a => clamp(a + 1, 1, 8))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enfants */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Baby className="w-4 h-4" />
                          <span className="font-medium">Enfants</span>
                        </div>
                        <div className="text-sm text-gray-500">0-17 ans</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(c => clamp(c - 1, 0, 6))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">−</span>
                        </button>
                        <span className="w-8 text-center font-medium">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(c => clamp(c + 1, 0, 6))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenPax(false)}
                    className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                  >
                    Appliquer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MAIN SEARCH FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="relative md:col-span-2">
            <MapPinHouse className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="destination-label">
              <span>Destination</span>{" "}
              <span className="font-medium text-gray-700">Ville, région ou hôtel</span>
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              onFocus={() => document.getElementById("destination-label").style.display = "none"}
              onBlur={(e) => {
                if (!e.target.value) {
                  document.getElementById("destination-label").style.display = "block";
                }
              }}
            />
          </div>

          {/* Dates si sélectionnées */}
          {durationType === "dates" ? (
            <>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="checkin-label">
                  <span>Arrivée</span>{" "}
                  <span className="font-medium text-gray-700">jj/mm/aaaa</span>
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  onFocus={() => document.getElementById("checkin-label").style.display = "none"}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      document.getElementById("checkin-label").style.display = "block";
                    }
                  }}
                />
              </div>

              <div className="relative">
                <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="checkout-label">
                  <span>Départ</span>{" "}
                  <span className="font-medium text-gray-700">jj/mm/aaaa</span>
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  onFocus={() => document.getElementById("checkout-label").style.display = "none"}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      document.getElementById("checkout-label").style.display = "block";
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <div className="md:col-span-2">
              {/* Placeholder pour les dates flexibles */}
              <div className="h-full flex items-center px-4 border border-gray-300 rounded-xl bg-gray-50">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">
                    Séjour flexible de <span className="font-semibold">{nights} nuit{nights > 1 ? 's' : ''}</span> (dates à préciser)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Search Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:scale-[0.98] transition-all duration-200 shadow-md"
          >
            Trouver un séjour
          </button>
        </div>

        {/* OPTIONS SUPPLEMENTAIRES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="include_flight"
              className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
            />
            <label htmlFor="include_flight" className="text-sm text-gray-600 flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Inclure le vol
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="all_inclusive"
              className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
            />
            <label htmlFor="all_inclusive" className="text-sm text-gray-600">
              Tout inclus
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="flexible_cancellation"
              className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
            />
            <label htmlFor="flexible_cancellation" className="text-sm text-gray-600">
              Annulation flexible
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}