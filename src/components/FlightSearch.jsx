import { useState, useRef, useEffect } from "react";
import { UserRound, Baby, Luggage, MapPinHouse, Handbag, MapPinCheck, Calendar, CalendarClock } from "lucide-react";

/**
 * Petit hook pour détecter clic à l'extérieur (fermer dropdowns)
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
 * Composant FlightSearch
 */
export default function FlightSearch({ onSearch }) {
  // dropdowns / selections
  const [tripType, setTripType] = useState("oneway"); // oneway | roundtrip | multi
  const [travelClass, setTravelClass] = useState("economy"); // economy | premium | business | first

  // passengers
  const [adults, setAdults] = useState(1); // +11 ans
  const [children, setChildren] = useState(0); // 2-11 ans
  const [infants, setInfants] = useState(0); // <2 ans

  // baggage
  const [cabin, setCabin] = useState(1);
  const [checked, setChecked] = useState(0);

  // dropdown open states
  const [openTrip, setOpenTrip] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openPax, setOpenPax] = useState(false);
  const [openBag, setOpenBag] = useState(false);

  // refs for outside click
  const tripRef = useRef();
  const classRef = useRef();
  const paxRef = useRef();
  const bagRef = useRef();

  useClickOutside(tripRef, () => setOpenTrip(false));
  useClickOutside(classRef, () => setOpenClass(false));
  useClickOutside(paxRef, () => setOpenPax(false));
  useClickOutside(bagRef, () => setOpenBag(false));

  // helpers
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const paxSummary = () => {
    const parts = [];
    const total = adults + children + infants;
    parts.push(`${total} Passager${total > 1 ? "s" : ""}`);
    return parts.join(" • ");
  };

  const classLabel = (c) => {
    switch (c) {
      case "economy": return "Économique";
      case "premium": return "Premium";
      case "business": return "Business";
      case "first": return "First";
      default: return c;
    }
  };

  const tripLabel = (t) => {
    switch (t) {
      case "oneway": return "Aller simple";
      case "roundtrip": return "Aller-retour";
      case "multi": return "Multi-destinations";
      default: return t;
    }
  };

  // simulate search submit
  const handleSearch = (e) => {
    e?.preventDefault?.();
    const payload = {
      tripType, travelClass, adults, children, infants, cabin, checked
    };
    if (onSearch) onSearch(payload);
    else console.log("Search payload:", payload);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="space-y-4">
        {/* TOP ROW: Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* Trip Type Selector */}
          <div ref={tripRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenTrip(v => !v)}
              className="w-full text-left px-3 py-2.5 border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">{tripLabel(tripType)}</span>
              </div>
              <svg className={`w-4 h-4 text-gray-500 transform ${openTrip ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
              </svg>
            </button>

            {openTrip && (
              <div className="absolute left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-lg z-40">
                {["oneway", "roundtrip", "multi"].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setTripType(type); setOpenTrip(false); }}
                    className={`w-full text-left px-3 py-2 text-sm ${tripType === type ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-50"}`}
                  >
                    {tripLabel(type)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Class Selector */}
          <div ref={classRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenClass(v => !v)}
              className="w-full text-left px-3 py-2.5 border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">{classLabel(travelClass)}</span>
              </div>
              <svg className={`w-4 h-4 text-gray-500 transform ${openClass ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
              </svg>
            </button>

            {openClass && (
              <div className="absolute left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-lg z-40">
                {["economy", "premium", "business", "first"].map(cls => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => { setTravelClass(cls); setOpenClass(false); }}
                    className={`w-full text-left px-3 py-2 text-sm ${travelClass === cls ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-50"}`}
                  >
                    {classLabel(cls)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Passengers Selector */}
          <div ref={paxRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenPax(v => !v)}
              className="w-full text-left px-3 py-2.5 border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-2">
                <UserRound className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{paxSummary()}</span>
              </div>
              <svg className={`w-4 h-4 text-gray-500 transform ${openPax ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
              </svg>
            </button>

            {openPax && (
              <div className="absolute right-0 md:left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-40 p-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Passagers</h4>
                  
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <UserRound className="w-4 h-4" />
                        <span className="text-sm font-medium">Adultes</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">+11 ans</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(a => clamp(a-1, 1, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(a => clamp(a+1, 1, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Baby className="w-4 h-4" />
                        <span className="text-sm font-medium">Enfants</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">2-11 ans</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildren(c => clamp(c-1, 0, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(c => clamp(c+1, 0, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Baby className="w-4 h-4" />
                        <span className="text-sm font-medium">Bébés</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">-2 ans</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setInfants(i => clamp(i-1, 0, adults))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(i => clamp(i+1, 0, adults))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenPax(false)}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                  >
                    Valider
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Baggage Selector */}
          <div ref={bagRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenBag(v => !v)}
              className="w-full text-left px-3 py-2.5 border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 transition bg-white"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{cabin}</span>
                  <Handbag className="w-4 h-4" />
                </div>
                <span className="text-gray-300">/</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{checked}</span>
                  <Luggage className="w-4 h-4" />
                </div>
              </div>
              <svg className={`w-4 h-4 text-gray-500 transform ${openBag ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
              </svg>
            </button>

            {openBag && (
              <div className="absolute right-0 md:left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-40 p-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Bagages</h4>
                  
                  {/* Cabin Baggage */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Handbag className="w-4 h-4" />
                      <span className="text-sm font-medium">Bagage à main</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setCabin(c => clamp(c-1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{cabin}</span>
                      <button
                        type="button"
                        onClick={() => setCabin(c => clamp(c+1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Checked Baggage */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4" />
                      <span className="text-sm font-medium">Bagage en soute</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChecked(c => clamp(c-1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{checked}</span>
                      <button
                        type="button"
                        onClick={() => setChecked(c => clamp(c+1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenBag(false)}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                  >
                    Valider
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MAIN SEARCH FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* From */}
          <div className="relative">
            <MapPinHouse className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="from-label">
              <span>De :</span>{" "}
              <span className="font-medium text-gray-700">Ville, aéroport</span>
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              onFocus={() => document.getElementById("from-label").style.display = "none"}
              onBlur={(e) => {
                if (!e.target.value) {
                  document.getElementById("from-label").style.display = "block";
                }
              }}
            />
          </div>

          {/* To */}
          <div className="relative">
            <MapPinCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="to-label">
              <span>À :</span>{" "}
              <span className="font-medium text-gray-700">Ville, aéroport</span>
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              onFocus={() => document.getElementById("to-label").style.display = "none"}
              onBlur={(e) => {
                if (!e.target.value) {
                  document.getElementById("to-label").style.display = "block";
                }
              }}
            />
          </div>

          {/* Date */}
          <div className="relative">
            <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <div className="pointer-events-none absolute left-10 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" id="date-label">
              <span>Départ :</span>{" "}
              <span className="font-medium text-gray-700">Sans préférence</span>
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              onFocus={() => document.getElementById("date-label").style.display = "none"}
              onBlur={(e) => {
                if (!e.target.value) {
                  document.getElementById("date-label").style.display = "block";
                }
              }}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 hover:scale-[0.98] transition-all duration-200"
          >
            Explorer
          </button>
        </div>

        {/* HOTEL CHECKBOX */}
        <div className="flex items-center justify-end gap-2 pt-2">
          <input
            type="checkbox"
            id="demander_recherche_hotel"
            className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
          />
          <label htmlFor="demander_recherche_hotel" className="text-sm text-gray-600">
            Trouver un Hôtel avec globalbush.com Hôtels
          </label>
        </div>
      </div>
    </form>
  );
}