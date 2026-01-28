import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Users, 
  Briefcase, 
  Search, 
  Target, 
  Shield,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Clock,
  TrendingUp,
  Filter,
  FileText,
  Interview,
  Handshake,
  Globe,
  Star,
  Heart,
  Award as Trophy
} from "lucide-react";

const Recrutement = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedSector, setSelectedSector] = useState("all");
  
  const services = [
    {
      icon: <Search size={28} className="text-blue-600" />,
      title: "Recrutement Permanent",
      description: "Recherche et sélection de talents pour vos postes vacants",
      color: "from-blue-500 to-blue-600",
      details: ["Analyse des besoins", "Sourcing actif", "Présélection", "Pré-entretiens"]
    },
    {
      icon: <Briefcase size={28} className="text-green-600" />,
      title: "Placement Professionnel",
      description: "Intégration de professionnels qualifiés dans votre entreprise",
      color: "from-green-500 to-green-600",
      details: ["Matching personnalisé", "Présentation candidats", "Négociation salariale", "Intégration"]
    },
    {
      icon: <Target size={28} className="text-purple-600" />,
      title: "Chasse de Têtes",
      description: "Recherche de profils rares et hautement spécialisés",
      color: "from-purple-500 to-purple-600",
      details: ["Recherche discrète", "Approche directe", "Évaluation approfondie", "Accompagnement"]
    },
    {
      icon: <FileText size={28} className="text-orange-600" />,
      title: "Consulting RH",
      description: "Optimisation de vos processus de recrutement et d'intégration",
      color: "from-orange-500 to-orange-600",
      details: ["Audit RH", "Stratégie recrutement", "Formation recruteurs", "Outils RH"]
    }
  ];

  const sectors = [
    {
      name: "Tourisme & Hôtellerie",
      icon: "🏨",
      positions: ["Directeur d'hôtel", "Réceptionniste", "Chef de cuisine", "Guide touristique", "Agent de voyage"],
      demand: "Élevée",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Commerce & Vente",
      icon: "🛒",
      positions: ["Commercial", "Responsable boutique", "Attaché clientèle", "Chargé marketing", "Merchandiser"],
      demand: "Très élevée",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Administration & Comptabilité",
      icon: "📊",
      positions: ["Comptable", "Secrétaire", "Assistant administratif", "Contrôleur de gestion", "Auditeur"],
      demand: "Élevée",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Technologie & Digital",
      icon: "💻",
      positions: ["Développeur", "Data Analyst", "Community Manager", "Web Designer", "Responsable IT"],
      demand: "Très élevée",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "Santé & Social",
      icon: "🏥",
      positions: ["Infirmier", "Assistant social", "Psychologue", "Coach sportif", "Nutritionniste"],
      demand: "Moyenne",
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Logistique & Transport",
      icon: "🚚",
      positions: ["Logisticien", "Chauffeur", "Responsable approvisionnement", "Agent de transit", "Magasinier"],
      demand: "Élevée",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse des besoins",
      description: "Compréhension approfondie de vos exigences",
      icon: <Search size={24} />
    },
    {
      step: "02",
      title: "Sourcing stratégique",
      description: "Recherche active et ciblée de talents",
      icon: <Target size={24} />
    },
    {
      step: "03",
      title: "Présélection rigoureuse",
      description: "Évaluation technique et comportementale",
      icon: <Filter size={24} />
    },
    {
      step: "04",
      title: "Présentation des candidats",
      description: "Présentation des meilleurs profils",
      icon: <Users size={24} />
    },
    {
      step: "05",
      title: "Coordination des entretiens",
      description: "Organisation et suivi du processus",
      icon: <Interview size={24} />
    },
    {
      step: "06",
      title: "Accompagnement post-recruitment",
      description: "Suivi et intégration du nouveau collaborateur",
      icon: <Handshake size={24} />
    }
  ];

  const benefits = [
    "Accès à une large base de candidats qualifiés",
    "Gain de temps considérable dans le processus",
    "Expertise locale du marché camerounais",
    "Garantie de remplacement en cas de non-satisfaction",
    "Confidentialité totale du processus",
    "Support multilingue (français, anglais)"
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                <Users size={20} />
                <span className="text-sm font-medium">Solutions RH Professionnelles</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Recrutement</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  & Placement
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Connectons les talents aux opportunités. Notre expertise en recrutement 
                et placement vous garantit des solutions RH efficaces adaptées à vos besoins.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>Recruter un talent</span>
                </Link>
                <a
                  href="#candidates"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Postuler à une offre
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Expertise Locale</h3>
                        <p className="text-blue-200">Douala & Yaoundé</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">500+</div>
                        <p className="text-sm text-blue-200">Candidats actifs</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">95%</div>
                        <p className="text-sm text-blue-200">Taux de satisfaction</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">30j</div>
                        <p className="text-sm text-blue-200">Délai moyen de placement</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">200+</div>
                        <p className="text-sm text-blue-200">Entreprises partenaires</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Taux de satisfaction basé sur les retours clients des 12 derniers mois
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
          {["services", "sectors", "process", "candidates", "employers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "services" && "Nos Services"}
              {tab === "sectors" && "Secteurs"}
              {tab === "process" && "Processus"}
              {tab === "candidates" && "Candidats"}
              {tab === "employers" && "Employeurs"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Services de Recrutement
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des solutions RH complètes pour répondre à tous vos besoins en recrutement
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-700">
                          <ChevronRight size={16} className="text-blue-500" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                      En savoir plus
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Notre Mission
                    </h3>
                    <p className="text-gray-700">
                      Global Bush Travel and Tourism Agency propose des services de recrutement 
                      et de placement professionnels à Douala et Yaoundé. Nous aidons les 
                      entreprises à trouver les talents appropriés pour leurs besoins 
                      spécifiques, tout en offrant aux candidats des opportunités intéressantes.
                    </p>
                  </div>
                  <div className="text-4xl">🤝</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sectors" && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Secteurs d'Activité
                    </span>
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Nous recrutons pour divers secteurs, y compris le tourisme, l'hôtellerie, et bien d'autres
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="all">Tous les secteurs</option>
                    <option value="Tourisme & Hôtellerie">Tourisme & Hôtellerie</option>
                    <option value="Commerce & Vente">Commerce & Vente</option>
                    <option value="Administration & Comptabilité">Administration & Comptabilité</option>
                    <option value="Technologie & Digital">Technologie & Digital</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors
                  .filter(sector => selectedSector === "all" || sector.name === selectedSector)
                  .map((sector, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-3xl">{sector.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{sector.name}</h3>
                          <span className={`px-3 py-1 ${sector.color} text-xs font-semibold rounded-full`}>
                            Demande: {sector.demand}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-2">Postes fréquents :</h4>
                        <div className="flex flex-wrap gap-2">
                          {sector.positions.slice(0, 3).map((position, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {position}
                            </span>
                          ))}
                          {sector.positions.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{sector.positions.length - 3} autres
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                        Voir les offres
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Notre Processus de Recrutement
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  6 étapes pour garantir un recrutement réussi
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.step}
                      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Step content */}
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Empty spacer for opposite side */}
                      <div className="lg:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 text-green-600" size={24} />
                      Notre Expertise
                    </h3>
                    <p className="text-gray-700">
                      Grâce à notre réseau étendu et notre expertise locale, nous facilitons 
                      l'intégration des professionnels qualifiés sur le marché du travail 
                      camerounais, garantissant un processus efficace et adapté aux besoins 
                      de chaque entreprise.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Shield className="mr-2 text-green-600" size={24} />
                      Nos Garanties
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Garantie de remplacement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Confidentialité totale</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Suivi post-embauche</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "candidates" && (
            <div id="candidates" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Pour les Candidats
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Trouvez l'opportunité qui correspond à vos compétences et aspirations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Comment postuler ?
                    </h3>
                    <ol className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Déposez votre CV</p>
                          <p className="text-gray-600 text-sm">Envoyez-nous votre CV mis à jour</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Entretien d'évaluation</p>
                          <p className="text-gray-600 text-sm">Échange sur vos compétences et aspirations</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Matching avec les offres</p>
                          <p className="text-gray-600 text-sm">Nous vous proposons les opportunités correspondantes</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Nos Services aux Candidats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <GraduationCap size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Coaching CV</h4>
                        <p className="text-gray-600 text-sm">Optimisation de votre CV</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Interview size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Préparation entretien</h4>
                        <p className="text-gray-600 text-sm">Simulations et conseils</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Briefcase size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Orientation carrière</h4>
                        <p className="text-gray-600 text-sm">Conseils personnalisés</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Globe size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Réseau professionnel</h4>
                        <p className="text-gray-600 text-sm">Accès à notre réseau</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Dépôt de Candidature
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Envoyez-nous votre CV et nous vous contacterons pour un entretien préliminaire.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:cv@globalbushtratour.com" className="text-blue-600 hover:underline">
                          cv@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Déposer mon CV
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "employers" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Pour les Employeurs
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des solutions RH sur mesure pour vos besoins en recrutement
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Nos Solutions Entreprises
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                        <h4 className="font-bold text-blue-900 mb-2">Recrutement Temporaire</h4>
                        <p className="text-gray-700">Solutions flexibles pour vos besoins ponctuels</p>
                      </div>
                      
                      <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                        <h4 className="font-bold text-blue-900 mb-2">Recrutement Permanent</h4>
                        <p className="text-gray-700">Recherche de talents pour vos postes fixes</p>
                      </div>
                      
                      <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                        <h4 className="font-bold text-blue-900 mb-2">Interim Management</h4>
                        <p className="text-gray-700">Profils expérimentés pour missions spécifiques</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Tarification
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Recrutement standard</span>
                        <span className="font-bold text-blue-900">15-20% du salaire annuel</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Chasse de têtes</span>
                        <span className="font-bold text-blue-900">25-30% du salaire annuel</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Recrutement temporaire</span>
                        <span className="font-bold text-blue-900">Tarif journalier</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Demande de Prestation
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Contactez-nous pour discuter de vos besoins en recrutement 
                      et obtenir une proposition personnalisée.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900">Email professionnel :</p>
                        <a 
                          href="mailto:recrutement@globalbushtratour.com"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          recrutement@globalbushtratour.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Téléphone :</p>
                        <a 
                          href="tel:+237XXXXXXXXX"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          +237 XX XX XX XX
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Horaires :</p>
                        <p className="text-gray-700">Lundi - Vendredi : 8h - 18h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Nos Références
                    </h3>
                    <p className="text-gray-700">
                      Nous travaillons avec des entreprises de toutes tailles, 
                      des PME aux grands groupes, dans divers secteurs d'activité au Cameroun.
                    </p>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                Prêt à trouver le talent idéal ou votre prochaine opportunité ?
              </h3>
              <p className="text-blue-100">
                Contactez notre équipe de recrutement pour des solutions sur mesure 
                et un accompagnement personnalisé.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Users size={20} className="mr-2" />
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recrutement;