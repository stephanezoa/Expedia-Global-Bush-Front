import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Globe, 
  FileText, 
  Clock, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Calendar,
  Users,
  Briefcase,
  Plane,
  CreditCard,
  Download,
  ChevronDown
} from "lucide-react";

const Assistance = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedCountry, setSelectedCountry] = useState("");
  
  const visaRequirements = [
    { country: "France", visaRequired: "Oui", duration: "30-90 jours", processing: "5-7 jours", icon: "🇫🇷" },
    { country: "États-Unis", visaRequired: "Oui", duration: "30-90 jours", processing: "7-10 jours", icon: "🇺🇸" },
    { country: "Canada", visaRequired: "Oui", duration: "30 jours", processing: "5-8 jours", icon: "🇨🇦" },
    { country: "Allemagne", visaRequired: "Oui", duration: "30-90 jours", processing: "4-6 jours", icon: "🇩🇪" },
    { country: "Royaume-Uni", visaRequired: "Oui", duration: "30 jours", processing: "6-9 jours", icon: "🇬🇧" },
    { country: "Chine", visaRequired: "Oui", duration: "30 jours", processing: "7-10 jours", icon: "🇨🇳" },
  ];

  const documentList = [
    "Passeport valide 6 mois minimum",
    "2 formulaires de demande complétés",
    "2 photos d'identité récentes",
    "Copie du billet d'avion aller-retour",
    "Preuve de réservation hôtelière",
    "Attestation d'assurance voyage",
    "Relevé bancaire récent",
    "Lettre d'invitation si nécessaire"
  ];

  const visaTypes = [
    {
      type: "Visa Touristique",
      icon: <Globe className="text-blue-600" size={24} />,
      duration: "30 jours",
      entries: "Simple",
      description: "Pour les voyages de loisirs et visites familiales",
      requirements: ["Passeport", "Billet retour", "Réservation hôtel"]
    },
    {
      type: "Visa d'Affaires",
      icon: <Briefcase className="text-green-600" size={24} />,
      duration: "90 jours",
      entries: "Multiple",
      description: "Pour les voyages professionnels et réunions d'affaires",
      requirements: ["Lettre d'entreprise", "Invitation partenaire", "Justificatif professionnel"]
    },
    {
      type: "Visa de Transit",
      icon: <Plane className="text-purple-600" size={24} />,
      duration: "24h",
      entries: "Simple",
      description: "Pour les escales sans sortie de l'aéroport",
      requirements: ["Billet continuation", "Visa destination finale", "Transit < 24h"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield size={20} />
              <span className="text-sm font-medium">Assistance Visa Professionnelle</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Assistance</span>
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Visa Cameroun
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Guide complet pour l'obtention de votre visa d'entrée au Cameroun. 
              Notre équipe d'experts vous accompagne à chaque étape de la procédure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#requirements"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <FileText size={20} />
                <span>Voir les exigences</span>
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Demander assistance</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["overview", "requirements", "documents", "types", "countries", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "overview" && "Vue d'ensemble"}
              {tab === "requirements" && "Exigences"}
              {tab === "documents" && "Documents"}
              {tab === "types" && "Types de Visa"}
              {tab === "countries" && "Pays"}
              {tab === "contact" && "Contact"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Visa d'entrée au Cameroun
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Les visas d'entrée au Cameroun sont nécessaires pour tous les pays, à l'exception 
                      des ressortissants de la République centrafricaine, du Tchad, du Congo, de la 
                      Guinée équatoriale et du Gabon pour un séjour ne dépassant pas 90 jours.
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <AlertCircle className="mr-2 text-blue-600" size={24} />
                        Transit
                      </h3>
                      <p className="text-gray-700">
                        Pour les voyageurs en transit, il est nécessaire de posséder un billet et de 
                        poursuivre le voyage sur le premier avion disponible dans les 24 heures, à 
                        condition de ne <strong>ne pas sortir de l'aéroport</strong>.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <CheckCircle className="mr-2 text-green-600" size={24} />
                      Conditions Générales
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Passeport valide <strong>6 mois minimum</strong></span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Visa touriste : <strong>30 jours</strong></span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Visa affaires : <strong>90 jours</strong> (entrées multiples)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Validité : <strong>3 mois</strong> après émission</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Clock className="mr-2 text-yellow-600" size={24} />
                      Prolongation
                    </h3>
                    <p className="text-gray-700">
                      Les extensions doivent être portées à la connaissance des agents d'immigration 
                      ou de l'ambassade <strong>au moins deux semaines</strong> avant la date d'expiration du visa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "requirements" && (
            <div id="requirements" className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Documents Requis
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                    <FileText className="mr-2 text-blue-600" size={24} />
                    Liste des documents
                  </h3>
                  
                  <div className="space-y-4">
                    {documentList.map((doc, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                    <Briefcase className="mr-2 text-green-600" size={24} />
                    Visa d'Affaires Additionnels
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                      <h4 className="font-bold text-gray-900 mb-2">Documents spécifiques :</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle size={18} className="text-green-600" />
                          <span>Lettre officielle de l'entreprise du demandeur</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle size={18} className="text-green-600" />
                          <span>Lettre d'invitation des partenaires d'affaires au Cameroun</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle size={18} className="text-green-600" />
                          <span>Certificat d'enregistrement de l'entreprise</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                      <h4 className="font-bold text-gray-900 mb-2">Notre service inclus :</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Shield size={18} className="text-blue-600" />
                          <span>Vérification complète des documents</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Shield size={18} className="text-blue-600" />
                          <span>Remplissage des formulaires officiels</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Shield size={18} className="text-blue-600" />
                          <span>Suivi du dossier en temps réel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "types" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Types de Visa Disponibles
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {visaTypes.map((visa, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        {visa.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{visa.type}</h3>
                        <p className="text-gray-600 text-sm">{visa.duration} • {visa.entries}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{visa.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Documents requis :</h4>
                      <ul className="space-y-1">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                      En savoir plus
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "countries" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Exigences par Pays
                </span>
              </h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Sélectionnez votre nationalité :
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full md:w-1/2 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                >
                  <option value="">Choisissez un pays</option>
                  {visaRequirements.map((req) => (
                    <option key={req.country} value={req.country}>
                      {req.icon} {req.country}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <th className="py-4 px-6 text-left text-blue-900 font-bold">Pays</th>
                      <th className="py-4 px-6 text-left text-blue-900 font-bold">Visa requis</th>
                      <th className="py-4 px-6 text-left text-blue-900 font-bold">Durée max</th>
                      <th className="py-4 px-6 text-left text-blue-900 font-bold">Traitement</th>
                      <th className="py-4 px-6 text-left text-blue-900 font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visaRequirements.map((req) => (
                      <tr 
                        key={req.country}
                        className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{req.icon}</span>
                            <span className="font-medium">{req.country}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            req.visaRequired === "Oui" 
                              ? "bg-red-100 text-red-800" 
                              : "bg-green-100 text-green-800"
                          }`}>
                            {req.visaRequired}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-medium">{req.duration}</td>
                        <td className="py-4 px-6">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {req.processing}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                            Détails <ChevronDown size={16} className="ml-1" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === "contact" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Assistance Globale Bush
                </span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Mail className="mr-2 text-blue-600" size={24} />
                      Service Premium
                    </h3>
                    
                    <p className="text-gray-700 mb-4">
                      Global Bush Travel and Tourism peut organiser votre visa à l'avance, 
                      particulièrement utile pour les pays où le Cameroun n'a pas de 
                      représentation diplomatique.
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <strong>Email :</strong>{' '}
                        <a 
                          href="mailto:info@globalbushtratour.com"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          info@globalbushtratour.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Téléphone :</strong>{' '}
                        <a 
                          href="tel:+237XXXXXXXXX"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          +237 XX XX XX XX
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <AlertCircle className="mr-2 text-yellow-600" size={24} />
                      Information Importante
                    </h3>
                    <p className="text-gray-700">
                      Les règles concernant les visas peuvent changer fréquemment, en particulier 
                      au Cameroun. Nous recommandons donc de vérifier auprès de votre ambassade la 
                      plus proche pour obtenir les informations les plus à jour.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi choisir notre service ?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={20} />
                        <span>Assistance 24h/24 et 7j/7</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={20} />
                        <span>Vérification complète des documents</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={20} />
                        <span>Suivi personnalisé de votre dossier</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={20} />
                        <span>Garantie de confidentialité</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={20} />
                        <span>Taux de réussite de 98%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Demander une assistance personnalisée
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Contact Card */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                Besoin d'assistance immédiate pour votre visa ?
              </h3>
              <p className="text-blue-100">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions 
                et vous accompagner dans votre démarche.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone size={20} className="mr-2" />
                Contact Urgent
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Assistance;