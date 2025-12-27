// src/pages/Cookies.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Shield, Cookie, Settings, Eye,
  Bell, Lock, Globe, Users,
  AlertCircle, CheckCircle, XCircle,
  ChevronDown, ChevronUp, ExternalLink,
  Info, Download, RefreshCw, ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cookies() {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({});
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Toujours activés
    functional: true,
    performance: true,
    targeting: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCookieToggle = (type) => {
    if (type !== 'essential') {
      setCookiePreferences(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const handleSavePreferences = () => {
    // Sauvegarder les préférences
    localStorage.setItem('globalbush_cookie_preferences', JSON.stringify(cookiePreferences));
    alert(language === "FR" 
      ? "Vos préférences de cookies ont été sauvegardées." 
      : "Your cookie preferences have been saved.");
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      functional: true,
      performance: true,
      targeting: true
    });
    localStorage.setItem('globalbush_cookie_preferences', JSON.stringify({
      essential: true,
      functional: true,
      performance: true,
      targeting: true
    }));
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      essential: true,
      functional: false,
      performance: false,
      targeting: false
    });
    localStorage.setItem('globalbush_cookie_preferences', JSON.stringify({
      essential: true,
      functional: false,
      performance: false,
      targeting: false
    }));
  };

  const content = {
    FR: {
      title: "Politique de Cookies",
      lastUpdated: "Dernière mise à jour : 26 décembre 2024",
      
      hero: {
        title: "Gestion des Cookies",
        description: "Chez Global Bush Travel, nous utilisons des cookies pour améliorer votre expérience de navigation. Cette page explique comment nous utilisons les cookies et comment vous pouvez les gérer."
      },
      
      types: {
        title: "Types de Cookies et Technologies Similaires",
        cookies: {
          title: "Cookies",
          description: "Les cookies sont de petits fichiers texte envoyés à votre ordinateur ou appareil mobile lorsque vous visitez la plupart des sites web. Ils peuvent être délivrés par nous (cookies propriétaires) ou par des partenaires tiers (cookies tiers)."
        },
        otherTech: {
          title: "Autres Technologies Similaires",
          items: [
            {
              name: "Balises Web",
              description: "Petits graphiques invisibles intégrés dans les pages et emails pour suivre les visites et l'efficacité des campagnes."
            },
            {
              name: "Pixels",
              description: "Objets invisibles intégrés dans les pages web pour délivrer des cookies et suivre l'activité."
            },
            {
              name: "Tags",
              description: "Code HTML qui demande du contenu spécifique pour afficher des publicités pertinentes."
            },
            {
              name: "Scripts",
              description: "Code JavaScript qui s'exécute automatiquement pour déterminer l'affichage des publicités."
            },
            {
              name: "Stockage Local",
              description: "Technologies comme HTML5 pour stocker le contenu et les préférences localement."
            }
          ]
        }
      },
      
      ourUse: {
        title: "Utilisation des Cookies par Global Bush Travel",
        reasons: [
          "Améliorer votre expérience lors de la visite de notre site",
          "Exécuter les transactions et assurer le bon fonctionnement du site",
          "Mémoriser vos préférences (langue, devise, région)",
          "Vous proposer des publicités pertinentes",
          "Vous permettre de revenir à vos recherches précédentes",
          "Identifier les erreurs sur notre site",
          "Protéger vos données et détecter les activités malveillantes",
          "Comprendre le trafic sur notre site"
        ]
      },
      
      infoCollected: {
        title: "Types d'Informations Collectées par les Cookies",
        items: [
          "Adresse IP",
          "Type de navigateur",
          "Pages consultées",
          "Système d'exploitation",
          "Fournisseur d'accès Internet",
          "Activités de navigation",
          "Réponses aux publicités",
          "Liux de référence"
        ]
      },
      
      cookieFunctions: {
        title: "Types et Fonctions des Cookies",
        essential: {
          title: "Cookies Essentiels",
          description: "Ces cookies sont indispensables au fonctionnement de notre site. Ils assurent la sécurité, permettent la navigation et les transactions. Vous ne pouvez pas les désactiver.",
          alwaysActive: true
        },
        functional: {
          title: "Cookies Fonctionnels",
          description: "Ces cookies améliorent votre expérience en mémorisant vos préférences : langue, devise, contenu du panier, recherches précédentes.",
          benefits: ["Expérience personnalisée", "Préférences sauvegardées", "Navigation facilitée"]
        },
        performance: {
          title: "Cookies de Performance",
          description: "Ces cookies collectent des informations agrégées sur l'utilisation du site pour mesurer et améliorer nos services.",
          benefits: ["Analyse d'audience", "Détection d'erreurs", "Amélioration continue"]
        },
        targeting: {
          title: "Cookies de Ciblage",
          description: "Ces cookies créent un profil personnalisé pour vous proposer des publicités pertinentes selon vos centres d'intérêt.",
          benefits: ["Publicités ciblées", "Contenu pertinent", "Mesure d'efficacité"]
        }
      },
      
      yourChoices: {
        title: "Vos Choix Concernant les Cookies",
        manage: {
          title: "Comment gérer vos cookies ?",
          description: "Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Cependant, refuser certains cookies peut limiter certaines fonctionnalités de notre site."
        },
        optOut: {
          title: "Désactivation de la Publicité Ciblée",
          description: "Pour désactiver la publicité ciblée sur notre site et d'autres sites :",
          resources: [
            {
              region: "Europe",
              link: "http://www.youronlinechoices.eu/",
              name: "Your Online Choices"
            },
            {
              region: "Canada",
              link: "http://youradchoices.ca/choices/",
              name: "Digital Advertising Alliance of Canada"
            },
            {
              region: "États-Unis et reste du monde",
              link: "http://www.aboutads.info/choices/",
              name: "Digital Advertising Alliance"
            }
          ],
          note: "Si vous désactivez la publicité ciblée, vous continuerez à voir des publicités, mais elles seront moins pertinentes pour vous."
        },
        doNotTrack: {
          title: "Signaux 'Ne Pas Pister'",
          description: "Nous respectons les signaux 'Do Not Track' de votre navigateur. Vous pouvez activer cette fonctionnalité dans les paramètres de votre navigateur."
        }
      },
      
      contact: {
        title: "Nous Contacter",
        description: "Si vous avez des questions concernant notre utilisation des cookies ou souhaitez exercer vos droits concernant vos données personnelles :",
        email: "privacy@globalbushtravel.com",
        response: "Nous nous engageons à répondre dans un délai de 30 jours."
      },
      
      updates: {
        title: "Mises à Jour de cette Politique",
        description: "Nous pouvons mettre à jour cette politique pour diverses raisons. La date de dernière mise à jour est indiquée en haut de cette page."
      },
      
      // Gestion des cookies
      cookieManagement: {
        title: "Gestion de vos Préférences",
        essential: "Essentiels",
        functional: "Fonctionnels",
        performance: "Performance",
        targeting: "Ciblage",
        save: "Sauvegarder les préférences",
        acceptAll: "Accepter tous les cookies",
        rejectAll: "Refuser tous les cookies non-essentiels",
        description: "Sélectionnez les types de cookies que vous acceptez :",
        status: {
          alwaysOn: "Toujours activé",
          on: "Activé",
          off: "Désactivé"
        }
      }
    },
    
    EN: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated: December 26, 2024",
      
      hero: {
        title: "Cookie Management",
        description: "At Global Bush Travel, we use cookies to enhance your browsing experience. This page explains how we use cookies and how you can manage them."
      },
      
      types: {
        title: "Types of Cookies and Similar Technologies",
        cookies: {
          title: "Cookies",
          description: "Cookies are small text files sent to your computer or mobile device when you visit most websites. They may be delivered by us (first-party cookies) or by third-party partners (third-party cookies)."
        },
        otherTech: {
          title: "Other Similar Technologies",
          items: [
            {
              name: "Web Beacons",
              description: "Tiny invisible graphics embedded in pages and emails to track visits and campaign effectiveness."
            },
            {
              name: "Pixels",
              description: "Invisible objects embedded in web pages to deliver cookies and track activity."
            },
            {
              name: "Tags",
              description: "HTML code that requests specific content to display relevant advertisements."
            },
            {
              name: "Scripts",
              description: "JavaScript code that runs automatically to determine advertisement display."
            },
            {
              name: "Local Storage",
              description: "Technologies like HTML5 to store content and preferences locally."
            }
          ]
        }
      },
      
      ourUse: {
        title: "Global Bush Travel's Use of Cookies",
        reasons: [
          "Improve your experience when visiting our site",
          "Fulfill transactions and ensure site performance",
          "Remember your preferences (language, currency, region)",
          "Provide you with relevant advertising",
          "Enable you to return to previous searches",
          "Identify errors on our site",
          "Protect your data and detect malicious activity",
          "Understand traffic to our site"
        ]
      },
      
      infoCollected: {
        title: "Types of Information Collected by Cookies",
        items: [
          "IP address",
          "Browser type",
          "Viewed pages",
          "Operating system",
          "Internet Service Provider",
          "Browsing activities",
          "Responses to advertisements",
          "Referral links"
        ]
      },
      
      cookieFunctions: {
        title: "Types and Functions of Cookies",
        essential: {
          title: "Essential Cookies",
          description: "These cookies are required for our website to function. They ensure security, enable navigation and transactions. You cannot disable them.",
          alwaysActive: true
        },
        functional: {
          title: "Functional Cookies",
          description: "These cookies enhance your experience by remembering your preferences: language, currency, shopping cart content, previous searches.",
          benefits: ["Personalized experience", "Saved preferences", "Easier navigation"]
        },
        performance: {
          title: "Performance Cookies",
          description: "These cookies collect aggregated information about site usage to measure and improve our services.",
          benefits: ["Audience analysis", "Error detection", "Continuous improvement"]
        },
        targeting: {
          title: "Targeting Cookies",
          description: "These cookies create a personalized profile to show you relevant advertisements based on your interests.",
          benefits: ["Targeted advertising", "Relevant content", "Effectiveness measurement"]
        }
      },
      
      yourChoices: {
        title: "Your Information Choices",
        manage: {
          title: "How can you manage your cookies?",
          description: "You can set your browser to accept or refuse cookies. However, refusing certain cookies may limit some functionalities of our site."
        },
        optOut: {
          title: "Opting Out of Targeted Advertising",
          description: "To opt out of targeted advertising on our site and other sites:",
          resources: [
            {
              region: "Europe",
              link: "http://www.youronlinechoices.eu/",
              name: "Your Online Choices"
            },
            {
              region: "Canada",
              link: "http://youradchoices.ca/choices/",
              name: "Digital Advertising Alliance of Canada"
            },
            {
              region: "United States and rest of world",
              link: "http://www.aboutads.info/choices/",
              name: "Digital Advertising Alliance"
            }
          ],
          note: "If you opt out of targeted advertising, you will still see advertisements, but they will be less relevant to you."
        },
        doNotTrack: {
          title: "Do-Not-Track Signals",
          description: "We respect 'Do Not Track' signals from your browser. You can enable this feature in your browser settings."
        }
      },
      
      contact: {
        title: "Contact Us",
        description: "If you have questions about our use of cookies or wish to exercise your rights regarding your personal data:",
        email: "privacy@globalbushtravel.com",
        response: "We commit to responding within 30 days."
      },
      
      updates: {
        title: "Updates to this Policy",
        description: "We may update this policy for various reasons. The last updated date is displayed at the top of this page."
      },
      
      cookieManagement: {
        title: "Manage Your Preferences",
        essential: "Essential",
        functional: "Functional",
        performance: "Performance",
        targeting: "Targeting",
        save: "Save preferences",
        acceptAll: "Accept all cookies",
        rejectAll: "Reject all non-essential cookies",
        description: "Select the types of cookies you accept:",
        status: {
          alwaysOn: "Always on",
          on: "On",
          off: "Off"
        }
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
                <Cookie className="w-12 h-12" />
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
            {/* Gestion des cookies */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-blue-600" />
                  {t.cookieManagement.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                  >
                    {t.cookieManagement.acceptAll}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
                  >
                    {t.cookieManagement.rejectAll}
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{t.cookieManagement.description}</p>
              
              <div className="space-y-4">
                {/* Cookies essentiels */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Lock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{t.cookieManagement.essential}</h3>
                        <p className="text-sm text-gray-600">
                          {t.cookieFunctions.essential.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {t.cookieManagement.status.alwaysOn}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cookies fonctionnels */}
                <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{t.cookieManagement.functional}</h3>
                        <p className="text-sm text-gray-600">
                          {t.cookieFunctions.functional.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('functional')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        cookiePreferences.functional ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        cookiePreferences.functional ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  {cookiePreferences.functional && (
                    <div className="pl-14">
                      <div className="flex flex-wrap gap-2">
                        {t.cookieFunctions.functional.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Cookies performance */}
                <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Eye className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{t.cookieManagement.performance}</h3>
                        <p className="text-sm text-gray-600">
                          {t.cookieFunctions.performance.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('performance')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        cookiePreferences.performance ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        cookiePreferences.performance ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  {cookiePreferences.performance && (
                    <div className="pl-14">
                      <div className="flex flex-wrap gap-2">
                        {t.cookieFunctions.performance.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Cookies ciblage */}
                <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Bell className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{t.cookieManagement.targeting}</h3>
                        <p className="text-sm text-gray-600">
                          {t.cookieFunctions.targeting.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('targeting')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        cookiePreferences.targeting ? 'bg-orange-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        cookiePreferences.targeting ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  {cookiePreferences.targeting && (
                    <div className="pl-14">
                      <div className="flex flex-wrap gap-2">
                        {t.cookieFunctions.targeting.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <button
                  onClick={handleSavePreferences}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t.cookieManagement.save}
                </button>
              </div>
            </div>

            {/* Types de cookies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.types.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.types.cookies.title}</h3>
                  <p className="text-gray-700">{t.types.cookies.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.types.otherTech.title}</h3>
                  <div className="space-y-4">
                    {t.types.otherTech.items.map((tech, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{tech.name}</h4>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notre utilisation */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                {t.ourUse.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.ourUse.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations collectées */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.infoCollected.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.infoCollected.items.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vos choix */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.yourChoices.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.yourChoices.manage.title}</h3>
                  <p className="text-gray-700">{t.yourChoices.manage.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.yourChoices.optOut.title}</h3>
                  <p className="text-gray-700 mb-4">{t.yourChoices.optOut.description}</p>
                  
                  <div className="space-y-3">
                    {t.yourChoices.optOut.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-gray-900">{resource.region}</div>
                          <div className="text-sm text-gray-600">{resource.name}</div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-800">{t.yourChoices.optOut.note}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.yourChoices.doNotTrack.title}</h3>
                  <p className="text-gray-700">{t.yourChoices.doNotTrack.description}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">{t.contact.description}</p>
                
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Email :</div>
                      <a 
                        href={`mailto:${t.contact.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {t.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{t.contact.response}</span>
                </div>
              </div>
            </div>

            {/* Mises à jour */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.updates.title}</h2>
              <p className="text-gray-700">{t.updates.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Sommaire */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Sommaire</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'management', label: t.cookieManagement.title },
                    { id: 'types', label: t.types.title },
                    { id: 'use', label: t.ourUse.title },
                    { id: 'collected', label: t.infoCollected.title },
                    { id: 'choices', label: t.yourChoices.title },
                    { id: 'contact', label: t.contact.title }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Télécharger la politique */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-bold">
                    {language === "FR" ? "Télécharger" : "Download"}
                  </h3>
                </div>
                <p className="mb-4 opacity-90">
                  {language === "FR" 
                    ? "Téléchargez notre politique de cookies complète au format PDF"
                    : "Download our complete cookie policy in PDF format"}
                </p>
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100">
                  {language === "FR" ? "PDF Version" : "PDF Version"}
                </button>
              </div>

              {/* Statut des cookies */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {language === "FR" ? "Statut actuel" : "Current Status"}
                </h3>
                <div className="space-y-3">
                  {Object.entries(cookiePreferences).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {t.cookieManagement[key]}
                      </span>
                      <div className="flex items-center">
                        {value ? (
                          <>
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-green-600">
                              {key === 'essential' 
                                ? t.cookieManagement.status.alwaysOn 
                                : t.cookieManagement.status.on}
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-sm text-red-600">
                              {t.cookieManagement.status.off}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <button
                    onClick={() => window.location.reload()}
                    className="w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
                  >
                    <RefreshCw className="w-4 h-4 inline-block mr-2" />
                    {language === "FR" ? "Actualiser la page" : "Refresh page"}
                  </button>
                </div>
              </div>

              {/* Aide rapide */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {language === "FR" ? "Aide rapide" : "Quick Help"}
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    {language === "FR" 
                      ? "Les cookies essentiels sont nécessaires au fonctionnement du site."
                      : "Essential cookies are required for the website to function."}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "FR" 
                      ? "Vous pouvez modifier vos préférences à tout moment."
                      : "You can change your preferences at any time."}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === "FR" 
                      ? "Le refus des cookies peut limiter certaines fonctionnalités."
                      : "Refusing cookies may limit some functionalities."}
                  </p>
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