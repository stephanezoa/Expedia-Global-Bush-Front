import React, { useState } from "react";
import { MapPin, Clock, Users, Star, Calendar, Mail, Plane, Heart, Shield, Award, Filter, Search, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const Holiday = () => {
  const [formData, setFormData] = useState({
    destination: "",
    dateDepart: "",
    dateRetour: "",
    participants: 1,
    email: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de vacances :", formData);
    alert("Votre demande de vacances a été envoyée avec succès ! 🌴");
  };

  const categories = [
    { name: "Tous", count: 12 },
    { name: "Lune de miel", count: 3 },
    { name: "Aventure", count: 2 },
    { name: "Propositions", count: 3 },
    { name: "Retraites", count: 1 },
    { name: "Célébrations", count: 2 },
    { name: "Safari", count: 1 },
  ];

  const packages = [
    {
      id: 1,
      category: "Proposition de mariage",
      categoryColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop",
      rating: 5,
      location: "Dubai",
      reviews: 70,
      title: "Proposition au sommet du Burj Khalifa à DUBAI",
      duration: "Événement en soirée",
      participants: "Jusqu'à 2 personnes",
      description: "Bienvenue à Elegant Moment. Avec notre combinaison unique de compréhension culturelle et d'années d'expérience...",
      price: "1 200 000 FCFA",
      perPerson: "par personne",
      highlights: ["Vue panoramique", "Décoration romantique", "Photographe inclus"]
    },
    {
      id: 2,
      category: "Lune de miel",
      categoryColor: "bg-indigo-600",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      rating: 4.9,
      location: "Bora Bora",
      reviews: 280,
      title: "Forfait Lune de miel à Bora Bora",
      duration: "7 jours",
      participants: "Jusqu'à 2 personnes",
      description: "C'est votre lune de miel, et nous sommes là pour la rendre magique. Passez vos journées à vous détendre...",
      price: "1 500 000 FCFA",
      perPerson: "par personne",
      highlights: ["Bungalow sur pilotis", "Spa inclus", "Excursions privées"]
    },
    {
      id: 3,
      category: "Aventure",
      categoryColor: "bg-cyan-600",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      rating: 4.2,
      location: "Cameroun (Douala)",
      reviews: 45,
      title: "Découverte de Douala à Deux Roues",
      duration: "Demi-journée",
      participants: "Jusqu'à 10 personnes",
      description: "Explorez Douala sur deux roues, couvrant les zones clés avec formation RCR, repas et rafraîchissements inclus.",
      price: "90 000 FCFA",
      perPerson: "par personne",
      highlights: ["Vélo tout-terrain", "Guide local", "Formation RCR"]
    },
    {
      id: 4,
      category: "Retraite",
      categoryColor: "bg-teal-600",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      rating: 4.3,
      location: "Cameroun (Kribi)",
      reviews: 75,
      title: "Retraite Feu de camp et BBQ à Kribi",
      duration: "2 jours",
      participants: "Jusqu'à 15 personnes",
      description: "Profitez d'une retraite à Kribi avec BBQ, visite de la ville, feu de camp, jeux, expérience pygmée et promenade en pirogue.",
      price: "98 000 FCFA",
      perPerson: "par personne",
      highlights: ["Feu de camp", "Expérience pygmée", "BBQ traditionnel"]
    },
    {
      id: 5,
      category: "Fiançailles",
      categoryColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      rating: 4.5,
      location: "Cameroun (Kribi)",
      reviews: 60,
      title: "Forfait Fiançailles à Kribi Cameroun",
      duration: "1 jour",
      participants: "Jusqu'à 2 personnes",
      description: "Notre forfait proposition sur la plage de Kribi est parfait pour une proposition romantique avec vue sur le golfe de Guinée...",
      price: "150 000 FCFA",
      perPerson: "par personne",
      highlights: ["Plage privée", "Dîner romantique", "Photographe"]
    },
    {
      id: 6,
      category: "Forfait vacances",
      categoryColor: "bg-indigo-600",
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop",
      rating: 4.4,
      location: "Égypte (Le Caire)",
      reviews: 200,
      title: "Forfaits vacances Égypte - Tour du Caire",
      duration: "3 jours",
      participants: "Jusqu'à 8 personnes",
      description: "Le forfait tour du Caire offre une entrée bénie menant aux plus grandes merveilles archéologiques...",
      price: "280 000 FCFA",
      perPerson: "par personne",
      highlights: ["Pyramides de Gizeh", "Musée égyptien", "Croisière sur le Nil"]
    },
    {
      id: 7,
      category: "Célébration & Anniversaire",
      categoryColor: "bg-cyan-600",
      image: "https://images.unsplash.com/photo-1541696432-82b53520f52e?w=600&h=400&fit=crop",
      rating: 4.5,
      location: "Turquie",
      reviews: 180,
      title: "Évasion Célébration & Anniversaire en Turquie",
      duration: "Soirée (3 heures)",
      participants: "Jusqu'à 10 personnes",
      description: "Naviguez le long du Bosphore au coucher du soleil, avec le ciel peint en nuances d'orange et de rose...",
      price: "350 000 FCFA",
      perPerson: "par personne",
      highlights: ["Croisière au coucher", "Dîner gastronomique", "Animation musicale"]
    },
    {
      id: 8,
      category: "Lune de miel",
      categoryColor: "bg-indigo-600",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
      rating: 4.9,
      location: "Maldives",
      reviews: 300,
      title: "Forfait Lune de miel aux MALDIVES",
      duration: "5 jours",
      participants: "Jusqu'à 2 personnes",
      description: "Promenez-vous sur les plages et explorez la nature sur l'île culturelle avec votre moitié. Maldives est un forfait tout compris...",
      price: "373 859 FCFA",
      perPerson: "par personne",
      highlights: ["Villa sur l'eau", "Plongée avec tuba", "Spa de luxe"]
    },
    {
      id: 9,
      category: "Lune de miel",
      categoryColor: "bg-indigo-600",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      rating: 4.9,
      location: "Turquie",
      reviews: 210,
      title: "Forfaits Lune de miel Turquie - Croisière romantique...",
      duration: "7 jours",
      participants: "Jusqu'à 2 personnes",
      description: "Vivez une incroyable croisière romantique de lune de miel avec transfert depuis l'aéroport et hébergement de luxe...",
      price: "420 000 FCFA",
      perPerson: "par personne",
      highlights: ["Croisière privée", "Visites guidées", "Chambre suite"]
    },
    {
      id: 10,
      category: "Proposition de mariage",
      categoryColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
      rating: 4.9,
      location: "Maldives",
      reviews: 110,
      title: "Proposition de mariage aux Maldives",
      duration: "1 jour",
      participants: "Jusqu'à 2 personnes",
      description: "Vivez une proposition magique sur la plage avec en toile de fond l'océan serein, avec décoration aux chandelles élégante...",
      price: "490 000 FCFA",
      perPerson: "par personne",
      highlights: ["Plage déserte", "Décor aux chandelles", "Champagne premium"]
    },
    {
      id: 11,
      category: "Safari Aventure",
      categoryColor: "bg-teal-600",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      rating: 4.8,
      location: "Seychelles",
      reviews: 140,
      title: "Aventures Safari Seychelles - Safari Bleu",
      duration: "5 jours",
      participants: "Jusqu'à 6 personnes",
      description: "Les Seychelles n'offrent pas de safari traditionnel de gros gibier, mais une expérience unique de 'safari de plage'...",
      price: "520 000 FCFA",
      perPerson: "par personne",
      highlights: ["Observation marine", "Excursions en bateau", "Plages privées"]
    },
    {
      id: 12,
      category: "Séjour en resort",
      categoryColor: "bg-cyan-600",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop",
      rating: 4.7,
      location: "St. Lucia",
      reviews: 160,
      title: "ST Lucia Sugar Beach, Un Resort Viceroy",
      duration: "5 jours",
      participants: "Jusqu'à 4 personnes",
      description: "Situé dans de magnifiques jardins donnant sur la baie des Pitons, Sugar Beach offre un hébergement luxueux...",
      price: "536 420 FCFA",
      perPerson: "par personne",
      highlights: ["Vue sur les Pitons", "Piscine à débordement", "Restaurant étoilé"]
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategory === "Tous" || pkg.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = searchTerm === "" || 
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Réservation sécurisée",
      description: "Paiement 100% sécurisé avec garantie de remboursement sous conditions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Meilleur prix garanti",
      description: "Nous garantissons les prix les plus bas pour tous nos forfaits"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Notre équipe est disponible à tout moment pour vous assister"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Forfaits Vacances
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Découvrez nos forfaits de voyage organisés pour des expériences inoubliables
          </p>
          
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 mt-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                <input
                  type="text"
                  placeholder="Rechercher une destination ou un forfait..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-blue-200 focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtrer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-100'
                }`}
              >
                {cat.name} <span className="ml-2 text-sm opacity-80">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Nos Forfaits Recommandés
              <span className="text-blue-600 ml-2">({filteredPackages.length})</span>
            </h2>
            <p className="text-gray-600">Classés par popularité</p>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucun forfait ne correspond à votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100 group">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 ${pkg.categoryColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                      {pkg.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{pkg.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{pkg.location}</span>
                      <span className="text-sm text-gray-400">({pkg.reviews} avis)</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.participants}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {pkg.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights && pkg.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t pt-4 border-blue-50">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
                        <p className="text-sm text-gray-500">{pkg.perPerson}</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 group-hover:gap-3">
                        Voir plus
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Plane className="w-10 h-10 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">
                  Réservez Vos Vacances
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Planifiez votre voyage en choisissant la destination, les dates et le nombre de participants.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Ex : Bali, Paris, New York"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date de départ
                  </label>
                  <input
                    type="date"
                    name="dateDepart"
                    value={formData.dateDepart}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date de retour
                  </label>
                  <input
                    type="date"
                    name="dateRetour"
                    value={formData.dateRetour}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Nombre de participants
                </label>
                <input
                  type="number"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Plane className="w-5 h-5" />
                Réserver mes vacances
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Les prix incluent-ils les vols ?</h3>
              <p className="text-gray-600">Les prix affichés sont généralement pour le forfait terrestre. Les vols peuvent être ajoutés sur demande avec un supplément.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Puis-je modifier ma réservation ?</h3>
              <p className="text-gray-600">Oui, les modifications sont possibles jusqu'à 30 jours avant le départ, sous réserve de disponibilité et de frais éventuels.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">L'assurance voyage est-elle incluse ?</h3>
              <p className="text-gray-600">L'assurance n'est pas incluse mais fortement recommandée. Nous pouvons vous proposer des options d'assurance adaptées.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Holiday;