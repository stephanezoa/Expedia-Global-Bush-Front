import React, { useState } from "react";
import Footer from "../components/Footer";

const Places = () => {
  const destinations = [
    {
      name: "CAMEROUN",
      color: "text-red-500",
      subtitle: "Les meilleures raisons de visiter",
      reasons: [
        "Diversité culturelle",
        "Le paysage",
        "Mont Cameroun",
        "Cousin",
        "Afrique miniature"
      ],
      images: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1589182373726-e63c3d0da3f1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "TCHAD",
      color: "text-blue-500",
      subtitle: "Principales raisons de visiter le pays",
      reasons: [
        "Diversité ethnique",
        "Déserts du Sahara",
        "Lacs",
        "Région d'Ennedi",
        "Magie des îles"
      ],
      images: [
        "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1613401157171-dc5d6cf5c0ef?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "GUINÉE ÉQUATORIALE",
      color: "text-green-600",
      subtitle: "Principales raisons de visiter l'île",
      reasons: [
        "L'île paradisiaque",
        "Chutes d'eau",
        "Églises",
        "Cratères",
        "Coexistence des cultures"
      ],
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "SAO TOMÉ",
      color: "text-pink-500",
      subtitle: "Les meilleures raisons de visiter",
      reasons: [
        "L'hospitalité",
        "Les plages",
        "Flore et faune de l'île",
        "Forêt de Vergin",
        "Sûreté et sécurité"
      ],
      images: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1540206395-68808572332f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "CONGO",
      color: "text-yellow-500",
      subtitle: "Principales raisons de visiter la région",
      reasons: [
        "Paradis de l'ornithologie",
        "Gorilles des plaines occidentales",
        "Culture musicale",
        "Culture vestimentaire",
        "Fleuve Congo"
      ],
      images: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566024287286-457247b70310?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "République Centrafricaine",
      color: "text-gray-800",
      subtitle: "Les meilleures raisons de visiter",
      reasons: [
        "Plages",
        "Observation des oiseaux",
        "Plongée et plongée avec tuba",
        "Randonnées en mokoro",
        "Croisières au coucher du soleil et navigation de plaisance",
        "Faune et safari"
      ],
      images: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "ANGOLA",
      color: "text-green-500",
      subtitle: "Principales raisons de visiter le pays",
      reasons: [
        "Les festivals",
        "Culture",
        "Plages",
        "La faune et la flore",
        "Culture portugaise"
      ],
      images: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1589182373726-e63c3d0da3f1?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "République Démocratique du Congo",
      color: "text-blue-600",
      subtitle: "Les meilleures raisons de visiter",
      reasons: [
        "Plages",
        "Observation des oiseaux",
        "Plongée et plongée avec tuba",
        "Randonnées en mokoro",
        "Croisières au coucher du soleil et navigation de plaisance",
        "Faune et safari"
      ],
      images: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "GABON",
      color: "text-yellow-600",
      subtitle: "Les meilleures raisons de visiter",
      reasons: [
        "Les éléphants à profusion",
        "Observation des tortues",
        "Pêche au gibier",
        "Safari en jeep/bateau",
        "Observation des baleines"
      ],
      images: [
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400&h=300&fit=crop"
      ]
    }
  ];

  const [currentSlides, setCurrentSlides] = useState(
    destinations.map(() => 0)
  );

  const nextSlide = (destIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[destIndex] = (newSlides[destIndex] + 1) % destinations[destIndex].images.length;
      return newSlides;
    });
  };

  const prevSlide = (destIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[destIndex] = newSlides[destIndex] === 0 
        ? destinations[destIndex].images.length - 1 
        : newSlides[destIndex] - 1;
      return newSlides;
    });
  };

  const goToSlide = (destIndex, slideIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[destIndex] = slideIndex;
      return newSlides;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-200 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Nos forfaits de voyage et de tourisme pour les pays africains
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <p className="text-gray-700 mb-4 text-center leading-relaxed">
          L'Afrique centrale, située au-dessus de l'équateur, est une région d'une immense beauté naturelle et d'une grande diversité culturelle. Souvent appelée Afrique centrale, elle comprend neuf pays membres : Angola, Cameroun, République centrafricaine, République démocratique du Congo, République du Congo, Guinée équatoriale, Gabon, Sao Tomé-et-Principe et Tchad.
        </p>
        <p className="text-gray-700 text-center leading-relaxed">
          La région se caractérise par une grande variété de paysages topographiques, allant des déserts arides et des forêts tropicales denses aux côtes vierges. L'Afrique centrale est un creuset de cultures, offrant aux visiteurs une expérience inoubliable de traditions vibrantes et de merveilles naturelles époustouflantes. Qu'il s'agisse d'explorer ses terrains accidentés ou de profiter de ses plages sereines, l'Afrique centrale est une destination de vacances de rêve, pleine d'aventures et de découvertes.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, destIndex) => (
            <div key={destIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image Carousel */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={destination.images[currentSlides[destIndex]]}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Previous Button */}
                <button
                  onClick={() => prevSlide(destIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => nextSlide(destIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {destination.images.map((_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => goToSlide(destIndex, slideIndex)}
                      className={`w-2 h-2 rounded-full transition ${
                        currentSlides[destIndex] === slideIndex 
                          ? 'bg-gray-800' 
                          : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-2 ${destination.color}`}>
                  {destination.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{destination.subtitle}</p>
                <ul className="space-y-2">
                  {destination.reasons.map((reason, idx) => (
                    <li key={idx} className="text-gray-700 text-sm">
                      -{reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Places;