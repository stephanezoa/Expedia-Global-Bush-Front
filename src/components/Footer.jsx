import { Link } from "react-router-dom";

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
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Logo et description */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">GB</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Global Bush</h2>
              <p className="text-gray-400">Travel & Tours Agency</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Votre partenaire de voyage de confiance au Cameroun. Spécialisés dans les voyages d'affaires,
            tourisme, séminaires et découvertes culturelles à travers l'Afrique et le monde.
          </p>
        </div>

        {/* Grid des sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* FIND US - Mots-clés */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">FIND US</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "travel Agents", "tour operators", "hotel reservations", "visas", 
                "holiday package", "tours", "travel", "tourism", "vacation", 
                "ecotourism", "car rentals", "itinerary", "trekking", 
                "hotel booking", "car hire", "airport pickup", "tours guides", 
                "visa assistance", "flight tickets", "cultural tours",
                "airport assistance", "meet and greet", "travel agency",
                "cheap tours", "cheap hotels", "cheap flight", "Beach", 
                "wildlife", "birding tours", "hunting tours", "safari tours",
                "business tours", "séminaires", "scuba diving", "student tours",
                "apartment", "agro tourism", "dmc", "destination management",
                "meeting and events", "apartments", "flights", "airline tickets",
                "vacation", "plane tickets", "airlines", "cheap airline tickets",
                "airfare", "fare", "cheap airfare", "destination", 
                "vacation packages", "cheap airlines", "budget travel",
                "travel channel", "last minute travel", "travel sites"
              ].map((keyword) => (
                <span 
                  key={keyword}
                  className="inline-block px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded hover:bg-gray-700 transition cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* ABOUT US */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">ABOUT US</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  Our Company Profile
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  Who We are
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-400 hover:text-white transition">
                  Mission statement
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">CONTACT US</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Get In Touch</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">📧</span>
                    <a 
                      href="mailto:info@globalbushtratour.com" 
                      className="text-gray-400 hover:text-white transition"
                    >
                      info@globalbushtratour.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">📞</span>
                    <div>
                      <div className="text-gray-400">F : (+237) 237 233 47 70 00</div>
                      <div className="text-gray-400">M : (+237) 677 24 66 24</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">📍</span>
                    <div className="text-gray-400">
                      Douala Cameroun<br />
                      Carrefour Eto'o Bonamoussadi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and amazing travel deals.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                    title={social}
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Partenaires - Airlines */}
        <div className="mb-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-6 text-center text-blue-300">OUR PARTNERS</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:bg-blue-900/30 transition">
                  {partner.logo}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-blue-300 transition">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Méthodes de paiement */}
        <div className="mb-8">
          <h4 className="text-center text-gray-400 mb-4">ACCEPTED PAYMENT METHODS</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 text-sm hover:bg-gray-700 transition cursor-default"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="border-t border-gray-800 pt-8 text-center">
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