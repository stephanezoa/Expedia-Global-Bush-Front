import React, { useState } from "react";
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  Camera, 
  Shield, 
  Globe, 
  Heart, 
  ChevronRight,
  Star
} from "lucide-react";

const Gorilletours = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Aperçu", icon: <Globe size={18} /> },
    { id: "itinerary", label: "Itinéraire", icon: <MapPin size={18} /> },
    { id: "dates", label: "Dates", icon: <CalendarDays size={18} /> },
    { id: "gallery", label: "Galerie", icon: <Camera size={18} /> },
    { id: "why", label: "Pourquoi nous", icon: <Star size={18} /> },
  ];

  const tourHighlights = [
    { icon: <Shield />, text: "Guidage par experts certifiés" },
    { icon: <Heart />, text: "Tourisme responsable et durable" },
    { icon: <Users />, text: "Groupes limités à 6 personnes" },
    { icon: <Camera />, text: "Photographie autorisée (sans flash)" },
  ];

  const itineraryDays = [
    {
      day: "Jour 1",
      title: "Arrivée et accueil",
      description: "Arrivée à Douala, transfert privé vers l'hôtel 4* et briefing d'accueil",
    },
    {
      day: "Jour 2",
      title: "Route vers la forêt tropicale",
      description: "Trajet vers le Sud-Cameroun avec arrêt culturel et installation en lodge écologique",
    },
    {
      day: "Jour 3",
      title: "Tracking des gorilles",
      description: "Randonnée guidée dans la forêt tropicale, observation des gorilles et retour au camp",
    },
    {
      day: "Jour 4",
      title: "Immersion culturelle",
      description: "Rencontre avec les communautés locales et découverte des traditions ancestrales",
    },
    {
      day: "Jour 5",
      title: "Retour et départ",
      description: "Petit-déjeuner et transfert vers l'aéroport de Douala",
    },
  ];

  const galleryImages = [
    { id: 1, alt: "Gorille dans son habitat naturel" },
    { id: 2, alt: "Forêt tropicale du Cameroun" },
    { id: 3, alt: "Communauté locale" },
    { id: 4, alt: "Équipe de guides experts" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header avec image d'arrière-plan */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Gorille du Cameroun Tours
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Expedition Exclusive d'Observation des Gorilles
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Star className="mr-2" fill="white" />
            <span>Expérience Certifiée Écotourisme</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-500">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Plongez au cœur d'une <span className="font-semibold text-blue-600">aventure exceptionnelle</span> dans les forêts tropicales du Cameroun, sanctuaire des gorilles des plaines de l'Ouest. Notre expédition exclusive combine <span className="font-semibold text-blue-600">observation scientifique</span>, <span className="font-semibold text-blue-600">conservation active</span> et <span className="font-semibold text-blue-600">immersion culturelle authentique</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {tourHighlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-gray-800 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-t-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-lg p-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Expédition Gorilles du Cameroun</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cette expédition de 5 jours vous conduit dans les zones protégées du Parc National de Campo Ma'an, 
                  où nos guides spécialisés vous accompagneront pour rencontrer les gorilles dans le plus grand 
                  respect des protocoles de conservation.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-blue-800 mb-3 text-lg">🌿 Engagement Écologique</h3>
                    <p>15% du prix de votre voyage est reversé aux programmes de conservation des gorilles.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-blue-800 mb-3 text-lg">👥 Impact Communautaire</h3>
                    <p>Nous travaillons en partenariat avec les communautés locales pour un tourisme équitable.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Itinéraire Détaillé</h2>
                <div className="space-y-6">
                  {itineraryDays.map((item, index) => (
                    <div key={index} className="flex items-start border-l-4 border-blue-400 pl-6 py-4 hover:bg-blue-50 rounded-r-lg transition-colors">
                      <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg min-w-[80px] text-center">
                        {item.day}
                      </div>
                      <div className="ml-6">
                        <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <ChevronRight className="ml-auto text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "dates" && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Dates de Départ</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Calendrier 2024</h3>
                    <div className="space-y-3">
                      {[
                        "15-19 Janvier (Groupe confirmé)",
                        "12-16 Février (Disponible)",
                        "11-15 Mars (Disponible)",
                        "8-12 Avril (Limité)",
                        "13-17 Mai (Disponible)",
                      ].map((date, idx) => (
                        <div key={idx} className="flex items-center p-3 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                          <CalendarDays className="text-blue-600 mr-3" size={20} />
                          <span className="font-medium">{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-900 text-white p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">💡 Information Importante</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">✓</div>
                        <span>Période idéale : Novembre à Mars</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">✓</div>
                        <span>Départs privés disponibles sur demande</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">✓</div>
                        <span>Réservation recommandée 3 mois à l'avance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "gallery" && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Galerie d'Expériences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {galleryImages.map((img) => (
                    <div key={img.id} className="relative h-64 rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-700/40 group-hover:opacity-90 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4 text-white font-medium">
                        {img.alt}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 italic border-l-4 border-blue-300 pl-4 py-2">
                  Toutes nos photos sont prises par nos guides certifiés, dans le respect strict des distances de sécurité avec les animaux.
                </p>
              </div>
            )}

            {activeTab === "why" && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Pourquoi Choisir Notre Expédition ?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-blue-800 text-lg mb-3">🏆 Expertise Unique</h3>
                      <p className="text-gray-700">
                        Nos guides sont formés par le WWF et disposent de plus de 10 ans d'expérience en tracking de gorilles.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-blue-800 text-lg mb-3">🌍 Impact Positif</h3>
                      <p className="text-gray-700">
                        Votre participation finance directement la protection des gorilles et le développement des communautés locales.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-blue-700 rounded-full p-2 mr-4">100%</div>
                        <span>Respect des protocoles internationaux de conservation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-blue-700 rounded-full p-2 mr-4">24/7</div>
                        <span>Assistance médicale et sécurité sur place</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-blue-700 rounded-full p-2 mr-4">6 max</div>
                        <span>Participants par groupe pour minimiser l'impact</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section de contact/CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Prêt pour l'Aventure ?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour une expérience transformatrice au cœur de la forêt camerounaise. 
            Contactez-nous pour recevoir notre brochure détaillée et discuter de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Demander la Brochure
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gorilletours;