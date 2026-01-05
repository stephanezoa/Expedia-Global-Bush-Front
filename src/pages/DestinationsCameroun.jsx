import React, { useState } from 'react';
import { 
  Search, Calendar, Users, MapPin, 
  ChevronRight, Star, Info, ShieldCheck, 
  Gift, MousePointerClick, ChevronLeft 
} from 'lucide-react';
import Footer from '../components/Footer'; // Importation du composant Footer
import DestinationCameroon from './Destination';

const DestinationCameroun = () => {
  const [lang, setLang] = useState('fr');

  const content = {
    fr: {
      heroTitle: "Rechercher des hôtels - Cameroun",
      searchPlaceholder: "Où allez-vous ?",
      valueProps: [
        { icon: <ShieldCheck />, title: "Prix transparents", desc: "Le prix total inclut les taxes et frais." },
        { icon: <Gift />, title: "Faites-vous plaisir", desc: "Économisez 10% ou plus sur 100 000 hôtels." },
        { icon: <MousePointerClick />, title: "Soyez exigeant", desc: "Parcourez des milliers d'établissements." }
      ],
      topCitiesTitle: "Top des villes au Cameroun",
      dealsTitle: "Offres d'hôtels pour ce week-end",
      guideTitle: "Guide pour explorer le Cameroun",
      cities: [
        { name: "Douala", img: "https://images.unsplash.com/photo-1595183457193-41a45778841a?auto=format&fit=crop&w=400" },
        { name: "Yaoundé", img: "https://images.unsplash.com/photo-1523447193309-847242299878?auto=format&fit=crop&w=400" },
        { name: "Kribi", img: "https://images.unsplash.com/photo-1578330107248-23214736fdfc?auto=format&fit=crop&w=400" },
        { name: "Limbe", img: "https://images.unsplash.com/photo-1615561570769-e6f773663a78?auto=format&fit=crop&w=400" }
      ],
      hotels: [
        { name: "Hilton Yaoundé", rating: "4.5/5", reviews: "2,450", price: "145€", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400" },
        { name: "Onomo Hotel Douala", rating: "4.2/5", reviews: "1,120", price: "98€", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400" }
      ]
    },
    en: {
      heroTitle: "Search Hotels in Cameroon",
      searchPlaceholder: "Going to",
      valueProps: [
        { icon: <ShieldCheck />, title: "Upfront pricing", desc: "Our total price for your stay includes taxes." },
        { icon: <Gift />, title: "Treat yourself", desc: "Save 10% or more on 100,000+ hotels." },
        { icon: <MousePointerClick />, title: "Be picky", desc: "Search almost a million properties worldwide." }
      ],
      topCitiesTitle: "Top Cities in Cameroon",
      dealsTitle: "Great weekend hotel deals",
      guideTitle: "Guide to exploring Cameroon",
      cities: [
        { name: "Douala", img: "https://images.unsplash.com/photo-1595183457193-41a45778841a?auto=format&fit=crop&w=400" },
        { name: "Yaounde", img: "https://images.unsplash.com/photo-1523447193309-847242299878?auto=format&fit=crop&w=400" },
        { name: "Kribi", img: "https://images.unsplash.com/photo-1578330107248-23214736fdfc?auto=format&fit=crop&w=400" },
        { name: "Limbe", img: "https://images.unsplash.com/photo-1615561570769-e6f773663a78?auto=format&fit=crop&w=400" }
      ],
      hotels: [
        { name: "Hilton Yaounde", rating: "4.5/5", reviews: "2,450", price: "$158", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400" },
        { name: "Onomo Hotel Douala", rating: "4.2/5", reviews: "1,120", price: "$107", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400" }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Barre de langue */}
      <div className="bg-white border-b px-6 py-2 flex justify-end gap-4 text-xs font-semibold">
        <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'text-blue-600' : ''}>FRANÇAIS</button>
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-blue-600' : ''}>ENGLISH</button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1600" 
          className="w-full h-full object-cover shadow-inner"
          alt="Cameroon Hero"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-8 text-shadow">
            {t.heroTitle}
          </h1>
          
          {/* Search Bar Container */}
          <div className="bg-white p-3 rounded-lg shadow-2xl w-full max-w-5xl flex flex-wrap lg:flex-nowrap gap-2 items-center">
            <div className="flex-1 min-w-[200px] relative border rounded-md p-2">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input type="text" placeholder={t.searchPlaceholder} className="w-full pl-10 outline-none text-sm font-medium" />
            </div>
            <div className="flex-1 min-w-[200px] border rounded-md p-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500 font-medium">Select date</span>
            </div>
            <div className="flex-1 min-w-[200px] border rounded-md p-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500 font-medium">1 room, 2 travelers</span>
            </div>
            <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              {lang === 'fr' ? 'Rechercher' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      {/* Valeurs Ajoutées */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4">
        {t.valueProps.map((prop, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-emerald-700">{React.cloneElement(prop.icon, { size: 28 })}</div>
            <div>
              <h3 className="font-bold text-gray-900">{prop.title}</h3>
              <p className="text-sm text-gray-600">{prop.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Top Cities Carousel */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">{t.topCitiesTitle}</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {t.cities.map((city, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group">
              <img src={city.img} className="w-full h-full object-cover transition transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-lg">{city.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">{t.dealsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.hotels.map((hotel, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="h-40 relative">
                <img src={hotel.img} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-blue-900 text-white text-[10px] px-2 py-1 rounded font-bold">
                  VIP ACCESS
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 truncate">{hotel.name}</h4>
                <div className="flex items-center gap-1 my-1">
                  {[...Array(4)].map((_, i) => <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-xs text-gray-500 mb-2">Yaoundé</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-emerald-700">{hotel.rating}</p>
                    <p className="text-[10px] text-gray-400">({hotel.reviews} reviews)</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold">{hotel.price}</span>
                    <span className="text-[10px] text-gray-400">Total with taxes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide & Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">{t.guideTitle}</h2>
            <div className="space-y-6">
              <section>
                <h4 className="font-bold mb-2">Attractions Majeures</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Le Cameroun, souvent surnommé "l'Afrique en miniature", propose une diversité incroyable. 
                  Du **Parc National de Waza** aux **Chutes de la Lobé** à Kribi, chaque région offre une expérience unique.
                </p>
                <button className="text-blue-600 text-sm font-bold mt-2 flex items-center">Read More <ChevronRight size={16}/></button>
              </section>
              <section>
                <h4 className="font-bold mb-2">Meilleur moment pour visiter</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  La saison sèche de **novembre à février** est idéale pour l'observation de la faune sauvage dans le nord et les randonnées au Mont Cameroun.
                </p>
              </section>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
            <h4 className="font-bold mb-4 italic text-gray-400">Pourquoi réserver avec nous ?</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm items-center"><ShieldCheck className="text-emerald-600" size={16}/> Annulation gratuite sur la plupart des hôtels</li>
              <li className="flex gap-2 text-sm items-center"><Gift className="text-emerald-600" size={16}/> Récompenses OneKeyCash™</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationCameroun;