import React, { useState } from "react";
import { Globe, Wifi, Shield, Zap, Check, ChevronDown, Search, Star, Smartphone } from "lucide-react";
import Footer from "../components/Footer";

const Esim = () => {
  const [formData, setFormData] = useState({
    pays: "",
    duree: "7 jours",
    data: "5 Go",
    email: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Commande eSIM :", formData);
    alert("Commande eSIM envoyée avec succès 📶");
  };

  const avantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Facile à activer et recharger en ligne",
      description: "Activation instantanée sans avoir besoin de carte physique"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Couverture de 99,9% dans plus de 215 pays",
      description: "Restez connecté partout dans le monde"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Plus de flexibilité pour changer de réseau",
      description: "Sans tracas de nouvelles SIM ou contrats"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurisé et économique",
      description: "Économisez sur les frais de roaming mobile"
    }
  ];

  const etapes = [
    {
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop",
      title: "Assurez-vous que votre appareil est compatible eSIM",
      description: "Vérifiez la compatibilité de votre téléphone"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      title: "Choisissez le forfait data qui correspond à vos besoins",
      description: "Sélectionnez la durée et le volume de données"
    },
    {
      image: "https://images.unsplash.com/photo-1583988698309-c0b1d4c93f3d?w=400&h=300&fit=crop",
      title: "Installez votre eSIM en scannant le code QR",
      description: "Scannez le code reçu par email"
    },
    {
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
      title: "Activez votre eSIM une fois arrivé à destination",
      description: "Profitez de votre connexion instantanée"
    }
  ];

  const appareilsCompatibles = [
    {
      marque: "Apple iPhone :",
      models: "iPhone XR, iPhone XS, iPhone 11, iPhone 12, iPhone 13, iPhone SE (2e génération), iPhone 14 et plus récents, Nécessite iOS 14.1 ou plus récent"
    },
    {
      marque: "Samsung Galaxy :",
      models: "S24 / S24+ / S24 Ultra, S23 / S23+ / S23 Ultra, S22 / S22+ / S22 Ultra, S21 / S21+ / S21 Ultra, S20 / S20+ / S20 Ultra"
    },
    {
      marque: "Google Pixel :",
      models: "Pixel 3a, Pixel 3 XL, Modèles ultérieurs"
    },
    {
      marque: "Huawei :",
      models: "P40, P40 Pro*, Mate40 Pro"
    },
    {
      marque: "Sony Xperia :",
      models: "Xperia 10 III Lite, Xperia 10 IV, Xperia 5 IV, Xperia 1 IV"
    },
    {
      marque: "Motorola :",
      models: "Razr (2019 & 5G), Edge (2022 & 2023), Edge 40 & 40 Pro, Moto G 2023"
    },
    {
      marque: "Montres connectées (Samsung) :",
      models: "Gear S2, Gear S3 et plus récentes"
    },
    {
      marque: "Montres connectées (Apple) :",
      models: "Apple Watch Series 3 et plus récentes"
    }
  ];

  const faqData = [
    {
      question: "Qu'est-ce qu'une eSIM ?",
      answer: "Une eSIM (carte SIM intégrée) est une carte SIM numérique qui vous permet d'activer un forfait mobile sans avoir besoin d'une carte SIM physique."
    },
    {
      question: "Comment installer une eSIM ?",
      answer: "Vous recevrez un code QR par email après l'achat. Scannez-le dans les paramètres de votre téléphone pour installer l'eSIM instantanément."
    },
    {
      question: "Quels appareils supportent l'eSIM ?",
      answer: "La plupart des smartphones récents comme iPhone XR et ultérieurs, Samsung Galaxy S20 et ultérieurs, Google Pixel 3 et ultérieurs sont compatibles."
    },
    {
      question: "Puis-je utiliser ma SIM classique et l'eSIM en même temps ?",
      answer: "Oui, la plupart des appareils supportent la double SIM, vous permettant d'utiliser votre SIM physique et votre eSIM simultanément."
    },
    {
      question: "Quand mon forfait eSIM démarre-t-il ?",
      answer: "Votre forfait démarre dès que vous activez l'eSIM et vous connectez au réseau dans le pays de destination."
    },
    {
      question: "Que se passe-t-il si je manque de données ?",
      answer: "Vous pouvez facilement recharger votre eSIM ou acheter un nouveau forfait directement depuis notre plateforme."
    },
    {
      question: "Proposez-vous des remboursements ?",
      answer: "Les remboursements sont disponibles si l'eSIM n'a pas été activée. Une fois activée, aucun remboursement n'est possible."
    },
    {
      question: "Le support client est-il disponible ?",
      answer: "Oui, notre équipe de support est disponible 24/7 par email et chat pour vous aider avec toute question."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm font-semibold text-purple-200 mb-4 tracking-wide uppercase">
            eSIM INSTANTANÉ • 150+ PAYS • AUCUN FRAIS DE ROAMING
          </p>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Restez Connecté Partout dans le Monde
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-6">
            Données illimitées en 2 minutes
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-purple-100 ml-2">
              <strong>4.8</strong> / 5 basé sur 6.94K+ avis
            </span>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center gap-2 border border-white/20">
              <input
                type="text"
                placeholder="Rechercher un pays, une région ou un code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-white placeholder-purple-200"
              />
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            eSIM Global Bush Travel
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Partagez, postez, diffusez et discutez depuis n'importe où dans le monde
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Dites adieu au changement de cartes SIM dans chaque pays ou aux frais de roaming excessifs. Notre eSIM international est spécialement conçu pour les voyageurs, vous aidant à économiser jusqu'à 85% sur les frais de roaming réguliers et fonctionnant sans faille dans plus de 215 pays.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Nous nous sommes associés avec le fournisseur d'eSIM international le plus rapide et le plus sécurisé, vous donnant un accès Internet mobile sur 700 réseaux. Simple, sûr et facile à activer.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Plus besoin de compter sur un Wi-Fi gratuit peu fiable à l'étranger. Plus de factures de roaming inattendues. Restez connecté, sans effort.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => document.getElementById('formulaire-achat').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              ACHETER MAINTENANT
            </button>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Avantages Clés
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Découvrez pourquoi nous adorons les eSIM pour les voyageurs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {avantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {avantage.title}
                </h3>
                <p className="text-gray-600">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Fonctionnement */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Comment Ça Marche
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Configurez votre eSIM international en 4 étapes faciles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapes.map((etape, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={etape.image} 
                    alt={etape.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {etape.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {etape.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compatibilité */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Compatibilité eSIM
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Vérifiez la liste ci-dessous pour confirmer que votre appareil est compatible eSIM
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <ul className="space-y-6">
              {appareilsCompatibles.map((appareil, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                  <Smartphone className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 text-lg">{appareil.marque}</strong>
                    <span className="text-gray-700 block mt-1">{appareil.models}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm">
                *Veuillez noter que votre appareil doit être débloqué pour utiliser une eSIM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire d'Achat */}
      <section id="formulaire-achat" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Carte d'information */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Achetez votre eSIM
              </h2>
              <p className="text-purple-100 mb-8 text-lg">
                Faites-nous part de votre voyage pour commencer
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Processus simple en 4 étapes :</h3>
                <ol className="space-y-4 text-purple-100">
                  <li className="flex items-center gap-3">
                    <div className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <span>Visitez notre site eSIM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <span>Choisissez votre destination</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                    <span>Entrez les dates de début et de fin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                    <span>Sélectionnez votre forfait data</span>
                  </li>
                </ol>
              </div>

              <button className="w-full bg-white text-purple-600 hover:bg-purple-50 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                ACHETER MAINTENANT
              </button>
            </div>

            {/* Formulaire */}
            <div className="bg-white rounded-2xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Commandez directement ici
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Pays de destination
                  </label>
                  <input
                    type="text"
                    name="pays"
                    value={formData.pays}
                    onChange={handleChange}
                    placeholder="Ex : France, Cameroun, États-Unis..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors hover:border-gray-300"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Durée de validité
                    </label>
                    <select
                      name="duree"
                      value={formData.duree}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors hover:border-gray-300"
                    >
                      <option>7 jours</option>
                      <option>15 jours</option>
                      <option>30 jours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Forfait data
                    </label>
                    <select
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors hover:border-gray-300"
                    >
                      <option>3 Go</option>
                      <option>5 Go</option>
                      <option>10 Go</option>
                      <option>Illimité</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors hover:border-gray-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl"
                >
                  Acheter l'eSIM maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Trouvez des réponses aux questions courantes sur les eSIM et nos services
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 text-gray-700 border-t border-gray-100 pt-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Esim;