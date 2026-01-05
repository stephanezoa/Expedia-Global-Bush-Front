// src/Data/DestinationDatas.js
import React from 'react';

export const COUNTRIES = [
  {
    id: 'cmr',
    name: 'Cameroun',
    dmc: 'CMR DMC',
    tagline: "L'Afrique en miniature",
    image: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800',
    reasons: ['Diversité culturelle', 'Paysages variés', 'Mont Cameroun', 'Cuisine locale'],
    description: 'Avec ses paysages allant des plages tropicales aux montagnes volcaniques, le Cameroun offre une diversité incomparable en Afrique Centrale.',
    rating: 4.8,
    reviews: 1289,
    bestSeason: 'Novembre à Mars',
    avgTemperature: '25°C',
    visaRequired: 'Oui pour la plupart',
    languages: ['Français', 'Anglais'],
    currency: 'Franc CFA',
    popularDestinations: ['Yaoundé', 'Douala', 'Kribi', 'Mont Cameroun']
  }
  // vous pouvez étendre la liste ici
];

export const SERVICES = [
  { key: 'flights', title: 'Vols Internationaux', desc: "Billets d'avion vers toutes les capitales d'Afrique Centrale et connexions mondiales." },
  { key: 'safari', title: 'Safaris Guidés', desc: 'Expériences fauniques encadrées par des guides experts et rangers certifiés.' },
  { key: 'hotels', title: 'Hébergement Premium', desc: "Sélection d'hôtels 4-5 étoiles, lodges écologiques et resorts de plage." }
];

export const TRAVEL_TIPS = [
  { title: 'Meilleure période', content: "La saison sèche (décembre à février) est idéale pour la plupart des pays d'Afrique Centrale." },
  { title: 'Visa requis', content: 'La plupart des pays nécessitent un visa obtenu avant le départ. Contactez-nous pour assistance.' }
];

export const STATISTICS = [
  { value: '9', label: 'Pays membres' },
  { value: '500+', label: 'Circuits organisés' },
  { value: '98%', label: 'Satisfaction clients' },
  { value: '24/7', label: 'Assistance' }
];

export const DESTINATION_MAP = {
  cmr: {
    id: 'cmr',
    name: 'Cameroun',
    tagline: "L'Afrique en miniature",
    description: "Avec ses paysages allant des plages tropicales aux montagnes volcaniques, le Cameroun offre une diversité incomparable en Afrique Centrale.",
    longDescription: "Le Cameroun est souvent appelé 'l'Afrique en miniature' en raison de sa diversité géographique et culturelle.",
    stats: {
      rating: 4.8,
      reviews: 1289,
      bestSeason: 'Novembre à Mars',
      duration: '7-14 jours',
      visaRequired: 'Oui pour la plupart',
      languages: ['Français','Anglais'],
      currency: 'Franc CFA',
      temperature: '25°C moyenne'
    },
    highlights: [
      { title: 'Mont Cameroun', desc: "Plus haut sommet d'Afrique de l'Ouest" },
      { title: 'Plages de Kribi', desc: "Sable doré et chutes se jetant dans l'océan" }
    ],
    attractions: [],
    packages: [
      { name: 'Essentiel', price: '799€', duration: '7 jours' },
      { name: 'Confort', price: '1299€', duration: '10 jours' },
      { name: 'Luxe', price: '2499€', duration: '14 jours' }
    ],
    images: [
      'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200'
    ]
  }
};

