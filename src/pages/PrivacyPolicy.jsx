// src/pages/PrivacyPolicy.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Shield, Lock, Globe, Mail, Phone, MapPin,
  ChevronRight, CheckCircle, AlertCircle
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("overview");

  // Contenu directement dans le composant avec fallback
  const content = {
    FR: {
      title: "Politique de Confidentialité",
      subtitle: "Découvrez comment Global Bush Travel protège et gère vos informations personnelles avec soin et transparence.",
      secureData: "Données sécurisées",
      gdprCompliant: "Conforme RGPD",
      fullTransparency: "Transparence totale",
      quickNav: "Navigation rapide",
      overview: "Vue d'ensemble",
      dataCollection: "Données collectées",
      dataUse: "Utilisation des données",
      dataSharing: "Partage des données",
      security: "Sécurité",
      rights: "Vos droits",
      contactSection: "Contact",
      aboutPolicy: "À propos de cette politique",
      policyDescription: "Cette Politique de Confidentialité décrit comment Global Bush Travel collecte, utilise et protège vos informations personnelles.",
      policyUpdate: "Mise à jour de la politique",
      policyUpdateText: "Nous révisons régulièrement cette Politique pour nous assurer qu'elle reflète nos pratiques actuelles.",
      companyName: "Global Bush Travel",
      description: "Agence de voyages et tourisme basée à Douala, Cameroun. Opérateur agréé et accrédité IATA depuis 2010.",
      address: "Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroun",
      phone: "+237 233 477 000",
      email: "info@globalbushtravel.com",
      contactUs: "Contactez-nous",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      // Sections manquantes
      personalData: "Données personnelles que nous collectons",
      directData: "Données fournies directement",
      contactInfo: "Informations de contact",
      paymentDetails: "Détails de paiement",
      travelPreferences: "Préférences de voyage",
      identityDocs: "Documents d'identité",
      autoData: "Données collectées automatiquement",
      deviceBrowser: "Type d'appareil et navigateur",
      ipAddress: "Adresse IP",
      locationData: "Données de localisation",
      browsingHistory: "Historique de navigation"
    },
    EN: {
      title: "Privacy Policy",
      subtitle: "Learn how Global Bush Travel protects and handles your personal information with care and transparency.",
      secureData: "Secure Data",
      gdprCompliant: "GDPR Compliant",
      fullTransparency: "Full Transparency",
      quickNav: "Quick Navigation",
      overview: "Overview",
      dataCollection: "Data Collection",
      dataUse: "Data Use",
      dataSharing: "Data Sharing",
      security: "Security",
      rights: "Your Rights",
      contactSection: "Contact",
      aboutPolicy: "About This Policy",
      policyDescription: "This Privacy Policy outlines how Global Bush Travel collects, uses, and protects your personal information.",
      policyUpdate: "Policy Update",
      policyUpdateText: "We regularly review this Policy to ensure it reflects our current practices.",
      companyName: "Global Bush Travel",
      description: "Travel and tourism agency based in Douala, Cameroon. Licensed operator and IATA-accredited since 2010.",
      address: "Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroon",
      phone: "+237 233 477 000",
      email: "info@globalbushtravel.com",
      contactUs: "Contact Us",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      // Sections manquantes
      personalData: "What Personal Data We Collect",
      directData: "Data Provided Directly",
      contactInfo: "Contact Information",
      paymentDetails: "Payment Details",
      travelPreferences: "Travel Preferences",
      identityDocs: "Identity Documents",
      autoData: "Automatically Collected Data",
      deviceBrowser: "Device and Browser Type",
      ipAddress: "IP Address",
      locationData: "Location Data",
      browsingHistory: "Browsing History"
    },
    ES: {
      title: "Política de Privacidad",
      subtitle: "Descubra cómo Global Bush Travel protege y gestiona su información personal con cuidado y transparencia.",
      secureData: "Datos seguros",
      gdprCompliant: "Conforme al RGPD",
      fullTransparency: "Transparencia total",
      quickNav: "Navegación rápida",
      overview: "Resumen",
      dataCollection: "Recopilación de datos",
      dataUse: "Uso de datos",
      dataSharing: "Compartir datos",
      security: "Seguridad",
      rights: "Sus derechos",
      contactSection: "Contacto",
      aboutPolicy: "Acerca de esta política",
      policyDescription: "Esta Política de Privacidad describe cómo Global Bush Travel recopila, usa y protege su información personal.",
      policyUpdate: "Actualización de la política",
      policyUpdateText: "Revisamos regularmente esta Política para asegurarnos de que refleje nuestras prácticas actuales.",
      companyName: "Global Bush Travel",
      description: "Agencia de viajes y turismo con sede en Duala, Camerún. Operador autorizado y acreditado por la IATA desde 2010.",
      address: "Carrefour Samuel Eto'o Fils, Duala Bonamoussadi, Camerún",
      phone: "+237 233 477 000",
      email: "info@globalbushtravel.com",
      contactUs: "Contáctenos",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      emailLabel: "Correo electrónico",
      // Sections manquantes
      personalData: "Qué datos personales recopilamos",
      directData: "Datos proporcionados directamente",
      contactInfo: "Información de contacto",
      paymentDetails: "Detalles de pago",
      travelPreferences: "Preferencias de viaje",
      identityDocs: "Documentos de identidad",
      autoData: "Datos recopilados automáticamente",
      deviceBrowser: "Tipo de dispositivo y navegador",
      ipAddress: "Dirección IP",
      locationData: "Datos de ubicación",
      browsingHistory: "Historial de navegación"
    }
  };

  // Fallback sûr : utilise FR si la langue n'est pas reconnue
  const t = content[language] || content.FR;

  const sections = [
    { id: "overview", title: t.overview },
    { id: "data-collection", title: t.dataCollection },
    { id: "data-use", title: t.dataUse },
    { id: "data-sharing", title: t.dataSharing },
    { id: "security", title: t.security },
    { id: "rights", title: t.rights },
    { id: "contact", title: t.contactSection }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Lock className="w-4 h-4 mr-2" />
                <span className="text-sm">{t.secureData}</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">{t.gdprCompliant}</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">{t.fullTransparency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.quickNav}</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition ${activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>{section.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                  </button>
                ))}
              </nav>
              
              {/* Company Info */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">{t.companyName}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {t.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t.address}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {t.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {t.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              
              {/* Section Introduction */}
              <section id="overview" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{t.aboutPolicy}</h2>
                    <p className="text-gray-600 mt-2">
                      {t.policyDescription}
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-bold text-blue-700">{t.policyUpdate}</h3>
                  </div>
                  <p className="text-gray-700">
                    {t.policyUpdateText}
                  </p>
                </div>
              </section>

              {/* Section Data Collection */}
              <section id="data-collection" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.personalData}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="font-bold text-green-600">1</span>
                      </div>
                      <h3 className="font-bold text-gray-900">{t.directData}</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>{t.contactInfo}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>{t.paymentDetails}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>{t.travelPreferences}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>{t.identityDocs}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="font-bold text-purple-600">2</span>
                      </div>
                      <h3 className="font-bold text-gray-900">{t.autoData}</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>{t.deviceBrowser}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>{t.ipAddress}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>{t.locationData}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>{t.browsingHistory}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section Contact */}
              <section id="contact" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactUs}</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                    <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{t.addressLabel}</h3>
                    <p className="text-gray-600">{t.address}</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                    <Phone className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{t.phoneLabel}</h3>
                    <p className="text-gray-600">{t.phone}</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                    <Mail className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{t.emailLabel}</h3>
                    <p className="text-gray-600">{t.email}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}