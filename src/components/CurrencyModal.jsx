import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

const regionCurrencyMap = {
  africa: "XAF",
  europe: "EUR",
  usa: "USD",
  uk: "GBP",
  asia: "JPY",
  canada: "CAD",
};

export default function CurrencyModal({ isOpen, onClose, onSelect }) {
  const { i18n } = useTranslation();
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState(i18n.language);

  const applySelection = () => {
    const currency = regionCurrencyMap[region] || "USD";

    i18n.changeLanguage(language);
    onSelect({ region, language, currency });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="
        relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md z-50 
        animate-scaleIn border border-gray-100
      ">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Choisir votre région & langue
        </h2>

        {/* Région */}
        <div className="mb-5">
          <label className="block font-medium mb-2 text-gray-700">
            Région
          </label>
          <select
            className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Sélectionner…</option>
            <option value="africa">Afrique</option>
            <option value="europe">Europe</option>
            <option value="usa">États-Unis</option>
            <option value="uk">Royaume-Uni</option>
            <option value="asia">Asie</option>
            <option value="canada">Canada</option>
          </select>
        </div>

        {/* Langue */}
        <div className="mb-6">
          <label className="block font-medium mb-2 text-gray-700">
            Langue
          </label>
          <select
            className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>

        <button
          onClick={applySelection}
          className="
            w-full py-3 bg-blue-600 text-white rounded-xl font-medium 
            hover:bg-blue-700 transition shadow-sm
          "
        >
          Appliquer
        </button>
      </div>
    </div>
  );
}
