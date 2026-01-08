// src/pages/ContentGuidelines.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FileText, Shield, CheckCircle, AlertCircle,
  Star, Camera, Flag, Users, Clock,
  Mail, HelpCircle, BookOpen, Eye,
  XCircle, Filter, MessageSquare, Edit,
  ThumbsUp, AlertTriangle, Download,
  ChevronDown, ChevronUp, ExternalLink, ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContentGuidelines() {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const content = {
    FR: {
      title: "Directives de Contenu",
      lastUpdated: "Dernière mise à jour : 26 décembre 2024",
      
      hero: {
        title: "Nos Règles de Contenu",
        description: "Chez Global Bush Travel, nous valorisons les retours authentiques de notre communauté de voyageurs. Ces directives assurent que notre plateforme reste fiable, utile et sécurisée pour tous."
      },
      
      introduction: {
        title: "Introduction",
        content: "Nous savons que notre communauté de voyageurs accorde une grande importance aux avis et contenus créés par d'autres voyageurs et nos partenaires. C'est pourquoi il est essentiel pour nous, et pour nos voyageurs, que le contenu sur notre site et application soit véridique, utile et sécurisé.",
        note: "Ces directives font partie intégrante de nos politiques générales et conditions d'utilisation, y compris nos Conditions Générales d'Utilisation et notre Politique de Confidentialité."
      },
      
      reviews: {
        title: "Directives pour les Avis",
        overview: {
          title: "Aperçu",
          content: "Nous comprenons l'importance des avis fiables pour nos voyageurs. Les avis que vous soumettez doivent être véridiques, contenir des informations pertinentes reflétant votre expérience réelle, et respecter ces directives.",
          points: [
            "Nous modérons tous les avis soumis",
            "Nous publions tous les avis (positifs et négatifs) qui respectent nos règles",
            "Seuls les voyageurs ayant effectivement voyagé avec nous peuvent publier des avis"
          ]
        },
        
        eligibility: {
          title: "Éligibilité et Suppression des Avis",
          criteria: [
            "Les avis doivent être soumis dans les 6 mois suivant votre voyage",
            "Vous ne pouvez pas évaluer un service que vous gérez ou avec lequel vous êtes associé",
            "Votre avis doit concerner une expérience réelle et vérifiable"
          ],
          removal: {
            title: "Suppression des Avis",
            reasons: [
              "Contient des données personnelles d'autrui",
              "Est manifestement faux ou frauduleux",
              "Est offensant, illégal ou contenu interdit",
              "Promotion commerciale ou spam"
            ],
            note: "Nous ne supprimons pas les avis simplement parce qu'ils sont négatifs."
          }
        },
        
        moderation: {
          title: "Modération des Avis",
          process: [
            "Utilisation d'outils automatisés de détection de contenu non conforme",
            "Revue manuelle par notre équipe de modération",
            "Notification par email en cas de rejet d'un avis",
            "Possibilité de re-soumettre après corrections"
          ],
          timeframe: "Notre équipe traite les avis sous 48 à 72 heures."
        },
        
        scoring: {
          title: "Système de Notation",
          overall: "Notation globale de 1 à 5 étoiles",
          categories: [
            { name: "Service", description: "Qualité du service client" },
            { name: "Propreté", description: "Nettoyage et hygiène" },
            { name: "Confort", description: "Confort général" },
            { name: "Emplacement", description: "Accessibilité et situation" },
            { name: "Rapport qualité-prix", description: "Valeur pour l'argent" }
          ],
          calculation: "La note moyenne est calculée sur la base de toutes les notes publiées, sans pondération."
        },
        
        responses: {
          title: "Réponses des Partenaires",
          content: "Nos partenaires (hôtels, guides, agences) peuvent répondre aux avis pour :",
          points: [
            "Apporter des clarifications",
            "Présenter des améliorations réalisées",
            "Proposer des solutions aux problèmes signalés"
          ],
          rules: "Nous ne facilitons pas le contact direct entre partenaires et voyageurs."
        }
      },
      
      contentTypes: {
        title: "Types de Contenu",
        items: [
          {
            type: "Avis sur les Hôtels",
            icon: <Star className="w-5 h-5" />,
            rules: [
              "Basé sur un séjour effectif",
              "Soumis dans les 6 mois",
              "Inclut des détails spécifiques"
            ]
          },
          {
            type: "Avis sur les Circuits",
            icon: <Users className="w-5 h-5" />,
            rules: [
              "Expérience personnelle de circuit",
              "Évaluation du guide et du programme",
              "Pertinence des activités"
            ]
          },
          {
            type: "Avis sur les Transports",
            icon: <Clock className="w-5 h-5" />,
            rules: [
              "Qualité du service de transport",
              "Ponctualité et sécurité",
              "État des véhicules"
            ]
          },
          {
            type: "Photos",
            icon: <Camera className="w-5 h-5" />,
            rules: [
              "Photos originales prises par vous",
              "Sans modification significative",
              "Respect de la vie privée d'autrui"
            ]
          }
        ]
      },
      
      prohibitedContent: {
        title: "Contenu Interdit",
        categories: [
          {
            name: "Contenu trompeur",
            examples: ["Faux avis", "Promotions déguisées", "Informations inexactes"],
            icon: <AlertTriangle className="w-5 h-5" />
          },
          {
            name: "Contenu offensant",
            examples: ["Langage vulgaire", "Discours haineux", "Contenu discriminatoire"],
            icon: <XCircle className="w-5 h-5" />
          },
          {
            name: "Données personnelles",
            examples: ["Coordonnées privées", "Informations financières", "Photos non autorisées"],
            icon: <Shield className="w-5 h-5" />
          },
          {
            name: "Contenu commercial",
            examples: ["Publicités", "Liens promotionnels", "Spam"],
            icon: <Flag className="w-5 h-5" />
          },
          {
            name: "Violation de droits",
            examples: ["Contenu plagié", "Images protégées", "Marques déposées"],
            icon: <FileText className="w-5 h-5" />
          }
        ],
        note: "Nous nous réservons le droit de supprimer tout contenu que nous jugerions inapproprié, même s'il ne figure pas explicitement dans cette liste."
      },
      
      photoGuidelines: {
        title: "Directives pour les Photos",
        technical: {
          title: "Exigences techniques",
          requirements: [
            "Formats acceptés : JPEG, PNG, WebP",
            "Taille maximale : 10 MB",
            "Résolution minimale : 1200x800 pixels",
            "Poids optimal : 2-5 MB"
          ]
        },
        content: {
          title: "Contenu des photos",
          rules: [
            "Photos originales prises par vous",
            "Sans logos ou marques d'eau",
            "Bonne luminosité et netteté",
            "Respect de la vie privée des personnes",
            "Pas de contenu promotionnel"
          ]
        },
        tips: [
          "Photographiez les espaces publics",
          "Capturez les équipements importants",
          "Montrez les vues depuis les chambres",
          "Évitez les selfies excessifs"
        ]
      },
      
      submissionTips: {
        title: "Conseils pour Soumettre du Contenu",
        do: [
          {
            title: "Soyez spécifique",
            description: "Décrivez des aspects précis de votre expérience"
          },
          {
            title: "Soyez équilibré",
            description: "Mentionnez à la fois les points positifs et négatifs"
          },
          {
            title: "Soyez utile",
            description: "Partagez des informations pratiques pour d'autres voyageurs"
          },
          {
            title: "Soyez récent",
            description: "Soumettez votre avis peu après votre voyage"
          }
        ],
        dont: [
          "Ne copiez pas d'autres avis",
          "N'utilisez pas de langage vulgaire",
          "Ne partagez pas d'informations confidentielles",
          "Ne faites pas de publicité pour d'autres entreprises"
        ]
      },
      
      reporting: {
        title: "Signaler du Contenu",
        methods: [
          {
            method: "Via notre site web",
            description: "Cliquez sur le bouton 'Signaler' à côté du contenu concerné",
            icon: <Flag className="w-5 h-5" />
          },
          {
            method: "Par email",
            description: "Envoyez-nous un email à content@globalbushtravel.com",
            icon: <Mail className="w-5 h-5" />
          },
          {
            method: "Support client",
            description: "Contactez notre équipe d'assistance",
            icon: <HelpCircle className="w-5 h-5" />
          }
        ],
        response: "Nous examinons tous les signalements sous 72 heures et prenons les mesures appropriées."
      },
      
      updates: {
        title: "Mises à Jour des Directives",
        content: "Ces directives peuvent être mises à jour périodiquement pour refléter les évolutions de notre plateforme et les retours de notre communauté. La date de dernière mise à jour est indiquée en haut de cette page.",
        notification: "Les changements majeurs seront communiqués à notre communauté par email."
      },
      
      contact: {
        title: "Questions ?",
        description: "Si vous avez des questions concernant ces directives ou le contenu sur notre plateforme :",
        email: "content-guidelines@globalbushtravel.com",
        hours: "Notre équipe de modération est disponible du lundi au vendredi, 9h-18h (GMT+1)"
      }
    },
    
    EN: {
      title: "Content Guidelines",
      lastUpdated: "Last updated: December 26, 2024",
      
      hero: {
        title: "Our Content Rules",
        description: "At Global Bush Travel, we value authentic feedback from our traveler community. These guidelines ensure our platform remains trustworthy, helpful, and safe for everyone."
      },
      
      introduction: {
        title: "Introduction",
        content: "We know our traveler community values reviews and content created by other travelers and our partners. That's why it's essential for us, and for our travelers, that content on our site and app is truthful, helpful, and secure.",
        note: "These guidelines are part of our broader policies and terms of use, including our Terms of Service and Privacy Policy."
      },
      
      reviews: {
        title: "Review Guidelines",
        overview: {
          title: "Overview",
          content: "We understand the importance of trusted reviews for our travelers. Reviews you submit should be truthful, contain relevant information reflecting your actual experience, and follow these guidelines.",
          points: [
            "We moderate all submitted reviews",
            "We publish all reviews (positive and negative) that follow our rules",
            "Only travelers who actually traveled with us can publish reviews"
          ]
        },
        
        eligibility: {
          title: "Eligibility and Removal of Reviews",
          criteria: [
            "Reviews must be submitted within 6 months of your travel",
            "You cannot review a service you manage or are associated with",
            "Your review must concern a real and verifiable experience"
          ],
          removal: {
            title: "Review Removal",
            reasons: [
              "Contains others' personal data",
              "Is clearly false or fraudulent",
              "Is offensive, illegal, or prohibited content",
              "Commercial promotion or spam"
            ],
            note: "We do not remove reviews simply because they are negative."
          }
        },
        
        moderation: {
          title: "Review Moderation",
          process: [
            "Use of automated tools to detect non-compliant content",
            "Manual review by our moderation team",
            "Email notification if a review is rejected",
            "Opportunity to re-submit after corrections"
          ],
          timeframe: "Our team processes reviews within 48 to 72 hours."
        },
        
        scoring: {
          title: "Scoring System",
          overall: "Overall rating from 1 to 5 stars",
          categories: [
            { name: "Service", description: "Quality of customer service" },
            { name: "Cleanliness", description: "Cleaning and hygiene" },
            { name: "Comfort", description: "General comfort" },
            { name: "Location", description: "Accessibility and situation" },
            { name: "Value for money", description: "Value for the money" }
          ],
          calculation: "The average score is calculated based on all published ratings, without weighting."
        },
        
        responses: {
          title: "Partner Responses",
          content: "Our partners (hotels, guides, agencies) can respond to reviews to:",
          points: [
            "Provide clarifications",
            "Present improvements made",
            "Offer solutions to reported issues"
          ],
          rules: "We do not facilitate direct contact between partners and travelers."
        }
      },
      
      contentTypes: {
        title: "Content Types",
        items: [
          {
            type: "Hotel Reviews",
            icon: <Star className="w-5 h-5" />,
            rules: [
              "Based on an actual stay",
              "Submitted within 6 months",
              "Includes specific details"
            ]
          },
          {
            type: "Tour Reviews",
            icon: <Users className="w-5 h-5" />,
            rules: [
              "Personal tour experience",
              "Guide and program evaluation",
              "Relevance of activities"
            ]
          },
          {
            type: "Transport Reviews",
            icon: <Clock className="w-5 h-5" />,
            rules: [
              "Transport service quality",
              "Punctuality and safety",
              "Vehicle condition"
            ]
          },
          {
            type: "Photos",
            icon: <Camera className="w-5 h-5" />,
            rules: [
              "Original photos taken by you",
              "Without significant editing",
              "Respect for others' privacy"
            ]
          }
        ]
      },
      
      prohibitedContent: {
        title: "Prohibited Content",
        categories: [
          {
            name: "Misleading Content",
            examples: ["Fake reviews", "Disguised promotions", "Inaccurate information"],
            icon: <AlertTriangle className="w-5 h-5" />
          },
          {
            name: "Offensive Content",
            examples: ["Vulgar language", "Hate speech", "Discriminatory content"],
            icon: <XCircle className="w-5 h-5" />
          },
          {
            name: "Personal Data",
            examples: ["Private contact details", "Financial information", "Unauthorized photos"],
            icon: <Shield className="w-5 h-5" />
          },
          {
            name: "Commercial Content",
            examples: ["Advertisements", "Promotional links", "Spam"],
            icon: <Flag className="w-5 h-5" />
          },
          {
            name: "Rights Violation",
            examples: ["Plagiarized content", "Protected images", "Trademarks"],
            icon: <FileText className="w-5 h-5" />
          }
        ],
        note: "We reserve the right to remove any content we deem inappropriate, even if not explicitly listed here."
      },
      
      photoGuidelines: {
        title: "Photo Guidelines",
        technical: {
          title: "Technical Requirements",
          requirements: [
            "Accepted formats: JPEG, PNG, WebP",
            "Maximum size: 10 MB",
            "Minimum resolution: 1200x800 pixels",
            "Optimal weight: 2-5 MB"
          ]
        },
        content: {
          title: "Photo Content",
          rules: [
            "Original photos taken by you",
            "No logos or watermarks",
            "Good brightness and sharpness",
            "Respect for people's privacy",
            "No promotional content"
          ]
        },
        tips: [
          "Photograph public spaces",
          "Capture important facilities",
          "Show views from rooms",
          "Avoid excessive selfies"
        ]
      },
      
      submissionTips: {
        title: "Submission Tips",
        do: [
          {
            title: "Be specific",
            description: "Describe specific aspects of your experience"
          },
          {
            title: "Be balanced",
            description: "Mention both positive and negative points"
          },
          {
            title: "Be helpful",
            description: "Share practical information for other travelers"
          },
          {
            title: "Be recent",
            description: "Submit your review soon after your travel"
          }
        ],
        dont: [
          "Don't copy other reviews",
          "Don't use vulgar language",
          "Don't share confidential information",
          "Don't advertise other companies"
        ]
      },
      
      reporting: {
        title: "Reporting Content",
        methods: [
          {
            method: "Via our website",
            description: "Click the 'Report' button next to the concerned content",
            icon: <Flag className="w-5 h-5" />
          },
          {
            method: "By email",
            description: "Send us an email at content@globalbushtravel.com",
            icon: <Mail className="w-5 h-5" />
          },
          {
            method: "Customer support",
            description: "Contact our assistance team",
            icon: <HelpCircle className="w-5 h-5" />
          }
        ],
        response: "We review all reports within 72 hours and take appropriate action."
      },
      
      updates: {
        title: "Guidelines Updates",
        content: "These guidelines may be updated periodically to reflect our platform's evolution and community feedback. The last updated date is displayed at the top of this page.",
        notification: "Major changes will be communicated to our community by email."
      },
      
      contact: {
        title: "Questions?",
        description: "If you have questions about these guidelines or content on our platform:",
        email: "content-guidelines@globalbushtravel.com",
        hours: "Our moderation team is available Monday to Friday, 9 AM-6 PM (GMT+1)"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <FileText className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl opacity-90 mb-2">{t.lastUpdated}</p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.introduction.title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700">{t.introduction.content}</p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <p className="text-blue-800">{t.introduction.note}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.reviews.title}</h2>
              
              <div className="space-y-8">
                {/* Aperçu */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.reviews.overview.title}</h3>
                  <p className="text-gray-700 mb-4">{t.reviews.overview.content}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {t.reviews.overview.points.map((point, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Éligibilité */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.reviews.eligibility.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        {language === "FR" ? "Critères d'éligibilité" : "Eligibility Criteria"}
                      </h4>
                      <ul className="space-y-2">
                        {t.reviews.eligibility.criteria.map((criterion, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">{t.reviews.eligibility.removal.title}</h4>
                      <ul className="space-y-2">
                        {t.reviews.eligibility.removal.reasons.map((reason, index) => (
                          <li key={index} className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{reason}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                        <p className="text-yellow-800 text-sm">{t.reviews.eligibility.removal.note}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modération */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.reviews.moderation.title}</h3>
                  <div className="space-y-4">
                    {t.reviews.moderation.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-700 font-medium">{t.reviews.moderation.timeframe}</span>
                    </div>
                  </div>
                </div>

                {/* Notation */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.reviews.scoring.title}</h3>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl text-yellow-400 mr-3">★★★★★</div>
                      <span className="text-gray-700 font-medium">{t.reviews.scoring.overall}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{t.reviews.scoring.calculation}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.reviews.scoring.categories.map((category, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                          <span className="font-medium text-gray-900">{category.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Réponses partenaires */}
                <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.reviews.responses.title}</h3>
                  <p className="text-gray-700 mb-4">{t.reviews.responses.content}</p>
                  <div className="space-y-3 mb-6">
                    {t.reviews.responses.points.map((point, index) => (
                      <div key={index} className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <p className="text-green-800">{t.reviews.responses.rules}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Types de contenu */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contentTypes.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.contentTypes.items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.type}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu interdit */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.prohibitedContent.title}</h2>
              
              <div className="space-y-6">
                {t.prohibitedContent.categories.map((category, index) => (
                  <div key={index} className="border border-red-100 rounded-lg p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {category.examples.map((example, idx) => (
                            <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <p className="text-yellow-800">{t.prohibitedContent.note}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directives photos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-blue-600" />
                {t.photoGuidelines.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.photoGuidelines.technical.title}</h3>
                  <ul className="space-y-3">
                    {t.photoGuidelines.technical.requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.photoGuidelines.content.title}</h3>
                  <ul className="space-y-3">
                    {t.photoGuidelines.content.rules.map((rule, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-3">
                  {language === "FR" ? "Conseils pratiques" : "Practical Tips"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.photoGuidelines.tips.map((tip, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conseils soumission */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.submissionTips.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "FR" ? "À FAIRE" : "DO"}
                  </h3>
                  <div className="space-y-4">
                    {t.submissionTips.do.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <ThumbsUp className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-medium text-gray-900">{item.title}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "FR" ? "À NE PAS FAIRE" : "DON'T"}
                  </h3>
                  <div className="space-y-3">
                    {t.submissionTips.dont.map((item, index) => (
                      <div key={index} className="flex items-start bg-white rounded-lg p-3">
                        <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Signalement */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.reporting.title}</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.reporting.methods.map((method, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          {method.icon}
                        </div>
                        <h3 className="font-medium text-gray-900">{method.method}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{t.reporting.response}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mises à jour */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.updates.title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700">{t.updates.content}</p>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-start">
                    <Bell className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                    <p className="text-purple-800">{t.updates.notification}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
              
              <div className="space-y-6">
                <p className="text-gray-700">{t.contact.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <h3 className="font-medium text-gray-900">Email</h3>
                    </div>
                    <a 
                      href={`mailto:${t.contact.email}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {t.contact.email}
                    </a>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <h3 className="font-medium text-gray-900">
                        {language === "FR" ? "Disponibilité" : "Availability"}
                      </h3>
                    </div>
                    <p className="text-gray-700">{t.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Navigation rapide */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {language === "FR" ? "Navigation rapide" : "Quick Navigation"}
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'introduction', label: t.introduction.title },
                    { id: 'reviews', label: t.reviews.title },
                    { id: 'content-types', label: t.contentTypes.title },
                    { id: 'prohibited', label: t.prohibitedContent.title },
                    { id: 'photos', label: t.photoGuidelines.title },
                    { id: 'tips', label: t.submissionTips.title },
                    { id: 'reporting', label: t.reporting.title },
                    { id: 'contact', label: t.contact.title }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Télécharger PDF */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-bold">
                    {language === "FR" ? "Télécharger" : "Download"}
                  </h3>
                </div>
                <p className="mb-4 opacity-90">
                  {language === "FR" 
                    ? "Téléchargez nos directives complètes au format PDF"
                    : "Download our complete guidelines in PDF format"}
                </p>
                <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {language === "FR" ? "PDF Version" : "PDF Version"}
                </button>
              </div>

              {/* Points clés */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {language === "FR" ? "Points clés" : "Key Points"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" 
                        ? "Les avis doivent être soumis dans les 6 mois"
                        : "Reviews must be submitted within 6 months"}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" 
                        ? "Seules les expériences réelles sont acceptées"
                        : "Only real experiences are accepted"}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" 
                        ? "Modération sous 72 heures maximum"
                        : "Moderation within 72 hours maximum"}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      ✗
                    </div>
                    <p className="text-sm text-gray-600">
                      {language === "FR" 
                        ? "Pas de contenu commercial ou spam"
                        : "No commercial content or spam"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Aide */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {language === "FR" ? "Besoin d'aide ?" : "Need Help?"}
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    {language === "FR" 
                      ? "Consultez notre FAQ sur les avis"
                      : "Check our reviews FAQ"}
                  </p>
                  <a 
                    href="/help"
                    className="block text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
                  >
                    {language === "FR" ? "Centre d'aide" : "Help Center"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Composant Info manquant
const Info = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Composant Bell manquant
const Bell = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);