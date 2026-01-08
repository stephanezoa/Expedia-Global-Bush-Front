// src/pages/Destination.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  MapPin, Calendar, Star, Users,
  Mountain, Building, Sun, Umbrella,
  Coffee, ShoppingBag, Camera, Plane,
  Heart, Share2, Filter, ChevronDown,
  Search, Navigation, Hotel, Car,
  Coffee as Cafe, Utensils, ShoppingCart,
  Landmark, Castle, Trees, Waves,
  Globe, Cloud, Droplets, Phone, Clock,
  Wind, Thermometer, Compass, CheckCircle, ChevronUp,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Données des destinations
const destinationsData = {
  "cameroon": {
    id: "cameroon",
    name: { FR: "Cameroun", EN: "Cameroon" },
    tagline: { 
      FR: "L'Afrique en Miniature", 
      EN: "Africa in Miniature" 
    },
    continent: { FR: "Afrique", EN: "Africa" },
    flag: "🇨🇲",
    capital: { FR: "Yaoundé", EN: "Yaoundé" },
    slogan: {
      FR: "Toute la beauté de l'Afrique dans un seul pays",
      EN: "All of Africa's beauty in one country"
    },
    
    overview: {
      FR: "Le Cameroun, surnommé 'Afrique en miniature', offre une incroyable diversité de paysages, de cultures et d'expériences. Des plages de sable fin de Kribi aux sommets enneigés du Mont Cameroun, des forêts tropicales humides aux savanes arides du nord, le pays concentre toutes les richesses du continent africain. Sa culture vibrante, sa cuisine délicieuse et sa population accueillante en font une destination unique en Afrique.",
      EN: "Cameroon, nicknamed 'Africa in miniature', offers incredible diversity of landscapes, cultures, and experiences. From the sandy beaches of Kribi to the snow-capped peaks of Mount Cameroon, from tropical rainforests to arid savannas of the north, the country concentrates all the riches of the African continent. Its vibrant culture, delicious cuisine and welcoming population make it a unique destination in Africa."
    },
    
    extendedOverview: {
      FR: "Le Cameroun se divise en quatre grandes régions géographiques : la région côtière avec ses plages et plantations de cacao, le plateau sud avec ses forêts denses, les hauts plateaux de l'ouest avec ses montagnes et volcans, et la région septentrionale avec ses savanes et réserves animalières. Le pays compte plus de 250 ethnies parlant près de 250 langues, avec le français et l'anglais comme langues officielles. La gastronomie camerounaise est réputée avec des plats comme le ndolé, le poulet DG et les brochettes. Le tourisme se développe rapidement avec des infrastructures modernes tout en préservant l'authenticité des expériences.",
      EN: "Cameroon is divided into four main geographical regions: the coastal region with its beaches and cocoa plantations, the southern plateau with its dense forests, the western highlands with its mountains and volcanoes, and the northern region with its savannas and wildlife reserves. The country has more than 250 ethnic groups speaking nearly 250 languages, with French and English as official languages. Cameroonian gastronomy is renowned with dishes like ndolé, poulet DG and brochettes. Tourism is developing rapidly with modern infrastructure while preserving the authenticity of experiences."
    },
    
    regions: {
      FR: [
        {
          name: "Région du Littoral",
          description: "Zone côtière avec Douala, capitale économique, les plages de Kribi et Limbé, et les plantations de bananes et de cacao. Climat tropical humide.",
          highlights: ["Douala", "Kribi", "Limbé", "Mont Cameroun"],
          icon: <Waves className="w-6 h-6" />
        },
        {
          name: "Région du Centre",
          description: "Cœur du pays avec Yaoundé la capitale politique, forêts équatoriales, et nombreuses réserves naturelles. Relief de plateaux et collines.",
          highlights: ["Yaoundé", "Mfou", "Mbalmayo", "Sanctuaire de Bafut"],
          icon: <Trees className="w-6 h-6" />
        },
        {
          name: "Région de l'Ouest",
          description: "Région montagneuse avec les hauts plateaux, lacs volcaniques, chefferies traditionnelles et culture bamiléké très vivante.",
          highlights: ["Bafoussam", "Bamenda", "Foumban", "Lac Oku"],
          icon: <Mountain className="w-6 h-6" />
        },
        {
          name: "Région du Nord",
          description: "Savanes arides, réserves animalières, culture peule et musulmane, et parc national de Waza, l'un des plus beaux d'Afrique.",
          highlights: ["Maroua", "Garoua", "Parc de Waza", "Monts Mandara"],
          icon: <Sun className="w-6 h-6" />
        }
      ],
      EN: [
        {
          name: "Littoral Region",
          description: "Coastal zone with Douala, economic capital, beaches of Kribi and Limbe, and banana and cocoa plantations. Humid tropical climate.",
          highlights: ["Douala", "Kribi", "Limbe", "Mount Cameroon"],
          icon: <Waves className="w-6 h-6" />
        },
        {
          name: "Central Region",
          description: "Heart of the country with Yaoundé the political capital, equatorial forests, and numerous nature reserves. Plateau and hill relief.",
          highlights: ["Yaoundé", "Mfou", "Mbalmayo", "Bafut Sanctuary"],
          icon: <Trees className="w-6 h-6" />
        },
        {
          name: "Western Region",
          description: "Mountainous region with highlands, volcanic lakes, traditional chiefdoms and very vibrant Bamileke culture.",
          highlights: ["Bafoussam", "Bamenda", "Foumban", "Lake Oku"],
          icon: <Mountain className="w-6 h-6" />
        },
        {
          name: "Northern Region",
          description: "Arid savannas, wildlife reserves, Fulani and Muslim culture, and Waza National Park, one of the most beautiful in Africa.",
          highlights: ["Maroua", "Garoua", "Waza Park", "Mandara Mountains"],
          icon: <Sun className="w-6 h-6" />
        }
      ]
    },
    
    popularCities: {
      FR: [
        {
          id: "yaounde",
          name: "Yaoundé",
          description: "Capitale politique du Cameroun, surnommée la ville aux sept collines. Mélange unique d'architecture moderne, de marchés animés et de collines verdoyantes.",
          knownFor: ["Politique", "Culture", "Marchés"],
          reasons: ["Palais des Congrès", "Marché Central", "Musée National"],
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
          highlights: ["Mont Fébé", "Cathédrale", "Lac Municipal"],
          temperature: "22-28°C",
          bestFor: ["Culture", "Affaires", "Histoire"]
        },
        {
          id: "douala",
          name: "Douala",
          description: "Capitale économique et plus grande ville du Cameroun. Port important, centre industriel et commercial avec une vie nocturne animée.",
          knownFor: ["Économie", "Port", "Vie Nocturne"],
          reasons: ["Port Autonome", "Marché des Fleurs", "Pont sur le Wouri"],
          image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          highlights: ["Bonanjo", "Akwa", "Musée Maritime"],
          temperature: "25-32°C",
          bestFor: ["Affaires", "Shopping", "Divertissement"]
        },
        {
          id: "bafoussam",
          name: "Bafoussam",
          description: "Capitale de la région de l'Ouest et cœur de la culture bamiléké. Connue pour ses chefferies traditionnelles et ses paysages montagneux.",
          knownFor: ["Culture Bamiléké", "Montagnes", "Traditions"],
          reasons: ["Chefferie", "Marché Royal", "Cascades de Mélang"],
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
          highlights: ["Mont Bamboutos", "Lacs", "Artisanat"],
          temperature: "18-25°C",
          bestFor: ["Culture", "Randonnée", "Artisanat"]
        },
        {
          id: "maroua",
          name: "Maroua",
          description: "Principale ville du Grand Nord, porte d'entrée du parc de Waza. Architecture soudanaise, marchés colorés et culture peule.",
          knownFor: ["Culture Peule", "Savane", "Artisanat"],
          reasons: ["Marché aux bestiaux", "Parc de Waza", "Monts Mandara"],
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
          highlights: ["Waza", "Rhis", "Tanneries"],
          temperature: "25-40°C",
          bestFor: ["Safari", "Culture", "Photographie"]
        },
        {
          id: "kribi",
          name: "Kribi",
          description: "Station balnéaire par excellence avec des plages de sable fin, des chutes d'eau se jetant dans la mer et des villages de pêcheurs pittoresques.",
          knownFor: ["Plages", "Chutes", "Pêche"],
          reasons: ["Chutes de la Lobé", "Plage Blanche", "Campement Pygmée"],
          image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
          highlights: ["Lobé", "Grand Batanga", "Île de Lolabe"],
          temperature: "24-30°C",
          bestFor: ["Plage", "Détente", "Nature"]
        },
        {
          id: "foumban",
          name: "Foumban",
          description: "Capitale historique du royaume Bamoun, célèbre pour son palais royal, son musée et son artisanat exceptionnel.",
          knownFor: ["Histoire", "Artisanat", "Architecture"],
          reasons: ["Palais Royal", "Musée", "Marché d'Art"],
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
          highlights: ["Art Bamoun", "Mosquée", "Ateliers"],
          temperature: "20-28°C",
          bestFor: ["Histoire", "Art", "Culture"]
        }
      ],
      EN: [
        {
          id: "yaounde",
          name: "Yaoundé",
          description: "Political capital of Cameroon, nicknamed the city of seven hills. Unique blend of modern architecture, lively markets and green hills.",
          knownFor: ["Politics", "Culture", "Markets"],
          reasons: ["Congress Palace", "Central Market", "National Museum"],
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
          highlights: ["Mount Fébé", "Cathedral", "Municipal Lake"],
          temperature: "22-28°C",
          bestFor: ["Culture", "Business", "History"]
        },
        {
          id: "douala",
          name: "Douala",
          description: "Economic capital and largest city of Cameroon. Important port, industrial and commercial center with lively nightlife.",
          knownFor: ["Economy", "Port", "Nightlife"],
          reasons: ["Autonomous Port", "Flower Market", "Wouri Bridge"],
          image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
          highlights: ["Bonanjo", "Akwa", "Maritime Museum"],
          temperature: "25-32°C",
          bestFor: ["Business", "Shopping", "Entertainment"]
        },
        {
          id: "bafoussam",
          name: "Bafoussam",
          description: "Capital of the Western region and heart of Bamileke culture. Known for its traditional chiefdoms and mountainous landscapes.",
          knownFor: ["Bamileke Culture", "Mountains", "Traditions"],
          reasons: ["Chiefdom", "Royal Market", "Mélang Waterfalls"],
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
          highlights: ["Bamboutos Mountains", "Lakes", "Crafts"],
          temperature: "18-25°C",
          bestFor: ["Culture", "Hiking", "Crafts"]
        },
        {
          id: "maroua",
          name: "Maroua",
          description: "Main city of the Far North, gateway to Waza Park. Sudanese architecture, colorful markets and Fulani culture.",
          knownFor: ["Fulani Culture", "Savannah", "Crafts"],
          reasons: ["Cattle Market", "Waza Park", "Mandara Mountains"],
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
          highlights: ["Waza", "Rhis", "Tanneries"],
          temperature: "25-40°C",
          bestFor: ["Safari", "Culture", "Photography"]
        },
        {
          id: "kribi",
          name: "Kribi",
          description: "Premier beach resort with fine sandy beaches, waterfalls flowing into the sea and picturesque fishing villages.",
          knownFor: ["Beaches", "Waterfalls", "Fishing"],
          reasons: ["Lobé Waterfalls", "White Beach", "Pygmy Camp"],
          image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
          highlights: ["Lobé", "Grand Batanga", "Lolabe Island"],
          temperature: "24-30°C",
          bestFor: ["Beach", "Relaxation", "Nature"]
        },
        {
          id: "foumban",
          name: "Foumban",
          description: "Historical capital of the Bamoun kingdom, famous for its royal palace, museum and exceptional craftsmanship.",
          knownFor: ["History", "Crafts", "Architecture"],
          reasons: ["Royal Palace", "Museum", "Art Market"],
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
          highlights: ["Bamoun Art", "Mosque", "Workshops"],
          temperature: "20-28°C",
          bestFor: ["History", "Art", "Culture"]
        }
      ]
    },
    
    popularPlaces: {
      FR: [
        {
          name: "Mont Cameroun",
          description: "Volcan actif culminant à 4 040m, plus haut sommet d'Afrique de l'Ouest. Randonnée célèbre avec vue sur l'océan Atlantique. Site du festival de course de montagne.",
          category: "Nature / Randonnée",
          icon: <Mountain className="w-6 h-6" />,
          location: "Limbé",
          rating: "4.8"
        },
        {
          name: "Parc National de Waza",
          description: "L'une des plus belles réserves animalières d'Afrique, classée UNESCO. Lions, éléphants, girafes, antilopes et nombreuses espèces d'oiseaux. Meilleure période : décembre à avril.",
          category: "Safari / Nature",
          icon: <Trees className="w-6 h-6" />,
          location: "Extrême-Nord",
          rating: "4.9"
        },
        {
          name: "Chutes de la Lobé",
          description: "Cascade unique au monde qui se jette directement dans l'océan Atlantique. Site sacré pour les populations locales. Plage de sable noir volcanique à proximité.",
          category: "Nature / Plage",
          icon: <Waves className="w-6 h-6" />,
          location: "Kribi",
          rating: "4.7"
        }
      ],
      EN: [
        {
          name: "Mount Cameroon",
          description: "Active volcano peaking at 4,040m, highest summit in West Africa. Famous hike with view of the Atlantic Ocean. Site of the mountain running festival.",
          category: "Nature / Hiking",
          icon: <Mountain className="w-6 h-6" />,
          location: "Limbe",
          rating: "4.8"
        },
        {
          name: "Waza National Park",
          description: "One of the most beautiful wildlife reserves in Africa, UNESCO listed. Lions, elephants, giraffes, antelopes and many bird species. Best time: December to April.",
          category: "Safari / Nature",
          icon: <Trees className="w-6 h-6" />,
          location: "Far North",
          rating: "4.9"
        },
        {
          name: "Lobé Waterfalls",
          description: "Unique waterfall in the world that flows directly into the Atlantic Ocean. Sacred site for local populations. Volcanic black sand beach nearby.",
          category: "Nature / Beach",
          icon: <Waves className="w-6 h-6" />,
          location: "Kribi",
          rating: "4.7"
        }
      ]
    },
    
    additionalPlaces: {
      FR: [
        {
          name: "Palais Royal de Foumban",
          description: "Magnifique exemple d'architecture bamoun abritant le musée des arts et traditions. Collection d'objets royaux et historiques.",
          category: "Culture / Histoire"
        },
        {
          name: "Réserve de Dja",
          description: "Forêt humide classée au patrimoine mondial de l'UNESCO. Habitat de nombreuses espèces menacées dont les gorilles et chimpanzés.",
          category: "Nature / Écotourisme"
        },
        {
          name: "Lac Nyos",
          description: "Lac volcanique tristement célèbre pour la catastrophe de 1986. Paysage spectaculaire entouré de collines verdoyantes.",
          category: "Nature / Géologie"
        }
      ],
      EN: [
        {
          name: "Royal Palace of Foumban",
          description: "Beautiful example of Bamoun architecture housing the museum of arts and traditions. Collection of royal and historical objects.",
          category: "Culture / History"
        },
        {
          name: "Dja Reserve",
          description: "Humid forest listed as UNESCO World Heritage. Habitat of many endangered species including gorillas and chimpanzees.",
          category: "Nature / Ecotourism"
        },
        {
          name: "Lake Nyos",
          description: "Volcanic lake sadly famous for the 1986 disaster. Spectacular landscape surrounded by green hills.",
          category: "Nature / Geology"
        }
      ]
    },
    
    quickFacts: {
      FR: {
        currency: "Franc CFA (XAF)",
        language: "Français, Anglais (officielles) + 250 langues locales",
        timeZone: "UTC+1 (WAT)",
        bestTime: "Novembre à Février (saison sèche)",
        visa: "Visa requis pour la plupart des pays",
        power: "220V, prises type C/E",
        population: "27 millions",
        area: "475 442 km²",
        callingCode: "+237"
      },
      EN: {
        currency: "CFA Franc (XAF)",
        language: "French, English (official) + 250 local languages",
        timeZone: "UTC+1 (WAT)",
        bestTime: "November to February (dry season)",
        visa: "Visa required for most countries",
        power: "220V, Type C/E outlets",
        population: "27 million",
        area: "475,442 km²",
        callingCode: "+237"
      }
    },
    
    travelTips: {
      FR: [
        "Vaccination contre la fièvre jaune obligatoire",
        "Éviter les régions du Nord-Ouest et Sud-Ouest sans guide local",
        "Marchander dans les marchés et boutiques d'artisanat",
        "Prévoir des vêtements légers et un pull pour les soirées",
        "Toujours avoir de l'eau en bouteille avec soi",
        "Respecter les coutumes locales et demander avant de photographier"
      ],
      EN: [
        "Yellow fever vaccination mandatory",
        "Avoid Northwest and Southwest regions without local guide",
        "Bargain in markets and craft shops",
        "Pack light clothing and a sweater for evenings",
        "Always carry bottled water with you",
        "Respect local customs and ask before photographing"
      ]
    },
    
    culturalHighlights: {
      FR: [
        "Festival Ngondo des Sawa (Douala)",
        "Festival des Arts Nguon (Foumban)",
        "Course du Mont Cameroun",
        "Marchés nocturnes à Yaoundé",
        "Danses traditionnelles Bamiléké",
        "Artisanat en perles et bois"
      ],
      EN: [
        "Ngondo Festival of the Sawa (Douala)",
        "Nguon Arts Festival (Foumban)",
        "Mount Cameroon Race",
        "Night markets in Yaoundé",
        "Traditional Bamileke dances",
        "Bead and wood crafts"
      ]
    },
    
    cuisine: {
      FR: [
        "Ndolé : plat national aux feuilles amères, arachides et viande",
        "Poulet DG : poulet sauté avec plantain et légumes",
        "Brochettes : viande marinée grillée au charbon",
        "Sanga : poisson fumé aux épices",
        "Kondrè : ragoût de viande aux épinards",
        "Bokaboka : beignets de banane plantain"
      ],
      EN: [
        "Ndolé: national dish with bitter leaves, peanuts and meat",
        "Poulet DG: sautéed chicken with plantain and vegetables",
        "Brochettes: marinated meat grilled on charcoal",
        "Sanga: smoked fish with spices",
        "Kondrè: meat stew with spinach",
        "Bokaboka: plantain banana fritters"
      ]
    }
  }
};

