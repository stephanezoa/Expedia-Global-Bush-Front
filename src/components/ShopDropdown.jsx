import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Plane, Car, ScanHeart, PackageOpen, Hotel, TentTree, ExternalLink } from "lucide-react";

export default function ShopDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden md:block">
      <button onClick={() => setOpen(!open)} className="px-4 cursor-pointer py-2 hover:text-blue-500 text-gray-600 text-xs flex items-center justify-center gap-3 font-bold transition">
        Trouver un voyage <ChevronDown className="w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-100 space-y-3 p-2 text-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-fade ">
          <Link to="/login" className=" px-4 py-2 flex items-center justify-start gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <Plane className="w-5"/> Vols
          </Link>
          <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <Hotel className="w-5"/> Hotels
          </Link>
          <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <TentTree className="w-5"/> Sejours
          </Link>
          <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
           <PackageOpen className="w-5"/>  Transferts
          </Link>
          <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <Car className="w-5"/> Location de voitures
          </Link>
             <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <ScanHeart className="w-5"/> Assurances
          </Link>
          <hr className="h-px bg-gray-300 border-0 mt-6 mb-5" />

            <div className="px-4 py-2 text-gray-500 font-medium">
            Plus de façons de voyager
            </div>

            <Link to="/register" className="flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            <ExternalLink className="w-5"/> Tout voir
          </Link>
        </div>
      )}
    </div>
  );
}
