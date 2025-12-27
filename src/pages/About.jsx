// src/pages/About.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Globe, Shield, Award, Users,
  Clock, Star, Heart, MapPin,
  Plane, Hotel, Car, Train,
  Trophy, Target, Zap, Coffee,
  Briefcase, Compass, Mountain, Palette,
  ChevronDown, ChevronUp, CheckCircle,
  MessageCircle, Phone, Mail
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Contenu bilingue
  const content = {
    FR: {
      // Hero
      title: "À Propos de Global Bush Travel",
      subtitle: "Votre Partenaire de Voyage de Confiance Depuis 2010",
      heroText: "Chez Global Bush Travel, nous transformons vos rêves de voyage en expériences inoubliables. Avec plus d'une décennie d'expertise, nous connectons les voyageurs aux merveilles du monde entier.",

      // Statistiques
      stats: [
        { value: "14+", label: "Années d'expérience", icon: <Clock className="w-8 h-8" /> },
        { value: "50K+", label: "Clients satisfaits", icon: <Users className="w-8 h-8" /> },
        { value: "150+", label: "Destinations", icon: <Globe className="w-8 h-8" /> },
        { value: "98%", label: "Taux de satisfaction", icon: <Star className="w-8 h-8" /> }
      ],

      // Notre Histoire
      story: {
        title: "Notre Histoire",
        content: [
          "Fondée en 2010 par une équipe de passionnés de voyages, Global Bush Travel est née d'une vision simple : rendre les voyages accessibles, sécurisés et mémorables pour tous.",
          "De nos humbles débuts en tant que petite agence locale, nous avons évolué pour devenir l'un des principaux acteurs du tourisme en Afrique francophone, avec une présence dans 15 pays.",
          "Notre croissance est le fruit de notre engagement envers l'excellence du service client et notre capacité à nous adapter aux besoins changeants des voyageurs modernes."
        ],
        milestones: [
          { year: "2010", event: "Fondation à Douala, Cameroun" },
          { year: "2014", event: "Expansion à 5 pays africains" },
          { year: "2018", event: "Lancement de notre plateforme en ligne" },
          { year: "2022", event: "500 000 voyages organisés" },
          { year: "2024", event: "Prix d'Excellence du Tourisme Africain" }
        ]
      },

      // Notre Mission
      mission: {
        title: "Notre Mission",
        content: "Connecter les voyageurs aux expériences authentiques tout en garantissant sécurité, confort et satisfaction à chaque étape de leur voyage.",
        pillars: [
          {
            icon: <Compass className="w-10 h-10" />,
            title: "Exploration Authentique",
            description: "Découvrez des destinations au-delà des sentiers battus avec nos guides experts"
          },
          {
            icon: <Shield className="w-10 h-10" />,
            title: "Sécurité Totale",
            description: "Protection et assistance 24/7 pour voyager l'esprit tranquille"
          },
          {
            icon: <Heart className="w-10 h-10" />,
            title: "Service Personnalisé",
            description: "Des itinéraires sur mesure conçus selon vos préférences"
          },
          {
            icon: <Target className="w-10 h-10" />,
            title: "Durabilité",
            description: "Tourisme responsable qui soutient les communautés locales"
          }
        ]
      },

      // Nos Valeurs
      values: {
        title: "Nos Valeurs",
        items: [
          {
            icon: <Users className="w-8 h-8" />,
            title: "Orientation Client",
            description: "Votre satisfaction est notre priorité absolue"
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "Nous adoptons les dernières technologies pour améliorer votre expérience"
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "Nous visons l'excellence dans chaque détail"
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Intégrité",
            description: "Transparence et honnêteté dans toutes nos interactions"
          },
          {
            icon: <Coffee className="w-8 h-8" />,
            title: "Passion",
            description: "Notre amour du voyage se reflète dans notre travail"
          },
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Professionnalisme",
            description: "Service fiable et compétent à chaque étape"
          }
        ]
      },

      // Notre Équipe
      team: {
        title: "Notre Équipe",
        subtitle: "Rencontrez les experts derrière vos voyages mémorables",
        description: "Notre équipe multidisciplinaire réunit des passionnés de voyages, des experts en logistique et des conseillers dévoués, tous unis par un objectif commun : rendre votre voyage extraordinaire.",
        members: [
          {
            name: "Stéphane Zoa",
            role: "Fondateur & CEO",
            bio: "Plus de 20 ans d'expérience dans le tourisme international",
            expertise: "Stratégie & Développement"
          },
          {
            name: "Franck Dimitri",
            role: "Directeur des Opérations",
            bio: "Expert en logistique et gestion de voyages complexes",
            expertise: "Opérations & Logistique"
          },
          {
            name: "Marie Legrand",
            role: "Directrice Clientèle",
            bio: "Spécialiste des relations clients et service premium",
            expertise: "Service Client & Support"
          },
          {
            name: "Yves Kamga",
            role: "Directeur Technologique",
            bio: "Architecte de notre plateforme digitale innovante",
            expertise: "Innovation & Technologie"
          }
        ]
      },

      // Services
      services: {
        title: "Nos Services",
        items: [
          {
            icon: <Plane className="w-8 h-8" />,
            title: "Réservations de Vols",
            description: "Billets d'avion aux meilleurs prix avec assistance 24/7"
          },
          {
            icon: <Hotel className="w-8 h-8" />,
            title: "Hébergement",
            description: "Hôtels, resorts et logements uniques dans le monde entier"
          },
          {
            icon: <Car className="w-8 h-8" />,
            title: "Transferts & Location",
            description: "Services de transport premium et location de véhicules"
          },
          {
            icon: <MapPin className="w-8 h-8" />,
            title: "Visites Guidées",
            description: "Excursions et activités curatées par nos experts"
          },
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Voyages d'Affaires",
            description: "Solutions complètes pour les voyageurs d'affaires"
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: "Lunes de Miel",
            description: "Packages romantiques pour des moments inoubliables"
          }
        ]
      },

      // Pourquoi Nous Choisir
      whyChooseUs: {
        title: "Pourquoi Choisir Global Bush Travel?",
        points: [
          {
            icon: <Shield className="w-6 h-6" />,
            text: "Garantie de prix et protection financière complète"
          },
          {
            icon: <Clock className="w-6 h-6" />,
            text: "Support client 24/7 dans votre langue"
          },
          {
            icon: <Award className="w-6 h-6" />,
            text: "Prix et reconnaissances multiples dans l'industrie"
          },
          {
            icon: <Globe className="w-6 h-6" />,
            text: "Expertise locale dans 150+ destinations"
          },
          {
            icon: <Heart className="w-6 h-6" />,
            text: "Politique d'annulation flexible et avantageuse"
          },
          {
            icon: <Target className="w-6 h-6" />,
            text: "Engagement envers le tourisme durable et responsable"
          }
        ]
      },

      // Certifications
      certifications: {
        title: "Nos Certifications & Partenariats",
        items: [
          { name: "IATA", description: "Membre agréé de l'Association du Transport Aérien International" },
          { name: "ASTA", description: "Membre de l'American Society of Travel Advisors" },
          { name: "WTTC", description: "Partenaire du Conseil Mondial du Voyage et du Tourisme" },
          { name: "PATA", description: "Membre de l'Asia Pacific Travel Association" }
        ]
      },

      // CTA
      cta: {
        title: "Prêt à Créer des Souvenirs Inoubliables?",
        subtitle: "Contactez notre équipe d'experts pour planifier votre prochain voyage",
        buttonText: "Commencer Votre Voyage",
        contactInfo: [
          { icon: <Phone className="w-5 h-5" />, text: "(+237) 677 24 66 24" },
          { icon: <Mail className="w-5 h-5" />, text: "info@globalbushtratour.com" },
          { icon: <MessageCircle className="w-5 h-5" />, text: "Chat en direct 24/7" }
        ]
      }
    },
    EN: {
      title: "About Global Bush Travel",
      subtitle: "Your Trusted Travel Partner Since 2010",
      heroText: "At Global Bush Travel, we transform your travel dreams into unforgettable experiences. With over a decade of expertise, we connect travelers to the wonders of the world.",

      stats: [
        { value: "14+", label: "Years of experience", icon: <Clock className="w-8 h-8" /> },
        { value: "50K+", label: "Satisfied clients", icon: <Users className="w-8 h-8" /> },
        { value: "150+", label: "Destinations", icon: <Globe className="w-8 h-8" /> },
        { value: "98%", label: "Satisfaction rate", icon: <Star className="w-8 h-8" /> }
      ],

      story: {
        title: "Our Story",
        content: [
          "Founded in 2010 by a team of travel enthusiasts, Global Bush Travel was born from a simple vision: to make travel accessible, safe, and memorable for everyone.",
          "From our humble beginnings as a small local agency, we have evolved to become one of the leading players in tourism in Francophone Africa, with a presence in 15 countries.",
          "Our growth is the result of our commitment to customer service excellence and our ability to adapt to the changing needs of modern travelers."
        ],
        milestones: [
          { year: "2010", event: "Founded in Douala, Cameroon" },
          { year: "2014", event: "Expanded to 5 African countries" },
          { year: "2018", event: "Launched our online platform" },
          { year: "2022", event: "500,000 trips organized" },
          { year: "2024", event: "African Tourism Excellence Award" }
        ]
      },

      mission: {
        title: "Our Mission",
        content: "Connect travelers to authentic experiences while ensuring safety, comfort, and satisfaction at every step of their journey.",
        pillars: [
          {
            icon: <Compass className="w-10 h-10" />,
            title: "Authentic Exploration",
            description: "Discover destinations beyond the beaten path with our expert guides"
          },
          {
            icon: <Shield className="w-10 h-10" />,
            title: "Total Safety",
            description: "24/7 protection and assistance for peace of mind travel"
          },
          {
            icon: <Heart className="w-10 h-10" />,
            title: "Personalized Service",
            description: "Custom itineraries designed according to your preferences"
          },
          {
            icon: <Target className="w-10 h-10" />,
            title: "Sustainability",
            description: "Responsible tourism that supports local communities"
          }
        ]
      },

      values: {
        title: "Our Values",
        items: [
          {
            icon: <Users className="w-8 h-8" />,
            title: "Customer Focus",
            description: "Your satisfaction is our top priority"
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "We adopt the latest technologies to enhance your experience"
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for excellence in every detail"
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Integrity",
            description: "Transparency and honesty in all our interactions"
          },
          {
            icon: <Coffee className="w-8 h-8" />,
            title: "Passion",
            description: "Our love for travel is reflected in our work"
          },
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Professionalism",
            description: "Reliable and competent service at every step"
          }
        ]
      },

      team: {
        title: "Our Team",
        subtitle: "Meet the experts behind your memorable journeys",
        description: "Our multidisciplinary team brings together travel enthusiasts, logistics experts, and dedicated advisors, all united by a common goal: to make your journey extraordinary.",
        members: [
          {
            name: "Stéphane Zoa",
            role: "Founder & CEO",
            bio: "Over 20 years of experience in international tourism",
            expertise: "Strategy & Development"
          },
          {
            name: "Franck Dimitri",
            role: "Operations Director",
            bio: "Expert in logistics and complex travel management",
            expertise: "Operations & Logistics"
          },
          {
            name: "Marie Legrand",
            role: "Customer Director",
            bio: "Specialist in customer relations and premium service",
            expertise: "Customer Service & Support"
          },
          {
            name: "Yves Kamga",
            role: "Technology Director",
            bio: "Architect of our innovative digital platform",
            expertise: "Innovation & Technology"
          }
        ]
      },

      services: {
        title: "Our Services",
        items: [
          {
            icon: <Plane className="w-8 h-8" />,
            title: "Flight Bookings",
            description: "Airline tickets at the best prices with 24/7 assistance"
          },
          {
            icon: <Hotel className="w-8 h-8" />,
            title: "Accommodation",
            description: "Hotels, resorts and unique accommodations worldwide"
          },
          {
            icon: <Car className="w-8 h-8" />,
            title: "Transfers & Rental",
            description: "Premium transport services and vehicle rentals"
          },
          {
            icon: <MapPin className="w-8 h-8" />,
            title: "Guided Tours",
            description: "Curated excursions and activities by our experts"
          },
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Business Travel",
            description: "Complete solutions for business travelers"
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: "Honeymoons",
            description: "Romantic packages for unforgettable moments"
          }
        ]
      },

      whyChooseUs: {
        title: "Why Choose Global Bush Travel?",
        points: [
          {
            icon: <Shield className="w-6 h-6" />,
            text: "Price guarantee and complete financial protection"
          },
          {
            icon: <Clock className="w-6 h-6" />,
            text: "24/7 customer support in your language"
          },
          {
            icon: <Award className="w-6 h-6" />,
            text: "Multiple industry awards and recognitions"
          },
          {
            icon: <Globe className="w-6 h-6" />,
            text: "Local expertise in 150+ destinations"
          },
          {
            icon: <Heart className="w-6 h-6" />,
            text: "Flexible and advantageous cancellation policy"
          },
          {
            icon: <Target className="w-6 h-6" />,
            text: "Commitment to sustainable and responsible tourism"
          }
        ]
      },

      certifications: {
        title: "Our Certifications & Partnerships",
        items: [
          { name: "IATA", description: "Accredited member of International Air Transport Association" },
          { name: "ASTA", description: "Member of American Society of Travel Advisors" },
          { name: "WTTC", description: "Partner of World Travel & Tourism Council" },
          { name: "PATA", description: "Member of Asia Pacific Travel Association" }
        ]
      },

      cta: {
        title: "Ready to Create Unforgettable Memories?",
        subtitle: "Contact our team of experts to plan your next journey",
        buttonText: "Start Your Journey",
        contactInfo: [
          { icon: <Phone className="w-5 h-5" />, text: "(+237) 677 24 66 24" },
          { icon: <Mail className="w-5 h-5" />, text: "info@globalbushtratour.com" },
          { icon: <MessageCircle className="w-5 h-5" />, text: "24/7 Live Chat" }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section avec overlay */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">{t.subtitle}</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {t.heroText}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistiques */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* Notre Histoire */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.story.title}</h2>
                <div className="space-y-4">
                  {t.story.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-tr from-blue-600 to-purple-600 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-8">
                  {language === "FR" ? "Nos Jalons" : "Our Milestones"}
                </h3>
                <div className="space-y-6">
                  {t.story.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                        {milestone.year}
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{milestone.event}</p>
                        <div className="w-12 h-1 bg-white/30 rounded-full mt-2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Notre Mission */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.mission.title}</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              {t.mission.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.mission.pillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.values.items.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notre Équipe */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.team.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.team.subtitle}</p>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t.team.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.team.members.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 text-center font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 text-center text-sm mb-4">{member.bio}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-700 text-sm font-semibold text-center">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nos Services */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.items.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">{t.whyChooseUs.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.whyChooseUs.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-blue-300 flex-shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-lg">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.certifications.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.certifications.items.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl opacity-90 mb-8">{t.cta.subtitle}</p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {t.cta.contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full">
                  <div className="text-white">
                    {info.icon}
                  </div>
                  <span className="font-medium">{info.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center group">
              <Compass className="w-6 h-6 mr-2 group-hover:rotate-90 transition-transform" />
              {t.cta.buttonText}
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}