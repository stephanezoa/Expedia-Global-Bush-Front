import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Calendar, 
  Users, 
  Award, 
  Mic, 
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Building,
  Globe,
  Target,
  TrendingUp,
  Shield,
  Coffee,
  Video,
  FileText,
  Lightbulb,
  BarChart,
  Heart,
  Star,
  Trophy,
  Clock
} from "lucide-react";

const Seminaire = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const services = [
    {
      icon: <Calendar size={28} className="text-blue-600" />,
      title: "Conférences & Séminaires",
      description: "Organisation complète d'événements professionnels de toute envergure",
      color: "from-blue-500 to-blue-600",
      details: ["Salles de conférence", "Équipement audiovisuel", "Traduction simultanée", "Gestion des inscriptions"]
    },
    {
      icon: <Award size={28} className="text-green-600" />,
      title: "Cérémonies & Galas",
      description: "Organisation de remises de prix et dîners officiels prestigieux",
      color: "from-green-500 to-green-600",
      details: ["Logistique événementielle", "Décoration sur mesure", "Animation et spectacle", "Service traiteur"]
    },
    {
      icon: <Building size={28} className="text-purple-600" />,
      title: "Salons Professionnels",
      description: "Conception et gestion d'expositions et foires commerciales",
      color: "from-purple-500 to-purple-600",
      details: ["Stands personnalisés", "Gestion exposants", "Animation commerciale", "Promotion événement"]
    },
    {
      icon: <Globe size={28} className="text-orange-600" />,
      title: "Événements Internationaux",
      description: "Coordination d'événements multilingues et multiculturels",
      color: "from-orange-500 to-orange-600",
      details: ["Logistique internationale", "Traduction professionnelle", "Accueil VIP", "Gestion déplacements"]
    }
  ];

  const eventTypes = [
    {
      type: "Séminaires d'entreprise",
      icon: "🏢",
      description: "Formations internes et réunions stratégiques",
      duration: "1-3 jours",
      participants: "20-200 personnes"
    },
    {
      type: "Conférences sectorielles",
      icon: "🎤",
      description: "Rencontres professionnelles par secteur d'activité",
      duration: "1-5 jours",
      participants: "100-1000 personnes"
    },
    {
      type: "Team Building",
      icon: "🤝",
      description: "Activités de renforcement d'équipe",
      duration: "1-2 jours",
      participants: "10-100 personnes"
    },
    {
      type: "Lancements produits",
      icon: "🚀",
      description: "Événements de présentation et promotion",
      duration: "1 jour",
      participants: "50-500 personnes"
    },
    {
      type: "Assemblées générales",
      icon: "📊",
      description: "Réunions statutaires et décisionnelles",
      duration: "1 jour",
      participants: "50-1000 personnes"
    },
    {
      type: "Ateliers de formation",
      icon: "🎓",
      description: "Sessions pratiques et interactives",
      duration: "1-5 jours",
      participants: "10-50 personnes"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation stratégique",
      description: "Analyse des objectifs et conception du concept",
      icon: <Target size={24} />
    },
    {
      step: "02",
      title: "Planification détaillée",
      description: "Élaboration du budget et du calendrier",
      icon: <Calendar size={24} />
    },
    {
      step: "03",
      title: "Logistique opérationnelle",
      description: "Réservation des lieux et coordination des prestataires",
      icon: <Building size={24} />
    },
    {
      step: "04",
      title: "Gestion des participants",
      description: "Inscriptions, accueil et suivi",
      icon: <Users size={24} />
    },
    {
      step: "05",
      title: "Animation événementielle",
      description: "Coordination du jour J et animation",
      icon: <Mic size={24} />
    },
    {
      step: "06",
      title: "Bilan et reporting",
      description: "Analyse des résultats et retour sur investissement",
      icon: <BarChart size={24} />
    }
  ];

  const clients = [
    "Entreprises privées",
    "Organisations gouvernementales",
    "Institutions publiques",
    "Associations professionnelles",
    "ONG internationales",
    "Institutions académiques"
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
                <Calendar size={20} />
                <span className="text-sm font-medium">Organisation Événementielle</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Séminaires &</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Conférences
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Donnez vie à vos projets événementiels avec notre expertise professionnelle. 
                Plus de 10 ans d'expérience au service de vos réussites.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Planifier un événement</span>
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Découvrir nos services
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
                        <h3 className="text-xl font-bold">Expertise Confirmée</h3>
                        <p className="text-blue-200">10+ années d'expérience</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">500+</div>
                        <p className="text-sm text-blue-200">Événements organisés</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">100%</div>
                        <p className="text-sm text-blue-200">Satisfaction client</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">50+</div>
                        <p className="text-sm text-blue-200">Partenaires locaux</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Support événementiel</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Événements de 10 à 10,000 participants
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
          {["overview", "services", "events", "process", "clients"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "overview" && "Présentation"}
              {tab === "services" && "Nos Services"}
              {tab === "events" && "Types d'Événements"}
              {tab === "process" && "Notre Processus"}
              {tab === "clients" && "Nos Clients"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Notre Expertise
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Global Bush Travel and Tourism est spécialisé dans l'organisation 
                      de conférences, séminaires et événements de tous types, en donnant 
                      véritablement vie à vos projets.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Fort de plus de 10 ans d'expérience dans ce domaine, Global Bush 
                      est un organisateur reconnu de conférences et de séminaires au 
                      Cameroun et propose des services de gestion d'événements pour 
                      des cérémonies de remise de prix, des salons professionnels et 
                      des dîners officiels.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Lightbulb className="mr-2 text-blue-600" size={24} />
                      Notre Philosophie
                    </h3>
                    <p className="text-gray-700">
                      Au-delà de la simple logistique événementielle, Global Bush offre 
                      des services de leadership et de planification stratégique pour la 
                      réalisation de réunions orientées vers les résultats, grâce à un 
                      modèle unique et efficace axé sur la réussite.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Shield className="mr-2 text-green-600" size={24} />
                      Notre Professionnalisme
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Notre professionnalisme, à la fois rigoureux et convivial, a fait de 
                      notre agence un partenaire de choix pour les entreprises, les 
                      organisations gouvernementales locales, les institutions publiques et 
                      les associations professionnelles à travers le Cameroun.
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-medium">Rigueur et précision</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-medium">Approche conviviale</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-medium">Flexibilité adaptative</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Trophy className="mr-2 text-yellow-600" size={24} />
                      Expérience Internationale
                    </h3>
                    <p className="text-gray-700">
                      Grâce à une solide expérience dans l'organisation d'événements 
                      internationaux de grande envergure, de conférences et de séminaires 
                      complexes, Global Bush est toujours prêt à intervenir avec une 
                      équipe qualifiée d'experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div id="services" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Services Complets
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des solutions sur mesure pour tous types d'événements professionnels
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
              
              {/* Additional Services */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  Services Additionnels
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Coffee size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Catering & Restauration</h4>
                    <p className="text-gray-600 text-sm">Service traiteur premium adapté</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Video size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Audiovisuel & Technologie</h4>
                    <p className="text-gray-600 text-sm">Équipements haute technologie</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <FileText size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Communication Événementielle</h4>
                    <p className="text-gray-600 text-sm">Promotion et relations presse</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Types d'Événements
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Nous organisons tous types d'événements professionnels, adaptés à vos besoins spécifiques
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventTypes.map((event, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl">{event.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{event.type}</h3>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-blue-600" />
                          <span className="text-gray-600">Durée :</span>
                        </div>
                        <span className="font-bold text-blue-900">{event.duration}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-blue-600" />
                          <span className="text-gray-600">Participants :</span>
                        </div>
                        <span className="font-bold text-blue-900">{event.participants}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 text-sm font-medium">À partir de</span>
                        <span className="font-bold text-blue-900">Sur devis</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                    <p className="text-gray-700">Années d'expérience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                    <p className="text-gray-700">Événements réussis</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                    <p className="text-gray-700">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Notre Processus
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  6 étapes pour garantir le succès de votre événement
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
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Notre Approche Unique
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Leadership stratégique :</h4>
                    <p className="text-gray-700">
                      Nous ne nous contentons pas de la logistique. Nous vous accompagnons 
                      dans la définition d'objectifs clairs et la conception d'un événement 
                      qui génère des résultats tangibles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Suivi personnalisé :</h4>
                    <p className="text-gray-700">
                      Un chef de projet dédié vous accompagne de la conception au bilan, 
                      garantissant une communication fluide et une adaptation continue 
                      à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Clients & Partenaires
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des organisations qui nous font confiance pour leurs événements les plus importants
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Secteurs d'Activité
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {clients.map((client, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{client}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi nous choisir ?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Star size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Expertise locale approfondie</p>
                          <p className="text-gray-600 text-sm">Connaissance parfaite du marché camerounais</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Heart size={20} className="text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Approche personnalisée</p>
                          <p className="text-gray-600 text-sm">Chaque événement est unique et traité comme tel</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Gestion des risques</p>
                          <p className="text-gray-600 text-sm">Anticipation et solution des imprévus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Témoignages
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/50 rounded-xl p-4">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-2">
                          "Global Bush a transformé notre conférence annuelle en un événement mémorable. 
                          Leur professionnalisme et leur attention aux détails sont exceptionnels."
                        </p>
                        <p className="font-bold text-blue-900">— Directeur Marketing, Entreprise multinationale</p>
                      </div>
                      
                      <div className="bg-white/50 rounded-xl p-4">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-2">
                          "Leur capacité à gérer des événements complexes avec plusieurs centaines de participants 
                          est impressionnante. Un partenaire de confiance."
                        </p>
                        <p className="font-bold text-blue-900">— Présidente, Association professionnelle</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Événementiel
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:evenements@globalbushtratour.com" className="text-blue-600 hover:underline">
                          evenements@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={18} className="text-blue-600" />
                        <span className="text-gray-700">Consultation gratuite sur rendez-vous</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Demander un Devis Personnalisé
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
                Prêt à donner vie à votre prochain événement ?
              </h3>
              <p className="text-blue-100">
                Contactez notre équipe d'experts en organisation événementielle 
                pour une consultation gratuite et une proposition sur mesure.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Calendar size={20} className="mr-2" />
                Planifier un Événement
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Seminaire;