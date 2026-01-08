// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import { 
  useLocation, 
  useNavigate,
  Link 
} from 'react-router-dom';
import { 
  Plane, Calendar, Users, MapPin, Shield, CheckCircle,
  CreditCard, Smartphone, Wallet, ChevronRight, ArrowLeft,
  User, Mail, Phone, Globe, Lock, AlertCircle, Info,
  Clock, Package, Heart, Star, Award, ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Récupérer les données du vol depuis la navigation
  const flight = location.state?.flight || {};
  const bookingData = location.state?.bookingData || {};
  
  // État du formulaire
  const [form, setForm] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: 'CMR',
    
    // Informations voyageurs
    travelers: bookingData.passengers || 1,
    travelersInfo: Array(bookingData.passengers || 1).fill().map(() => ({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      passport: '',
      frequentFlyer: ''
    })),
    
    // Contact d'urgence
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    
    // Préférences
    seatPreference: 'any',
    mealPreference: 'standard',
    specialAssistance: '',
    
    // Extras
    extras: {
      seatSelection: false,
      fastTrack: false,
      loungeAccess: false,
      extraBaggage: false,
      travelInsurance: true,
      carRental: false,
      hotel: false
    },
    
    // Conditions
    acceptTerms: false,
    acceptMarketing: false
  });

  // Traductions
  const content = {
    FR: {
      title: "Réservez votre vol",
      subtitle: "Complétez vos informations pour finaliser la réservation",
      breadcrumb: {
        home: "Accueil",
        flights: "Vols",
        flightDetails: "Détails du vol",
        reservation: "Réservation"
      },
      sections: {
        flightSummary: "Résumé du vol",
        passengerInfo: "Informations des passagers",
        contactInfo: "Informations de contact",
        preferences: "Préférences",
        extras: "Options supplémentaires",
        payment: "Paiement"
      },
      flightDetails: "Détails du vol",
      airline: "Compagnie",
      class: "Classe",
      departure: "Départ",
      arrival: "Arrivée",
      duration: "Durée",
      passengers: "Passagers",
      price: "Prix",
      perPerson: "par personne",
      total: "Total",
      taxes: "Taxes et frais",
      travelerInfo: "Informations voyageur",
      contactInfo: "Informations de contact",
      passengerNumber: "Voyageur",
      personalInfo: "Informations personnelles",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse email",
      phone: "Téléphone",
      nationality: "Nationalité",
      passport: "Numéro de passeport",
      dateOfBirth: "Date de naissance",
      frequentFlyer: "Numéro de programme fidélité",
      emergencyContact: "Contact d'urgence",
      contactName: "Nom du contact",
      relationship: "Relation",
      seatPreference: "Préférence de siège",
      mealPreference: "Préférence de repas",
      specialAssistance: "Assistance spéciale",
      extrasTitle: "Améliorez votre voyage",
      extras: {
        seatSelection: "Sélection de siège",
        seatSelectionDesc: "Choisissez votre siège à l'avance",
        fastTrack: "Fast Track",
        fastTrackDesc: "Accès prioritaire à la sécurité",
        loungeAccess: "Accès salon",
        loungeAccessDesc: "Accès au salon d'aéroport",
        extraBaggage: "Bagage supplémentaire",
        extraBaggageDesc: "+23kg de bagage en soute",
        travelInsurance: "Assurance voyage",
        travelInsuranceDesc: "Protection complète pendant votre voyage",
        carRental: "Location de voiture",
        carRentalDesc: "Voiture à l'arrivée",
        hotel: "Hôtel",
        hotelDesc: "Hébergement à l'arrivée"
      },
      terms: {
        title: "Conditions générales",
        accept: "J'accepte les conditions générales de vente",
        marketing: "J'accepte de recevoir des offres promotionnelles"
      },
      buttons: {
        back: "Retour",
        continue: "Continuer vers le paiement",
        save: "Enregistrer et continuer plus tard",
        calculate: "Calculer le prix"
      },
      paymentMethods: {
        title: "Méthodes de paiement acceptées",
        cards: "Cartes bancaires",
        mobile: "Mobile Money",
        cash: "Paiement en agence"
      },
      security: {
        title: "Paiement sécurisé",
        description: "Vos informations sont protégées par un cryptage SSL 256-bit"
      },
      guarantee: {
        title: "Garantie Global Bush",
        items: [
          "Prix le plus bas garanti",
          "Annulation gratuite 24h avant",
          "Assistance 24h/24",
          "Paiement 100% sécurisé"
        ]
      }
    },
    EN: {
      title: "Book Your Flight",
      subtitle: "Complete your information to finalize the booking",
      breadcrumb: {
        home: "Home",
        flights: "Flights",
        flightDetails: "Flight details",
        reservation: "Reservation"
      },
      sections: {
        flightSummary: "Flight Summary",
        passengerInfo: "Passenger Information",
        contactInfo: "Contact Information",
        preferences: "Preferences",
        extras: "Extra Options",
        payment: "Payment"
      },
      flightDetails: "Flight Details",
      airline: "Airline",
      class: "Class",
      departure: "Departure",
      arrival: "Arrival",
      duration: "Duration",
      passengers: "Passengers",
      price: "Price",
      perPerson: "per person",
      total: "Total",
      taxes: "Taxes and fees",
      travelerInfo: "Traveler Information",
      contactInfo: "Contact Information",
      passengerNumber: "Traveler",
      personalInfo: "Personal Information",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone",
      nationality: "Nationality",
      passport: "Passport Number",
      dateOfBirth: "Date of Birth",
      frequentFlyer: "Frequent Flyer Number",
      emergencyContact: "Emergency Contact",
      contactName: "Contact Name",
      relationship: "Relationship",
      seatPreference: "Seat Preference",
      mealPreference: "Meal Preference",
      specialAssistance: "Special Assistance",
      extrasTitle: "Enhance Your Journey",
      extras: {
        seatSelection: "Seat Selection",
        seatSelectionDesc: "Choose your seat in advance",
        fastTrack: "Fast Track",
        fastTrackDesc: "Priority security access",
        loungeAccess: "Lounge Access",
        loungeAccessDesc: "Airport lounge access",
        extraBaggage: "Extra Baggage",
        extraBaggageDesc: "+23kg checked baggage",
        travelInsurance: "Travel Insurance",
        travelInsuranceDesc: "Complete protection during your trip",
        carRental: "Car Rental",
        carRentalDesc: "Car upon arrival",
        hotel: "Hotel",
        hotelDesc: "Accommodation upon arrival"
      },
      terms: {
        title: "Terms and Conditions",
        accept: "I accept the terms and conditions",
        marketing: "I accept to receive promotional offers"
      },
      buttons: {
        back: "Back",
        continue: "Continue to Payment",
        save: "Save and Continue Later",
        calculate: "Calculate Price"
      },
      paymentMethods: {
        title: "Accepted Payment Methods",
        cards: "Credit/Debit Cards",
        mobile: "Mobile Money",
        cash: "Payment at agency"
      },
      security: {
        title: "Secure Payment",
        description: "Your information is protected by 256-bit SSL encryption"
      },
      guarantee: {
        title: "Global Bush Guarantee",
        items: [
          "Lowest Price Guarantee",
          "Free cancellation 24h before",
          "24/7 Assistance",
          "100% Secure Payment"
        ]
      }
    }
  };

  const t = content[language] || content.FR;

  // Prix calculés
  const basePrice = flight.price || 650;
  const passengers = form.travelers;
  const classMultiplier = {
    economy: 1,
    premium: 1.5,
    business: 2.5,
    first: 4
  }[bookingData.class || 'economy'] || 1;
  
  const extrasPrice = {
    seatSelection: 15,
    fastTrack: 25,
    loungeAccess: 40,
    extraBaggage: 35,
    travelInsurance: 45,
    carRental: 60,
    hotel: 120
  };

  const extrasTotal = Object.entries(form.extras).reduce((total, [key, value]) => {
    return value ? total + (extrasPrice[key] || 0) : total;
  }, 0);

  const subtotal = basePrice * classMultiplier * passengers;
  const taxes = subtotal * 0.18; // 18% de taxes
  const total = subtotal + taxes + extrasTotal;

  // Gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTravelerChange = (index, field, value) => {
    setForm(prev => ({
      ...prev,
      travelersInfo: prev.travelersInfo.map((traveler, i) => 
        i === index ? { ...traveler, [field]: value } : traveler
      )
    }));
  };

  const handleEmergencyContactChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [field]: value
      }
    }));
  };

  const handleExtraToggle = (extra) => {
    setForm(prev => ({
      ...prev,
      extras: {
        ...prev.extras,
        [extra]: !prev.extras[extra]
      }
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!form.acceptTerms) {
      alert(language === 'FR' 
        ? "Veuillez accepter les conditions générales" 
        : "Please accept the terms and conditions");
      return;
    }

    // Préparer les données pour la page de paiement
    const reservationData = {
      flight,
      bookingData,
      form,
      pricing: {
        basePrice,
        passengers,
        classMultiplier,
        extrasTotal,
        subtotal,
        taxes,
        total
      }
    };

    // Rediriger vers la page de paiement
    navigate('/payment', { state: reservationData });
  };

  // Retour à la page précédente
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition flex items-center">
              <span>{t.breadcrumb.home}</span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/vols" className="hover:text-blue-600 transition">
              {t.breadcrumb.flights}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={`/vols/${flight.id}`} className="hover:text-blue-600 transition">
              {t.breadcrumb.flightDetails}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-semibold text-gray-900">{t.breadcrumb.reservation}</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Colonne principale - Formulaire */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
              <p className="text-gray-600">{t.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Résumé du vol */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Plane className="w-6 h-6 text-blue-600 mr-2" />
                  {t.sections.flightSummary}
                </h2>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{flight.airline}</div>
                      <div className="text-sm text-gray-600">
                        {flight.from?.city} ({flight.from?.code}) → {flight.to?.city} ({flight.to?.code})
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {flight.departureDate} • {flight.duration} • {bookingData.class || 'Economy'}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="text-lg font-bold text-blue-600">{basePrice}€</div>
                      <div className="text-sm text-gray-600">{t.perPerson}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations des passagers */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  {t.sections.passengerInfo}
                </h2>

                {form.travelersInfo.map((traveler, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">
                      {t.passengerNumber} {index + 1}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.firstName} *
                        </label>
                        <input
                          type="text"
                          value={traveler.firstName}
                          onChange={(e) => handleTravelerChange(index, 'firstName', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.lastName} *
                        </label>
                        <input
                          type="text"
                          value={traveler.lastName}
                          onChange={(e) => handleTravelerChange(index, 'lastName', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.dateOfBirth} *
                        </label>
                        <input
                          type="date"
                          value={traveler.dateOfBirth}
                          onChange={(e) => handleTravelerChange(index, 'dateOfBirth', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.passport} *
                        </label>
                        <input
                          type="text"
                          value={traveler.passport}
                          onChange={(e) => handleTravelerChange(index, 'passport', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.frequentFlyer}
                      </label>
                      <input
                        type="text"
                        value={traveler.frequentFlyer}
                        onChange={(e) => handleTravelerChange(index, 'frequentFlyer', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Optionnel"
                      />
                    </div>

                    {index < form.travelersInfo.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Informations de contact */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-2" />
                  {t.sections.contactInfo}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.firstName} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.lastName} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.nationality}
                  </label>
                  <select
                    name="nationality"
                    value={form.nationality}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="CMR">Cameroun</option>
                    <option value="FRA">France</option>
                    <option value="USA">États-Unis</option>
                    <option value="GBR">Royaume-Uni</option>
                    <option value="DEU">Allemagne</option>
                  </select>
                </div>
              </div>

              {/* Contact d'urgence */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-2" />
                  {t.emergencyContact}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contactName} *
                    </label>
                    <input
                      type="text"
                      value={form.emergencyContact.name}
                      onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.phone} *
                    </label>
                    <input
                      type="tel"
                      value={form.emergencyContact.phone}
                      onChange={(e) => handleEmergencyContactChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.relationship} *
                  </label>
                  <select
                    value={form.emergencyContact.relationship}
                    onChange={(e) => handleEmergencyContactChange('relationship', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionnez une relation</option>
                    <option value="parent">Parent</option>
                    <option value="spouse">Conjoint(e)</option>
                    <option value="sibling">Frère/Sœur</option>
                    <option value="friend">Ami(e)</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              {/* Options supplémentaires */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  {t.extrasTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(t.extras).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition">
                      <input
                        type="checkbox"
                        id={`extra-${key}`}
                        checked={form.extras[key]}
                        onChange={() => handleExtraToggle(key)}
                        className="mt-1 w-5 h-5 text-blue-600 rounded"
                      />
                      <div className="flex-1">
                        <label htmlFor={`extra-${key}`} className="font-medium text-gray-900 cursor-pointer">
                          {value}
                        </label>
                        <p className="text-sm text-gray-600 mt-1">{value}Desc</p>
                        <div className="text-sm font-medium text-blue-600 mt-2">
                          +{extrasPrice[key]}€ {t.perPerson}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions générales */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-2" />
                  {t.terms.title}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={form.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded"
                      required
                    />
                    <label htmlFor="acceptTerms" className="text-gray-700">
                      {t.terms.accept}
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptMarketing"
                      name="acceptMarketing"
                      checked={form.acceptMarketing}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded"
                    />
                    <label htmlFor="acceptMarketing" className="text-gray-700">
                      {t.terms.marketing}
                    </label>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{t.security.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{t.security.description}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t.buttons.back}
                </button>
                
                <button
                  type="submit"
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2"
                >
                  {t.buttons.continue}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar - Récapitulatif */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Récapitulatif de prix */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.total}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.passengers}</span>
                    <span className="font-medium">{passengers} × {basePrice}€</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.class}</span>
                    <span className="font-medium">×{classMultiplier}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.taxes}</span>
                    <span className="font-medium">{taxes.toFixed(2)}€</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.extrasTitle}</span>
                    <span className="font-medium">+{extrasTotal}€</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>{t.total}</span>
                      <span className="text-blue-600">{total.toFixed(2)}€</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthodes de paiement */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.paymentMethods.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">{t.paymentMethods.cards}</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Smartphone className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">{t.paymentMethods.mobile}</div>
                      <div className="text-sm text-gray-600">Orange Money, MTN Mobile Money</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Wallet className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium">{t.paymentMethods.cash}</div>
                      <div className="text-sm text-gray-600">Dans nos agences</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.guarantee.title}</h3>
                
                <div className="space-y-3">
                  {t.guarantee.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Besoin d'aide ?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Notre équipe est disponible 24h/24 pour vous assister
                </p>
                <button className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
                  Contactez-nous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReservationPage;