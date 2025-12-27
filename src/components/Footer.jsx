import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube,} from 'lucide-react';
import visa from '../assets/methode_paiement/visa.png';
import mastercard from '../assets/methode_paiement/mastercard.png';
import paypal from '../assets/methode_paiement/paypal.png';
import mtn from '../assets/methode_paiement/mtn.png';
import orange from '../assets/methode_paiement/orange.png';


export default function Footer() {
  const partners = [
    { name: "Air France", logo: "✈️" },
    { name: "Ethiopian", logo: "🇪🇹" },
    { name: "Royal Air Maroc", logo: "🇲🇦" },
    { name: "Kenya Airways", logo: "🇰🇪" },
    { name: "RwandAir", logo: "🇷🇼" },
    { name: "Turkish Airlines", logo: "🇹🇷" },
    { name: "Emirates", logo: "🇦🇪" },
    { name: "Qatar Airways", logo: "🇶🇦" },
  ];

  const paymentMethods = [
    "VISA",
    "MasterCard", 
    "PayPal",
    "MTN Mobile Money",
    "Orange Money",
    "Wave",
    "Carte Bancaire"
  ];

  
  return (
    <footer className=" text-gray-600 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/about"} className="text-gray-600 hover:text-blue-600">About Global Bush Travel</Link></li>
                                <li><Link to={"/newsrooms"} className="text-gray-600 hover:text-blue-600">Newsroom</Link></li>
                                <li><Link to={"/feedback"} className="text-gray-600 hover:text-blue-600">Feedback</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Explore</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/destination-pays"} className="text-gray-600 hover:text-blue-600">Cameroon travel guide</Link></li>
                                <li><Link to={"/destination-pays"} className="text-gray-600 hover:text-blue-600">Hotels in Cameroon</Link></li>
                                <li><Link to={"/destination-pays"} className="text-gray-600 hover:text-blue-600">Vaccation retals in Cameroon</Link></li>
                                <li><Link to={"/destination-pays"} className="text-gray-600 hover:text-blue-600">Car rentals in Cameroon</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Policies</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/legal/privacy-policy"} className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
                                <li><Link to={"/legal/cookies"} className="text-gray-600 hover:text-blue-600">Cookies</Link></li>
                                <li><Link to={"/legal/terms-conditions"} className="text-gray-600 hover:text-blue-600">Terms of use</Link></li>
                                <li><Link to={"/legal/terms-conditions"} className="text-gray-600 hover:text-blue-600">Terms and conditions</Link></li>
                                <li><Link to={"/legal/privacy-choices"} className="text-gray-600 hover:text-blue-600">Your privacy choices</Link></li>
                                <li><Link to={"/legal/content-guidelines"} className="text-gray-600 hover:text-blue-600">Content guidelines and reporting content</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Help</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/contact"} className="text-gray-600 hover:text-blue-600">Support</Link></li>
                                <li><Link to={""} className="text-gray-600 hover:text-blue-600">Cancel your hotel or vacation rental booking</Link></li>
                                <li><Link to={""} className="text-gray-600 hover:text-blue-600">Cancel your flight</Link></li>
                                <li><Link to={""} className="text-gray-600 hover:text-blue-600">Refund basics</Link></li>
                                <li><Link to={""} className="text-gray-600 hover:text-blue-600">International travel documents</Link></li>
                                <li><Link to={""} className="text-gray-600 hover:text-blue-600">Your right as a flights traveler</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                        
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3">
                  <p className="font-semibold">Follow us</p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="#"><Facebook className="w-5 h-5"/></a>
                    <a href="#"><Twitter className="w-5 h-5"/></a>
                    <a href="#"><Instagram className="w-5 h-5"/></a>
                    <a href="#"><Youtube className="w-5 h-5"/></a>
                    <a href="#" ><Linkedin className="w-5 h-5"/></a>
                  </div>

                </div>
                  <div className="pt-8 flex flex-col items-center justify-center space-y-3">
                    <p className="font-semibold text-gray-900">Method paiement accept</p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                      <div className="w-30 h-20 border-2 border-gray-300 hover:shadow-lg p-2 bg-white rounded-md flex items-center justify-center">
                        <img src={visa} alt="logo visa" />
                      </div>
                      <div className="w-30 h-20 border-2 border-gray-300 hover:shadow-lg bg-white p-2 rounded-md flex items-center justify-center">
                        <img src={mastercard} alt="logo visa" />
                      </div>
                      <div className="w-30 h-20 border-2 border-gray-300 hover:shadow-lg   p-2 rounded-md flex items-center justify-center">
                        <img src={paypal} alt="logo visa" />
                      </div>
                      <div className="w-30 h-20 border-2 border-gray-300 hover:shadow-lg   p-2 rounded-md flex items-center justify-center">
                        <img src={mtn} alt="logo visa" />
                      </div>
                      <div className="w-30 h-20 border-2 border-gray-300 hover:shadow-lg   p-2 rounded-md flex items-center justify-center">
                        <img src={orange} alt="logo visa" />
                      </div>
                    </div>
                  </div>

                <div className=" pt-8 text-center">
                  <p className="text-gray-400 mb-4">
                    © {new Date().getFullYear()} Global Bush Travel & Tours. All rights reserved.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                    <Link to="/legal/terms-conditions" className="hover:text-white transition">
                      Terms & Conditions
                    </Link>
                    <Link to="/legal/privacy-policy" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                    <Link to="/legal/cookies" className="hover:text-white transition">
                      Cookie Policy
                    </Link>
                    <Link to="" className="hover:text-white transition">
                      Sitemap
                    </Link>
                    <Link to="" className="hover:text-white transition">
                      FAQ
                    </Link>
                  </div>
                  <p className="text-gray-600 text-xs mt-4">
                    Site développé avec ❤️ à Douala, Cameroun
                  </p>
                </div>

      </div>
    </footer>
  );
}