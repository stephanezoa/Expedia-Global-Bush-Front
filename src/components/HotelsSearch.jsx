import { UserRound, Baby, Luggage, MapPinHouse, Handbag, MapPinCheck, Calendar, CalendarClock } from "lucide-react";

export default function HotelsSearch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
      
      {/* Champ 1 : Emplacement */}
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
          <MapPinHouse className="w-5 h-5" />
        </span>
        <div className="pointer-events-none text-sm absolute left-10 top-1/2 -translate-y-1/2 text-gray-400" id="label-emplacement">
          <span>Emplacement</span>{" "}
          <span className="font-medium text-gray-700">Paris, MASSA Hotels</span>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-3 border border-gray-400 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onFocus={() => (document.getElementById("label-emplacement").style.display = "none")}
          onBlur={(e) => {
            if (!e.target.value)
              document.getElementById("label-emplacement").style.display = "block";
          }}
        />
      </div>

      {/* Champ 2 : Arrivée */}
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
          <MapPinCheck className="w-5 h-5" />
        </span>
        <div className="pointer-events-none text-sm absolute left-10 top-1/2 -translate-y-1/2 text-gray-400" id="label-arrive">
          <span>Arrivée :</span>{" "}
          <span className="font-medium text-gray-700">25 jan.</span>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-3 border border-gray-400 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onFocus={() => (document.getElementById("label-arrive").style.display = "none")}
          onBlur={(e) => {
            if (!e.target.value)
              document.getElementById("label-arrive").style.display = "block";
          }}
        />
      </div>

      {/* Champ 3 : Départ */}
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
          <CalendarClock className="w-5 h-5" />
        </span>
        <div className="pointer-events-none text-sm absolute left-10 top-1/2 -translate-y-1/2 text-gray-400" id="label-depart">
          <span>Départ :</span>{" "}
          <span className="font-medium text-gray-700">07 fév.</span>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-3 border border-gray-400 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onFocus={() => (document.getElementById("label-depart").style.display = "none")}
          onBlur={(e) => {
            if (!e.target.value)
              document.getElementById("label-depart").style.display = "block";
          }}
        />
      </div>

      {/* Champ 4 : Voyageurs */}
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
          <UserRound className="w-5 h-5" />
        </span>
        <div className="pointer-events-none text-sm absolute left-10 top-1/2 -translate-y-1/2 text-gray-400" id="label-voyageurs">
          <span>Voyageurs</span>{" "}
          <span className="font-medium text-gray-700">06 voyageurs</span>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-3 border border-gray-400 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onFocus={() => (document.getElementById("label-voyageurs").style.display = "none")}
          onBlur={(e) => {
            if (!e.target.value)
              document.getElementById("label-voyageurs").style.display = "block";
          }}
        />
      </div>

      {/* Bouton Explorer - version mobile */}
      <div className="lg:hidden">
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
        >
          Explorer
        </button>
      </div>

      {/* Bouton Explorer - version desktop */}
      <div className="hidden lg:flex items-center">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 hover:scale-[0.98] transition-all duration-200"
        >
          Explorer
        </button>
      </div>
    </div>
  );
}