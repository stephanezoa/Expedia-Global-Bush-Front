import React, { useState } from "react";
import {
  Bird,
  Camera,
  MapPin,
  CalendarDays,
  Users,
  Binoculars,
  Award,
  Shield,
  TreePine,
  CloudRain,
  Thermometer,
  Clock,
  ChevronRight,
  Star,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Map,
  Compass,
  BookOpen,
  Filter,
  TrendingUp
} from "lucide-react";

const Ornithologietours = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedZone, setSelectedZone] = useState(null);

  const tabs = [
    { id: "overview", label: "Aperçu", icon: <Binoculars size={18} /> },
    { id: "zones", label: "Zones d'Observation", icon: <MapPin size={18} /> },
    { id: "species", label: "Espèces", icon: <Bird size={18} /> },
    { id: "itinerary", label: "Itinéraire", icon: <Compass size={18} /> },
    { id: "seasons", label: "Saisons", icon: <CalendarDays size={18} /> },
    { id: "equipment", label: "Équipement", icon: <Camera size={18} /> },
    { id: "gallery", label: "Galerie", icon: <Camera size={18} /> },
  ];

  const birdZones = [
    {
      id: 1,
      name: "Mont Cameroun",
      elevation: "4,095m",
      species: "85+ espèces",
      highlight: "Endémiques montagnardes",
      description: "Sanctuaire d'espèces rares comme le Serin du Mont Cameroun et le Bulbul de Bannerman",
      features: ["Zone volcanique", "Forêt de nuages", "Randonnée guidée", "Observation en altitude"]
    },
    {
      id: 2,
      name: "Parc National de Korup",
      elevation: "1,000m",
      species: "400+ espèces",
      highlight: "Forêt primaire ancienne",
      description: "L'une des forêts tropicales les plus anciennes d'Afrique, riche en biodiversité",
      features: ["Forêt primaire", "Canopée", "Trails spécialisés", "Observation tôt le matin"]
    },
    {
      id: 3,
      name: "Parc National de Waza",
      elevation: "300m",
      species: "250+ espèces",
      highlight: "Oiseaux de savane",
      description: "Zone humide exceptionnelle et savane soudano-sahélienne",
      features: ["Zones humides", "Savane", "Points d'eau", "Observation en 4x4"]
    },
    {
      id: 4,
      name: "Parc National de Campo Ma'an",
      elevation: "800m",
      species: "300+ espèces",
      highlight: "Oiseaux côtiers et forestiers",
      description: "Réserve de biosphère UNESCO combinant forêt tropicale et écosystème côtier",
      features: ["Littoral", "Forêt dense", "Mangroves", "Observation côtière"]
    },
    {
      id: 5,
      name: "Lac Ossa",
      elevation: "100m",
      species: "150+ espèces",
      highlight: "Oiseaux aquatiques migrateurs",
      description: "Site RAMSAR important pour les oiseaux d'eau et les migrateurs paléarctiques",
      features: ["Zone humide", "Observation bateau", "Migration", "Photographie"]
    }
  ];

  const birdSpecies = [
    {
      category: "Touracos",
      species: [
        { name: "Touraco géant", scientific: "Corythaeola cristata", status: "Commun", rarity: "🟢" },
        { name: "Touraco violet", scientific: "Musophaga violacea", status: "Rare", rarity: "🟡" },
        { name: "Touraco à huppe blanche", scientific: "Tauraco leucolophus", status: "Endémique", rarity: "🟠" }
      ]
    },
    {
      category: "Perroquets",
      species: [
        { name: "Perroquet gris du Gabon", scientific: "Psittacus erithacus", status: "Vulnérable", rarity: "🟡" },
        { name: "Perroquet youyou", scientific: "Poicephalus senegalus", status: "Commun", rarity: "🟢" }
      ]
    },
    {
      category: "Calaos",
      species: [
        { name: "Calao terrestre", scientific: "Bucorvus abyssinicus", status: "Majestueux", rarity: "🟢" },
        { name: "Calao à bec noir", scientific: "Ceratogymna atrata", status: "Forestier", rarity: "🟢" }
      ]
    },
    {
      category: "Rapaces",
      species: [
        { name: "Aigle couronné", scientific: "Stephanoaetus coronatus", status: "Rare", rarity: "🟠" },
        { name: "Vautour africain", scientific: "Gyps africanus", status: "En danger", rarity: "🔴" }
      ]
    }
  ];

  const detailedItinerary = [
    {
      day: "Jour 1",
      title: "Arrivée et Introduction Ornithologique",
      activities: [
        "Arrivée à l'aéroport de Douala",
        "Transfert vers l'hôtel écologique",
        "Présentation des guides experts",
        "Briefing sécurité et éthique d'observation",
        "Dîner d'accueil avec discussion sur les espèces cibles"
      ],
      accommodation: "Hôtel 4* écologique à Douala"
    },
    {
      day: "Jour 2",
      title: "Mont Cameroun - Oiseaux de Haute Altitude",
      activities: [
        "Départ matinal vers le Mont Cameroun",
        "Observation des espèces endémiques montagnardes",
        "Session photographie avec équipement spécialisé",
        "Pique-nique en altitude avec vue panoramique",
        "Retour au lodge et analyse des observations"
      ],
      accommodation: "Lodge écologique au pied du Mont Cameroun"
    },
    {
      day: "Jour 3",
      title: "Forêt Primaire du Parc de Korup",
      activities: [
        "Randonnée avant l'aube pour l'observation matinale",
        "Traversée de la canopée via ponts suspendus",
        "Observation des espèces rares de la forêt primaire",
        "Atelier d'identification des chants d'oiseaux",
        "Soirée de partage des découvertes"
      ],
      accommodation: "Camp de recherche en forêt"
    },
    {
      day: "Jour 4",
      title: "Savane et Zones Humides de Waza",
      activities: [
        "Safari ornithologique en 4x4 dans la savane",
        "Observation des oiseaux de proie",
        "Session d'observation aux points d'eau",
        "Rencontre avec les gardes-parcs locaux",
        "Documentation scientifique des observations"
      ],
      accommodation: "Campement éco-touristique dans la savane"
    },
    {
      day: "Jour 5",
      title: "Zone Côtière et Départ",
      activities: [
        "Observation des oiseaux marins et côtiers",
        "Atelier de synthèse des observations",
        "Remise du certificat de participation",
        "Transfert vers l'aéroport de Douala",
        "Départ avec liste d'espèces observées"
      ],
      accommodation: "Vol de retour"
    }
  ];

  const seasons = [
    {
      period: "Octobre - Mars",
      name: "Haute Saison",
      description: "Période sèche, conditions optimales",
      birds: "Migration paléarctique, concentration aux points d'eau",
      temperature: "25-30°C",
      recommendation: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      period: "Avril - Juin",
      name: "Saison Intermédiaire",
      description: "Début des pluies, végétation abondante",
      birds: "Période de nidification, comportements uniques",
      temperature: "28-32°C",
      recommendation: "⭐️⭐️⭐️⭐️"
    },
    {
      period: "Juillet - Septembre",
      name: "Saison des Pluies",
      description: "Pluies abondantes, déplacements limités",
      birds: "Espèces résidentes, moins de migrateurs",
      temperature: "22-26°C",
      recommendation: "⭐️⭐️⭐️"
    }
  ];

  const equipmentList = [
    { item: "Jumelles professionnelles", importance: "Essentiel", notes: "Grossissement 8x42 ou 10x42 recommandé" },
    { item: "Guide ornithologique Cameroun", importance: "Essentiel", notes: "Version française fournie" },
    { item: "Appareil photo avec zoom", importance: "Recommandé", notes: "Objectif 300mm minimum" },
    { item: "Carnet d'observation", importance: "Recommandé", notes: "Fourni par nos soins" },
    { item: "Vêtements camouflage", importance: "Optionnel", notes: "Couleurs neutres recommandées" },
    { item: "Enregistreur audio", importance: "Spécialisé", notes: "Pour l'étude des chants" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* En-tête Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Bird size={200} />
        </div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="mr-2" size={20} />
            <span className="text-sm font-semibold">Tourisme Scientifique Certifié</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Ornithologie Tours <span className="text-cyan-300">Cameroun</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Expédition Scientifique d'Observation Aviaire dans les Écosystèmes les plus Riches d'Afrique
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold">900+</div>
              <div className="text-sm text-blue-200">Espèces d'oiseaux</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm text-blue-200">Espèces endémiques</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-blue-200">Taux d'observation</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-blue-200">Écosystèmes uniques</div>
            </div>
          </div>
          
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Réserver une Consultation Gratuite
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Navigation par onglets */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm mb-8 rounded-2xl shadow-lg">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap px-6 py-4 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "border-cyan-600 text-cyan-700 bg-blue-50"
                    : "border-transparent text-gray-600 hover:text-cyan-700 hover:bg-blue-50"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Le Cameroun : Paradis Ornithologique</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Grâce à sa position stratégique au carrefour des écosystèmes ouest-africains et centraux, 
                  le Cameroun concentre une diversité aviaire exceptionnelle qui en fait la destination 
                  incontournable pour les ornithologues du monde entier.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <TreePine className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Écosystèmes Multiples</h3>
                  <p className="text-gray-700">
                    Des forêts tropicales denses aux savanes arides, des montagnes aux mangroves côtières
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Approche Scientifique</h3>
                  <p className="text-gray-700">
                    Encadrement par des ornithologues diplômés et participation à des projets de recherche
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Conservation Active</h3>
                  <p className="text-gray-700">
                    20% du prix du voyage est reversé aux programmes de protection des habitats
                  </p>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Notre Expertise en Chiffres</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-200">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">250+</div>
                    <div className="text-blue-200">Groupes guidés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-blue-200">Taux de satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-blue-200">Guides certifiés</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "zones" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Zones d'Observation Stratégiques</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {birdZones.map((zone) => (
                  <div 
                    key={zone.id}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl ${
                      selectedZone === zone.id 
                        ? 'border-cyan-500 bg-blue-50' 
                        : 'border-blue-200 hover:border-cyan-300'
                    }`}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-800">{zone.name}</h3>
                        <div className="text-sm text-cyan-600 font-medium">{zone.elevation} • {zone.species}</div>
                      </div>
                      <div className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">
                        {zone.highlight}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{zone.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carte interactive (simulée) */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <Map className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-800">Cartographie des Zones d'Observation</h3>
                </div>
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden">
                  {/* Carte simulée */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Carte interactive des hotspots ornithologiques</p>
                      <p className="text-sm text-gray-500">Disponible dans notre brochure complète</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "species" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Espèces Emblématiques du Cameroun</h2>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-800">Catégories d'Espèces</h3>
                  <div className="flex items-center space-x-2">
                    <Filter className="text-blue-600" size={20} />
                    <select className="border border-blue-200 rounded-lg px-3 py-2 text-sm">
                      <option>Trier par rareté</option>
                      <option>Trier par famille</option>
                      <option>Trier par habitat</option>
                    </select>
                  </div>
                </div>
                
                {birdSpecies.map((category, idx) => (
                  <div key={idx} className="mb-6 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">{category.category}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.species.map((bird, birdIdx) => (
                        <div key={birdIdx} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                          <div>
                            <div className="font-bold text-gray-800">{bird.name}</div>
                            <div className="text-sm text-gray-600 italic">{bird.scientific}</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              bird.status === 'Endémique' ? 'bg-purple-100 text-purple-800' :
                              bird.status === 'Rare' ? 'bg-yellow-100 text-yellow-800' :
                              bird.status === 'Vulnérable' ? 'bg-orange-100 text-orange-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {bird.status}
                            </span>
                            <span className="text-2xl">{bird.rarity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Liste Complète des Espèces</h3>
                    <p className="text-blue-100">Téléchargez notre guide exhaustif des 900+ espèces</p>
                  </div>
                  <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                    <Download className="mr-2" />
                    Télécharger le PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Itinéraire Scientifique Détaillé</h2>
              
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">Circuit de 5 Jours - Expert Ornithologie</h3>
                    <p className="text-gray-600">Programme intensif conçu par nos scientifiques</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {detailedItinerary.map((day, idx) => (
                    <div key={idx} className="border-l-4 border-cyan-500 pl-6 py-6 hover:bg-blue-50 rounded-r-2xl transition-colors group">
                      <div className="flex items-start">
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold px-5 py-3 rounded-xl min-w-[100px] text-center mr-6">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-3">{day.title}</h4>
                          <div className="mb-4">
                            <div className="flex items-center text-sm text-cyan-700 font-medium mb-2">
                              <MapPin size={16} className="mr-2" />
                              {day.accommodation}
                            </div>
                            <ul className="space-y-2">
                              {day.activities.map((activity, activityIdx) => (
                                <li key={activityIdx} className="flex items-start text-gray-700">
                                  <ChevronRight className="text-cyan-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Inclus dans le Prix</h3>
                  <ul className="space-y-3">
                    {[
                      "Hébergement écologique 4*",
                      "Tous les repas et collations",
                      "Transport 4x4 avec chauffeur-guide",
                      "Matériel d'observation (jumelles, guide)",
                      "Permis d'entrée dans les parcs",
                      "Encadrement scientifique permanent",
                      "Assurance médicale et rapatriement",
                      "Certificat de participation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-200">
                  <h3 className="text-xl font-bold text-cyan-800 mb-4">Options Premium</h3>
                  <ul className="space-y-3">
                    {[
                      "Guide privé francophone",
                      "Extension vers d'autres réserves",
                      "Atelier photo professionnel",
                      "Participation à un projet de recherche",
                      "Souvenirs et documentation",
                      "Transfert héliporté optionnel"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="text-amber-500 mr-3" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "seasons" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Calendrier Ornithologique Optimal</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {seasons.map((season, idx) => (
                  <div key={idx} className={`border-2 rounded-2xl p-6 ${
                    season.name === "Haute Saison" 
                      ? 'border-cyan-500 bg-gradient-to-b from-blue-50 to-cyan-50' 
                      : 'border-blue-200'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-cyan-600 font-bold">{season.period}</div>
                        <h3 className="text-xl font-bold text-blue-800 mt-1">{season.name}</h3>
                      </div>
                      <div className="text-amber-500 flex">
                        {season.recommendation.split('').map((star, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CloudRain className="text-blue-500 mr-3" size={18} />
                        <span className="text-gray-700">{season.description}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Bird className="text-cyan-500 mr-3" size={18} />
                        <span className="text-gray-700">{season.birds}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Thermometer className="text-orange-500 mr-3" size={18} />
                        <span className="text-gray-700">Température : {season.temperature}</span>
                      </div>
                    </div>
                    
                    {season.name === "Haute Saison" && (
                      <div className="mt-6 pt-4 border-t border-blue-200">
                        <div className="text-sm text-cyan-700 font-bold mb-2">💡 Recommandation Expert</div>
                        <p className="text-gray-700 text-sm">
                          Réservation recommandée 6 mois à l'avance pour cette période
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Planificateur de Voyage</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-cyan-200">📋 Checklist de Préparation</h4>
                    <ul className="space-y-2">
                      {[
                        "Vaccinations à jour (fièvre jaune obligatoire)",
                        "Visa touristique Cameroun",
                        "Assurance voyage spécifique",
                        "Equipement adapté au climat tropical",
                        "Carnet de vaccination international"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-cyan-200">📅 Prochain Départ Disponible</h4>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">15 - 20 Mars 2024</span>
                        <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">3 places</span>
                      </div>
                      <div className="text-sm text-blue-200">
                        Mont Cameroun + Parc Korup + Lac Ossa
                      </div>
                      <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition-colors">
                        Réserver cette date
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "equipment" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Équipement Recommandé</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Matériel Fourni</h3>
                  <div className="space-y-4">
                    {[
                      { item: "Jumelles Swarovski EL 10x42", desc: "Optique professionnelle de pointe" },
                      { item: "Guide des oiseaux du Cameroun", desc: "Édition exclusive, 500 pages illustrées" },
                      { item: "Carnet de terrain waterproof", desc: "Avec stylos et règles de mesure" },
                      { item: "Kit de sécurité en forêt", desc: "Premiers soins, GPS, communication" },
                      { item: "Support photo portable", desc: "Trépied léger pour appareils" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <CheckCircle className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{item.item}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">À Apporter par le Participant</h3>
                  <div className="space-y-4">
                    {equipmentList.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-blue-200 rounded-xl hover:border-cyan-300 transition-colors">
                        <div>
                          <div className="font-bold text-gray-800">{item.item}</div>
                          <div className="text-sm text-gray-600">{item.notes}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.importance === 'Essentiel' 
                            ? 'bg-red-100 text-red-800' 
                            : item.importance === 'Recommandé'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.importance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Location d'Équipement Professionnel</h3>
                <p className="text-cyan-100 mb-6">
                  Nous proposons la location de matériel photo haut de gamme (Canon, Nikon, Sony) 
                  avec objectifs spécialisés pour la photographie animalière.
                </p>
                <button className="bg-white text-cyan-700 font-bold px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors">
                  Consulter nos tarifs de location
                </button>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Galerie Photographique</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div key={num} className="aspect-square bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-blue-600 mx-auto mb-2 opacity-50" />
                        <span className="text-sm text-blue-700 font-medium">Photo {num}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Politique Photographique</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2">✅ Autorisé</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span>Photographie sans flash</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span>Enregistrement audio des chants</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span>Vidéo pour usage personnel</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2">❌ Non Autorisé</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <span>Flash sur les animaux</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <span>Approche à moins de 15m</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <span>Commercialisation sans autorisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section témoignages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Témoignages d'Ornithologues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Marie Lambert",
                role: "Ornithologue, Université de Genève",
                text: "L'expertise des guides camerounais est remarquable. J'ai pu observer 3 espèces endémiques que je recherchais depuis des années.",
                rating: 5
              },
              {
                name: "Jean Dupont",
                role: "Photographe naturaliste",
                text: "Les conditions d'observation sont optimales. J'ai réalisé mes meilleures photos de touracos violets lors de ce voyage.",
                rating: 5
              },
              {
                name: "Sarah Chen",
                role: "Étudiante en biologie",
                text: "Une expérience transformative. L'approche scientifique et le respect de l'environnement sont exemplaires.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-cyan-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <Bird size={120} />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Prêt pour l'Aventure Ornithologique ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre prochaine expédition scientifique et contribuez à la conservation 
            de la biodiversité aviaire camerounaise.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
              <Mail className="mr-2" />
              Demander un Devis Personnalisé
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center">
              <Phone className="mr-2" />
              Parler à un Expert
            </button>
          </div>
          
          <div className="text-blue-200 text-sm">
            <div className="flex items-center justify-center space-x-6">
              <span className="flex items-center">
                <Shield className="mr-2" size={16} />
                Certification Tourisme Durable
              </span>
              <span className="flex items-center">
                <Award className="mr-2" size={16} />
                Membre ATO (African Tourism Organization)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ornithologietours;