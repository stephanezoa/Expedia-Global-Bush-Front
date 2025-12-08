import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" }
  ];

  // 🔥 EVITE L’ERREUR SI LA LANGUE N’EST PAS ENCORE CHARGÉE
  const currentLang = i18n.language || "fr"; 
  const current = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 text-sm rounded  bg-white flex items-center gap-2 hover:bg-gray-100 transition"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="font-medium">{current.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute text-sm  right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-blue-50 transition ${
                current.code === lang.code ? "font-semibold text-blue-600" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
