import React, { useState } from 'react';
import { 
  MapPin, Star, Heart, ChevronLeft, Camera, Users, Clock, 
  Calendar, Globe, Shield, Check, Share2, Navigation, Phone,
  Camera as CameraIcon, ChevronDown, ChevronUp, ArrowRight,
  Wind, Thermometer, CloudRain, Sunrise, Compass, Wifi,
  Coffee, Utensils, Car, WifiOff, Battery, Zap
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const JourneyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Données du site touristique
  const journey = {
    id: 1,
    name: 'Mont Cameroun',
    subtitle: 'Le Géant d\'Afrique de l\'Ouest',
    country: 'Cameroun',
    countryCode: 'cm',
    region: 'Sud-Ouest',
    description: 'Le Mont Cameroun est un volcan actif qui culmine à 4 040 mètres d\'altitude, faisant de lui le point culminant de l\'Afrique de l\'Ouest. Cette montagne majestueuse offre des paysages variés allant des forêts tropicales luxuriantes aux déserts alpins.',
    
    rating: 4.8,
    reviews: 1245,
    difficulty: 'Modéré à Difficile',
    bestSeason: 'Novembre à Février',
    duration: '2-3 jours',
    elevation: '4 040 m',
    priceRange: '$$ (15 000 - 50 000 XAF)',
    
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&auto=format&fit=crop', title: 'Sommet du Mont Cameroun' },
      { id: 2, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop', title: 'Paysage volcanique' },
      { id: 3, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop', title: 'Forêt tropicale' },
      { id: 4, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop', title: 'Vue panoramique' },
      { id: 5, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop', title: 'Randonneurs' },
      { id: 6, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop', title: 'Coucher de soleil' }
    ],
    
    highlights: [
      { icon: '⛰️', title: 'Plus haut sommet d\'Afrique de l\'Ouest', description: '4 040 mètres d\'altitude' },
      { icon: '🌋', title: 'Volcan actif', description: 'Dernière éruption en 2012' },
      { icon: '🌳', title: 'Biodiversité unique', description: 'Forêt tropicale à désert alpin' },
      { icon: '🚶', title: 'Randonnée mythique', description: 'Circuit de 2-3 jours' },
      { icon: '🦜', title: 'Faune endémique', description: 'Oiseaux et primates uniques' },
      { icon: '🌄', title: 'Vues panoramiques', description: 'Vue sur l\'océan Atlantique' }
    ],
    
    itineraries: [
      {
        day: 'Jour 1',
        title: 'Départ - Base Camp',
        activities: [
          'Transfert depuis Buea',
          'Ascension vers le premier camp (1800m)',
          'Découverte de la forêt tropicale',
          'Nuit en refuge'
        ],
        distance: '8 km',
        elevation: '+1200m'
      },
      {
        day: 'Jour 2',
        title: 'Ascension vers le sommet',
        activities: [
          'Départ tôt le matin',
          'Traversée de la zone alpine',
          'Arrivée au sommet (4040m)',
          'Descente vers le camp de base'
        ],
        distance: '14 km',
        elevation: '+2240m / -2240m'
      },
      {
        day: 'Jour 3',
        title: 'Retour et exploration',
        activities: [
          'Visite des plantations',
          'Découverte de la culture locale',
          'Retour à Buea',
          'Célébration traditionnelle'
        ],
        distance: '8 km',
        elevation: '-1200m'
      }
    ],
    
    practicalInfo: {
      gettingThere: 'Accès depuis Douala (1h30) ou Buea (30min)',
      accommodation: 'Refuges et hôtels disponibles',
      guideRequired: 'Obligatoire pour l\'ascension',
      permits: 'Permis de randonnée nécessaire',
      bestTime: 'Saison sèche (nov-fév)',
      whatToBring: 'Équipement de randonnée, vêtements chauds, eau'
    },
    
    climate: {
      temperature: '5°C à 25°C selon l\'altitude',
      rainfall: 'Variable selon la saison',
      humidity: 'Élevée en forêt, faible au sommet'
    },
    
    nearbyAttractions: [
      { name: 'Buea', distance: '15 km', description: 'Ville au pied de la montagne' },
      { name: 'Limbe', distance: '45 km', description: 'Plages et jardin botanique' },
      { name: 'Chutes de la Lobé', distance: '120 km', description: 'Chutes se jetant dans l\'océan' }
    ],
    
    tips: [
      'Acclimatez-vous à l\'altitude',
      'Engagez un guide local',
      'Respectez l\'environnement',
      'Prévoyez des vêtements adaptés',
      'Hydratez-vous régulièrement'
    ]
  };

  const handleBookTour = () => {
    navigate('/booking/journey', {
      state: { journey }
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="text-emerald-600 hover:underline">Accueil</Link>
            <span className="mx-1">›</span>
            <Link to="/journeys" className="text-emerald-600 hover:underline">Sites Touristiques</Link>
            <span className="mx-1">›</span>
            <Link to="/journeys/cameroon" className="text-emerald-600 hover:underline">Cameroun</Link>
            <span className="mx-1">›</span>
            <span className="text-gray-800 font-medium">{journey.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Hero Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96">
            <div className="lg:col-span-2 relative">
              <img
                src={journey.images[0].url}
                alt={journey.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="hidden lg:grid grid-rows-2 gap-4">
              <div className="relative">
                <img
                  src={journey.images[1].url}
                  alt={journey.subtitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="relative">
                <img
                  src={journey.images[2].url}
                  alt="Paysage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xl">🇨🇲</span>
                    <span className="font-medium">{journey.country}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold">{journey.rating}</span>
                    <span className="text-sm">({journey.reviews} avis)</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{journey.name}</h1>
                <p className="text-xl text-gray-200">{journey.subtitle}</p>
              </div>
              
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={toggleFavorite}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <Share2 className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex overflow-x-auto border-b">
                {['overview', 'itinerary', 'practical', 'gallery'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                      selectedTab === tab
                        ? 'border-emerald-600 text-emerald-600'
                        : 'border-transparent text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    {tab === 'overview' && 'Aperçu'}
                    {tab === 'itinerary' && 'Itinéraire'}
                    {tab === 'practical' && 'Infos pratiques'}
                    {tab === 'gallery' && 'Galerie'}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {selectedTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{journey.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Points Forts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {journey.highlights.map((highlight, index) => (
                          <div key={index} className="bg-emerald-50 p-4 rounded-xl">
                            <div className="text-2xl mb-2">{highlight.icon}</div>
                            <div className="font-bold text-gray-900 mb-1">{highlight.title}</div>
                            <div className="text-sm text-gray-600">{highlight.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Attractions à proximité</h3>
                      <div className="space-y-3">
                        {journey.nearbyAttractions.map((attraction, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <div>
                              <div className="font-medium text-gray-900">{attraction.name}</div>
                              <div className="text-sm text-gray-600">{attraction.description}</div>
                            </div>
                            <div className="text-emerald-600 font-medium">{attraction.distance}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedTab === 'itinerary' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme détaillé</h3>
                    <div className="space-y-6">
                      {journey.itineraries.map((day, index) => (
                        <div key={index} className="border-l-4 border-emerald-500 pl-6 py-2">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                              <span className="text-emerald-700 font-bold">{day.day}</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">{day.title}</div>
                              <div className="text-sm text-gray-600">
                                {day.distance} • Dénivelé: {day.elevation}
                              </div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {day.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedTab === 'practical' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Informations essentielles</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-900">Comment s'y rendre</div>
                          <div className="text-sm text-gray-600">{journey.practicalInfo.gettingThere}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Hébergement</div>
                          <div className="text-sm text-gray-600">{journey.practicalInfo.accommodation}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Guide</div>
                          <div className="text-sm text-gray-600">{journey.practicalInfo.guideRequired}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Conseils pratiques</h4>
                      <ul className="space-y-2">
                        {journey.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-gray-900 mb-3">Conditions climatiques</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <Thermometer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-gray-900">{journey.climate.temperature}</div>
                          <div className="text-sm text-gray-600">Température</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <CloudRain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-gray-900">{journey.climate.rainfall}</div>
                          <div className="text-sm text-gray-600">Précipitations</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <Wind className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-gray-900">{journey.climate.humidity}</div>
                          <div className="text-sm text-gray-600">Humidité</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedTab === 'gallery' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Galerie photos</h3>
                      <button
                        onClick={() => navigate(`/journeys/${id}/gallery`)}
                        className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
                      >
                        Voir toutes les photos
                        <CameraIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {(showAllPhotos ? journey.images : journey.images.slice(0, 6)).map((image, index) => (
                        <div key={image.id} className="relative group cursor-pointer">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <div className="absolute bottom-3 left-3 text-white text-sm">
                              {image.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {!showAllPhotos && journey.images.length > 6 && (
                      <button
                        onClick={() => setShowAllPhotos(true)}
                        className="w-full mt-6 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition flex items-center justify-center gap-2"
                      >
                        <ChevronDown className="w-5 h-5" />
                        Voir plus de photos ({journey.images.length - 6})
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{journey.priceRange}</div>
                <div className="text-gray-600">par personne</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Durée</span>
                  <span className="font-medium flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {journey.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Difficulté</span>
                  <span className="font-medium">{journey.difficulty}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Meilleure saison</span>
                  <span className="font-medium flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {journey.bestSeason}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Altitude</span>
                  <span className="font-medium">{journey.elevation}</span>
                </div>
              </div>
              
              <button
                onClick={handleBookTour}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition shadow-lg hover:shadow-xl mb-4"
              >
                Réserver cette expérience
              </button>
              
              <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition">
                Demander plus d'informations
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Réservation sécurisée • Annulation gratuite 48h avant</span>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-4">En bref</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Région</div>
                    <div className="text-sm text-gray-600">{journey.region}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Taille du groupe</div>
                    <div className="text-sm text-gray-600">2-12 personnes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Niveau requis</div>
                    <div className="text-sm text-gray-600">Bonne condition physique</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sunrise className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Départ</div>
                    <div className="text-sm text-gray-600">Tôt le matin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-6">
              <h4 className="font-bold text-xl mb-4">Besoin d'aide ?</h4>
              <p className="mb-6 text-emerald-100">
                Nos experts locaux sont disponibles pour vous conseiller et personnaliser votre voyage.
              </p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition">
                  <Phone className="w-5 h-5" />
                  Nous appeler
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition">
                  <Navigation className="w-5 h-5" />
                  Demander un guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JourneyDetailPage;