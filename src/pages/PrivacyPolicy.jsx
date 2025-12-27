import { useState } from "react";
import { 
  Shield, 
  Lock, 
  Globe, 
  Cookie, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Vue d'ensemble" },
    { id: "data-collection", title: "Données collectées" },
    { id: "data-use", title: "Utilisation des données" },
    { id: "data-sharing", title: "Partage des données" },
    { id: "security", title: "Sécurité" },
    { id: "rights", title: "Vos droits" },
    { id: "contact", title: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <Header />

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
              Politique de Confidentialité
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Découvrez comment Global Bush Travel protège et gère vos informations personnelles avec soin et transparence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Lock className="w-4 h-4 mr-2" />
                <span className="text-sm">Données sécurisées</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">Conforme RGPD</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Transparence totale</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Navigation rapide</h3>
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
                <h4 className="font-bold text-gray-900 mb-3">Global Bush Travel</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Agence de voyages et tourisme basée à Douala, Cameroun.
                  Opérateur agréé et accrédité IATA depuis 2010.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    Carrefour Samuel Eto'o Fils, Douala
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +237 233 477 000
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    info@globalbushtravel.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {/* Introduction */}
              <section id="overview" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">À propos de cette politique</h2>
                    <p className="text-gray-600 mt-2">
                      Cette Politique de Confidentialité, conjointement avec notre Politique relative aux Cookies et nos Conditions d'Utilisation, décrit comment Global Bush Travel collecte, utilise et protège vos informations personnelles lorsque vous interagissez avec nos services.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-bold text-blue-700">Mise à jour de la politique</h3>
                  </div>
                  <p className="text-gray-700">
                    Nous révisons régulièrement cette Politique pour nous assurer qu'elle reflète nos pratiques actuelles. Les mises à jour apparaîtront sur cette page. Pour les changements majeurs, nous vous en informerons par email ou sur nos plateformes.
                  </p>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Données personnelles que nous collectons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="font-bold text-green-600">1</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Données fournies directement</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Informations de contact</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Détails de paiement</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Préférences de voyage</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Documents d'identité</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="font-bold text-purple-600">2</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Données collectées automatiquement</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Type d'appareil et navigateur</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Adresse IP</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Données de localisation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Historique de navigation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Use */}
              <section id="data-use" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi nous utilisons vos données</h2>
                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Traiter les réservations</h3>
                      <p className="text-gray-600">Gérer vos plans de voyage et réservations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Améliorer nos services</h3>
                      <p className="text-gray-600">Assurer une expérience personnalisée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-yellow-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Conformité légale</h3>
                      <p className="text-gray-600">Respecter les exigences réglementaires</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-purple-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Marketing</h3>
                      <p className="text-gray-600">Envoyer des mises à jour marketing — uniquement avec votre consentement</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quand nous partageons les données</h2>
                <p className="text-gray-600 mb-6">
                  Nous ne partageons vos informations que lorsque cela est nécessaire — par exemple, avec des hôtels, des compagnies aériennes ou des partenaires touristiques qui aident à honorer vos réservations. Chaque partenaire traite vos données selon ses propres conditions de confidentialité.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Où nous traitons les données</h3>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-gray-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">
                        Nous stockons vos informations dans des centres de données sécurisés à travers le monde, collaborant uniquement avec des fournisseurs qui répondent aux normes internationales de protection des données.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security & Cookies */}
              <div className="grid md:grid-cols-2 gap-8">
                <section id="security" className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Protection des données</h2>
                      <p className="text-gray-600 mt-1">Sécurité de niveau industriel</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Nous utilisons des protocoles de sécurité conformes aux normes de l'industrie pour protéger vos données contre tout accès non autorisé ou utilisation abusive. Votre vie privée et votre confiance sont nos priorités absolues.
                  </p>
                  
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <h3 className="font-bold text-green-700 mb-2">Conservation des données</h3>
                    <p className="text-gray-700 text-sm">
                      Nous conservons les données personnelles uniquement aussi longtemps que nécessaire pour la finalité pour laquelle elles ont été collectées — y compris pour les exigences légales ou comptables. Une fois qu'elles ne sont plus nécessaires, elles sont supprimées en toute sécurité ou anonymisées.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Cookie className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Publicité et Cookies</h2>
                      <p className="text-gray-600 mt-1">Personnalisation et expérience</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Nous utilisons des cookies et des technologies associées pour améliorer votre expérience de navigation et diffuser un contenu pertinent. Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur à tout moment.
                  </p>
                  
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                    <h3 className="font-bold text-orange-700 mb-2">Contrôle de vos cookies</h3>
                    <p className="text-gray-700 text-sm">
                      Vous avez le contrôle total sur les cookies. Visitez la section "Préférences de confidentialité" de votre navigateur pour ajuster vos paramètres ou utilisez notre outil de gestion des cookies disponible sur notre site.
                    </p>
                  </div>
                </section>
              </div>

              {/* Your Rights */}
              <section id="rights" className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos droits</h2>
                <p className="text-gray-600 mb-8">
                  Vous avez le droit d'accéder à vos données, de les corriger ou de les supprimer, et de retirer votre consentement pour le marketing à tout moment. Pour exercer vos droits, contactez-nous directement.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Accès</h3>
                    <p className="text-sm text-gray-600 mt-1">Obtenir vos données</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Rectification</h3>
                    <p className="text-sm text-gray-600 mt-1">Corriger les erreurs</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-xl">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-red-600">3</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Suppression</h3>
                    <p className="text-sm text-gray-600 mt-1">Effacer vos données</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-purple-600">4</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Consentement</h3>
                    <p className="text-sm text-gray-600 mt-1">Retirer l'autorisation</p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, n'hésitez pas à nous contacter.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Adresse</h3>
                      <p className="text-sm opacity-90">
                        Carrefour Samuel Eto'o Fils<br />
                        Douala Bonamoussadi, Cameroun
                      </p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-sm opacity-90">info@globalbushtravel.com</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Téléphone</h3>
                      <p className="text-sm opacity-90">+237 233 477 000</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-3">Délai de réponse</h3>
                    <p className="opacity-90">
                      Nous nous engageons à répondre à toutes les demandes concernant la confidentialité dans un délai de <span className="font-bold">30 jours ouvrables</span>.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Global Bush Travel</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Agence de voyages et tourisme accréditée IATA depuis 2010. 
                Votre confiance, notre priorité.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Liens rapides</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition">Accueil</a></li>
                  <li><a href="/destinations" className="text-gray-400 hover:text-white transition">Destinations</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-white transition">Conditions d'utilisation</a></li>
                  <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Politique de confidentialité</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Information légale</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">Agrément Ministère du Tourisme</li>
                  <li className="text-gray-400">Accréditation IATA</li>
                  <li className="text-gray-400">DMC CAMEROON</li>
                  <li className="text-gray-400">© 2010-2024 Global Bush Travel</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="mt-2">Cette politique est conforme au RGPD et aux lois camerounaises sur la protection des données</p>
          </div>
        </div>
      </footer>
    </div>
  );
}