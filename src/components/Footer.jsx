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
                            <h3 className="font-bold text-gray-900 mb-4">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">About Global Bush Travel</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">How We Work</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
                               
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Discover</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/vols"} className="text-gray-600 hover:text-blue-600">Flights</Link></li>
                                <li><Link to={"/hotels"} className="text-gray-600 hover:text-blue-600">Hotels</Link></li>
                                <li><Link to={"/packages"} className="text-gray-600 hover:text-blue-600">Holiday Packages</Link></li>
                                <li><Link to={"/transfers"} className="text-gray-600 hover:text-blue-600">Airport Transfers</Link></li>
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Visa Services</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Terms and settings</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Accessibility Statement</Link></li>
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Cancellation Policy</Link></li>

                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
                                <li><Link to={"/visa"} className="text-gray-600 hover:text-blue-600">Manage your trips</Link></li>

                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Get in Touch</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">info@globalbushtratour.com</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">(+237) 233 47 70 00 <br /> (+237) 677 24 66 24</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">Douala Cameroun <br /> Caarrefour Eto'o Bonamoussadi</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600">24/7 custumer support</a></li>
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
                    <Link to="/terms" className="hover:text-white transition">
                      Terms & Conditions
                    </Link>
                    <Link to="/privacy" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                    <Link to="/cookies" className="hover:text-white transition">
                      Cookie Policy
                    </Link>
                    <Link to="/sitemap" className="hover:text-white transition">
                      Sitemap
                    </Link>
                    <Link to="/faq" className="hover:text-white transition">
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