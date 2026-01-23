import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import visa from '../assets/methode_paiement/visa.png';
import mastercard from '../assets/methode_paiement/mastercard.png';
import paypal from '../assets/methode_paiement/paypal.png';
import mtn from '../assets/methode_paiement/mtn.png';
import orange from '../assets/methode_paiement/orange.png';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Services et Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">NOS SERVICES AU CAMEROUN</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Agents de voyages | voyagistes| réservations d'hôtels | visas | forfait vacances | circuits | voyage | tourisme | vacances | écotourisme | location de voitures | itinéraire | voyage | randonnée | réservation d'hôtel | location de voiture | prise en charge à l'aéroport | guides touristiques | assistance visa | billets d'avion | visites culturelles |assistance aéroport | rencontre et grand |agence de voyages |circuits pas chers | hôtels pas chers | vol pas cher | Plage | faune |tours ornithologiques | circuits de chasse |circuits safari |circuits d'affaires | séminaires | plongée sous-marine | visites étudiantes | appartement | agrotourisme | dmc | gestion des destinations | réunion et événements | appartements |le voyage dans le temps est-il possible | est-il sûr de voyager en Afrique | comment voyager dans le temps |vols | billets d'avion | vacances | billets d'avion | compagnies aériennes | billets d'avion pas chers | billet d'avion |tarif | billet d'avion pas cher | destination | forfaits vacances | compagnies aériennes pas chères| voyage pas cher | chaine de voyage |voyage de dernière minute | sites de voyage | comment parcourir le monde | est-il sûr de voyager | comment voyager pas cher | comment voyager seul |agence de voyage | location de voiture | billet d'avion |
            </p>
          </div>

          {/* Faissons Connaissance */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Faissons Connaissance</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-blue-600 transition">- Notre profil d'entreprise</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition">- Carrières</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition">- Politique de confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition">- Conditions générales d'utilisation</Link></li>
              <li><Link to="/aboutus" className="hover:text-blue-600 transition">- Qui sommes-nous</Link></li>
              <li><Link to="/mission" className="hover:text-blue-600 transition">- Déclaration de mission</Link></li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">Discover</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/vols" className="hover:text-blue-600 transition">- Flights</Link></li>
              <li><Link to="/hotels" className="hover:text-blue-600 transition">- Hotels</Link></li>
              <li><Link to="/packages" className="hover:text-blue-600 transition">- Holiday Packages</Link></li>
              <li><Link to="/transfers" className="hover:text-blue-600 transition">- Airport Transfers</Link></li>
              <li><Link to="/visa" className="hover:text-blue-600 transition">- Visa Services</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">CONTACTS</h3>
            <p className="text-lg mb-4 text-gray-700">Prendre contact</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1 text-gray-900">EMAIL</p>
                <p className="text-gray-600">info@globalbushtratour.com</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold mb-1 text-gray-900">TELEPHONE</p>
                <p className="text-gray-600">F: (+237) 233 47 70 00</p>
                <p className="text-gray-600">M: (+237) 677 24 66 24</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold mb-1 text-gray-900">Address : Douala Cameroun</p>
                <p className="text-gray-600">Carrefour Eto'o</p>
                <p className="text-gray-600">Bonamoussadi</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-3 text-gray-900">24/7 custumer support</h3>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-blue-700 cursor-pointer hover:text-blue-500 transition" />
                <Twitter className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-400 transition" />
                <Instagram className="w-6 h-6 text-pink-600 cursor-pointer hover:text-pink-400 transition" />
                <Youtube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-500 transition" />
                {/* TikTok Icon */}
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer hover:bg-gray-800 transition">
                  <span className="text-white text-xs font-bold">TK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Paiements */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 flex flex-col md:flex-row items-center gap-4 shadow-sm">
            <div className="flex gap-2 mb-4 md:mb-0">
              <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                <img src={visa} alt="Visa" className="w-10 h-6 object-contain" />
              </div>
              <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                <img src={mastercard} alt="MasterCard" className="w-10 h-6 object-contain" />
              </div>
              <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                <img src={paypal} alt="PayPal" className="w-8 h-8 object-contain" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-12 bg-yellow-50 rounded border border-yellow-200 flex items-center justify-center">
                <img src={mtn} alt="MTN Mobile Money" className="w-12 h-10 object-contain" />
              </div>
              <div className="w-16 h-12 bg-orange-50 rounded border border-orange-200 flex items-center justify-center">
                <img src={orange} alt="Orange Money" className="w-12 h-10 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
            <Link to="/terms" className="hover:text-blue-600 transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-blue-600 transition">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-blue-600 transition">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="hover:text-blue-600 transition">
              Sitemap
            </Link>
            <Link to="/faq" className="hover:text-blue-600 transition">
              FAQ
            </Link>
          </div>
          
          <p className="text-sm text-gray-600 mb-2">
            © 2026 www.globalbushtratour.com All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs">
            Site développé avec ❤️ à Douala, Cameroun
          </p>
        </div>
      </div>
    </footer>
  );
}