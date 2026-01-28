import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Calculator, 
  FileText, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Users,
  Building,
  Award,
  Clock,
  BarChart,
  Target,
  CreditCard,
  Receipt,
  Banknote,
  PieChart,
  Calendar,
  Download,
  Eye,
  Lock,
  RefreshCw,
  HelpCircle
} from "lucide-react";

const Service = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const services = [
    {
      icon: <Calculator size={28} className="text-blue-600" />,
      title: "Traitement de la Paie",
      description: "Calcul complet des salaires et gestion des déductions",
      color: "from-blue-500 to-blue-600",
      features: [
        "Salaires de base",
        "Heures supplémentaires",
        "Primes et avantages",
        "Indemnités diverses",
        "Fiches de paie détaillées"
      ]
    },
    {
      icon: <FileText size={28} className="text-green-600" />,
      title: "Conformité Fiscale",
      description: "Respect des obligations légales et déclarations",
      color: "from-green-500 to-green-600",
      features: [
        "Déclarations fiscales mensuelles",
        "Cotisations CNPS",
        "Retenues à la source",
        "Audit et conseil",
        "Mise à jour réglementaire"
      ]
    },
    {
      icon: <CreditCard size={28} className="text-purple-600" />,
      title: "Avantages Sociaux",
      description: "Gestion complète des avantages employés",
      color: "from-purple-500 to-purple-600",
      features: [
        "Assurances santé",
        "Plans de retraite",
        "Tickets-restaurant",
        "Indemnités transport",
        "Avantages en nature"
      ]
    },
    {
      icon: <Users size={28} className="text-orange-600" />,
      title: "Support & Formation",
      description: "Accompagnement personnalisé et formation",
      color: "from-orange-500 to-orange-600",
      features: [
        "Consultant dédié",
        "Formation équipe",
        "Rapports détaillés",
        "Support réactif",
        "Analyses stratégiques"
      ]
    }
  ];

  const benefits = [
    "Expertise locale en législation camerounaise",
    "Technologie avancée pour calculs précis",
    "Gain de temps considérable",
    "Conformité garantie",
    "Sécurité des données absolue",
    "Rapports personnalisés en temps réel"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit initial",
      description: "Analyse de votre structure de paie actuelle",
      icon: <Eye size={24} />
    },
    {
      step: "02",
      title: "Paramétrage",
      description: "Configuration de votre système de paie",
      icon: <Settings size={24} />
    },
    {
      step: "03",
      title: "Intégration",
      description: "Import des données employés",
      icon: <RefreshCw size={24} />
    },
    {
      step: "04",
      title: "Calcul & Validation",
      description: "Traitement et vérification de la paie",
      icon: <Calculator size={24} />
    },
    {
      step: "05",
      title: "Déclarations",
      description: "Soumission des déclarations officielles",
      icon: <FileText size={24} />
    },
    {
      step: "06",
      title: "Reporting",
      description: "Livraison des rapports et analyses",
      icon: <BarChart size={24} />
    }
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      description: "Pour les petites entreprises",
      price: "À partir de 50.000 XAF",
      period: "par mois",
      features: [
        "Jusqu'à 10 employés",
        "Traitement mensuel de la paie",
        "Fiches de paie basiques",
        "Déclarations CNPS",
        "Support par email"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professionnel",
      description: "Pour les PME",
      price: "À partir de 150.000 XAF",
      period: "par mois",
      features: [
        "Jusqu'à 50 employés",
        "Traitement bi-mensuel",
        "Fiches de paie détaillées",
        "Toutes déclarations fiscales",
        "Support téléphonique",
        "Rapports mensuels"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Enterprise",
      description: "Pour les grandes entreprises",
      price: "Sur mesure",
      period: "",
      features: [
        "Nombre illimité d'employés",
        "Traitement hebdomadaire",
        "Interface personnalisée",
        "Gestion complète RH",
        "Support dédié 24/7",
        "Analyses stratégiques"
      ],
      color: "from-purple-500 to-purple-600"
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                <Calculator size={20} />
                <span className="text-sm font-medium">Gestion de Paie Professionnelle</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Services</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  de Paie
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Une gestion de paie efficace et conforme pour le bon fonctionnement 
                de votre entreprise au Cameroun. Libérez-vous des tâches administratives complexes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Demander un audit gratuit</span>
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
                        <h3 className="text-xl font-bold">Économisez du Temps</h3>
                        <p className="text-blue-200">Jusqu'à 70% de temps gagné</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">100%</div>
                        <p className="text-sm text-blue-200">Conformité légale</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Support disponible</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">0</div>
                        <p className="text-sm text-blue-200">Erreurs de paie</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">50+</div>
                        <p className="text-sm text-blue-200">Entreprises clientes</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Gestion conforme aux normes CNPS et fiscales camerounaises
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
          {["overview", "services", "process", "pricing", "faq"].map((tab) => (
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
              {tab === "pricing" && "Tarifs"}
              {tab === "faq" && "FAQ"}
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
                      À l'agence Global Bush Travel and Tourism à Douala, au Cameroun, nous 
                      comprenons l'importance d'une gestion de la paie efficace et conforme 
                      pour le bon fonctionnement de votre entreprise.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Nos services de paie sont conçus pour répondre aux besoins spécifiques 
                      des entreprises camerounaises, en veillant à ce que toutes les obligations 
                      légales et fiscales soient respectées.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Target className="mr-2 text-blue-600" size={24} />
                      Notre Objectif
                    </h3>
                    <p className="text-gray-700">
                      Nous nous chargeons de tous les aspects liés au calcul et à la gestion 
                      de la paie, afin que vous puissiez vous concentrer sur vos activités principales.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 text-green-600" size={24} />
                      Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="text-green-600" size={20} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Shield className="mr-2 text-yellow-600" size={24} />
                      Sécurité des Données
                    </h3>
                    <p className="text-gray-700">
                      Vos données sont protégées par des systèmes de sécurité avancés 
                      et un cryptage de niveau bancaire.
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
                  Une solution intégrée pour tous vos besoins en gestion de paie
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
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-700">
                          <ChevronRight size={16} className="text-blue-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                      En savoir plus
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Detailed Services */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  Fonctionnalités Détaillées
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Banknote size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Calculs Précision</h4>
                    <p className="text-gray-600 text-sm">Calcul exact des salaires nets et bruts</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Receipt size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Fiches de Paie</h4>
                    <p className="text-gray-600 text-sm">Génération automatique et personnalisée</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <PieChart size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Analytics</h4>
                    <p className="text-gray-600 text-sm">Tableaux de bord et analyses détaillées</p>
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
                  6 étapes simples pour une transition en douceur
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
                      <Calendar className="mr-2 text-green-600" size={24} />
                      Calendrier des Paies
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Nous respectons scrupuleusement les délais légaux pour toutes vos 
                      déclarations et paiements, avec des rappels automatiques.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Clock size={16} className="text-green-600" />
                        <span className="text-sm">Paiements mensuels</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Clock size={16} className="text-green-600" />
                        <span className="text-sm">Déclarations CNPS avant échéance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Clock size={16} className="text-green-600" />
                        <span className="text-sm">Rapports trimestriels</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Download className="mr-2 text-green-600" size={24} />
                      Documents & Archives
                    </h3>
                    <p className="text-gray-700">
                      Tous vos documents sont archivés numériquement pendant 10 ans, 
                      conformément aux exigences légales camerounaises.
                    </p>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300">
                        Télécharger un exemple de fiche de paie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Offres Tarifaires
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des solutions adaptées à la taille et aux besoins de votre entreprise
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 ${
                      plan.name === "Professionnel" 
                        ? 'border-blue-400 shadow-xl scale-105' 
                        : 'border-blue-100 hover:border-blue-300'
                    } hover:shadow-xl transition-all duration-300`}
                  >
                    {plan.name === "Professionnel" && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                        POPULAIRE
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    
                    <div className="text-center mb-8">
                      <div className="text-3xl font-bold text-blue-900">{plan.price}</div>
                      <div className="text-gray-600">{plan.period}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`block w-full py-3 font-semibold text-center rounded-lg transition-all duration-300 ${
                        plan.name === "Professionnel"
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                          : 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200'
                      }`}
                    >
                      Choisir cette offre
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Besoin d'une solution sur mesure ?
                    </h3>
                    <p className="text-gray-700">
                      Contactez-nous pour un devis personnalisé adapté aux spécificités de votre entreprise.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Demander un devis personnalisé
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Questions Fréquentes
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Trouvez rapidement des réponses à vos questions
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <HelpCircle className="mr-2 text-blue-600" size={24} />
                      Questions Générales
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          q: "Combien de temps prend la mise en place ?",
                          a: "En moyenne 2 à 3 semaines, selon la complexité de votre structure."
                        },
                        {
                          q: "Mes données sont-elles sécurisées ?",
                          a: "Oui, nous utilisons un cryptage de niveau bancaire et des sauvegardes quotidiennes."
                        },
                        {
                          q: "Proposez-vous une période d'essai ?",
                          a: "Oui, nous offrons un mois d'essai gratuit pour nos offres Premium."
                        }
                      ].map((faq, index) => (
                        <div key={index} className="border-b border-blue-100 pb-4">
                          <h4 className="font-bold text-blue-900 mb-2">{faq.q}</h4>
                          <p className="text-gray-700 text-sm">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Support Client
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:paie@globalbushtratour.com" className="text-blue-600 hover:underline">
                          paie@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-blue-600" />
                        <span className="text-gray-700">Lundi - Vendredi : 8h - 18h</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Questions Techniques
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          q: "Quels documents dois-je fournir ?",
                          a: "Vos contrats de travail, conventions collectives, et informations employés."
                        },
                        {
                          q: "Comment sont générées les fiches de paie ?",
                          a: "Automatiquement chaque mois, disponibles en PDF dans votre espace client."
                        },
                        {
                          q: "Gérez-vous les déclarations CNPS ?",
                          a: "Oui, nous effectuons toutes les déclarations et paiements CNPS pour vous."
                        },
                        {
                          q: "Proposez-vous une formation ?",
                          a: "Oui, nous formons votre équipe à l'utilisation de notre plateforme."
                        }
                      ].map((faq, index) => (
                        <div key={index} className="border-b border-green-100 pb-4">
                          <h4 className="font-bold text-blue-900 mb-2">{faq.q}</h4>
                          <p className="text-gray-700 text-sm">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Poser une Question
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
                Prêt à simplifier votre gestion de paie ?
              </h3>
              <p className="text-blue-100">
                Contactez-nous dès aujourd'hui pour une consultation gratuite 
                et découvrez comment nous pouvons optimiser votre processus de paie.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Calculator size={20} className="mr-2" />
                Démarrer Maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;