export default function DestinationPays() {
  const { countryId } = useParams();
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState(null);
  const [showExtendedOverview, setShowExtendedOverview] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [activeTab, setActiveTab] = useState("cities");

  const destination = destinationsData[countryId] || destinationsData["cameroon"];
  const t = destination;

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCity = (cityId) => {
    console.log("Explore city:", cityId);
  };

  const handleFindHotels = (cityId) => {
    console.log("Find hotels in:", cityId);
  };

  // Composants
  const OverviewSection = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {language === "FR" ? "Aperçu du Cameroun" : "Cameroon Overview"}
        </h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
            <Calendar className="w-4 h-4 mr-2" />
            {language === "FR" ? "Sélectionner dates" : "Select dates"}
          </button>
          <button className="flex items-center px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
            <Plane className="w-4 h-4 mr-2" />
            {language === "FR" ? "Vols" : "Flights"}
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-lg">
          {t.slogan[language]}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {showExtendedOverview ? t.extendedOverview[language] : t.overview[language]}
        </p>
        
        <button
          onClick={() => setShowExtendedOverview(!showExtendedOverview)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          {showExtendedOverview ? 
            (language === "FR" ? "Voir moins" : "Show less") :
            (language === "FR" ? "Lire la suite" : "Read more")
          }
          {showExtendedOverview ? 
            <ChevronUp className="w-4 h-4 ml-1" /> :
            <ChevronDown className="w-4 h-4 ml-1" />
          }
        </button>
      </div>
    </div>
  );

  const PopularCitiesSection = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {language === "FR" ? "Destinations populaires" : "Popular Destinations"}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("cities")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "cities" 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === "FR" ? "Villes" : "Cities"}
          </button>
          <button
            onClick={() => setActiveTab("regions")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "regions" 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === "FR" ? "Régions" : "Regions"}
          </button>
          <button
            onClick={() => setActiveTab("attractions")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "attractions" 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === "FR" ? "Attractions" : "Attractions"}
          </button>
        </div>
      </div>
      
      {activeTab === "cities" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.popularCities[language].map((city, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {city.temperature}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.knownFor.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{city.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === "FR" ? "Points forts" : "Highlights"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === "FR" ? "Idéal pour" : "Best for"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {city.bestFor.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleExploreCity(city.id)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {language === "FR" ? "Explorer" : "Explore"}
                  </button>
                  <button
                    onClick={() => handleFindHotels(city.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    {language === "FR" ? "Hôtels" : "Hotels"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === "regions" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.regions[language].map((region, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedRegion(region)}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                  {region.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
                  <div className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">
                      {language === "FR" ? "Région du Cameroun" : "Cameroon Region"}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{region.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {region.highlights.map((highlight, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === "attractions" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.popularPlaces[language].map((place, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-lg mr-4">
                  {place.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{place.name}</h3>
                  <div className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{place.location}</span>
                    <Star className="w-4 h-4 text-yellow-400 ml-3 mr-1" />
                    <span className="text-sm text-gray-500">{place.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{place.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {place.category}
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  {language === "FR" ? "Détails" : "Details"} →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const QuickFactsSection = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {language === "FR" ? "Infos pratiques" : "Practical Information"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(t.quickFacts[language]).map(([key, value], index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              {key === "currency" && <ShoppingBag className="w-5 h-5 text-blue-600 mr-2" />}
              {key === "language" && <Users className="w-5 h-5 text-green-600 mr-2" />}
              {key === "timeZone" && <Clock className="w-5 h-5 text-purple-600 mr-2" />}
              {key === "bestTime" && <Calendar className="w-5 h-5 text-orange-600 mr-2" />}
              {key === "visa" && <Globe className="w-5 h-5 text-red-600 mr-2" />}
              {key === "power" && <Coffee className="w-5 h-5 text-yellow-600 mr-2" />}
              {key === "population" && <Users className="w-5 h-5 text-indigo-600 mr-2" />}
              {key === "area" && <Compass className="w-5 h-5 text-pink-600 mr-2" />}
              {key === "callingCode" && <Phone className="w-5 h-5 text-teal-600 mr-2" />}
              <span className="text-sm font-medium text-gray-500">
                {language === "FR" ? 
                  key === "currency" ? "Devise" :
                  key === "language" ? "Langues" :
                  key === "timeZone" ? "Fuseau horaire" :
                  key === "bestTime" ? "Meilleure période" :
                  key === "visa" ? "Visa" :
                  key === "power" ? "Électricité" :
                  key === "population" ? "Population" :
                  key === "area" ? "Superficie" :
                  key === "callingCode" ? "Indicatif" : key
                  :
                  key === "currency" ? "Currency" :
                  key === "language" ? "Languages" :
                  key === "timeZone" ? "Time zone" :
                  key === "bestTime" ? "Best time" :
                  key === "visa" ? "Visa" :
                  key === "power" ? "Power" :
                  key === "population" ? "Population" :
                  key === "area" ? "Area" :
                  key === "callingCode" ? "Calling code" : key
                }
              </span>
            </div>
            <p className="font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CulturalSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Cuisine */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Utensils className="w-6 h-6 mr-2 text-orange-600" />
          {language === "FR" ? "Gastronomie camerounaise" : "Cameroonian Cuisine"}
        </h2>
        
        <div className="space-y-4">
          {t.cuisine[language].slice(0, 4).map((dish, index) => (
            <div key={index} className="flex items-start bg-white/50 p-3 rounded-lg">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700">{dish}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Culture */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Landmark className="w-6 h-6 mr-2 text-purple-600" />
          {language === "FR" ? "Culture et traditions" : "Culture & Traditions"}
        </h2>
        
        <div className="space-y-4">
          {t.culturalHighlights[language].slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-start bg-white/50 p-3 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TravelTipsSection = () => (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 mb-8 text-white">
      <h2 className="text-2xl font-bold mb-6">
        {language === "FR" ? "Conseils essentiels pour voyager" : "Essential Travel Tips"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.travelTips[language].map((tip, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p>{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdditionalPlacesSection = () => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {language === "FR" ? "Autres sites à découvrir" : "More Places to Discover"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.additionalPlaces[language].map((place, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{place.name}</h3>
                <span className="text-sm text-gray-500">{place.category}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{place.description}</p>
            
            <button className="w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              {language === "FR" ? "En savoir plus" : "Learn more"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 via-yellow-600 to-red-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">{t.flag}</div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    {t.name[language]}
                  </h1>
                  <p className="text-2xl text-white/90">{t.tagline[language]}</p>
                </div>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                {language === "FR" ? 
                  "Découvrez la diversité extraordinaire du Cameroun : plages, montagnes, forêts, savanes et culture vibrante." :
                  "Discover Cameroon's extraordinary diversity: beaches, mountains, forests, savannas and vibrant culture."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                  <div className="text-sm opacity-80">{language === "FR" ? "Capitale" : "Capital"}</div>
                  <div className="font-bold">{t.capital[language]}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                  <div className="text-sm opacity-80">{language === "FR" ? "Meilleure saison" : "Best season"}</div>
                  <div className="font-bold">{language === "FR" ? "Nov - Fév" : "Nov - Feb"}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                  <div className="text-sm opacity-80">{language === "FR" ? "Température" : "Temperature"}</div>
                  <div className="font-bold">18°C - 32°C</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-bold mb-4">
                  {language === "FR" ? "Planifiez votre voyage" : "Plan your trip"}
                </h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={language === "FR" ? "Destination au Cameroun..." : "Destination in Cameroon..."}
                      className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      {language === "FR" ? "Rechercher" : "Search"}
                    </button>
                    <button className="bg-white/20 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                      {language === "FR" ? "Guide PDF" : "PDF Guide"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverviewSection />
        <QuickFactsSection />
        <CulturalSection />
        <PopularCitiesSection />
        <AdditionalPlacesSection />
        <TravelTipsSection />
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            {language === "FR" ? "Prêt à découvrir le Cameroun ?" : "Ready to discover Cameroon?"}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {language === "FR" ? 
              "Contactez nos experts locaux pour créer l'itinéraire parfait adapté à vos envies." :
              "Contact our local experts to create the perfect itinerary tailored to your desires."}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Plane className="w-6 h-6 mr-2" />
              {language === "FR" ? "Réserver un vol" : "Book a flight"}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              {language === "FR" ? "Parler à un expert" : "Talk to an expert"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}