export default {
  COUNTRIES,
  SERVICES,
  TRAVEL_TIPS,
  STATISTICS,
  DESTINATION_MAP
};
// src/data/destinationsData.js
export const DESTINATIONS_DATA = {
  "cmr": {
    id: "cmr",
    name: "Cameroun",
    dmc: "CMR DMC",
    tagline: "L'Afrique en miniature",
    heroTitle: "Cameroon: Where Journeys to Cameroon Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Cameroon",
    image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800",
    reasons: ["Diversité culturelle", "Paysages variés", "Mont Cameroun", "Cuisine locale"],
    description: "Avec ses paysages allant des plages tropicales aux montagnes volcaniques, le Cameroun offre une diversité incomparable en Afrique Centrale.",
    longDescription: "Le Cameroun est souvent appelé 'l'Afrique en miniature' en raison de sa diversité géographique et culturelle. Du Mont Cameroun, plus haut sommet d'Afrique de l'Ouest, aux plages paradisiaques de Kribi, en passant par les parcs nationaux abritant une faune exceptionnelle, chaque région offre une expérience unique. La richesse culturelle est tout aussi impressionnante, avec plus de 250 groupes ethniques et langues locales. Global Bush Travel est une agence de tourisme fournissant des circuits privés originaux et professionnels au Cameroun.",
    
    stats: {
      rating: 4.8,
      reviews: 1289,
      bestSeason: "Novembre à Mars",
      duration: "7-14 jours",
      visaRequired: "Oui pour la plupart",
      languages: ["Français", "Anglais"],
      currency: "Franc CFA",
      temperature: "25°C moyenne",
      population: "27+ millions",
      capital: "Yaoundé",
      area: "475,442 km²"
    },
    
    highlights: [
      { icon: "Mountain", title: "Mont Cameroun", desc: "Plus haut sommet d'Afrique de l'Ouest (4,095m)" },
      { icon: "Waves", title: "Plages de Kribi", desc: "Sable doré et chutes se jetant dans l'océan" },
      { icon: "Camera", title: "Parc de Waza", desc: "Safari lions, éléphants et girafes" },
      { icon: "Palette", title: "Art Bamoun", desc: "Art royal et artisanat traditionnel" }
    ],
    
    attractions: [
      {
        name: "Mont Cameroun (Fako)",
        location: "Sud-Ouest",
        description: "Plus haut sommet d'Afrique de l'Ouest, idéal pour le trekking et l'observation de la biodiversité unique. Le Mont Cameroon Race of Hope annuel attire de nombreux visiteurs.",
        image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800",
        category: "Montagne",
        rating: 4.9,
        duration: "2-3 jours"
      },
      {
        name: "Plages de Kribi",
        location: "Sud",
        description: "Plages de sable doré avec les célèbres chutes de la Lobé qui se jettent directement dans l'océan. Connues pour les fruits de mer frais, en particulier les crevettes.",
        image: "https://images.unsplash.com/photo-1578330107248-23214736fdfc?auto=format&fit=crop&w=800",
        category: "Plage",
        rating: 4.7,
        duration: "1-2 jours"
      },
      {
        name: "Parc National de Waza",
        location: "Extrême-Nord",
        description: "L'un des meilleurs endroits d'Afrique Centrale pour observer lions, éléphants et girafes. Destination privilégiée pour les amateurs de safari.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.6,
        duration: "3-4 jours"
      },
      {
        name: "Palais Royal de Foumban",
        location: "Ouest",
        description: "Siège historique du Royaume Bamoun, musée d'art et d'histoire exceptionnel. Montre l'architecture traditionnelle, les artefacts et le Musée du Sultan.",
        image: "https://images.unsplash.com/photo-1523447193309-847242299878?auto=format&fit=crop&w=800",
        category: "Culture",
        rating: 4.4,
        duration: "1 jour"
      },
      {
        name: "Limbe Wildlife Centre",
        location: "Sud-Ouest",
        description: "Centre de conservation pour les primates, situé à Douala. Site du patrimoine culturel et hôte du festival annuel Ngondo, célébrant les traditions Sawa.",
        image: "https://images.unsplash.com/photo-1615561570769-e6f773663a78?auto=format&fit=crop&w=800",
        category: "Faune",
        rating: 4.5,
        duration: "1 jour"
      }
    ],
    
    packages: [
      {
        name: "Essentiel",
        price: "799€",
        duration: "7 jours",
        includes: ["Hôtel 3*", "Petits-déjeuners", "Transferts aéroport", "Guide local"],
        features: ["Mont Cameroun", "Kribi", "Visite culturelle"],
        popular: false
      },
      {
        name: "Confort",
        price: "1,299€",
        duration: "10 jours",
        includes: ["Hôtel 4*", "Repas inclus", "Guide privé", "Safari Waza"],
        features: ["Tous les sites majeurs", "Expériences culinaires", "Transport privé"],
        popular: true
      },
      {
        name: "Luxe",
        price: "2,499€",
        duration: "14 jours",
        includes: ["Hôtel 5*/Lodge", "Tout inclus", "Guide expert", "Vols domestiques"],
        features: ["Expériences VIP", "Hébergement premium", "Flexibilité totale"],
        popular: false
      }
    ],
    
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Yaoundé",
        activities: [
          "Arrivée à l'aéroport international",
          "Transfert à l'hôtel",
          "Briefing avec votre guide",
          "Dîner de bienvenue"
        ]
      },
      {
        day: 2,
        title: "Découverte de Yaoundé",
        activities: [
          "Visite du Musée National",
          "Marché artisanal de Mfoundi",
          "Déjeuner cuisine locale",
          "Tour de la ville"
        ]
      },
      {
        day: 3,
        title: "Route vers Kribi",
        activities: [
          "Départ pour la côte",
          "Arrêt aux chutes d'Ekom-Nkam",
          "Installation à l'hôtel",
          "Coucher de soleil sur la plage"
        ]
      },
      {
        day: 4,
        title: "Plages et Chutes",
        activities: [
          "Excursion aux chutes de la Lobé",
          "Déjeuner de poissons frais",
          "Temps libre sur la plage",
          "Visite d'une plantation de cacao"
        ]
      }
    ],
    
    practicalInfo: [
      { icon: "Calendar", title: "Meilleure période", value: "Novembre à Mars (saison sèche)" },
      { icon: "Clock", title: "Décalage horaire", value: "GMT +1" },
      { icon: "ShieldCheck", title: "Sécurité", value: "Précautions standard recommandées" },
      { icon: "Users", title: "Population", value: "27+ millions d'habitants" }
    ],
    
    cities: [
      { name: "Douala", img: "https://images.unsplash.com/photo-1595183457193-41a45778841a?auto=format&fit=crop&w=400" },
      { name: "Yaoundé", img: "https://images.unsplash.com/photo-1523447193309-847242299878?auto=format&fit=crop&w=400" },
      { name: "Kribi", img: "https://images.unsplash.com/photo-1578330107248-23214736fdfc?auto=format&fit=crop&w=400" },
      { name: "Limbe", img: "https://images.unsplash.com/photo-1615561570769-e6f773663a78?auto=format&fit=crop&w=400" }
    ],
    
    hotels: [
      { name: "Hilton Yaoundé", rating: "4.5/5", reviews: "2,450", price: "145€", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400" },
      { name: "Onomo Hotel Douala", rating: "4.2/5", reviews: "1,120", price: "98€", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400" }
    ],
    
    images: [
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1578330107248-23214736fdfc?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1523447193309-847242299878?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1615561570769-e6f773663a78?auto=format&fit=crop&w=1200"
    ],
    
    services: [
      "Arrangements Inbound inégalés",
      "Forfaits vacances sur mesure",
      "Expériences culturelles authentiques",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence camerounais",
      "Réservations d'hôtels",
      "Assistance visa d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Paysages diversifiés du Mont Cameroun aux plages dorées",
      "Cuisine locale avec plats comme Ndolé et Kati Kati",
      "Hospitalité légendaire du peuple camerounais",
      "Safaris fauniques pour observer éléphants et gorilles"
    ]
  },
  
  "tcd": {
    id: "tcd",
    name: "Tchad",
    dmc: "TCHAD DMC",
    tagline: "Déserts et diversité",
    heroTitle: "Chad: Where Journeys to Chad Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Chad",
    image: "https://images.unsplash.com/photo-1539160623403-9993309a6f2f?auto=format&fit=crop&w=800",
    reasons: ["Diversité ethnique", "Déserts du Sahara", "Lacs", "Région de l'Ennedi"],
    description: "Terre de contrastes entre le désert du Sahara et les zones humides du Lac Tchad, riche en traditions nomades.",
    longDescription: "Le Tchad offre un voyage au cœur de l'Afrique authentique avec ses déserts immenses, ses populations nomades et ses paysages spectaculaires. Global Bush Travel est une agence de tourisme fournissant des circuits privés originaux et professionnels au Tchad. Nous nous spécialisons dans la combinaison d'expériences fauniques à couper le souffle avec des hébergements de luxe, des visites exclusives et des interactions culturelles authentiques adaptées à vos intérêts.",
    
    stats: {
      rating: 4.6,
      reviews: 876,
      bestSeason: "Octobre à Février",
      duration: "7-10 jours",
      visaRequired: "Oui",
      languages: ["Français", "Arabe"],
      currency: "Franc CFA",
      temperature: "28°C moyenne",
      population: "17+ millions",
      capital: "N'Djamena",
      area: "1,284,000 km²"
    },
    
    highlights: [
      { icon: "Compass", title: "Plateau de l'Ennedi", desc: "Formations rocheuses spectaculaires et art rupestre ancien" },
      { icon: "Waves", title: "Lac Tchad", desc: "Lac sahélien, oiseaux migrateurs, culture nomade" },
      { icon: "Camera", title: "Parc de Zakouma", desc: "Éléphants, lions et girafes dans leur habitat naturel" },
      { icon: "Users", title: "Culture Toubou", desc: "Traditions nomades et hospitalité saharienne" }
    ],
    
    attractions: [
      {
        name: "Parc National de Zakouma",
        location: "Sud-Est",
        description: "L'un des derniers bastions pour la faune en Afrique Centrale, abritant éléphants, lions, girafes et diverses espèces d'oiseaux.",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.7,
        duration: "3-4 jours"
      },
      {
        name: "Lac Tchad",
        location: "Ouest",
        description: "Lac sahélien historique, important pour les oiseaux migrateurs et les communautés de pêcheurs locales.",
        image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=800",
        category: "Lac",
        rating: 4.3,
        duration: "2-3 jours"
      },
      {
        name: "Plateau de l'Ennedi",
        location: "Nord-Est",
        description: "Formations rocheuses uniques et art rupestre préhistorique dans le désert du Sahara.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
        category: "Désert",
        rating: 4.8,
        duration: "4-5 jours"
      }
    ],
    
    packages: [
      {
        name: "Découverte",
        price: "899€",
        duration: "7 jours",
        includes: ["Hôtel 3*", "Petits-déjeuners", "Transferts", "Guide francophone"],
        features: ["Lac Tchad", "N'Djamena", "Culture locale"],
        popular: false
      },
      {
        name: "Aventure Saharienne",
        price: "1,499€",
        duration: "10 jours",
        includes: ["Campement désert", "Tous repas", "Guide expert", "Transport 4x4"],
        features: ["Plateau Ennedi", "Art rupestre", "Nuits sous les étoiles"],
        popular: true
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés au Tchad",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence tchadien",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Beauté naturelle intacte du Plateau de l'Ennedi et des monts Tibesti",
      "Rencontres culturelles riches avec groupes ethniques divers",
      "Aventures fauniques dans le Parc National de Zakouma",
      "Merveilles historiques et préhistoriques d'art rupestre",
      "Solitude et aventure dans les régions désertiques"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1539160623403-9993309a6f2f?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200"
    ]
  },
  
  "gnq": {
    id: "gnq",
    name: "Guinée Équatoriale",
    dmc: "EG DMC",
    tagline: "Îles paradisiaques",
    heroTitle: "Equatorial Guinea: Where Journeys to Equatorial Guinea Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Equatorial Guinea",
    image: "https://images.unsplash.com/photo-1589182397057-b82d7681b354?auto=format&fit=crop&w=800",
    reasons: ["Chutes d'eau", "Cratères", "Coexistence culturelle", "Architecture"],
    description: "Le seul pays hispanophone d'Afrique avec des îles paradisiaques et une architecture coloniale préservée.",
    longDescription: "La Guinée Équatoriale offre un mélange unique de paysages volcaniques, forêts tropicales et îles paradisiaques. Global Bush Travel fournit des circuits privés originaux et professionnels en Guinée Équatoriale. Nous nous spécialisons dans la création de souvenirs durables grâce à des expériences fauniques époustouflantes combinées à des hébergements de luxe.",
    
    stats: {
      rating: 4.4,
      reviews: 543,
      bestSeason: "Juillet à Septembre",
      duration: "5-8 jours",
      visaRequired: "Oui",
      languages: ["Espagnol", "Français"],
      currency: "Franc CFA",
      temperature: "26°C moyenne",
      population: "1.5+ millions",
      capital: "Malabo",
      area: "28,051 km²"
    },
    
    highlights: [
      { icon: "Mountain", title: "Pico Basile", desc: "Point culminant (3,011m) avec vues panoramiques" },
      { icon: "Camera", title: "Parc Monte Alén", desc: "Gorilles, chimpanzés et biodiversité exceptionnelle" },
      { icon: "Waves", title: "Plage Arena Blanca", desc: "Seule plage de sable blanc de l'île de Bioko" },
      { icon: "Palette", title: "Architecture coloniale", desc: "Mélange unique d'influences espagnoles et africaines" }
    ],
    
    attractions: [
      {
        name: "Malabo (Île de Bioko)",
        location: "Île de Bioko",
        description: "Capitale mélangeant modernité et charme colonial, offrant attractions culturelles, historiques et panoramiques.",
        image: "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=800",
        category: "Ville",
        rating: 4.3,
        duration: "2 jours"
      },
      {
        name: "Pico Basile",
        location: "Île de Bioko",
        description: "Plus haut sommet de Guinée Équatoriale (3,011 mètres) offrant des vues à couper le souffle et un environnement naturel riche.",
        image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=800",
        category: "Montagne",
        rating: 4.6,
        duration: "1-2 jours"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés en Guinée Équatoriale",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence équatoguinéen",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Paysages naturels préservés de forêts tropicales et pics volcaniques",
      "Rencontres fauniques incroyables avec gorilles et tortues de mer",
      "Plages et îles uniques comme Arena Blanca et Annobón",
      "Randonnée et aventure au Pico Basile",
      "Charme colonial et moderne de Malabo"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1589182397057-b82d7681b354?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=1200"
    ]
  },
  
  "stp": {
    id: "stp",
    name: "Sao Tomé-et-Principe",
    dmc: "SAOTOME DMC",
    tagline: "Sécurité et Hospitalité",
    heroTitle: "Sao Tomé and Príncipe: Where Journeys to Sao Tome and Principe Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Sao Tome and Principe",
    image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800",
    reasons: ["Plages vierges", "Flore et Faune insulaire", "Forêt primaire", "Sécurité totale"],
    description: "Archipel volcanique avec des plages paradisiaques, une biodiversité unique et un tourisme durable en développement.",
    longDescription: "Sao Tomé-et-Principe est un archipel paradisiaque dans le golfe de Guinée, connu pour ses plages immaculées, sa forêt tropicale et son cacao de renommée mondiale. Global Bush Travel offre des circuits privés originaux et professionnels à Sao Tomé-et-Principe. Nous nous soucions de chaque détail de votre voyage, du premier contact avec nos Spécialistes du Voyage jusqu'à votre retour à la maison.",
    
    stats: {
      rating: 4.7,
      reviews: 654,
      bestSeason: "Juin à Septembre",
      duration: "5-7 jours",
      visaRequired: "Visa à l'arrivée",
      languages: ["Portugais"],
      currency: "Dobra",
      temperature: "27°C moyenne",
      population: "220,000",
      capital: "São Tomé",
      area: "1,001 km²"
    },
    
    highlights: [
      { icon: "Waves", title: "Praia Jalé", desc: "Plage célèbre pour la nidification des tortues de mer" },
      { icon: "Mountain", title: "Pico Cão Grande", desc: "Plug volcanique emblématique et formation géologique unique" },
      { icon: "Coffee", title: "Plantations de cacao", desc: "Cacao renommé mondialement et chocolat local" },
      { icon: "Compass", title: "Parc Naturel Obô", desc: "Forêt tropicale protégée avec biodiversité incroyable" }
    ],
    
    attractions: [
      {
        name: "São Tomé City",
        location: "São Tomé",
        description: "Capitale offrant un mélange d'héritage colonial, de sites culturels et d'atmosphère détendue.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800",
        category: "Ville",
        rating: 4.4,
        duration: "1-2 jours"
      },
      {
        name: "Pico Cão Grande",
        location: "São Tomé",
        description: "Plug volcanique dramatique et l'un des repères naturels les plus emblématiques de São Tomé.",
        image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800",
        category: "Montagne",
        rating: 4.8,
        duration: "1 jour"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés à Sao Tomé",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence santoméen",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Plages immaculées et observation des tortues à Praia Jalé",
      "Découverte du cacao renommé mondialement",
      "Randonnée dans la forêt tropicale du Parc Obô",
      "Hospitalité chaleureuse des Santoméens",
      "Sécurité et tranquillité exceptionnelles"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200"
    ]
  },
  
  "cog": {
    id: "cog",
    name: "Congo (Brazzaville)",
    dmc: "CONGO DMC",
    tagline: "Le fleuve et les gorilles",
    heroTitle: "Congo: Where Journeys to Congo Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Congo",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800",
    reasons: ["Gorilles des plaines", "Culture musicale", "Fleuve Congo", "Observation d'oiseaux"],
    description: "Pays de la rumba et des forêts profondes, avec le majestueux fleuve Congo et une vie sauvage préservée.",
    longDescription: "Le Congo-Brazzaville est une destination riche en biodiversité et culture, célèbre pour ses gorilles des plaines, sa musique rumba et le majestueux fleuve Congo. Global Bush Travel offre des circuits privés originaux et professionnels au Congo. Nous nous spécialisons dans la création d'expériences fauniques mémorables combinées à des hébergements exclusifs.",
    
    stats: {
      rating: 4.5,
      reviews: 789,
      bestSeason: "Mai à Septembre",
      duration: "8-12 jours",
      visaRequired: "Oui",
      languages: ["Français"],
      currency: "Franc CFA",
      temperature: "26°C moyenne",
      population: "5.8+ millions",
      capital: "Brazzaville",
      area: "342,000 km²"
    },
    
    highlights: [
      { icon: "Users", title: "Gorilles des plaines", desc: "Observation des gorilles dans leur habitat naturel" },
      { icon: "Music", title: "Culture rumba", desc: "Musique traditionnelle et scène culturelle vibrante" },
      { icon: "Waves", title: "Fleuve Congo", desc: "Deuxième plus long fleuve d'Afrique, paysages spectaculaires" },
      { icon: "Camera", title: "Observation d'oiseaux", desc: "Biodiversité aviaire exceptionnelle" }
    ],
    
    attractions: [
      {
        name: "Parc National de Nouabalé-Ndoki",
        location: "Nord",
        description: "Site UNESCO, l'une des forêts tropicales les plus préservées du Congo, abritant gorilles, chimpanzés, éléphants et oiseaux.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.7,
        duration: "4-5 jours"
      },
      {
        name: "Basilique Sainte-Anne",
        location: "Brazzaville",
        description: "Église catholique romaine impressionnante et joyau architectural dans le cœur de Brazzaville.",
        image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800",
        category: "Culture",
        rating: 4.3,
        duration: "2-3 heures"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés au Congo",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence congolais",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Trekking des gorilles dans les parcs nationaux",
      "Culture musicale vibrante et rumba congolaise",
      "Croisières sur le majestueux fleuve Congo",
      "Observation d'oiseaux dans les forêts tropicales",
      "Hospitalité chaleureuse du peuple congolais"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200"
    ]
  },
  
  "caf": {
    id: "caf",
    name: "Centrafrique (RCA)",
    dmc: "CAR DMC",
    tagline: "Vie sauvage et Safaris",
    heroTitle: "Central African Republic: Where Journeys to Central African Republic Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Central African Republic",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800",
    reasons: ["Wildlife & Safari", "Coucher de soleil", "Navigation en pirogue", "Plages de rivières"],
    description: "Cœur de l'Afrique avec des parcs nationaux immenses abritant une faune exceptionnelle et des paysages sauvages.",
    longDescription: "La République Centrafricaine est le cœur géographique de l'Afrique, offrant des expériences fauniques authentiques dans des parcs nationaux préservés. Global Bush Travel offre des circuits privés originaux et professionnels en RCA. Nous nous engageons à garantir que chaque détail de votre safari africain ou voyage est absolument parfait.",
    
    stats: {
      rating: 4.3,
      reviews: 432,
      bestSeason: "Décembre à Mars",
      duration: "7-10 jours",
      visaRequired: "Oui",
      languages: ["Français", "Sango"],
      currency: "Franc CFA",
      temperature: "27°C moyenne",
      population: "5.5+ millions",
      capital: "Bangui",
      area: "622,984 km²"
    },
    
    highlights: [
      { icon: "Camera", title: "Parc Manovo-Gounda", desc: "Site UNESCO avec éléphants et antilopes rares" },
      { icon: "Compass", title: "Safari authentique", desc: "Expériences fauniques loin du tourisme de masse" },
      { icon: "Waves", title: "Rivières Oubangui", desc: "Navigation en pirogue et paysages fluviaux" },
      { icon: "Users", title: "Culture Pygmée", desc: "Rencontres avec les populations autochtones" }
    ],
    
    attractions: [
      {
        name: "Parc National de Manovo-Gounda St Floris",
        location: "Nord-Est",
        description: "Site UNESCO abritant une faune exceptionnelle dans des paysages sauvages préservés.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.5,
        duration: "4-5 jours"
      },
      {
        name: "Bangui",
        location: "Sud-Ouest",
        description: "Capitale animée sur les rives de l'Oubangui, mélangeant culture urbaine et histoire.",
        image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800",
        category: "Ville",
        rating: 4.0,
        duration: "2 jours"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés en RCA",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence centrafricain",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Safaris authentiques dans des parcs préservés",
      "Couchers de soleil spectaculaires sur les savanes",
      "Navigation en pirogue sur les rivières centrafricaines",
      "Plages de rivières paisibles et isolées",
      "Rencontres culturelles avec communautés locales"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200"
    ]
  },
  
  "ago": {
    id: "ago",
    name: "Angola",
    dmc: "ANGOLA DMC",
    tagline: "Culture portugaise",
    heroTitle: "Angola: Where Journeys to Angola Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Angola",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=800",
    reasons: ["Festivals", "Plages infinies", "Culture portugaise", "Nature sauvage"],
    description: "Pays en plein développement touristique avec 1600km de côte atlantique et un riche héritage culturel luso-africain.",
    longDescription: "L'Angola combine plages spectaculaires, paysages diversifiés et riche héritage culturel portugais. Global Bush Travel offre des circuits privés originaux et professionnels en Angola. Avec des tours dans plus de 55 destinations, nous vous invitons à parcourir nos options les plus populaires et à trouver l'aventure parfaite au bon prix pour vous.",
    
    stats: {
      rating: 4.2,
      reviews: 987,
      bestSeason: "Mai à Octobre",
      duration: "10-14 jours",
      visaRequired: "Oui",
      languages: ["Portugais"],
      currency: "Kwanza",
      temperature: "24°C moyenne",
      population: "35+ millions",
      capital: "Luanda",
      area: "1,246,700 km²"
    },
    
    highlights: [
      { icon: "Waves", title: "Chutes de Kalandula", desc: "Une des plus grandes chutes d'Afrique (105m de hauteur)" },
      { icon: "Compass", title: "Gap de Tundavala", desc: "Escarpement dramatique avec vues panoramiques" },
      { icon: "Camera", title: "Parc de Kissama", desc: "Safari avec éléphants, girafes et zèbres" },
      { icon: "Palette", title: "Architecture coloniale", desc: "Héritage portugais préservé dans les villes" }
    ],
    
    attractions: [
      {
        name: "Chutes de Kalandula",
        location: "Kwanza Norte",
        description: "Une des plus grandes chutes d'Afrique (105m de hauteur, 400m de largeur), attraction majeure pour les amoureux de la nature.",
        image: "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=800",
        category: "Nature",
        rating: 4.8,
        duration: "1-2 jours"
      },
      {
        name: "Luanda",
        location: "Côte Atlantique",
        description: "Capitale vibrante offrant un mélange de modernité et d'histoire, avec front de mer animé, forteresses historiques et marchés dynamiques.",
        image: "https://images.unsplash.com/photo-1595183457193-41a45778841a?auto=format&fit=crop&w=800",
        category: "Ville",
        rating: 4.3,
        duration: "3-4 jours"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés en Angola",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence angolais",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Beauté naturelle et paysages diversifiés",
      "Culture riche et musique angolaise",
      "Vie sauvage et réserves naturelles",
      "Vie urbaine vibrante de Luanda",
      "Beauté côtière des plages angolaises"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1595183457193-41a45778841a?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=1200"
    ]
  },
  
  "cod": {
    id: "cod",
    name: "RD Congo",
    dmc: "DCR DMC",
    tagline: "Aventure profonde",
    heroTitle: "Democratic Republic of Congo: Where Journeys to DRC Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Democratic Republic of Congo",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800",
    reasons: ["Safari & Faune", "Observation d'oiseaux", "Croisières fluviales", "Snorkelling"],
    description: "Deuxième plus grande forêt tropicale du monde, gorilles de montagne et le puissant fleuve Congo.",
    longDescription: "La RDC est l'une des destinations les plus aventureuses d'Afrique, avec sa forêt tropicale immense, ses volcans actifs et sa faune unique. Global Bush Travel offre des circuits privés originaux et professionnels en RDC. Nous nous engageons à garantir que chaque détail de votre voyage est absolument parfait, du premier contact jusqu'à votre retour à la maison.",
    
    stats: {
      rating: 4.6,
      reviews: 1102,
      bestSeason: "Juin à Septembre",
      duration: "12-16 jours",
      visaRequired: "Oui",
      languages: ["Français", "Swahili", "Lingala"],
      currency: "Franc Congolais",
      temperature: "25°C moyenne",
      population: "95+ millions",
      capital: "Kinshasa",
      area: "2,344,858 km²"
    },
    
    highlights: [
      { icon: "Users", title: "Gorilles de montagne", desc: "Trekking des gorilles dans le Parc des Virunga" },
      { icon: "Mountain", title: "Volcan Nyiragongo", desc: "Lac de lave actif et randonnée aventureuse" },
      { icon: "Waves", title: "Fleuve Congo", desc: "Deuxième plus long fleuve d'Afrique, croisières spectaculaires" },
      { icon: "Camera", title: "Bonobos", desc: "Observation des primates les plus proches de l'homme" }
    ],
    
    attractions: [
      {
        name: "Parc National des Virunga",
        location: "Est",
        description: "Site UNESCO, plus ancien parc national d'Afrique et l'un des plus biologiquement diversifiés. Abrite des gorilles de montagne en danger.",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.9,
        duration: "5-7 jours"
      },
      {
        name: "Mont Nyiragongo",
        location: "Virunga",
        description: "L'un des volcans les plus actifs au monde avec un lac de lave dramatique et en ébullition continue.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
        category: "Aventure",
        rating: 4.8,
        duration: "2-3 jours"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés en RDC",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence congolais",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Trekking des gorilles dans les parcs nationaux",
      "Lac de lave du Mont Nyiragongo",
      "Culture et musique vibrante de Kinshasa",
      "Expériences fauniques et nature uniques",
      "Paysages spectaculaires et chutes d'eau"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=1200"
    ]
  },
  
  "gab": {
    id: "gab",
    name: "Gabon",
    dmc: "GABON DMC",
    tagline: "Paradis des éléphants",
    heroTitle: "Gabon: Where Journeys to Gabon Begin",
    heroSubtitle: "Award-winning Private & Small Group Tours to Gabon",
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=800",
    reasons: ["Éléphants de forêt", "Baleines & Tortues", "Pêche sportive", "Safari en bateau"],
    description: "Le \"Green Gabon\" avec 88% de forêt, 13 parcs nationaux et une politique de conservation exemplaire.",
    longDescription: "Le Gabon est un paradis pour les amateurs de nature avec ses forêts tropicales préservées, ses plages immaculées et sa faune abondante. Global Bush Travel offre des circuits privés originaux et professionnels au Gabon. Basés à Douala, Cameroun, nous sommes un prestataire primé de tours inoubliables et de vacances privées.",
    
    stats: {
      rating: 4.7,
      reviews: 876,
      bestSeason: "Juin à Septembre",
      duration: "8-12 jours",
      visaRequired: "Oui",
      languages: ["Français"],
      currency: "Franc CFA",
      temperature: "26°C moyenne",
      population: "2.3+ millions",
      capital: "Libreville",
      area: "267,667 km²"
    },
    
    highlights: [
      { icon: "Users", title: "Éléphants de forêt", desc: "Observation des éléphants dans leur habitat naturel" },
      { icon: "Waves", title: "Baleines & Tortues", desc: "Observation marine spectaculaire sur la côte" },
      { icon: "Compass", title: "Pêche sportive", desc: "Pêche en haute mer et activités nautiques" },
      { icon: "Camera", title: "Safari en bateau", desc: "Exploration des parcs nationaux par voie fluviale" }
    ],
    
    attractions: [
      {
        name: "Parc National de Loango",
        location: "Côte Ouest",
        description: "Connu pour ses 'hippopotames surfant' et sa combinaison unique de forêt, savane, lagune et plage.",
        image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=800",
        category: "Safari",
        rating: 4.8,
        duration: "3-4 jours"
      },
      {
        name: "Libreville",
        location: "Côte Atlantique",
        description: "Capitale moderne avec plages, marchés animés et riche scène culturelle.",
        image: "https://images.unsplash.com/photo-1589182397057-b82d7681b354?auto=format&fit=crop&w=800",
        category: "Ville",
        rating: 4.4,
        duration: "2-3 jours"
      }
    ],
    
    services: [
      "Arrangements Inbound inégalés au Gabon",
      "Forfaits de tour et vacances sur mesure",
      "Expériences culturelles",
      "Guides touristiques professionnels",
      "Assistance aéroportuaire",
      "Permis de résidence gabonais",
      "Réservations d'hôtels",
      "Assistance de traitement des visas d'entrée",
      "Services de billetterie aérienne"
    ],
    
    travelerExperiences: [
      "Nature préservée et biodiversité exceptionnelle",
      "Rencontres fauniques incroyables avec éléphants et baleines",
      "Aventure et solitude dans les régions reculées",
      "Belles plages et écotourisme",
      "Chutes d'eau spectaculaires et paysages uniques"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1589182397057-b82d7681b354?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&w=1200"
    ]
  }
};