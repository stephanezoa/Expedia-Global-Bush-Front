import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Building, 
  FileText, 
  Target, 
  BarChart,
  Shield,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Globe,
  Wallet,
  Award,
  ChevronRight
} from "lucide-react";

const Creation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const services = [
    {
      icon: <Building size={28} />,
      title: "Structure Juridique",
      description: "Conseils sur le choix de la structure adaptée (SARL, SA, entreprise individuelle, etc.)",
      color: "from-blue-500 to-blue-600",
      details: ["SARL", "SA", "SUARL", "Entreprise Individuelle", "GIE", "Société en Nom Collectif"]
    },
    {
      icon: <FileText size={28} />,
      title: "Enregistrement",
      description: "Assistance pour l'enregistrement auprès des autorités compétentes",
      color: "from-green-500 to-green-600",
      details: ["CFE", "Registre de Commerce", "NINEA", "Statuts", "Publication Journal Officiel"]
    },
    {
      icon: <BarChart size={28} />,
      title: "Études & Plans",
      description: "Élaboration de business plans, études de marché et analyse financière",
      color: "from-purple-500 to-purple-600",
      details: ["Business Plan", "Étude de Marché", "Prévisionnel Financier", "Plan Marketing", "SWOT"]
    },
    {
      icon: <Wallet size={28} />,
      title: "Bancaire & Fiscal",
      description: "Accompagnement pour ouverture comptes bancaires et démarches administratives",
      color: "from-orange-500 to-orange-600",
      details: ["Ouverture Compte", "Immatriculation Fiscale", "Déclaration TVA", "Formalités Douanières"]
    },
    {
      icon: <Shield size={28} />,
      title: "Conformité Légale",
      description: "Conseil sur la conformité légale, fiscale et sociale",
      color: "from-red-500 to-red-600",
      details: ["Code du Travail", "Droit des Sociétés", "Fiscalité", "Droit Commercial", "Social"]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Développement",
      description: "Suivi personnalisé pour le développement et la croissance de votre entreprise",
      color: "from-indigo-500 to-indigo-600",
      details: ["Stratégie Croissance", "Réseautage", "Financement", "Partnerships", "Export"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation Initiale",
      description: "Analyse de votre projet et définition des objectifs",
      icon: <Users size={24} />
    },
    {
      step: "02",
      title: "Étude de Faisabilité",
      description: "Analyse du marché et préparation du business plan",
      icon: <Target size={24} />
    },
    {
      step: "03",
      title: "Choix Structure",
      description: "Sélection de la structure juridique la plus adaptée",
      icon: <Building size={24} />
    },
    {
      step: "04",
      title: "Enregistrement",
      description: "Dépôt des documents et obtention des autorisations",
      icon: <FileText size={24} />
    },
    {
      step: "05",
      title: "Installation",
      description: "Ouverture bancaire et mise en place opérationnelle",
      icon: <Briefcase size={24} />
    },
    {
      step: "06",
      title: "Accompagnement",
      description: "Suivi et conseil pour le développement de l'entreprise",
      icon: <TrendingUp size={24} />
    }
  ];

  const advantages = [
    "Expertise locale et connaissance du marché camerounais",
    "Gain de temps considérable dans les démarches",
    "Réduction des risques juridiques et fiscaux",
    "Accès à notre réseau de partenaires professionnels",
    "Suivi personnalisé selon votre secteur d'activité",
    "Support multilingue (français, anglais, etc.)"
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
                <Building size={20} />
                <span className="text-sm font-medium">Entreprise & Développement</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Création</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  d'Entreprise
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Lancez votre entreprise au Cameroun avec notre accompagnement complet. 
                De l'idée à la réalité, nous vous guidons à chaque étape pour garantir 
                le succès de votre projet.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Démarrer mon projet</span>
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Voir nos services
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Globe size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Pour investisseurs</h3>
                        <p className="text-blue-200">Locaux & Internationaux</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">98%</div>
                        <p className="text-sm text-blue-200">Taux de réussite</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">15-30</div>
                        <p className="text-sm text-blue-200">Jours moyens</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Support client</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">500+</div>
                        <p className="text-sm text-blue-200">Projets réalisés</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Délais moyens pour la création complète d'entreprise
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
          {["overview", "services", "process", "advantages", "contact"].map((tab) => (
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
              {tab === "process" && "Processus"}
              {tab === "advantages" && "Avantages"}
              {tab === "contact" && "Contact"}
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
                      Notre Mission
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Global Bush Travel and Tourism propose un service complet pour la 
                      création d'entreprise et l'accompagnement des entrepreneurs au Cameroun. 
                      Que vous soyez un investisseur local ou étranger, nous vous guidons à 
                      chaque étape du processus pour garantir la réussite de votre projet.
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <Target className="mr-2 text-blue-600" size={24} />
                        Notre Objectif
                      </h3>
                      <p className="text-gray-700">
                        Avec notre expertise locale, nous facilitons toutes les démarches 
                        complexes et vous permettons de lancer votre entreprise rapidement 
                        et efficacement. Notre objectif est de vous offrir un accompagnement 
                        complet pour que vous puissiez vous concentrer sur le développement 
                        de votre activité.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 text-green-600" size={24} />
                      Pourquoi Nous Choisir ?
                    </h3>
                    <ul className="space-y-3">
                      {advantages.slice(0, 4).map((advantage, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Clock className="mr-2 text-yellow-600" size={24} />
                      Engagement
                    </h3>
                    <p className="text-gray-700">
                      Contactez Global Bush Travel and Tourism pour bénéficier d'un service 
                      professionnel et sur mesure pour la création et le développement de 
                      votre entreprise au Cameroun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div id="services" className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Nos Services Complets
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Inclus :</h4>
                      <ul className="space-y-1">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <ChevronRight size={12} className="text-blue-500" />
                            <span>{detail}</span>
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

          {activeTab === "process" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Notre Processus en 6 Étapes
                </span>
              </h2>
              
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
            </div>
          )}

          {activeTab === "advantages" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Avantages Globaux
                </span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pour Votre Entreprise
                    </h3>
                    <ul className="space-y-3">
                      {advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Secteurs d'Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Tourisme & Hôtellerie",
                        "Commerce & Distribution",
                        "Services Professionnels",
                        "Technologie & Digital",
                        "Agriculture & Agroalimentaire",
                        "Immobilier & Construction",
                        "Santé & Pharmacie",
                        "Transport & Logistique"
                      ].map((sector, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{sector}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Notre Promesse
                    </h3>
                    <p className="text-gray-700">
                      Avec Global Bush, bénéficiez d'un accompagnement sur mesure 
                      qui s'adapte à vos besoins spécifiques. Nous nous engageons 
                      à vous fournir les outils et le support nécessaires pour 
                      transformer votre vision en réalité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Contact & Démarrage
                </span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Mail className="mr-2 text-blue-600" size={24} />
                      Prise de Contact
                    </h3>
                    
                    <p className="text-gray-700 mb-4">
                      Prêt à lancer votre entreprise au Cameroun ? Contactez-nous 
                      pour une consultation gratuite et sans engagement.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900">Email :</p>
                        <a 
                          href="mailto:info@globalbushtratour.com"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          info@globalbushtratour.com
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
                        <p className="text-gray-700">Samedi : 9h - 13h</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Prochaine Étape
                    </h3>
                    <ol className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Consultation Initiale</p>
                          <p className="text-gray-600 text-sm">Évaluation de votre projet (30 min)</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Devis Personnalisé</p>
                          <p className="text-gray-600 text-sm">Proposition de service adaptée</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Lancement du Projet</p>
                          <p className="text-gray-600 text-sm">Démarrage des formalités</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Demander une Consultation Gratuite
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
                Prêt à créer votre entreprise au Cameroun ?
              </h3>
              <p className="text-blue-100">
                Notre équipe d'experts vous accompagne de A à Z dans la création 
                et le développement de votre entreprise. Bénéficiez de notre 
                expertise locale pour un lancement réussi.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Briefcase size={20} className="mr-2" />
                Lancer mon Projet
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Creation;