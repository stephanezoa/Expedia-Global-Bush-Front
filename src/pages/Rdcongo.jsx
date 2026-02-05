import { useState } from 'react';
import Footer from "../components/Footer";

// Import des images depuis assets (vous devrez créer ces images)
import rdcHero from "../assets/images/rd-hero.jpg";

// Images par défaut pour les circuits - utilise tes propres images ou placeholders
const defaultCircuitImages = {
  'RDC1': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  'RDC2': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'RDC3': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'RDC4': "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w-800&q=80",
  'RDC5': "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  'RDC6': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'RDC7': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'RDC8': "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  'RDC9': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
};

// Composant Modal pour la carte
function MapModal({ tour, isOpen, onClose }) {
  if (!isOpen || !tour) return null;

  // Itinéraires pour chaque circuit - villes principales visitées
  const circuitItineraries = {
    'RDC1': ['Kinshasa', 'Kisantu', 'Matadi', 'Boma'],
    'RDC2': ['Kinshasa', 'Kikwit', 'Kananga', 'Mbuji-Mayi'],
    'RDC3': ['Goma', 'Parc des Virunga', 'Bukavu', 'Lac Kivu'],
    'RDC4': ['Kisangani', 'Parc de la Salonga', 'Mbandaka'],
    'RDC5': ['Lubumbashi', 'Likasi', 'Kolwezi', "Parc de l'Upemba"],
    'RDC6': ['Kinshasa', 'Kisangani', 'Goma', 'Lubumbashi'],
    'RDC7': ['Bukavu', 'Uvira', 'Baraka', 'Fizi'],
    'RDC8': ['Kinshasa', 'Bandundu', 'Kikwit', 'Tshikapa'],
    'RDC9': ['Goma', 'Rutshuru', 'Beni', 'Butembo'],
  };

  const currentItinerary = circuitItineraries[tour.id] || ['Kinshasa', 'Lubumbashi'];

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
                {/* Fleuve Congo */}
                <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-800 font-bold text-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Fleuve Congo
                    </div>
                  </div>
                </div>

                {/* Forêt Équatoriale */}
                <div className="absolute left-0 top-0 w-2/3 h-full bg-gradient-to-r from-green-100 to-green-50">
                  <div className="absolute top-4 left-4 text-green-800 font-bold">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 12l-4-4-4 4 4 4 4-4zM12 3L2 12l3 3 7-7 7 7 3-3-10-9z"/>
                      </svg>
                      Forêt Équatoriale
                    </div>
                  </div>
                </div>

                {/* Plateau du Katanga */}
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-t from-yellow-100 to-yellow-50">
                  <div className="absolute bottom-4 right-4 text-yellow-800 font-bold">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5l5.5 4.1V19h-2v-6H8.5v6h-2V9.6L12 5.5z"/>
                      </svg>
                      Plateau du Katanga
                    </div>
                  </div>
                </div>

                {/* Région des Grands Lacs */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-100 to-blue-50">
                  <div className="absolute top-4 right-4 text-blue-800 font-bold">
                    Région des Grands Lacs
                  </div>
                </div>

                {/* Villes - Positionnées selon leur région */}
                <div className="absolute inset-0">
                  {/* Kinshasa */}
                  <div className="absolute left-[30%] top-[55%] group">
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Kinshasa
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Kinshasa
                    </div>
                  </div>

                  {/* Lubumbashi */}
                  <div className="absolute left-[80%] bottom-[25%] group">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Lubumbashi
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Lubumbashi
                    </div>
                  </div>

                  {/* Goma */}
                  <div className="absolute left-[75%] top-[25%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Goma
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Goma
                    </div>
                  </div>

                  {/* Kisangani */}
                  <div className="absolute left-[50%] top-[30%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Kisangani
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Kisangani
                    </div>
                  </div>

                  {/* Bukavu */}
                  <div className="absolute left-[70%] top-[35%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bukavu
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bukavu
                    </div>
                  </div>

                  {/* Matadi */}
                  <div className="absolute left-[20%] bottom-[45%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Matadi
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Matadi
                    </div>
                  </div>

                  {/* Mbuji-Mayi */}
                  <div className="absolute left-[60%] top-[45%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Mbuji-Mayi
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Mbuji-Mayi
                    </div>
                  </div>

                  {/* Kananga */}
                  <div className="absolute left-[55%] top-[50%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Kananga
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Kananga
                    </div>
                  </div>

                  {/* Parc des Virunga */}
                  <div className="absolute left-[73%] top-[20%] group">
                    <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Parc des Virunga
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Parc Virunga
                    </div>
                  </div>

                  {/* Lac Kivu */}
                  <div className="absolute left-[72%] top-[30%] group">
                    <div className="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Lac Kivu
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Lac Kivu
                    </div>
                  </div>

                  {/* Monts Ruwenzori */}
                  <div className="absolute left-[65%] top-[15%] group">
                    <div className="w-10 h-10 bg-gray-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Monts Ruwenzori
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Ruwenzori
                    </div>
                  </div>

                  {/* Lignes d'itinéraire pour le circuit sélectionné */}
                  {tour.id === 'RDC1' && (
                    <>
                      {/* Ligne Kinshasa → Matadi → Boma */}
                      <div className="absolute left-[30%] top-[55%] w-0 h-[10%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[20%] bottom-[35%] w-[10%] h-0 border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[15%] bottom-[30%] w-0 h-[15%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-red-600 font-bold text-lg bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                          Itinéraire Circuit {tour.id}
                        </div>
                      </div>
                    </>
                  )}

                  {tour.id === 'RDC6' && (
                    <>
                      {/* Ligne Kinshasa → Kisangani → Goma → Lubumbashi */}
                      <div className="absolute left-[30%] top-[55%] w-[20%] h-[25%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[50%] top-[30%] w-[25%] h-[5%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[75%] top-[25%] w-0 h-[40%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[75%] bottom-[25%] w-[5%] h-0 border-t-2 border-dashed border-red-500"></div>
                    </>
                  )}
                </div>

                {/* Légende en bas à droite */}
                <div className="absolute bottom-4 right-4 bg-white/95 p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
                  <h3 className="font-bold text-lg mb-3 border-b pb-2">LÉGENDE</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white mr-3"></div>
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
                      <div className="w-10 h-10 bg-green-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Parcs nationaux</div>
                        <div className="text-sm text-gray-600">Réserves naturelles protégées</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Lacs</div>
                        <div className="text-sm text-gray-600">Grands lacs africains</div>
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
    'Kinshasa': 'Capitale de la RDC, plus grande ville francophone du monde',
    'Lubumbashi': 'Capitale du Katanga, centre minier',
    'Goma': 'Porte d\'entrée du Parc des Virunga',
    'Kisangani': 'Grand port sur le fleuve Congo',
    'Bukavu': 'Sur les rives du Lac Kivu',
    'Matadi': 'Principal port maritime de la RDC',
    'Mbuji-Mayi': 'Capitale du diamant',
    'Kananga': 'Centre culturel du Kasaï',
    'Kikwit': 'Ville historique du Bandundu',
    'Boma': 'Ancienne capitale du Congo belge',
    'Parc des Virunga': 'Plus ancien parc d\'Afrique, gorilles de montagne',
    'Lac Kivu': 'Lac aux eaux profondes, frontière naturelle',
    'Parc de la Salonga': 'Plus grande réserve de forêt tropicale humide',
    "Parc de l'Upemba": 'Réserve de biodiversité au Katanga',
    'Monts Ruwenzori': 'Montagnes de la Lune, sommets enneigés',
  };
  return descriptions[city] || 'Ville de la République Démocratique du Congo';
}

