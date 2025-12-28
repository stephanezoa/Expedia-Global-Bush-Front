import { useState, useRef, useEffect } from "react";
import { UserRound, Baby, Luggage, MapPinHouse, ArrowRightLeft, Handbag, MapPinCheck, Calendar, CalendarClock, Search, ChevronDown } from "lucide-react";

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

export default function FlightSearch({ onSearch }) {
  const [tripType, setTripType] = useState("oneway");
  const [travelClass, setTravelClass] = useState("economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState(1);
  const [checked, setChecked] = useState(0);
  const [includeHotel, setIncludeHotel] = useState(false);

  const [openTrip, setOpenTrip] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openPax, setOpenPax] = useState(false);
  const [openBag, setOpenBag] = useState(false);

  const tripRef = useRef();
  const classRef = useRef();
  const paxRef = useRef();
  const bagRef = useRef();

  useClickOutside(tripRef, () => setOpenTrip(false));
  useClickOutside(classRef, () => setOpenClass(false));
  useClickOutside(paxRef, () => setOpenPax(false));
  useClickOutside(bagRef, () => setOpenBag(false));

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const paxSummary = () => {
    const total = adults + children + infants;
    return `${total} Passager${total > 1 ? "s" : ""}`;
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

  const handleSearch = (e) => {
    e?.preventDefault?.();
    const payload = {
      tripType, travelClass, adults, children, infants, cabin, checked, includeHotel
    };
    if (onSearch) onSearch(payload);
    else console.log("Search payload:", payload);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="space-y-4 t">
        {/* TOP ROW: Options - Version responsive */}
        <div className="flex flex-wrap gap-2">
          {/* Icône flèche au milieu */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 hidden lg:block">
            <div className="p-2 bg-white border border-gray-300 rounded-full shadow-sm">
              <ArrowRightLeft className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Trip Type Selector */}
          <div ref={tripRef} className="relative flex-1 min-w-[140px]">
            <button
              type="button"
              onClick={() => setOpenTrip(v => !v)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{tripLabel(tripType)}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openTrip ? "rotate-180" : ""}`} />
            </button>

            {openTrip && (
              <div className="absolute left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-lg z-50">
                {["oneway", "roundtrip", "multi"].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setTripType(type); setOpenTrip(false); }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${tripType === type ? "bg-blue-50 text-blue-600 font-medium" : ""}`}
                  >
                    {tripLabel(type)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Class Selector */}
          <div ref={classRef} className="relative flex-1 min-w-[140px]">
            <button
              type="button"
              onClick={() => setOpenClass(v => !v)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">{classLabel(travelClass)}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openClass ? "rotate-180" : ""}`} />
            </button>

            {openClass && (
              <div className="absolute left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-lg z-50">
                {["economy", "premium", "business", "first"].map(cls => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => { setTravelClass(cls); setOpenClass(false); }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${travelClass === cls ? "bg-blue-50 text-blue-600 font-medium" : ""}`}
                  >
                    {classLabel(cls)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Passengers Selector */}
          <div ref={paxRef} className="relative flex-1 min-w-[140px]">
            <button
              type="button"
              onClick={() => setOpenPax(v => !v)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2">
                <UserRound className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{paxSummary()}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openPax ? "rotate-180" : ""}`} />
            </button>

            {openPax && (
              <div className="absolute right-0 md:left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Passagers</h4>

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
                        onClick={() => setAdults(a => clamp(a - 1, 1, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(a => clamp(a + 1, 1, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

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
                        onClick={() => setChildren(c => clamp(c - 1, 0, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(c => clamp(c + 1, 0, 9))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

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
                        onClick={() => setInfants(i => clamp(i - 1, 0, adults))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(i => clamp(i + 1, 0, adults))}
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
          <div ref={bagRef} className="relative flex-1 min-w-[140px]">
            <button
              type="button"
              onClick={() => setOpenBag(v => !v)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2">
                <Luggage className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">
                  {cabin}/{checked} Bagage
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openBag ? "rotate-180" : ""}`} />
            </button>

            {openBag && (
              <div className="absolute right-0 md:left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Bagages</h4>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Handbag className="w-4 h-4" />
                      <span className="text-sm font-medium">Bagage à main</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setCabin(c => clamp(c - 1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{cabin}</span>
                      <button
                        type="button"
                        onClick={() => setCabin(c => clamp(c + 1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4" />
                      <span className="text-sm font-medium">Bagage en soute</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChecked(c => clamp(c - 1, 0, 5))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">{checked}</span>
                      <button
                        type="button"
                        onClick={() => setChecked(c => clamp(c + 1, 0, 5))}
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

        {/* MAIN SEARCH FIELDS - Version responsive améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-3">
          {/* From - Départ */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <span className="text-sm text-gray-500">De :</span>
                <div className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                  Yaoundé
                </div>
              </div>
              <input
                type="text"
                className="w-full py-3.5 pl-24 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-400"
                placeholder="Votre départ"
                defaultValue=""
              />
              <MapPinHouse className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* To - Destination */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <span className="text-sm text-gray-500">À :</span>
                <div className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                  Douala
                </div>
              </div>
              <input
                type="text"
                className="w-full py-3.5 pl-24 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-400"
                placeholder="Ajouter destination"
                defaultValue=""
              />
              <MapPinCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Date Départ */}
          <div className="lg:col-span-2">
            <div className="relative">
              <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                className="w-full py-3.5 pl-12 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-400"
                placeholder="Départ"
                defaultValue="mar. 21 déc."
              />
            </div>
          </div>

          {/* Date Retour / Durée */}
          <div className="lg:col-span-2">
            <div className="relative">
              <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                className="w-full py-3.5 pl-12 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-400"
                placeholder={tripType === "roundtrip" ? "Retour" : "Durée"}
                defaultValue={tripType === "roundtrip" ? "ven. 16 jan." : "3 - 27 nuits"}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full h-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Rechercher</span>
              <span className="sm:hidden">Search</span>
            </button>
          </div>
        </div>

        {/* HOTEL CHECKBOX - Version responsive */}
        <div className="flex items-center justify-start pt-3 md:hidden">
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition cursor-pointer">
            <input
              type="checkbox"
              id="demander_recherche_hotel"
              checked={includeHotel}
              onChange={(e) => setIncludeHotel(e.target.checked)}
              className="w-4 h-4 md:w-5 md:h-5 text-blue-500 rounded focus:ring-blue-400"
            />
            <label
              htmlFor="demander_recherche_hotel"
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-blue-600">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-sm md:text-base font-medium text-gray-800">
                  Trouver un Hôtel avec globalbush.com Hôtels
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  Ajouter un hébergement à votre voyage
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* INFOS SUPPLÉMENTAIRES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t md:hidden border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Prix garantis sans surprise</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Annulation gratuite 24h avant</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Assurance incluse</span>
          </div>
        </div>
      </div>
    </form>
  );
}