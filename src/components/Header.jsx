import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import CurrencyModal from "./CurrencyModal";
import UserDropdown from "./UserDropdwon";
import LanguageDropdown from "./LanguageDropdown";
import ShopDropdown from "./ShopDropdown";

export default function Header({}) {
  const { t, i18n } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("XAF");

  const handleSelection = ({ region, language, currency }) => {
    console.log("Region:", region);
    console.log("Langue:", language);
    console.log("Devise:", currency);
    setCurrentCurrency(currency);
  };

  return (

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-lg">
        <div className="container max-w-7xl  mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className=" flex justify-center mb-2">
                <div className="flex items-center space-x-3">
                <div>
                   <img src="/src/assets/logoApp.jpg" alt="Logo App"  className="w-25 md:w-30 lg:w-40"/>
                </div>
                <ShopDropdown />
                </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-md">
                <Link to="/" className="relative text-gray-700 transition duration-300 hover:text-blue-600 font-medium hover:font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0   after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" >
                    Acceuil
                </Link>
                <Link to="/vols" className="relative text-gray-700 transition duration-300 hover:text-blue-600 font-medium hover:font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0   after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" >
                    Vols
                </Link>
                <Link to="/hotels" className="relative text-gray-700 transition duration-300 hover:text-blue-600 font-medium hover:font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0   after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" >
                    Hotels
                </Link>
                <Link to="/visas" className="relative text-gray-700 transition duration-300 hover:text-blue-600 font-medium hover:font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0   after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" >
                    Visa
                </Link>
                <div className="flex items-center ">
                  <UserDropdown />
                  <div class="inline-block">
                    <label for="currency" class="sr-only">Devise</label>
                    <select id="currency" name="currency" class="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="XAF">XAF - Franc CFA</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="USD">USD - Dollar</option>
                      <option value="GBP">GBP - Livre Sterling</option>
                    </select>
                  </div>

                  <LanguageDropdown />
                   <div className="p-6">

                  </div>
                </div>
            </nav>
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

  )}
