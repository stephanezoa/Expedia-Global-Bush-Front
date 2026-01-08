// src/pages/TermsConditions.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  FileText, Shield, AlertCircle, CreditCard, 
  FileCheck, Globe, Mail, Phone, Scale, Lock
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsConditions() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("introduction");

  // Contenu bilingue
  const content = {
    FR: {
      title: "Conditions Générales d'Utilisation",
      subtitle: "Bienvenue chez Global Bush Travel ! En accédant et en utilisant notre site web, nos services et nos produits, vous acceptez de respecter et d'être lié par les conditions générales suivantes.",
      
      // Sections
      sections: [
        { id: "introduction", title: "1. Introduction" },
        { id: "use-website", title: "2. Utilisation du Site Web" },
        { id: "booking", title: "3. Réservations" },
        { id: "payment", title: "4. Conditions de Paiement" },
        { id: "cancellations", title: "5. Annulations et Remboursements" },
        { id: "documents", title: "6. Documents de Voyage" },
        { id: "liability", title: "7. Responsabilité" },
        { id: "intellectual", title: "8. Propriété Intellectuelle" },
        { id: "privacy", title: "9. Politique de Confidentialité" },
        { id: "changes", title: "10. Modifications des Conditions" },
        { id: "governing", title: "11. Droit Applicable" },
        { id: "contact", title: "12. Contact" }
      ],
      
      // Contenu des sections
      introduction: `
        Global Bush Travel (« nous », « notre ») fournit des services de voyages et de tourisme via ce site web. 
        En utilisant www.globalbushtravel.com (« le Site »), vous acceptez ces Conditions Générales dans leur intégralité.
      `,
      
      useWebsite: `
        Vous acceptez d'utiliser le Site uniquement à des fins légales et d'une manière qui ne porte pas atteinte 
        aux droits d'autrui ou ne restreint pas leur utilisation et leur jouissance du Site.
        Vous ne devez pas utiliser abusivement le Site en introduisant sciemment des virus ou d'autres 
        éléments nuisibles ou en tentant d'accéder sans autorisation.
      `,
      
      booking: `
        Toutes les réservations effectuées via Global Bush Travel sont soumises à disponibilité et confirmation.
        Les prix, disponibilités et horaires sont sujets à changement sans préavis.
        Vous devez fournir des informations exactes et complètes lors de la réservation.
        Toute demande spéciale sera transmise aux prestataires de services mais ne peut être garantie.
      `,
      
      payment: `
        Les conditions de paiement seront spécifiées lors du processus de réservation.
        Un paiement intégral ou un acompte peut être requis pour confirmer votre réservation.
        Le non-paiement dans les délais peut entraîner l'annulation de la réservation sans remboursement.
      `,
      
      cancellations: `
        Les politiques d'annulation varient selon le service ou le forfait réservé et seront communiquées au moment de la réservation.
        Les remboursements, le cas échéant, seront traités conformément aux conditions définies par les prestataires de services concernés.
      `,
      
      documents: `
        Il est de votre responsabilité de vous assurer que vous disposez des documents de voyage valides 
        (passeport, visas, autorisations) et de respecter les lois et réglementations locales de votre destination.
        Global Bush Travel n'est pas responsable des problèmes résultant du non-respect de ces exigences.
      `,
      
      liability: `
        Global Bush Travel agit en tant qu'intermédiaire entre vous et les prestataires de services tiers 
        (compagnies aériennes, hôtels, opérateurs touristiques, etc.).
        Nous n'acceptons pas la responsabilité des blessures, pertes, dommages, retards ou inconvénients 
        causés par ces tiers.
        Dans la mesure maximale permise par la loi, notre responsabilité est limitée.
      `,
      
      intellectual: `
        Tout le contenu de ce site web, y compris le texte, les images, les logos et les graphiques, 
        est la propriété de Global Bush Travel ou de ses concédants de licence.
        Vous ne pouvez pas utiliser, reproduire ou distribuer de matériel sans autorisation écrite préalable.
      `,
      
      privacy: `
        Vos informations personnelles seront traitées conformément à notre Politique de Confidentialité, 
        disponible sur le site web.
        En utilisant nos services, vous consentez à la collecte et à l'utilisation de vos données comme décrit.
      `,
      
      changes: `
        Nous nous réservons le droit de mettre à jour ou de modifier ces Conditions Générales à tout moment sans préavis.
        Les modifications prendront effet immédiatement après leur publication sur le site web. 
        Votre utilisation continue du Site constitue l'acceptation des conditions mises à jour.
      `,
      
      governing: `
        Ces Conditions Générales sont régies par les lois de la juridiction dans laquelle Global Bush Travel opère.
        Tout litige sera soumis à la compétence exclusive des tribunaux de cet emplacement.
      `,
      
      contact: `
        Si vous avez des questions ou des préoccupations concernant ces Conditions Générales, 
        veuillez nous contacter à :
      `,
      
      // Informations de contact
      companyName: "Global Bush Travel",
      description: "Agence de voyages et tourisme certifiée IATA depuis 2010",
      address: "Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroun",
      phone: "+237 233 477 000",
      email: "info@globalbushtravel.com",
      
      // Boutons et labels
      readCarefully: "Lisez attentivement",
      importantNotes: "Notes importantes",
      acceptTerms: "J'accepte les conditions générales",
      downloadPDF: "Télécharger en PDF",
      lastUpdated: "Dernière mise à jour",
      
      // Informations juridiques
      legalInfo: "Entreprise agréée par le Ministère du Tourisme • Accréditation IATA • RCCM: xx-xxx-xxx",
    },
    
    EN: {
      title: "Terms and Conditions",
      subtitle: "Welcome to Global Bush Travel! By accessing and using our website, services, and products, you agree to comply with and be bound by the following terms and conditions.",
      
      // Sections
      sections: [
        { id: "introduction", title: "1. Introduction" },
        { id: "use-website", title: "2. Use of the Website" },
        { id: "booking", title: "3. Booking and Reservations" },
        { id: "payment", title: "4. Payment Terms" },
        { id: "cancellations", title: "5. Cancellations and Refunds" },
        { id: "documents", title: "6. Travel Documents and Requirements" },
        { id: "liability", title: "7. Liability" },
        { id: "intellectual", title: "8. Intellectual Property" },
        { id: "privacy", title: "9. Privacy Policy" },
        { id: "changes", title: "10. Changes to Terms and Conditions" },
        { id: "governing", title: "11. Governing Law" },
        { id: "contact", title: "12. Contact Information" }
      ],
      
      // Section content
      introduction: `
        Global Bush Travel ("we", "us", "our") provides travel and tourism-related services through this website.
        By using www.globalbushtravel.com ("the Site"), you accept these Terms and Conditions in full.
      `,
      
      useWebsite: `
        You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of others 
        or restrict their use and enjoyment of the Site.
        You must not misuse the Site by knowingly introducing viruses or other harmful material 
        or attempting unauthorized access.
      `,
      
      booking: `
        All bookings made through Global Bush Travel are subject to availability and confirmation.
        Prices, availability, and schedules are subject to change without prior notice.
        You must provide accurate and complete information when making a booking.
        Any special requests will be passed on to the service providers but cannot be guaranteed.
      `,
      
      payment: `
        Payment terms will be specified during the booking process.
        Full payment or deposit may be required to confirm your reservation.
        Failure to pay on time may result in cancellation of the booking without refund.
      `,
      
      cancellations: `
        Cancellation policies vary depending on the service or package booked and will be communicated at the time of booking.
        Refunds, if applicable, will be processed according to the terms outlined by the relevant service providers.
      `,
      
      documents: `
        It is your responsibility to ensure you have valid travel documents (passport, visas, permits) 
        and comply with local laws and regulations for your destination.
        Global Bush Travel is not liable for any issues arising from failure to meet these requirements.
      `,
      
      liability: `
        Global Bush Travel acts as an intermediary between you and third-party service providers 
        (airlines, hotels, tour operators, etc.).
        We do not accept liability for injury, loss, damage, delay, or inconvenience caused by these third parties.
        To the fullest extent permitted by law, our liability is limited.
      `,
      
      intellectual: `
        All content on this website, including text, images, logos, and graphics, 
        is the property of Global Bush Travel or its licensors.
        You may not use, reproduce, or distribute any material without prior written permission.
      `,
      
      privacy: `
        Your personal information will be handled in accordance with our Privacy Policy, 
        which is available on the website.
        By using our services, you consent to the collection and use of your data as outlined.
      `,
      
      changes: `
        We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
        Changes will be effective immediately upon posting on the website. 
        Your continued use of the Site constitutes acceptance of the updated terms.
      `,
      
      governing: `
        These Terms and Conditions are governed by the laws of the jurisdiction in which Global Bush Travel operates.
        Any disputes arising will be subject to the exclusive jurisdiction of the courts in that location.
      `,
      
      contact: `
        If you have any questions or concerns about these Terms and Conditions, please contact us at:
      `,
      
      // Contact information
      companyName: "Global Bush Travel",
      description: "IATA-certified travel and tourism agency since 2010",
      address: "Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroon",
      phone: "+237 233 477 000",
      email: "info@globalbushtravel.com",
      
      // Buttons and labels
      readCarefully: "Read carefully",
      importantNotes: "Important notes",
      acceptTerms: "I accept the terms and conditions",
      downloadPDF: "Download PDF",
      lastUpdated: "Last updated",
      
      // Legal information
      legalInfo: "Ministry of Tourism Licensed • IATA Accreditation • RCCM: xx-xxx-xxx",
    }
  };

  const t = content[language] || content.FR;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl opacity-90 mb-6">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">{t.readCarefully}</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm">{language === 'FR' ? 'Protection juridique' : 'Legal Protection'}</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                {language === 'FR' ? 'Navigation' : 'Navigation'}
              </h3>
              <nav className="space-y-2">
                {t.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition text-left ${
                      activeSection === section.id 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-sm">{section.title}</span>
                    <div className={`w-2 h-2 rounded-full ${activeSection === section.id ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  </button>
                ))}
              </nav>
              
              {/* Important Notice */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-yellow-700 text-sm mb-1">{t.importantNotes}</h4>
                      <p className="text-yellow-600 text-xs">
                        {language === 'FR' 
                          ? 'Ces conditions s\'appliquent à toutes vos réservations. Consultez-les avant chaque transaction.'
                          : 'These terms apply to all your bookings. Please review them before each transaction.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="space-y-8">
              
              {/* Introduction */}
              <section id="introduction" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[0].title}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t.introduction}
                    </p>
                  </div>
                </div>
              </section>

              {/* Use of Website */}
              <section id="use-website" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[1].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.useWebsite}
                    </p>
                  </div>
                </div>
              </section>

              {/* Booking */}
              <section id="booking" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <FileCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[2].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.booking}
                    </p>
                  </div>
                </div>
              </section>

              {/* Payment Terms */}
              <section id="payment" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[3].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.payment}
                    </p>
                  </div>
                </div>
              </section>

              {/* Cancellations and Refunds */}
              <section id="cancellations" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[4].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.cancellations}
                    </p>
                  </div>
                </div>
              </section>

              {/* Travel Documents */}
              <section id="documents" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[5].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.documents}
                    </p>
                  </div>
                </div>
              </section>

              {/* Liability */}
              <section id="liability" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[6].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.liability}
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[7].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.intellectual}
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy Policy */}
              <section id="privacy" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[8].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.privacy}
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[9].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.changes}
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.sections[10].title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t.governing}
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">{t.sections[11].title}</h2>
                  <p className="text-lg mb-8 opacity-90">
                    {t.contact}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-center">{language === 'FR' ? 'Adresse' : 'Address'}</h3>
                      <p className="text-sm opacity-90 text-center">{t.address}</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-center">{language === 'FR' ? 'Téléphone' : 'Phone'}</h3>
                      <p className="text-sm opacity-90 text-center">{t.phone}</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-center">Email</h3>
                      <p className="text-sm opacity-90 text-center">{t.email}</p>
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-3">{t.companyName}</h3>
                    <p className="opacity-90 mb-3">{t.description}</p>
                    <p className="text-sm opacity-80">{t.legalInfo}</p>
                  </div>
                </div>
              </section>

              {/* Acceptance Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'FR' ? 'Acceptation des conditions' : 'Acceptance of Terms'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'FR' 
                        ? 'En utilisant nos services, vous acceptez pleinement ces conditions générales.'
                        : 'By using our services, you fully accept these terms and conditions.'}
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:opacity-90 transition">
                      {t.acceptTerms}
                    </button>
                    <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition">
                      {t.downloadPDF}
                    </button>
                  </div>
                </div>
                
                {/* Last Updated */}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-gray-500 text-sm">
                    {t.lastUpdated}: {new Date().toLocaleDateString(language === 'FR' ? 'fr-FR' : 'en-US', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}