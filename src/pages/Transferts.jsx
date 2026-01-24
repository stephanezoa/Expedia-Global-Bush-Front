import React, { useState } from "react";
import { Plane, Building2, Users, Car, Clock, Shield, Star, MapPin, ArrowRight, Check } from "lucide-react";
import Footer from "../components/Footer";

const Transferts = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    vehicleType: "Standard",
    passengers: "1"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réservation initiée :", formData);
    alert("Votre réservation est en cours de traitement ! 🚀");
  };

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Transferts Aéroport",
      description: "Service fiable de prise en charge et de dépôt vers tous les principaux aéroports",
      features: ["Suivi des vols", "Service Meet & Greet", "Disponibilité 24/7"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Transferts Hôtel",
      description: "Transferts confortables entre hôtels et toute destination",
      features: ["Service porte-à-porte", "Assistance bagages", "Arrêts multiples"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Transport de Groupe",
      description: "Véhicules spacieux pour familles et groupes corporatifs",
      features: ["Jusqu'à 8 passagers", "Espace bagages supplémentaire", "Chauffeurs professionnels"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transferts en Ville",
      description: "Transport point à point à travers la ville",
      features: ["Tarification fixe", "Réservation rapide", "Véhicules premium"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Réservez en Ligne",
      description: "Entrez vos détails de prise en charge et de destination. Choisissez votre type de véhicule et l'heure préférée."
    },
    {
      number: "02",
      title: "Recevez la Confirmation",
      description: "Recevez une confirmation instantanée avec les détails du chauffeur et les informations du véhicule par email et SMS."
    },
    {
      number: "03",
      title: "Profitez de Votre Trajet",
      description: "Votre chauffeur vous rencontrera à l'emplacement désigné. Détendez-vous et profitez d'un voyage confortable."
    }
  ];

  const testimonials = [
    {
      text: "Service exceptionnel ! Le chauffeur m'attendait à l'arrivée avec une pancarte. Trajet très professionnel et confortable jusqu'à mon hôtel.",
      author: "Sarah Mitchell",
      route: "Aéroport → Hôtel Centre-ville"
    },
    {
      text: "Je les ai utilisés pour nos vacances en famille. Le véhicule était impeccable et suffisamment spacieux pour tous nos bagages. Hautement recommandé !",
      author: "James Chen",
      route: "Hôtel → Station balnéaire"
    },
    {
      text: "Meilleur service de transfert que j'ai utilisé. Ponctuel, professionnel et excellente communication tout au long. Je réserverai certainement à nouveau.",
      author: "Emma Rodriguez",
      route: "Quartier d'affaires → Aéroport"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services de Transfert Premium
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Aéroport • Hôtel • Ville
          </p>
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Découvrez un transport fluide avec des chauffeurs professionnels, des véhicules de luxe et une fiabilité inégalée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Réservez Votre Transfert <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all">
              Voir les Tarifs
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100">Service 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100">Entièrement Assuré</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100">5 Étoiles</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100">Suivi en Direct</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services de Transfert
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions de transport professionnelles adaptées à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Réservez Votre Transfert
              </h2>
              <p className="text-lg text-gray-600">
                Remplissez le formulaire ci-dessous pour commencer votre réservation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lieu de Prise en Charge
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Ex: Aéroport International"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Ex: Hôtel Centre-ville"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Heure
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type de Véhicule
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option>Standard</option>
                    <option>Premium</option>
                    <option>Luxe</option>
                    <option>Van (Groupe)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de Passagers
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5-8</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Confirmer la Réservation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comment Ça Marche
            </h2>
            <p className="text-xl text-gray-600">
              Processus de réservation simple, rapide et sans tracas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-blue-300 w-12 h-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-600">
              La confiance de milliers de voyageurs satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900 mb-1">{testimonial.author}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.route}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Réserver Votre Transfert ?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Découvrez des services de transport premium avec des chauffeurs professionnels et des véhicules de luxe
          </p>
          
          <button 
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Commencer Maintenant
          </button>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Pas de frais cachés</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Confirmation instantanée</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transferts;