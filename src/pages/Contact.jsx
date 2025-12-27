// src/pages/Contact.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Phone, Mail, MessageCircle, Clock,
  Shield, Hotel, Plane, Car,
  Train, MapPin, Headphones, HelpCircle,
  CheckCircle, AlertCircle, Users, Globe,
  Send, Award, Heart, Coffee
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "general",
    bookingReference: "",
    message: "",
    urgency: "normal"
  });

  // Contenu bilingue
  const content = {
    FR: {
      // Hero
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour vous soutenir 24h/24 et 7j/7",
      
      // Introduction
      intro: "Chez **Global Bush Travel**, votre voyage est notre priorité. Que vous ayez besoin d'assistance avant, pendant ou après votre voyage, notre équipe de support client dévouée est disponible 24h/24 via chat et téléphone pour garantir une expérience de voyage sans accroc.",
      
      // Tabs
      tabs: [
        { id: "general", name: "Général", icon: <HelpCircle className="w-5 h-5" /> },
        { id: "booking", name: "Réservations", icon: <Hotel className="w-5 h-5" /> },
        { id: "emergency", name: "Urgence", icon: <AlertCircle className="w-5 h-5" /> },
        { id: "claim", name: "Réclamation", icon: <Shield className="w-5 h-5" /> }
      ],
      
      // Services de réservation
      bookingServices: {
        title: "Services de Réservation & Circonstances Spéciales",
        content: "Nous comprenons que des situations imprévues surviennent. Si vous devez annuler en raison d'urgences médicales imprévues (maladie, hospitalisation ou deuil familial), veuillez soumettre votre demande d'annulation avec les documents justificatifs dans un délai d'une semaine. Notre équipe travaillera avec diligence pour vous aider à obtenir la meilleure résolution possible."
      },
      
      // Assistance d'urgence
      emergency: {
        title: "Assistance d'Urgence",
        content: "Si vous rencontrez des perturbations de voyage—**bagages ou pièce d'identité perdus, maladie, accidents ou autres urgences**—notre **support d'urgence 24h/24** est prêt à fournir une aide immédiate pour remettre votre voyage sur les rails.",
        list: [
          "Bagages perdus ou volés",
          "Maladie ou accident pendant le voyage",
          "Problèmes de documents d'identité",
          "Annulations de dernière minute",
          "Crise familiale"
        ]
      },
      
      // Politique d'indemnisation
      compensationPolicy: {
        title: "Politique d'Indemnisation Avancée",
        content: "Si un problème survient de notre faute, Global Bush Travel s'engage à enquêter rapidement et à fournir une **indemnisation avancée** le cas échéant, garantissant votre tranquillité d'esprit tout au long de votre voyage."
      },
      
      // Garantie Hôtels
      hotelGuarantee: {
        title: "Garantie Hôtels & Hébergements",
        items: [
          {
            title: "Modifications de Réservation",
            content: "Si votre réservation d'hôtel confirmée est modifiée ou indisponible, nous travaillerons en étroite collaboration avec l'établissement pour organiser un hébergement équivalent ou meilleur **sans frais supplémentaires** pour vous."
          },
          {
            title: "Pas de Chambre à l'Arrivée",
            content: "Si aucune chambre n'est disponible à l'arrivée, contactez-nous immédiatement. Nous coordonnerons des hébergements alternatifs de même standing à proximité et couvrirons les différences de prix jusqu'au coût de votre première nuit d'origine."
          },
          {
            title: "Indemnisation",
            content: "Les réclamations vérifiées seront traitées rapidement, veuillez conserver toutes les factures et reçus de paiement."
          }
        ],
        note: "Veuillez noter que nos conditions générales détaillées de garantie de chambre sont disponibles sur demande."
      },
      
      // Garantie Vols
      flightGuarantee: {
        title: "Garantie Vols & Voyages",
        items: [
          {
            title: "Garantie de Prix & Réservation",
            content: "Nous garantissons le prix de votre vol après confirmation de paiement et vous indemniserons si des erreurs de notre part causent des problèmes de billet."
          },
          {
            title: "Perturbations de Vol",
            content: "Si vous ratez votre vol de notre faute, nous vous soutiendrons avec une indemnisation, y compris des remboursements ou des billets de remplacement le cas échéant."
          },
          {
            title: "Forfaits Vol + Hôtel",
            content: "L'annulation gratuite des réservations d'hôtel est disponible si vous ne pouvez pas arriver en raison d'annulations ou de retards de vol indépendants de votre volonté."
          },
          {
            title: "Réservations Train & Location de Voiture",
            content: "Nous nous efforçons de garantir votre réservation et aiderons et indemniserons en cas de défaillance de service."
          }
        ]
      },
      
      // Transfers & Tours
      transfersTours: {
        title: "Transferts Aéroport & Visites",
        items: [
          {
            title: "Transferts Aéroport",
            content: "Si votre chauffeur arrive en retard ou si votre service ne peut être fourni, nous offrons une indemnisation ou un remboursement complet plus une indemnisation supplémentaire le cas échéant."
          },
          {
            title: "Visites & Attractions",
            content: "Si vous rencontrez des problèmes avec vos billets réservés de notre faute, vous pouvez acheter des billets d'entrée directement et recevoir un remboursement complet plus une indemnisation."
          }
        ]
      },
      
      // Contact Info
      contactInfo: {
        title: "Comment Nous Contacter",
        subtitle: "Pour toute demande ou assistance, notre équipe de support client dévouée n'est qu'à un message ou un appel.",
        channels: [
          {
            name: "Chat en Direct",
            value: "Disponible 24h/24 sur notre site",
            icon: <MessageCircle className="w-6 h-6" />,
            color: "text-green-600 bg-green-50"
          },
          {
            name: "Téléphone",
            value: "(+237) 677 24 66 24",
            icon: <Phone className="w-6 h-6" />,
            color: "text-blue-600 bg-blue-50"
          },
          {
            name: "Email",
            value: "info@globalbushtratour.com",
            icon: <Mail className="w-6 h-6" />,
            color: "text-purple-600 bg-purple-50"
          },
          {
            name: "Support 24/7",
            value: "Assistance d'urgence disponible",
            icon: <Clock className="w-6 h-6" />,
            color: "text-orange-600 bg-orange-50"
          }
        ]
      },
      
      // Mission
      mission: "Votre satisfaction est notre mission. Nous nous engageons à fournir des solutions rapides et efficaces pour que vous puissiez voyager en toute confiance.",
      
      // Form labels
      formLabels: {
        title: "Envoyez-nous un Message",
        name: "Nom complet *",
        email: "Adresse email *",
        phone: "Numéro de téléphone",
        subject: "Sujet *",
        inquiryType: "Type de demande",
        bookingRef: "Référence de réservation",
        message: "Message *",
        urgency: "Niveau d'urgence",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        placeholderName: "Votre nom",
        placeholderEmail: "votre@email.com",
        placeholderPhone: "+33 1 23 45 67 89",
        placeholderSubject: "Sujet de votre message",
        placeholderMessage: "Décrivez votre demande en détail...",
        placeholderBookingRef: "Ex: GB-2024-12345"
      },
      
      // Urgency levels
      urgencyLevels: [
        { value: "low", label: "Faible", color: "bg-green-100 text-green-800" },
        { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-800" },
        { value: "high", label: "Élevé", color: "bg-orange-100 text-orange-800" },
        { value: "emergency", label: "Urgence", color: "bg-red-100 text-red-800" }
      ],
      
      // Inquiry types
      inquiryTypes: [
        { value: "general", label: "Demande générale" },
        { value: "booking", label: "Réservation" },
        { value: "modification", label: "Modification" },
        { value: "cancellation", label: "Annulation" },
        { value: "complaint", label: "Plainte" },
        { value: "emergency", label: "Situation d'urgence" },
        { value: "feedback", label: "Retour d'expérience" }
      ]
    },
    EN: {
      title: "Contact Us",
      subtitle: "We're Here to Support You 24/7",
      
      intro: "At **Global Bush Travel**, your journey is our priority. Whether you need assistance before, during, or after your trip, our dedicated customer support team is available around the clock via chat and phone to ensure a seamless travel experience.",
      
      tabs: [
        { id: "general", name: "General", icon: <HelpCircle className="w-5 h-5" /> },
        { id: "booking", name: "Booking", icon: <Hotel className="w-5 h-5" /> },
        { id: "emergency", name: "Emergency", icon: <AlertCircle className="w-5 h-5" /> },
        { id: "claim", name: "Claim", icon: <Shield className="w-5 h-5" /> }
      ],
      
      bookingServices: {
        title: "Booking Services & Special Circumstances",
        content: "We understand that unexpected situations happen. If you need to cancel due to unforeseen medical emergencies (such as illness, hospitalization, or family bereavement), please submit your cancellation request with supporting documents within one week. Our team will work diligently to assist you in negotiating the best possible resolution."
      },
      
      emergency: {
        title: "Emergency Assistance",
        content: "Should you experience any travel disruptions—**lost baggage or ID, illness, accidents, or other emergencies**—our **24/7 emergency support** is ready to provide immediate help to get your trip back on track.",
        list: [
          "Lost or stolen luggage",
          "Illness or accident during travel",
          "ID document issues",
          "Last-minute cancellations",
          "Family emergency"
        ]
      },
      
      compensationPolicy: {
        title: "Advance Compensation Policy",
        content: "If an issue arises due to our fault, Global Bush Travel commits to investigating promptly and providing **advance compensation** when appropriate, ensuring your peace of mind throughout your journey."
      },
      
      hotelGuarantee: {
        title: "Hotels & Accommodations Guarantee",
        items: [
          {
            title: "Booking Changes",
            content: "If your confirmed hotel booking is changed or unavailable, we'll work closely with the property to arrange an equivalent or better accommodation at **no additional cost** to you."
          },
          {
            title: "No Room on Arrival",
            content: "Should no room be available upon check-in, contact us immediately. We'll coordinate alternative accommodations of the same standard nearby and cover any price differences up to the cost of your original first night's stay."
          },
          {
            title: "Compensation",
            content: "Verified claims will be processed promptly, so please retain all invoices and payment receipts."
          }
        ],
        note: "Please note our detailed room guarantee terms and conditions are available upon request."
      },
      
      flightGuarantee: {
        title: "Flight & Travel Guarantees",
        items: [
          {
            title: "Price & Booking Assurance",
            content: "We guarantee the price of your flight after payment confirmation and will compensate you if errors on our part cause ticket issues."
          },
          {
            title: "Flight Disruptions",
            content: "If you miss your flight due to our fault, we will support you with compensation, including refunds or replacement tickets where applicable."
          },
          {
            title: "Flight + Hotel Packages",
            content: "Free cancellation of hotel bookings is available if you cannot arrive due to flight cancellations or delays beyond your control."
          },
          {
            title: "Train and Car Rental Bookings",
            content: "We strive to guarantee your booking and will assist and compensate where service faults occur."
          }
        ]
      },
      
      transfersTours: {
        title: "Airport Transfers & Tours",
        items: [
          {
            title: "Airport Transfers",
            content: "If your driver arrives late or your service cannot be provided, we offer compensation or a full refund plus additional compensation as appropriate."
          },
          {
            title: "Tours & Attractions",
            content: "If you encounter issues with your booked tickets due to our fault, you can purchase entrance tickets directly and receive a full refund plus compensation."
          }
        ]
      },
      
      contactInfo: {
        title: "How to Reach Us",
        subtitle: "For any inquiries or assistance, our dedicated customer support team is just a message or call away.",
        channels: [
          {
            name: "Live Chat",
            value: "Available 24/7 on our website",
            icon: <MessageCircle className="w-6 h-6" />,
            color: "text-green-600 bg-green-50"
          },
          {
            name: "Phone",
            value: "(+237) 677 24 66 24",
            icon: <Phone className="w-6 h-6" />,
            color: "text-blue-600 bg-blue-50"
          },
          {
            name: "Email",
            value: "info@globalbushtratour.com",
            icon: <Mail className="w-6 h-6" />,
            color: "text-purple-600 bg-purple-50"
          },
          {
            name: "24/7 Support",
            value: "Emergency assistance available",
            icon: <Clock className="w-6 h-6" />,
            color: "text-orange-600 bg-orange-50"
          }
        ]
      },
      
      mission: "Your satisfaction is our mission. We're committed to providing timely, effective solutions so you can travel with confidence.",
      
      formLabels: {
        title: "Send Us a Message",
        name: "Full Name *",
        email: "Email Address *",
        phone: "Phone Number",
        subject: "Subject *",
        inquiryType: "Inquiry Type",
        bookingRef: "Booking Reference",
        message: "Message *",
        urgency: "Urgency Level",
        submit: "Send Message",
        submitting: "Sending...",
        placeholderName: "Your name",
        placeholderEmail: "your@email.com",
        placeholderPhone: "+1 234 567 8900",
        placeholderSubject: "Message subject",
        placeholderMessage: "Describe your inquiry in detail...",
        placeholderBookingRef: "Ex: GB-2024-12345"
      },
      
      urgencyLevels: [
        { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
        { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-800" },
        { value: "high", label: "High", color: "bg-orange-100 text-orange-800" },
        { value: "emergency", label: "Emergency", color: "bg-red-100 text-red-800" }
      ],
      
      inquiryTypes: [
        { value: "general", label: "General Inquiry" },
        { value: "booking", label: "Booking" },
        { value: "modification", label: "Modification" },
        { value: "cancellation", label: "Cancellation" },
        { value: "complaint", label: "Complaint" },
        { value: "emergency", label: "Emergency" },
        { value: "feedback", label: "Feedback" }
      ]
    }
  };

  const t = content[language];

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    // Simulation d'envoi
    alert(language === "FR" 
      ? "Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais." 
      : "Thank you for your message! Our team will get back to you shortly."
    );
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      inquiryType: "general",
      bookingReference: "",
      message: "",
      urgency: "normal"
    });
  };

  // Rendu du contenu par onglet
  const renderTabContent = () => {
    switch(activeTab) {
      case "booking":
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                <Hotel className="w-6 h-6 mr-2" />
                {t.bookingServices.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t.bookingServices.content}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-blue-600" />
                  {t.flightGuarantee.title}
                </h4>
                <ul className="space-y-3">
                  {t.flightGuarantee.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="font-semibold">{item.title}:</strong> {item.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Hotel className="w-5 h-5 mr-2 text-purple-600" />
                  {t.hotelGuarantee.title}
                </h4>
                <ul className="space-y-3">
                  {t.hotelGuarantee.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="font-semibold">{item.title}:</strong> {item.content}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">{t.hotelGuarantee.note}</p>
              </div>
            </div>
          </div>
        );
        
      case "emergency":
        return (
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                {t.emergency.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t.emergency.content}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.emergency.list.map((item, index) => (
                  <li key={index} className="flex items-center bg-white px-4 py-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-3">{language === "FR" ? "Contacts d'Urgence" : "Emergency Contacts"}</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Phone className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      (+237) 677 24 66 24
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === "FR" ? "Support d'urgence 24/7" : "24/7 Emergency Support"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Mail className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      emergency@globalbushtratour.com
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === "FR" ? "Réponse sous 1 heure" : "Response within 1 hour"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "claim":
        return (
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                {t.compensationPolicy.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{t.compensationPolicy.content}</p>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">{language === "FR" ? "Types de Réclamations" : "Claim Types"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center mb-2">
                      <Hotel className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold">{language === "FR" ? "Hébergement" : "Accommodation"}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" ? "Problèmes de chambre, surréservation, services manquants" : "Room issues, overbooking, missing services"}
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center mb-2">
                      <Plane className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold">{language === "FR" ? "Vols" : "Flights"}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" ? "Retards, annulations, surréservation, bagages perdus" : "Delays, cancellations, overbooking, lost luggage"}
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center mb-2">
                      <Car className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold">{language === "FR" ? "Transferts" : "Transfers"}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" ? "Retard du chauffeur, service non fourni" : "Driver delay, service not provided"}
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold">{language === "FR" ? "Visites" : "Tours"}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" ? "Billets non valides, guide absent" : "Invalid tickets, guide absent"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold text-gray-900 mb-4">{language === "FR" ? "Processus de Réclamation" : "Claims Process"}</h4>
              <div className="space-y-4">
                {[
                  language === "FR" ? "1. Contactez-nous sous 48h après l'incident" : "1. Contact us within 48 hours of the incident",
                  language === "FR" ? "2. Fournissez les documents justificatifs" : "2. Provide supporting documents",
                  language === "FR" ? "3. Notre équipe évaluera votre réclamation" : "3. Our team will assess your claim",
                  language === "FR" ? "4. Vous recevrez une réponse sous 5 jours ouvrables" : "4. You'll receive a response within 5 business days",
                  language === "FR" ? "5. Indemnisation ou solution proposée" : "5. Compensation or solution offered"
                ].map((step, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default: // general
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.intro.replace("**", "").replace("**", "")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  {language === "FR" ? "Horaires de Support" : "Support Hours"}
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">{language === "FR" ? "Chat & Email" : "Chat & Email"}</span>
                    <span className="font-semibold">24/7</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">{language === "FR" ? "Téléphone" : "Phone"}</span>
                    <span className="font-semibold">6h-22h (GMT)</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="text-gray-600">{language === "FR" ? "Urgence" : "Emergency"}</span>
                    <span className="font-semibold text-red-600">24/7</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  {language === "FR" ? "Notre Équipe" : "Our Team"}
                </h4>
                <p className="text-gray-700 mb-4">
                  {language === "FR" 
                    ? "Notre équipe multilingue est composée d'experts du voyage qui comprennent vos besoins et répondent dans votre langue." 
                    : "Our multilingual team consists of travel experts who understand your needs and respond in your language."}
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">🇫🇷 Français</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">🇬🇧 English</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">🇪🇸 Español</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-purple-700 py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full">
              <Headphones className="w-5 h-5 mr-2" />
              {language === "FR" ? "Support 24/7" : "24/7 Support"}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full">
              <Globe className="w-5 h-5 mr-2" />
              {language === "FR" ? "Assistance mondiale" : "Global Assistance"}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full">
              <Award className="w-5 h-5 mr-2" />
              {language === "FR" ? "Garantie de satisfaction" : "Satisfaction Guarantee"}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche: Contact info et formulaire */}
          <div className="lg:col-span-2 space-y-8">
            {/* Onglets */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  {t.tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                      }`}
                    >
                      {tab.icon}
                      <span className="ml-2">{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Contenu des onglets */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>

            {/* Info de contact */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactInfo.title}</h2>
              <p className="text-gray-600 mb-8">{t.contactInfo.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.contactInfo.channels.map((channel, index) => (
                  <div key={index} className={`p-6 rounded-xl ${channel.color} transition-transform hover:scale-[1.02]`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-white bg-opacity-50">
                        {channel.icon}
                      </div>
                      <h3 className="ml-4 text-lg font-semibold">{channel.name}</h3>
                    </div>
                    <p className="text-lg font-medium">{channel.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <p className="text-gray-700 italic">{t.mission}</p>
                </div>
              </div>
            </div>

            {/* Garanties supplémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-orange-600" />
                  {t.transfersTours.title.split("&")[0].trim()}
                </h4>
                <ul className="space-y-3">
                  {t.transfersTours.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="font-semibold">{item.title}:</strong> {item.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Train className="w-5 h-5 mr-2 text-green-600" />
                  {language === "FR" ? "Transport Terrestre" : "Ground Transport"}
                </h4>
                <p className="text-gray-700 mb-4">
                  {language === "FR" 
                    ? "Nous garantissons vos réservations de train, location de voiture et autres services de transport terrestre." 
                    : "We guarantee your train bookings, car rentals, and other ground transport services."}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {language === "FR" ? "Assistance disponible 24/7" : "Assistance available 24/7"}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite: Formulaire de contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Send className="w-6 h-6 mr-2 text-blue-600" />
                {t.formLabels.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.formLabels.placeholderName}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.formLabels.placeholderEmail}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.formLabels.placeholderPhone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Type de demande */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.inquiryType}
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {t.inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Référence de réservation */}
                {formData.inquiryType !== "general" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formLabels.bookingRef} {t.formLabels.inquiryType !== "emergency" && t.formLabels.optional}
                    </label>
                    <input
                      type="text"
                      name="bookingReference"
                      value={formData.bookingReference}
                      onChange={handleInputChange}
                      placeholder={t.formLabels.placeholderBookingRef}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                )}

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={t.formLabels.placeholderSubject}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Niveau d'urgence */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.urgency}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {t.urgencyLevels.map(level => (
                      <button
                        key={level.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, urgency: level.value }))}
                        className={`px-4 py-2 rounded-lg text-center transition-colors ${
                          formData.urgency === level.value
                            ? level.color + ' border-2 border-current'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder={t.formLabels.placeholderMessage}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Bouton soumission */}
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group ${
                    formData.urgency === "emergency"
                      ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {t.formLabels.submit}
                </button>
                
                {formData.urgency === "emergency" && (
                  <div className="text-center">
                    <p className="text-sm text-red-600 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {language === "FR" 
                        ? "Pour les urgences, appelez directement (+237) 677 24 66 24" 
                        : "For emergencies, call (+237) 677 24 66 24 directly"}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}