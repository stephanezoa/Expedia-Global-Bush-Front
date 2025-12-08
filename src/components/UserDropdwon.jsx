import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden md:block">
      {/* Icône utilisateur */}
      <button onClick={() => setOpen(!open)} className="px-4 cursor-pointer py-2 text-blue-500 hover:text-blue-700 transition">
        <CircleUserRound className="w-7 h-7" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 text-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-fade" >
          <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            Connexion
          </Link>
          <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium" onClick={() => setOpen(false)}>
            Créer un compte
          </Link>
        </div>
      )}
    </div>
  );
}
