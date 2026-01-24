import React, { useState } from "react";
import { Clock, FileText, Shield, Zap, Users, Heart, Plane, Package, Activity, Lock, ChevronDown, MapPin, Award } from "lucide-react";
import Footer from "../components/Footer";

const Insurance = () => {
  const [formData, setFormData] = useState({
    typeAssurance: "Voyage",
    paysDepart: "",
    paysArrivee: "",
    dateDepart: "",
    dateRetour: "",
    dateNaissance: "",
    email: "",
  });

  const [openAccordion, setOpenAccordion] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande d'assurance :", formData);
    alert("Votre demande d'assurance voyage a été envoyée ! Vous recevrez votre certificat rapidement 🛡️");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", contactForm);
    alert("Votre message a été envoyé avec succès !");
  };

  const typesAssurance = [
    { name: "Mondiale", description: "Couverture mondiale complète" },
    { name: "Voyages courts", description: "Voyages de courte durée" },
    { name: "Multi-voyages annuelle", description: "Assurance annuelle multi-voyages" }
  ];

  const partenaires = [
    {
      name: "Allianz Travel Insurance",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
      description: "Couverture complète avec excellent service client et réseau d'assistance mondial. Leader international de l'assistance médicale avec 72.500.000 dossiers traités par an."
    },
    {
      name: "AXA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      description: "3ème leader international de l'assistance médicale dans le monde avec 12.000.000 dossiers traités par an."
    },
    {
      name: "MUTUAIDE",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop",
      description: "MUTUAIDE, faisant partie de Groupama (plus de 11 millions de clients) spécialisé dans l'Assistance Médicale depuis plus de 40 ans"
    },
    {
      name: "Europ Assistance",
      logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=100&fit=crop",
      description: "2ème leader international de l'assistance médicale dans le monde avec 15.100.000 dossiers traités par an."
    }
  ];

  const couvertures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Frais Médicaux",
      description: "En cas de maladie ou de blessure (jusqu'à 30 000 €) avec une franchise de 50 €",
      details: "Frais dentaires d'urgence jusqu'à 160 € avec franchise de 50 € et autres problèmes de santé graves et imprévisibles",
      color: "from-red-50 to-pink-50",
      iconBg: "bg-red-100"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Rapatriement Médical",
      description: "En cas de maladie ou de blessure (coût réel)",
      details: "Transfert des restes mortels inclus",
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Assistance Voyage",
      description: "24h/24, 7j/7 avant et pendant votre/vos voyage(s)",
      details: "Information, Soutien et Services",
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Bagages & Valeurs",
      description: "Vol, perte, destruction ou livraison retardée",
      details: "Caution anticipée jusqu'à 2000 € et frais juridiques jusqu'à 400 €",
      color: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Sports",
      description: "Coûts de recherche et sauvetage",
      details: "Couverture pour les activités sportives pendant votre voyage",
      color: "from-orange-50 to-amber-50",
      iconBg: "bg-orange-100"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Responsabilité Civile à l'Étranger",
      description: "Couvre les dommages causés à des tiers pendant votre voyage",
      details: "(corporels, matériels ou immatériels)",
      color: "from-slate-50 to-gray-50",
      iconBg: "bg-slate-100"
    }
  ];

  const pourquoiNousChoisir = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Couverture Complète",
      description: "Protection pour les urgences médicales, annulations de voyage, bagages perdus, et plus encore avec une couverture mondiale étendue.",
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Certificat Numérique Instantané",
      description: "Recevez vos documents d'assurance immédiatement après l'achat avec notre processus 100% en ligne et livraison instantanée.",
      color: "from-green-50 to-emerald-50"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Support Mondial 24h/24",
      description: "Assistance multilingue disponible à tout moment, n'importe où dans le monde avec notre équipe de support dédiée.",
      color: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section avec Formulaire */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Côté gauche - Titre et Caractéristiques */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sécurisez Votre Voyage : Assurance Mondiale pour Tous les Voyageurs
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Assurance voyage rapide et fiable. Certificats instantanés et support 24/7.
              </p>

              <div className="space-y-4 mb-8 max-w-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Assistance 24h/24 et 7j/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Certificat d'assurance instantané</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Couverture Sécurisée</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Réseau international de santé</span>
                </div>
              </div>
            </div>

            {/* Côté droit - Formulaire */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">
                Demander un Devis d'Assurance
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Pays de départ *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input
                      type="text"
                      name="paysDepart"
                      value={formData.paysDepart}
                      onChange={handleChange}
                      placeholder="Depuis"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-blue-200 focus:border-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Pays d'arrivée *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input
                      type="text"
                      name="paysArrivee"
                      value={formData.paysArrivee}
                      onChange={handleChange}
                      placeholder="Vers"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-blue-200 focus:border-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Date de départ
                    </label>
                    <input
                      type="date"
                      name="dateDepart"
                      value={formData.dateDepart}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Date de retour
                    </label>
                    <input
                      type="date"
                      name="dateRetour"
                      value={formData.dateRetour}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white focus:border-white focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
                >
                  <Shield className="w-6 h-6" />
                  Trouver Mon Assurance Maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Fonctionne l'Assurance Voyage */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Comment fonctionne l'assurance voyage
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Comparez les assurances voyage
                  </h3>
                  <p className="text-gray-600">
                    Obtenez des devis des meilleurs assureurs et comparez les options de couverture qui correspondent à vos besoins et à votre budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Remplissez un formulaire
                  </h3>
                  <p className="text-gray-600">
                    Complétez notre simple demande en ligne avec vos détails de voyage et vos informations personnelles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recevez votre certificat
                  </h3>
                  <p className="text-gray-600">
                    Obtenez une confirmation instantanée et votre certificat d'assurance livré à votre email immédiatement.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
                alt="Assurance Voyage"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full">
                    <Plane className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Protégé</p>
                    <p className="text-sm text-blue-100">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Voyage pour Tous */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Assurance Voyage pour <span className="text-blue-600">Tous</span>
            </h2>
            <p className="text-xl text-gray-600">
              Qui que vous soyez, où que vous alliez, nous pouvons assurer votre voyage !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                GlobalBush Travel Insurance est une assurance voyage conçue pour tous, peu importe qui vous êtes ou où vous allez. Nos politiques actuelles offrent tranquillité d'esprit et protection pour chaque service avec une couverture qui s'adapte à vos besoins uniques et à vos destinations - 100% en ligne.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assurance voyage pour...</h3>
                
                {typesAssurance.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full bg-white hover:bg-blue-50 p-5 rounded-xl flex items-center justify-between transition-all shadow-md hover:shadow-lg border border-gray-100"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 text-lg">{type.name}</span>
                      <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=700&fit=crop"
                alt="Voyageurs Heureux"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute top-6 right-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">✓ Protégé</p>
                    <p className="text-lg font-bold text-gray-900">Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Notre Assurance Voyage */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre Assurance Voyage ?
            </h2>
            <p className="text-xl text-gray-600">
              Couverture complète conçue pour les voyageurs modernes avec tranquillité d'esprit garantie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pourquoiNousChoisir.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}>
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meilleures Compagnies d'Assurance Voyage */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meilleures compagnies d'assurance voyage
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chez GlobalBush, notre engagement à fournir la meilleure assurance voyage est renforcé par nos collaborations stratégiques avec les plus grands assureurs mondiaux. En partenariat avec les leaders de l'industrie de l'assurance, nous apportons la force et la fiabilité de ces géants mondiaux directement à nos clients. Cette alliance nous permet d'offrir une large gamme de solutions d'assurance qui se distinguent par leur excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {partenaires.map((partenaire, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="bg-gray-100 rounded-xl p-4 mb-4 h-24 flex items-center justify-center">
                    <img src={partenaire.logo} alt={partenaire.name} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{partenaire.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partenaire.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nous Pouvons Vous Couvrir Pour */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Nous pouvons vous couvrir pour
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {couvertures.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
                <div className={`${item.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-gray-700`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {item.description}
                </p>
                <p className="text-sm text-gray-600">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Assurance Voyage Internationale */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Assurance Voyage Internationale
          </h2>
          <p className="text-xl text-gray-600 mb-8">Couverture d'assurance mondiale</p>
          <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100">
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-lg">
              Voyager est une aventure passionnante, mais elle comporte des risques potentiels, ce qui rend essentiel d'être préparé à l'inattendu. Avec 12 ans d'expérience dans l'industrie de l'assurance voyage, vous pouvez compter sur notre expertise en conformité, qualité et service client pour fournir la meilleure couverture complète et un support 24/7, peu importe où vous allez ou pourquoi. Nous avons assuré plus de quatre millions de jours de voyage pour des clients du monde entier, obtenant des taux de satisfaction constamment élevés grâce à notre processus rapide, facile et sécurisé 100% en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">+4 millions</p>
              <p className="text-blue-200 text-lg">jours assurés dans le monde</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">6,9/5</p>
              <p className="text-blue-200 text-lg">note de satisfaction</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">597</p>
              <p className="text-blue-200 text-lg">Pays couverts de partout à partout</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">12</p>
              <p className="text-blue-200 text-lg">années d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Sinistres et Contact */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Sinistres et Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Côté gauche - Processus de Sinistres */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Que se passe-t-il en cas de sinistre ou de remboursement ?
              </h3>
              <p className="text-gray-600 mb-6">
                Étapes claires pour que votre sinistre soit traité rapidement.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Processus de sinistre médical</h4>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Contactez les services d'urgence (disponible 24/7)</li>
                  <li>2. Signalez votre incident à nous</li>
                  <li>3. Soumettez les documents justificatifs</li>
                </ol>
                <button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                  Voir le processus complet
                </button>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Processus de remboursement</h4>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Soumettez une demande de remboursement via notre formulaire</li>
                  <li>2. Fournissez les preuves de réservation (si nécessaire)</li>
                  <li>3. Recevez votre remboursement</li>
                </ol>
                <button className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                  Voir plus d'informations
                </button>
              </div>
            </div>

            {/* Côté droit - Formulaire de Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contactez-nous !
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est là pour répondre à toutes vos questions.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;