function getRegionForCity(city) {
  const regions = {
    'Kinshasa': 'KINSHASA',
    'Lubumbashi': 'HAUT-KATANGA',
    'Goma': 'NORD-KIVU',
    'Kisangani': 'TSHOPO',
    'Bukavu': 'SUD-KIVU',
    'Matadi': 'KONGO CENTRAL',
    'Mbuji-Mayi': 'KASAÏ ORIENTAL',
    'Kananga': 'KASAÏ CENTRAL',
    'Kikwit': 'KWILU',
    'Boma': 'KONGO CENTRAL',
    'Parc des Virunga': 'NORD-KIVU',
    'Lac Kivu': 'SUD-KIVU',
    'Parc de la Salonga': 'TSHOPO',
    "Parc de l'Upemba": 'HAUT-LOMAMI',
    'Monts Ruwenzori': 'NORD-KIVU',
  };
  return regions[city] || 'RDC';
}

function getIncludedActivities(circuitId) {
  const activities = {
    'RDC1': [
      'Visite de Kinshasa et ses marchés',
      'Découverte des chutes du fleuve Congo',
      'Visite historique de Boma',
      'Croisière sur le fleuve Congo',
    ],
    'RDC3': [
      'Observation des gorilles de montagne',
      'Visite du Parc des Virunga',
      'Excursion sur le Lac Kivu',
      'Rencontre avec les communautés locales',
    ],
    'RDC4': [
      'Expédition en forêt équatoriale',
      'Navigation sur le fleuve Congo',
      'Observation de la faune endémique',
      'Découverte de la culture pygmée',
    ],
    'RDC6': [
      'Tour complet de la RDC',
      'Découverte des principales villes',
      'Visite de sites naturels exceptionnels',
      'Immersion culturelle approfondie',
    ],
  };

  return activities[circuitId] || [
    'Transport en véhicule tout-terrain',
    'Guide francophone expert',
    'Hébergement en hôtels 3-4 étoiles',
    'Certains repas inclus',
    'Entrées aux sites touristiques',
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

export default function Rdcongo() {
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
      id: 'RDC1',
      name: 'Trésors du Bas-Congo : De Kinshasa aux Chutes',
      duration: '7 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'AVENTURE',
      from: 'KINSHASA',
      to: 'MATADI',
      price: 2799,
      salePrice: 2599,
      dates: 'JUIN-SEPT',
      image: defaultCircuitImages['RDC1'],
      link: '/tresorbascongo'
    },
    {
      id: 'RDC2',
      name: 'Expédition au Cœur du Kasaï',
      duration: '10 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'CULTURE',
      from: 'KINSHASA',
      to: 'MBUJI-MAYI',
      price: 3299,
      dates: 'MAI-OCT',
      image: defaultCircuitImages['RDC2'],
      link: '/expeditioncoeur'
    },
    {
      id: 'RDC3',
      name: 'Gorilles et Volcans du Kivu',
      duration: '12 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'SAFARI',
      from: 'GOMA',
      to: 'BUKAVU',
      price: 4499,
      includesAir: true,
      dates: 'JUIN-AOÛT',
      image: defaultCircuitImages['RDC3'],
      link: '/gorillevolcan'
    },
    {
      id: 'RDC4',
      name: 'Forêt Équatoriale et Fleuve Congo',
      duration: '14 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'AVENTURE',
      from: 'KISANGANI',
      to: 'MBANDAKA',
      price: 4999,
      includesAir: true,
      dates: 'DÉC-FÉV',
      image: defaultCircuitImages['RDC4'],
      link: '/foretequatorialcongo'
    },
    {
      id: 'RDC5',
      name: 'Mines et Savanes du Katanga',
      duration: '8 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'DÉCOUVERTE',
      from: 'LUBUMBASHI',
      to: 'KOLWEZI',
      price: 2899,
      salePrice: 2699,
      includesAir: true,
      dates: 'MAI-SEPT',
      image: defaultCircuitImages['RDC5'],
      link: '/minesavane'
    },
    {
      id: 'RDC6',
      name: 'La RDC Complète : De l\'Ouest à l\'Est',
      duration: '18 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'GRAND TOUR',
      from: 'KINSHASA',
      to: 'LUBUMBASHI',
      price: 5999,
      includesAir: true,
      dates: '',
      image: defaultCircuitImages['RDC6'],
      link: '/rdccomplet'
    },
    {
      id: 'RDC7',
      name: 'Rives du Lac Kivu et Montagnes',
      duration: '9 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'RANDONNÉE',
      from: 'BUKAVU',
      to: 'UVIRA',
      price: 3399,
      dates: 'JANV-MARS',
      image: defaultCircuitImages['RDC7'],
      link: '/rivemontagne'
    },
    {
      id: 'RDC8',
      name: 'Culture et Traditions du Bandundu',
      duration: '6 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'CULTURE',
      from: 'KINSHASA',
      to: 'KIKWIT',
      price: 1999,
      salePrice: 1799,
      dates: 'OCT-DÉC',
      image: defaultCircuitImages['RDC8'],
      link: '/culturetraditions'
    },
    {
      id: 'RDC9',
      name: 'Villes Historiques du Nord-Kivu',
      duration: '11 Jours, 1 Pays',
      country: 'République Démocratique du Congo',
      category: 'HISTOIRE',
      from: 'GOMA',
      to: 'BUTEMBO',
      price: 3899,
      includesAir: true,
      dates: 'NOV-FÉV',
      image: defaultCircuitImages['RDC9'],
      link: '/villehistorique'
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
          backgroundImage: `url(${rdcHero})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">Circuits en République Démocratique du Congo</h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4">Le Géant d'Afrique Centrale</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-5xl">
          La République Démocratique du Congo, véritable géant de l'Afrique, offre une diversité exceptionnelle de paysages et d'expériences. Du majestueux fleuve Congo aux sommets enneigés des Ruwenzori, des forêts équatoriales aux savanes du Katanga, des gorilles de montagne du Parc des Virunga aux cultures vibrantes de ses nombreuses ethnies, chaque région révèle une facette unique de ce pays fascinant. Découvrez la richesse naturelle, la faune exceptionnelle et l'hospitalité légendaire des Congolais à travers nos circuits soigneusement conçus.
        </p>

        <h3 className="text-3xl font-serif mb-8">Découvrez la Richesse Congolaise avec les Circuits Globus</h3>

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
                            <span className="text-sm">Kinshasa</span>
                          </div>
                          <span className="text-sm text-gray-500">4</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Lubumbashi</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Goma</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Kisangani</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bukavu</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Matadi</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Mbuji-Mayi</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Kananga</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Kikwit</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Parc des Virunga</span>
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
                          <span className="text-sm text-gray-500">1</span>
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
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">4 000 $ à 4 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">5 000 $ et plus</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
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
                          <span>18 jours</span>
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
                            <span className="text-sm">Culture</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
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
                            <span className="text-sm">Découverte</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
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
                            <span className="text-sm">Randonnée</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Histoire</span>
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
                              <span className="text-sm leading-snug">Découverte de l'Afrique Centrale : Économisez 400 $ par couple sur les circuits RDC 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">3</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Aventure en Forêt Équatoriale : Économisez 300 $ par couple sur les circuits aventure*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">2</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Économisez 30 $ supplémentaires par personne sur les circuits RDC 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">4</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Supplément individuel gratuit pour les circuits culture 2026*</span>
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