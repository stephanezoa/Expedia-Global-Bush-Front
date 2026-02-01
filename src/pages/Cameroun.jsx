import { useState } from 'react';
import Footer from "../components/Footer";

// Import des images depuis assets
import camerounHero from "../assets/images/cameroun-hero.jpg";

// Images par défaut pour les circuits - utilise tes propres images ou placeholders
const defaultCircuitImages = {
  'CMR1': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'CMR2': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'CMR3': "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w-800&q=80",
  'CMR4': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  'CMR5': "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  'CMR6': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'CMR7': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'CMR8': "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  'CMR9': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
};

// Composant Modal pour la carte
function MapModal({ tour, isOpen, onClose }) {
  if (!isOpen || !tour) return null;

  // Itinéraires pour chaque circuit - villes principales visitées
  const circuitItineraries = {
    'CMR1': ['Yaoundé', 'Kribi', 'Ebolowa'],
    'CMR2': ['Douala', 'Bafoussam', 'Bamenda', 'Mont Cameroun'],
    'CMR3': ['Douala', 'Yaoundé', 'Bafoussam', 'Garoua', 'Maroua'],
    'CMR4': ['Garoua', 'Parc Waza', 'Maroua'],
    'CMR5': ['Douala', 'Bafoussam', 'Bamenda', 'Mont Cameroun'],
    'CMR6': ['Douala', 'Limbe', 'Mont Cameroun', 'Bamenda', 'Yaoundé', 'Kribi'],
    'CMR7': ['Douala', 'Ebolowa', 'Kribi'],
    'CMR8': ['Douala', 'Limbe', 'Kribi'],
    'CMR9': ['Garoua', 'Parc Waza', 'Maroua'],
  };

  const currentItinerary = circuitItineraries[tour.id] || ['Douala', 'Yaoundé'];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-serif">{tour.name}</h2>
            <p className="text-gray-600">Circuit {tour.id} - Itinéraire détaillé</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="flex h-[calc(90vh-120px)]">
          {/* Carte Principale */}
          <div className="w-2/3 border-r p-4 bg-gray-50">
            <div className="relative w-full h-full">
              {/* Conteneur de la carte avec cadre */}
              <div className="border-4 border-gray-800 rounded-lg h-full relative bg-gradient-to-b from-blue-50 to-green-50">
                {/* Océan Atlantique */}
                <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-100 to-blue-50">
                  <div className="absolute bottom-4 left-4 text-blue-800 font-bold text-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm10 0v8h8V3h-8z"/>
                      </svg>
                      Océan Atlantique
                    </div>
                  </div>
                </div>

                {/* Grand Nord */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-b from-yellow-100 to-yellow-50 border-l border-b border-gray-300">
                  <div className="absolute top-4 right-4 text-yellow-800 font-bold">
                    Grand Nord
                  </div>
                </div>

                {/* Ouest - Région Montagneuse */}
                <div className="absolute left-1/3 top-0 w-1/3 h-2/3 bg-gradient-to-b from-gray-100 to-gray-50 border-l border-r border-b border-gray-300">
                  <div className="absolute top-4 left-4 text-gray-800 font-bold">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5l5.5 4.1V19h-2v-6H8.5v6h-2V9.6L12 5.5z"/>
                      </svg>
                      Région Montagneuse
                    </div>
                  </div>
                </div>

                {/* Sud - Forêt Équatoriale */}
                <div className="absolute left-0 bottom-0 w-2/3 h-1/3 bg-gradient-to-t from-green-100 to-green-50 border-t border-r border-gray-300">
                  <div className="absolute bottom-4 left-4 text-green-800 font-bold">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 12l-4-4-4 4 4 4 4-4zM12 3L2 12l3 3 7-7 7 7 3-3-10-9z"/>
                      </svg>
                      Forêt Équatoriale
                    </div>
                  </div>
                </div>

                {/* Villes - Positionnées selon leur région */}
                <div className="absolute inset-0">
                  {/* Douala */}
                  <div className="absolute left-[15%] bottom-[45%] group">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Douala
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Douala
                    </div>
                  </div>

                  {/* Yaoundé */}
                  <div className="absolute left-[35%] bottom-[55%] group">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Yaoundé
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Yaoundé
                    </div>
                  </div>

                  {/* Garoua */}
                  <div className="absolute left-[70%] top-[25%] group">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Garoua
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Garoua
                    </div>
                  </div>

                  {/* Maroua */}
                  <div className="absolute left-[85%] top-[15%] group">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Maroua
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Maroua
                    </div>
                  </div>

                  {/* Kribi */}
                  <div className="absolute left-[20%] bottom-[20%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Kribi
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Kribi
                    </div>
                  </div>

                  {/* Limbe */}
                  <div className="absolute left-[10%] bottom-[40%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Limbe
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Limbe
                    </div>
                  </div>

                  {/* Bafoussam */}
                  <div className="absolute left-[40%] bottom-[40%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bafoussam
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bafoussam
                    </div>
                  </div>

                  {/* Bamenda */}
                  <div className="absolute left-[45%] bottom-[35%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bamenda
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bamenda
                    </div>
                  </div>

                  {/* Ebolowa */}
                  <div className="absolute left-[30%] bottom-[30%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Ebolowa
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Ebolowa
                    </div>
                  </div>

                  {/* Parc National de Waza */}
                  <div className="absolute left-[75%] top-[20%] group">
                    <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Parc Waza
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Parc Waza
                    </div>
                  </div>

                  {/* Mont Cameroun */}
                  <div className="absolute left-[25%] bottom-[42%] group">
                    <div className="w-10 h-10 bg-gray-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Mont Cameroun
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Mont Cameroun
                    </div>
                  </div>

                  {/* Lignes d'itinéraire pour le circuit sélectionné */}
                  {tour.id === 'CMR1' && (
                    <>
                      {/* Ligne Yaoundé → Kribi */}
                      <div className="absolute left-[35%] bottom-[55%] w-[20%] h-[10%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[20%] bottom-[30%] w-0 h-[20%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-red-600 font-bold text-lg bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                          Itinéraire Circuit {tour.id}
                        </div>
                      </div>
                    </>
                  )}

                  {tour.id === 'CMR3' && (
                    <>
                      {/* Ligne Douala → Yaoundé → Bafoussam → Garoua → Maroua */}
                      <div className="absolute left-[15%] bottom-[45%] w-[20%] h-[10%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[35%] bottom-[45%] w-0 h-[10%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[35%] bottom-[40%] w-[35%] h-0 border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[70%] bottom-[40%] w-0 h-[15%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[70%] bottom-[25%] w-[15%] h-0 border-t-2 border-dashed border-red-500"></div>
                    </>
                  )}
                </div>

                {/* Légende en bas à droite */}
                <div className="absolute bottom-4 right-4 bg-white/95 p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
                  <h3 className="font-bold text-lg mb-3 border-b pb-2">LÉGENDE</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white mr-3"></div>
                      <div>
                        <div className="font-semibold">Villes principales</div>
                        <div className="text-sm text-gray-600">Capitale et grandes villes</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white mr-3"></div>
                      <div>
                        <div className="font-semibold">Villes secondaires</div>
                        <div className="text-sm text-gray-600">Villes visitées selon le circuit</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Parcs nationaux</div>
                        <div className="text-sm text-gray-600">Réserves naturelles protégées</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Montagnes</div>
                        <div className="text-sm text-gray-600">Sites d'altitude</div>
                      </div>
                    </div>
                    <div className="flex items-center pt-2 border-t">
                      <div className="w-12 h-1 border-t-2 border-dashed border-red-500 mr-3"></div>
                      <div>
                        <div className="font-semibold">Itinéraire du circuit</div>
                        <div className="text-sm text-gray-600">Trajet du voyage sélectionné</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Informations détaillées */}
          <div className="w-1/3 p-6 overflow-y-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Villes visitées (Circuit {tour.id})
              </h3>
              <div className="space-y-3">
                {currentItinerary.map((city, index) => (
                  <div key={city} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-red-100 text-red-800 font-bold rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{city}</div>
                      <div className="text-sm text-gray-600">
                        {getCityDescription(city)}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {getRegionForCity(city)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Activités incluses
              </h3>
              <ul className="space-y-2">
                {getIncludedActivities(tour.id).map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="text-sm">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/>
                </svg>
                Détails pratiques
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-600">Durée</div>
                    <div className="font-semibold">{tour.duration}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Départ</div>
                    <div className="font-semibold">{tour.from}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Arrivée</div>
                    <div className="font-semibold">{tour.to}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Période idéale</div>
                    <div>{tour.dates || 'Toute l\'année'}</div>
                  </div>
                  <div className="col-span-2 pt-3 border-t">
                    <div className="font-medium text-gray-600">Hébergement</div>
                    <div>Hôtels 3-4 étoiles avec petit-déjeuner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">Prix à partir de</div>
              <div className="text-2xl font-bold text-gray-900">
                {tour.salePrice ? (
                  <>
                    <span className="text-gray-500 line-through text-lg mr-2">${tour.price.toLocaleString()}</span>
                    <span className="text-red-700">${tour.salePrice.toLocaleString()}</span>
                  </>
                ) : (
                  <span>${tour.price.toLocaleString()}</span>
                )}
                <sup className="text-sm ml-1 text-gray-500">Ⓘ</sup>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-semibold"
              >
                Fermer la carte
              </button>
              <button className="px-6 py-3 bg-red-900 text-white hover:bg-red-800 rounded-lg transition-colors font-semibold">
                Réserver ce circuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fonctions helper
function getCityDescription(city) {
  const descriptions = {
    'Douala': 'Capitale économique, port principal',
    'Yaoundé': 'Capitale politique du Cameroun',
    'Garoua': 'Porte d\'entrée du Grand Nord',
    'Maroua': 'Cœur du Sahel camerounais',
    'Kribi': 'Plages de sable blanc, chutes de la Lobé',
    'Limbe': 'Plages de sable noir, jardin botanique',
    'Bafoussam': 'Capitale de la région Bamiléké',
    'Bamenda': 'Chefferies traditionnelles',
    'Ebolowa': 'Forêt tropicale humide',
    'Parc Waza': 'Safari, faune sahelienne',
    'Mont Cameroun': 'Point culminant d\'Afrique de l\'Ouest',
  };
  return descriptions[city] || 'Ville camerounaise';
}

function getRegionForCity(city) {
  const regions = {
    'Douala': 'LITTORAL',
    'Yaoundé': 'CENTRE',
    'Garoua': 'NORD',
    'Maroua': 'EXTRÊME-NORD',
    'Kribi': 'SUD',
    'Limbe': 'SUD-OUEST',
    'Bafoussam': 'OUEST',
    'Bamenda': 'NORD-OUEST',
    'Ebolowa': 'SUD',
    'Parc Waza': 'EXTRÊME-NORD',
    'Mont Cameroun': 'SUD-OUEST',
  };
  return regions[city] || 'CAMEROUN';
}

function getIncludedActivities(circuitId) {
  const activities = {
    'CMR1': [
      'Visite de Yaoundé et ses marchés',
      'Excursion aux plages de Kribi',
      'Découverte des chutes de la Lobé',
      'Dégustation de fruits de mer frais',
    ],
    'CMR3': [
      'Circuit complet à travers 5 régions',
      'Safari dans le Parc de Waza',
      'Rencontres ethniques',
      'Découverte des paysages variés',
    ],
    'CMR4': [
      'Safari photo dans le Parc Waza',
      'Observation de la faune sahelienne',
      'Rencontre avec les populations peules',
      'Découverte des paysages arides',
    ],
    'CMR6': [
      'Tour complet du Cameroun',
      'Ascension du Mont Cameroun (optionnelle)',
      'Safari, plages et montagnes',
      'Découverte culturelle complète',
    ],
  };

  return activities[circuitId] || [
    'Transport en véhicule confortable',
    'Guide francophone expert',
    'Hébergement en hôtels 3-4 étoiles',
    'Certains repas inclus',
  ];
}

// Ajout du CSS pour les animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default function Cameroun() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [viewType, setViewType] = useState('grid');
  const [resultsPerPage, setResultsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('duration');
  const [selectedBrand, setSelectedBrand] = useState('globus');
  const [selectedTourForMap, setSelectedTourForMap] = useState(null);
  
  // États pour gérer l'ouverture/fermeture des sections
  const [departureOpen, setDepartureOpen] = useState(true);
  const [cityOpen, setCityOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [durationOpen, setDurationOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [promotionOpen, setPromotionOpen] = useState(false);

  const tours = [
    {
      id: 'CMR1',
      name: 'Trésors du Cameroun : De Yaoundé aux Plages de Kribi',
      duration: '8 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'AVENTURE',
      from: 'YAOUNDÉ',
      to: 'KRIBI',
      price: 2899,
      salePrice: 2699,
      dates: 'JANV-MARS',
      image: defaultCircuitImages['CMR1'],
      link: '/tresorscamerounyaoundekribi'
    },
    {
      id: 'CMR2',
      name: 'Randonnées dans les Montagnes de l\'Ouest',
      duration: '10 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'RANDONNÉE',
      from: 'DOUALA',
      to: 'BAMENDA',
      price: 3299,
      dates: 'JUIN-SEPT',
      image: defaultCircuitImages['CMR2'],
      link: '/randonnemontagneouest'
    },
    {
      id: 'CMR3',
      name: 'Découverte Complète : Savane, Forêt et Côte',
      duration: '14 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'DÉCOUVERTE',
      from: 'DOUALA',
      to: 'MAROUA',
      price: 4299,
      includesAir: true,
      dates: '',
      image: defaultCircuitImages['CMR3'],
      link: '/decouvertecompletecameroun'
    },
    {
      id: 'CMR4',
      name: 'Safari au Parc National de Waza',
      duration: '7 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'SAFARI',
      from: 'GAROUA',
      to: 'WAZA',
      price: 2599,
      salePrice: 2399,
      includesAir: true,
      dates: 'NOV-FÉV',
      image: defaultCircuitImages['CMR4'],
      link: '/safariwaza'
    },
    {
      id: 'CMR5',
      name: 'Culture et Traditions Bamiléké',
      duration: '9 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'CULTURE',
      from: 'DOUALA',
      to: 'BAFOUSSAM',
      price: 2799,
      includesAir: true,
      dates: 'MAI-OCT',
      image: defaultCircuitImages['CMR5'],
      link: '/culturebamileke'
    },
    {
      id: 'CMR6',
      name: 'L\'Afrique en Miniature : Tour Complet',
      duration: '15 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'GRAND TOUR',
      from: 'DOUALA',
      to: 'YAOUNDÉ',
      price: 4999,
      includesAir: true,
      dates: '',
      image: defaultCircuitImages['CMR6'],
      link: '/afriqueminiaturetourcomplet'
    },
    {
      id: 'CMR7',
      name: 'Aventure dans la Forêt Tropicale',
      duration: '11 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'AVENTURE',
      from: 'DOUALA',
      to: 'EBOLOWA',
      price: 3499,
      dates: 'MARS-MAI',
      image: defaultCircuitImages['CMR7'],
      link: '/aventureforettropicale'
    },
    {
      id: 'CMR8',
      name: 'Côtes et Plages du Littoral',
      duration: '6 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'DÉTENTE',
      from: 'DOUALA',
      to: 'LIMBE',
      price: 1899,
      salePrice: 1699,
      dates: 'DÉC-FÉV',
      image: defaultCircuitImages['CMR8'],
      link: '/coteplagelittoral'
    },
    {
      id: 'CMR9',
      name: 'Rencontres Ethniques du Nord',
      duration: '12 Jours, 1 Pays',
      country: 'Cameroun',
      category: 'CULTURE',
      from: 'GAROUA',
      to: 'MAROUA',
      price: 3899,
      includesAir: true,
      dates: 'OCT-MARS',
      image: defaultCircuitImages['CMR9'],
      link: '/rencontrenord'
    }
  ];

  const months = ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'];

  const handleViewMap = (tour) => {
    setSelectedTourForMap(tour);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{styles}</style>
      
      {/* Section Hero */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${camerounHero})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">Circuits au Cameroun</h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4">L'Afrique en Miniature</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-5xl">
          Le Cameroun, surnommé "l'Afrique en miniature", offre une incroyable diversité de paysages, de cultures et d'expériences. Des plages de sable fin de Kribi aux sommets enneigés du Mont Cameroun, des safaris dans le parc de Waza aux forêts tropicales du Sud, chaque région révèle une facette unique de ce pays fascinant. Découvrez la richesse ethnique, la faune exceptionnelle et l'hospitalité légendaire des Camerounais à travers nos circuits soigneusement conçus.
        </p>

        <h3 className="text-3xl font-serif mb-8">Découvrez la Richesse Camerounaise avec les Circuits Globus</h3>

        {/* Logos des Marques */}
        <div className="flex gap-0 mb-8 border-b border-gray-300">
          <button 
            onClick={() => setSelectedBrand('globus')}
            className={`border-r border-b-0 border-gray-300 px-8 py-4 transition-colors ${
              selectedBrand === 'globus' ? 'bg-white' : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="text-red-600 font-bold text-2xl tracking-wider">
              GLOBUS<span className="text-xs align-super">®</span>
            </div>
          </button>
          <button 
            onClick={() => setSelectedBrand('cosmos')}
            className={`px-8 py-4 transition-colors ${
              selectedBrand === 'cosmos' ? 'bg-red-600' : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className={`font-light text-2xl tracking-widest ${
              selectedBrand === 'cosmos' ? 'text-white' : 'text-gray-600'
            }`}>
              COSMOS
            </div>
          </button>
        </div>

        {selectedBrand === 'globus' ? (
          <>
            {/* Contrôles de Filtrage et Tri */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-300">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-wider">FILTRER PAR</span>
                  <button className="text-sm text-gray-600 hover:text-red-700 tracking-wide">
                    &gt; Réinitialiser tous les filtres
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-wider">TRIER PAR :</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border-b border-gray-400 bg-transparent text-sm py-1 pr-8 focus:outline-none focus:border-gray-600"
                  >
                    <option value="duration">Durée (Courte à Longue)</option>
                    <option value="price-low">Prix (Bas à Haut)</option>
                    <option value="price-high">Prix (Haut à Bas)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-wider">RÉSULTATS PAR PAGE</span>
                  <select 
                    value={resultsPerPage}
                    onChange={(e) => setResultsPerPage(Number(e.target.value))}
                    className="border-b border-gray-400 bg-transparent text-sm py-1 pr-8 focus:outline-none focus:border-gray-600"
                  >
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewType('grid')}
                    className={`p-2 ${viewType === 'grid' ? 'text-red-700' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewType('list')}
                    className={`p-2 ${viewType === 'list' ? 'text-red-700' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="2" />
                      <rect x="3" y="11" width="18" height="2" />
                      <rect x="3" y="18" width="18" height="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Barre Latérale et Grille des Circuits */}
            <div className="flex gap-8">
              {/* Filtres Barre Latérale */}
              <div className="w-64 flex-shrink-0">
                {/* Filtre Date de Départ */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setDepartureOpen(!departureOpen)}
                  >
                    DATE DE DÉPART
                    <span className="text-xl">{departureOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {departureOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser les Dates
                      </button>
                      
                      <div className="flex gap-0 mb-4">
                        <button 
                          onClick={() => setSelectedYear('2026')}
                          className={`flex-1 py-2 text-center border-2 border-gray-800 font-semibold ${selectedYear === '2026' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        >
                          2026
                        </button>
                        <button 
                          onClick={() => setSelectedYear('2027')}
                          className={`flex-1 py-2 text-center border-2 border-l-0 border-gray-800 font-semibold ${selectedYear === '2027' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        >
                          2027
                        </button>
                      </div>

                      <button className="w-full py-3 bg-gray-800 text-white text-sm font-semibold tracking-wider hover:bg-gray-700 mb-6">
                        SÉLECTIONNER TOUTE L'ANNÉE
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        {months.map((month) => (
                          <button
                            key={month}
                            className="py-2 text-xs font-semibold tracking-wider border border-gray-300 hover:border-gray-800 hover:bg-gray-50"
                          >
                            {month}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Filtre Ville */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setCityOpen(!cityOpen)}
                  >
                    VILLE
                    <span className="text-xl">{cityOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {cityOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Ville
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Yaoundé</span>
                          </div>
                          <span className="text-sm text-gray-500">5</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Douala</span>
                          </div>
                          <span className="text-sm text-gray-500">6</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Kribi</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bamenda</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Garoua</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Maroua</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Limbe</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bafoussam</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Ebolowa</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Mont Cameroun</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                      </div>
                    </>
                  )}
                </div>

                {/* Filtre Prix */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setPriceOpen(!priceOpen)}
                  >
                    PRIX
                    <span className="text-xl">{priceOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {priceOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Prix
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">1 999 $ et moins</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">2 000 $ à 2 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">3 000 $ à 3 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">4 000 $ à 4 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                      </div>
                    </>
                  )}
                </div>

                {/* Filtre Durée du Circuit */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setDurationOpen(!durationOpen)}
                  >
                    DURÉE DU CIRCUIT
                    <span className="text-xl">{durationOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {durationOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Durée
                      </button>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-center mb-2 text-xs text-gray-600">
                          <span>6 jours</span>
                          <span>15 jours</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full mb-2">
                          <div className="absolute inset-0 flex items-center justify-between px-1">
                            <div className="w-3 h-3 bg-red-700 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-red-700 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                          </div>
                        </div>
                        <div className="flex justify-center text-xs text-gray-600 mt-3">
                          <div className="flex flex-col items-center">
                            <span>1 semaine</span>
                            <span className="mt-1">2 semaines</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Filtre Catégories de Circuits */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setCategoryOpen(!categoryOpen)}
                  >
                    CATÉGORIES DE CIRCUITS
                    <span className="text-xl">{categoryOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {categoryOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Catégories
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Aventure</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Randonnée</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Découverte</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Safari</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Culture</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Grand Tour</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Détente</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                      </div>
                    </>
                  )}
                </div>

                {/* Filtre Promotions */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setPromotionOpen(!promotionOpen)}
                  >
                    PROMOTIONS
                    <span className="text-xl">{promotionOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {promotionOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Promotions
                      </button>
                      
                      <div className="space-y-3">
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Découverte de l'Afrique : Économisez 400 $ par couple sur les circuits Cameroun 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">4</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Aventure Africaine : Économisez 300 $ par couple sur les circuits randonnée*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">3</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Économisez 30 $ supplémentaires par personne sur les circuits Cameroun 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">6</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Supplément individuel gratuit pour les circuits découverte 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">2</span>
                            </div>
                          </div>
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Grille des Circuits */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-6">
                  {tours.map((tour) => (
                    <div key={tour.id} className="border border-gray-200 bg-white group hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                      {/* Image du Circuit avec lien */}
                      <div className="relative h-48 overflow-hidden">
                        <a href={tour.link} className="block h-full">
                          <img 
                            src={tour.image} 
                            alt={tour.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80";
                            }}
                          />
                        </a>
                        {tour.dates && (
                          <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-semibold tracking-wider">
                            {tour.dates}
                          </div>
                        )}
                        <div className="absolute top-3 left-3 flex items-center gap-2 text-xs text-gray-700">
                          <span>Circuit : <strong>{tour.id}</strong></span>
                          <button 
                            onClick={() => handleViewMap(tour)}
                            className="text-gray-600 hover:text-gray-900"
                            title="Voir l'itinéraire sur la carte"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => handleViewMap(tour)}
                            className="ml-auto text-xs text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Voir la carte
                          </button>
                        </div>
                      </div>

                      {/* Contenu du Circuit */}
                      <div className="p-4">
                        <h3 className="text-xl font-serif mb-3 min-h-[3.5rem] leading-tight">
                          {tour.name}
                        </h3>

                        {/* Sélecteur d'Année */}
                        <select className="w-full border-2 border-gray-800 px-3 py-2 mb-4 text-sm font-semibold rounded">
                          <option>2026</option>
                          <option>2027</option>
                        </select>

                        {/* Itinéraire */}
                        <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                          <span className="font-semibold">{tour.from}</span>
                          <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                          </svg>
                          <span className="font-semibold">{tour.to}</span>
                        </div>

                        {/* Durée */}
                        <div className="text-center text-sm mb-2">
                          <div>{tour.duration}</div>
                          <div className="font-semibold">{tour.country}</div>
                        </div>

                        {/* Badge Catégorie */}
                        <div className="flex items-center justify-center gap-2 bg-black text-white py-2 mb-4 rounded">
                          <span className="text-lg font-bold">G</span>
                          <span className="text-xs font-semibold tracking-widest">{tour.category}</span>
                        </div>

                        {/* Prix */}
                        <div className="text-center mb-4">
                          <div className="text-xs text-gray-600 mb-1">
                            À partir de :
                            <br />
                            (USD)
                          </div>
                          {tour.salePrice ? (
                            <>
                              <div className="text-sm text-gray-500 line-through">${tour.price.toLocaleString()}</div>
                              <div className="text-2xl font-bold text-red-700">
                                ${tour.salePrice.toLocaleString()}
                                <sup className="text-sm">Ⓘ</sup>
                              </div>
                            </>
                          ) : (
                            <div className="text-2xl font-bold">
                              ${tour.price.toLocaleString()}
                              <sup className="text-sm">Ⓘ</sup>
                            </div>
                          )}
                          {tour.includesAir && (
                            <div className="text-xs text-gray-600 mt-2 flex items-center justify-center gap-1">
                              VOL INTRA-VACANCES ET TAXES INCLUS
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Boutons */}
                        <button className="w-full border-2 border-gray-800 py-3 mb-2 text-sm font-semibold tracking-wider hover:bg-gray-50 rounded transition-colors">
                          DEMANDER UN DEVIS
                        </button>
                        <button 
                          onClick={() => handleViewMap(tour)}
                          className="w-full bg-red-900 text-white py-3 text-sm font-semibold tracking-wider hover:bg-red-800 rounded transition-colors"
                        >
                          VOIR LE CIRCUIT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Message "Aucun résultat" pour COSMOS */
          <div className="py-32 text-center">
            <p className="text-gray-600 text-base">
              Aucun résultat n'a été trouvé. Veuillez essayer une autre recherche.
            </p>
          </div>
        )}

      </div>

      {/* Modal pour la carte */}
      <MapModal 
        tour={selectedTourForMap}
        isOpen={!!selectedTourForMap}
        onClose={() => setSelectedTourForMap(null)}
      />

      {/* Bouton Chat en Direct */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.29-3.88-.8l-.28-.13-2.91.49.49-2.91-.13-.28C4.79 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
        </svg>
        <span className="font-semibold">Chat en Direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}