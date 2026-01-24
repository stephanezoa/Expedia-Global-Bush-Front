import React from "react";
import Footer from "../components/Footer";

const Market = () => {
  const recommendedServices = [
    {
      title: "Transferts Aéroportuaires",
      description: "Réservez des transferts aéroportuaires fiables vers votre destination. Chauffeurs professionnels, véhicules confortables.",
      price: "15,000 CFA",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      buttonText: "Réserver un Transfert",
      icon: "🚐"
    },
    {
      title: "Assurance Voyage",
      description: "Protection complète pour vos voyages. Urgences médicales, annulations de voyage et bagages perdus couverts.",
      price: "9,000 CFA",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      buttonText: "Obtenir une Couverture",
      icon: "🛡️"
    }
  ];

  const tripEssentials = [
    {
      title: "Location de Voitures",
      description: "Explorez à vos propres conditions avec des options de location de voitures flexibles dans le monde entier.",
      price: "18,000 CFA/jour",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
      buttonText: "Louer une Voiture",
      icon: "🚗"
    },
    {
      title: "Plans de Données eSIM",
      description: "Restez connecté dans le monde entier avec activation instantanée eSIM dans plus de 150 pays.",
      price: "3,000 CFA",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=600&h=400&fit=crop",
      buttonText: "Obtenir eSIM",
      icon: "📶"
    },
    {
      title: "Hôtels & Séjours",
      description: "Trouvez votre hébergement parfait, des auberges économiques aux complexes de luxe.",
      price: "30,000 CFA/nuit",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      buttonText: "Réserver un Séjour",
      icon: "🏨"
    },
    {
      title: "Salon d'Aéroport",
      description: "Reposez-vous et rechargez-vous avec notre sélection organisée de séjours confortables.",
      price: "30,000 CFA/nuit",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      buttonText: "Réserver Maintenant",
      icon: "✈️"
    },
    {
      title: "Réservation de Billets d'Avion",
      description: "Services de réservation de vols rapides et fiables pour demandes de visa, voyages d'affaires, vacances et voyages d'urgence.",
      price: "Devis Personnalisés",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      buttonText: "Obtenir Réservation de Vol",
      icon: "🎫"
    },
    {
      title: "Réservations d'Hôtels",
      description: "Profitez d'un séjour confortable avec notre réseau de confiance d'hôtels dans le monde entier. Des chambres économiques aux suites de luxe.",
      price: "Forfaits Disponibles",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop",
      buttonText: "Obtenir Réservation d'Hôtel",
      icon: "🏩"
    }
  ];

  const experiences = [
    {
      title: "Forfaits Vacances",
      description: "Forfaits vacances tout compris vers des destinations paradisiaques. Vols, hôtels et activités inclus.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      buttonText: "Parcourir les Forfaits",
      icon: "🏝️"
    },
    {
      title: "Activités & Tours",
      description: "Découvrez des expériences locales, des visites guidées et des activités d'aventure dans le monde entier.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      buttonText: "Explorer les Activités",
      icon: "🎟️"
    },
    {
      title: "Voyage de Mariage",
      description: "Planifiez votre mariage de destination ou lune de miel avec nos services de voyage spécialisés.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      buttonText: "Planifier le Mariage",
      icon: "💒"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Le service de transfert aéroport était exceptionnel ! Chauffeur professionnel, voiture propre et à l'heure. A rendu mon voyage à Paris beaucoup plus fluide.",
      time: "Il y a 2 semaines"
    },
    {
      name: "Michael Chen",
      location: "Singapour",
      rating: 5,
      comment: "J'ai réservé une assurance voyage via la marketplace et j'ai dû l'utiliser lorsque mon vol a été annulé. Le processus de réclamation était super facile et rapide. Je recommande vivement !",
      time: "Il y a 1 mois"
    },
    {
      name: "Emma Wilson",
      location: "Londres, UK",
      rating: 5,
      comment: "Le forfait vacances à Bali était incroyable ! Tout était bien organisé - vols, hôtel et activités. Meilleure expérience de planification de vacances.",
      time: "Il y a 3 semaines"
    }
  ];

  const specialServices = [
    {
      title: "Voyage d'Affaires",
      description: "Solutions de voyage d'entreprise avec support dédié et options de réservation flexibles.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      buttonText: "En Savoir Plus",
      icon: "💼"
    },
    {
      title: "Tours Photographiques",
      description: "Expéditions photographiques guidées vers les lieux les plus photogéniques du monde.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
      buttonText: "Voir les Tours",
      icon: "📷"
    },
    {
      title: "Voyage de Groupe",
      description: "Tarifs spéciaux et assistance à la planification pour les voyages de groupe et les vacances en famille.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      buttonText: "Obtenir un Devis",
      icon: "🎁"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-blue-200">Marketplace</span>
            <br />
            <span className="text-white">Où le voyage devient vraiment le vôtre</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour votre voyage parfait, tout en un seul endroit. 
            Des transferts aux activités, nous vous avons couvert.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-200">Services Disponibles</div>
            </div>
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-blue-200">Voyageurs Satisfaits</div>
            </div>
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-blue-200">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Recommended for you */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Recommandé pour vous
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nos meilleures améliorations de confort sélectionnées spécialement pour votre prochain voyage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recommendedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-white rounded-full p-4 text-3xl shadow-lg">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">À PARTIR DE</p>
                      <p className="text-3xl font-bold text-blue-600">{service.price}</p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trip essentials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Essentiels du voyage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prêt à voyager en quelques minutes avec nos services essentiels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tripEssentials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 text-xl shadow-md">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-gray-500">À PARTIR DE</p>
                      <p className="text-xl font-bold text-blue-600">{item.price}</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unforgettable experiences */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Expériences inoubliables
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Créez des souvenirs durables avec nos expériences de voyage uniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 text-xl shadow-md">
                    {exp.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{exp.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                    {exp.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customer stories */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Témoignages clients
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Découvrez ce que nos voyageurs disent de leurs expériences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <p className="text-sm text-gray-500 text-right">{testimonial.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special services */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Services spéciaux
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Adaptés à vos besoins spécifiques de voyage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:border-blue-300 transition-all">
                <div className="relative h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 text-xl shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Market;