import { useState } from 'react';
import Footer from "../components/Footer";

// Import des images depuis assets (à remplacer par des images RCA)
import rcaHero from "../assets/images/rca-hero.jpg";

// Images par défaut pour les circuits - utilise tes propres images ou placeholders
const defaultCircuitImages = {
  'RCA1': "https://images.unsplash.com/photo-1566647387313-9fda80664848?w=800&q=80",
  'RCA2': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'RCA3': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'RCA4': "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
  'RCA5': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  'RCA6': "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  'RCA7': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'RCA8': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'RCA9': "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
};

// Composant Modal pour la carte
function MapModal({ tour, isOpen, onClose }) {
  if (!isOpen || !tour) return null;

  // Itinéraires pour chaque circuit - villes principales visitées
  const circuitItineraries = {
    'RCA1': ['Bangui', 'Mbaïki', 'Lobaye'],
    'RCA2': ['Bangui', 'Bouar', 'Bossangoa'],
    'RCA3': ['Bangui', 'Sibut', 'Bambari', 'Bangassou'],
    'RCA4': ['Bangui', 'Dzanga-Sangha', 'Bayanga'],
    'RCA5': ['Bangui', 'Birao', 'Vakaga'],
    'RCA6': ['Bangui', 'Berbérati', 'Carnot', 'Bouar'],
    'RCA7': ['Bangui', 'Bozoum', 'Bossembélé'],
    'RCA8': ['Bangui', 'Mbaïki', 'Sangha'],
    'RCA9': ['Bangui', 'Kaga-Bandoro', 'Ndélé'],
  };

  const currentItinerary = circuitItineraries[tour.id] || ['Bangui', 'Mbaïki'];

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
              <div className="border-4 border-gray-800 rounded-lg h-full relative bg-gradient-to-b from-green-50 to-yellow-50">
                {/* Fleuve Oubangui */}
                <div className="absolute left-1/4 top-1/3 w-1/4 h-1/3 bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="absolute top-2 left-2 text-blue-800 font-bold text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm10 0v8h8V3h-8z"/>
                      </svg>
                      Fleuve Oubangui
                    </div>
                  </div>
                </div>

                {/* Nord - Région Sahélienne */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-b from-yellow-100 to-yellow-50 border-l border-b border-gray-300">
                  <div className="absolute top-4 right-4 text-yellow-800 font-bold">
                    Nord Sahel
                  </div>
                </div>

                {/* Centre - Savane */}
                <div className="absolute left-1/3 top-1/3 w-1/3 h-1/3 bg-gradient-to-b from-orange-100 to-orange-50 border border-gray-300">
                  <div className="absolute top-4 left-4 text-orange-800 font-bold">
                    Savane
                  </div>
                </div>

                {/* Sud-Ouest - Forêt Équatoriale */}
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-green-100 to-green-50 border-t border-r border-gray-300">
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
                  {/* Bangui */}
                  <div className="absolute left-[40%] bottom-[55%] group">
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bangui (Capitale)
                    </div>
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bangui
                    </div>
                  </div>

                  {/* Berbérati */}
                  <div className="absolute left-[25%] bottom-[25%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Berbérati
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Berbérati
                    </div>
                  </div>

                  {/* Bouar */}
                  <div className="absolute left-[30%] bottom-[40%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bouar
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bouar
                    </div>
                  </div>

                  {/* Bambari */}
                  <div className="absolute left-[55%] bottom-[50%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bambari
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bambari
                    </div>
                  </div>

                  {/* Bangassou */}
                  <div className="absolute left-[65%] bottom-[60%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bangassou
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bangassou
                    </div>
                  </div>

                  {/* Birao */}
                  <div className="absolute left-[80%] top-[15%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Birao
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Birao
                    </div>
                  </div>

                  {/* Mbaïki */}
                  <div className="absolute left-[35%] bottom-[40%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Mbaïki
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Mbaïki
                    </div>
                  </div>

                  {/* Dzanga-Sangha */}
                  <div className="absolute left-[15%] bottom-[15%] group">
                    <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Dzanga-Sangha
                    </div>
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Dzanga-Sangha
                    </div>
                  </div>

                  {/* Chutes de Boali */}
                  <div className="absolute left-[45%] bottom-[65%] group">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Chutes de Boali
                    </div>
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Chutes de Boali
                    </div>
                  </div>

                  {/* Lignes d'itinéraire pour le circuit sélectionné */}
                  {tour.id === 'RCA1' && (
                    <>
                      {/* Ligne Bangui → Mbaïki → Lobaye */}
                      <div className="absolute left-[40%] bottom-[55%] w-[10%] h-[5%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[35%] bottom-[50%] w-0 h-[10%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-red-600 font-bold text-lg bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                          Itinéraire Circuit {tour.id}
                        </div>
                      </div>
                    </>
                  )}

                  {tour.id === 'RCA3' && (
                    <>
                      {/* Ligne Bangui → Sibut → Bambari → Bangassou */}
                      <div className="absolute left-[40%] bottom-[55%] w-[15%] h-[5%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[55%] bottom-[50%] w-[10%] h-0 border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[65%] bottom-[50%] w-0 h-[10%] border-l-2 border-dashed border-red-500"></div>
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
                        <div className="font-semibold">Capitale</div>
                        <div className="text-sm text-gray-600">Bangui</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white mr-3"></div>
                      <div>
                        <div className="font-semibold">Villes principales</div>
                        <div className="text-sm text-gray-600">Préfectures et grandes villes</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Réserves naturelles</div>
                        <div className="text-sm text-gray-600">Parcs et réserves</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Sites naturels</div>
                        <div className="text-sm text-gray-600">Chutes, rivières</div>
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
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 81-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/>
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
    'Bangui': 'Capitale de la République Centrafricaine',
    'Berbérati': 'Ville principale de l\'ouest, centre agricole',
    'Bouar': 'Ville des éléphants, site archéologique',
    'Bambari': 'Ville du centre, carrefour commercial',
    'Bangassou': 'Port fluvial sur le Mbomou',
    'Birao': 'Ville du nord-est, porte du Sahel',
    'Mbaïki': 'Ville forestière, production de bois',
    'Dzanga-Sangha': 'Réserve de biodiversité, gorilles',
    'Chutes de Boali': 'Site touristique majeur',
    'Sibut': 'Carrefour routier du centre',
    'Lobaye': 'Région forestière, pygmées',
  };
  return descriptions[city] || 'Ville centrafricaine';
}

function getRegionForCity(city) {
  const regions = {
    'Bangui': 'OMBELLA-M\'POKO',
    'Berbérati': 'MAMBÉRÉ-KADÉÏ',
    'Bouar': 'NANA-MAMBÉRÉ',
    'Bambari': 'OUAKA',
    'Bangassou': 'MBOMOU',
    'Birao': 'VAKAGA',
    'Mbaïki': 'LOBAYE',
    'Dzanga-Sangha': 'SANGHA',
    'Chutes de Boali': 'OMBELLA-M\'POKO',
    'Sibut': 'KÉMO',
    'Lobaye': 'LOBAYE',
  };
  return regions[city] || 'RCA';
}

function getIncludedActivities(circuitId) {
  const activities = {
    'RCA1': [
      'Visite de Bangui et ses marchés',
      'Excursion à Mbaïki et sa forêt',
      'Rencontre avec les communautés pygmées',
      'Découverte de l\'artisanat local',
    ],
    'RCA3': [
      'Circuit à travers le centre du pays',
      'Navigation sur les rivières',
      'Rencontres ethniques',
      'Découverte des paysages variés',
    ],
    'RCA4': [
      'Safari dans la réserve Dzanga-Sangha',
      'Observation des gorilles',
      'Rencontre avec les populations locales',
      'Découverte de la forêt équatoriale',
    ],
    'RCA6': [
      'Tour de l\'ouest centrafricain',
      'Visite des sites archéologiques',
      'Découverte culturelle complète',
      'Écotourisme en forêt',
    ],
  };

  return activities[circuitId] || [
    'Transport en véhicule tout-terrain',
    'Guide francophone expert',
    'Hébergement en lodges et hôtels',
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

export default function Republique() {
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
      id: 'RCA1',
      name: 'Cœur de la Centrafrique : Bangui et la Forêt de Lobaye',
      duration: '7 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'AVENTURE',
      from: 'BANGUI',
      to: 'MBAÏKI',
      price: 2699,
      salePrice: 2499,
      dates: 'DEC-MARS',
      image: defaultCircuitImages['RCA1'],
      link: '/coeurcentre'
    },
    {
      id: 'RCA2',
      name: 'Mégalithes et Traditions de l\'Ouest',
      duration: '9 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'CULTURE',
      from: 'BANGUI',
      to: 'BOUAR',
      price: 3099,
      dates: 'JUIN-SEPT',
      image: defaultCircuitImages['RCA2'],
      link: '/megoli'
    },
    {
      id: 'RCA3',
      name: 'Expédition sur le Fleuve Oubangui',
      duration: '12 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'EXPÉDITION',
      from: 'BANGUI',
      to: 'BANGASSOU',
      price: 3999,
      includesAir: true,
      dates: '',
      image: defaultCircuitImages['RCA3'],
      link: '/expedition'
    },
    {
      id: 'RCA4',
      name: 'Safari dans la Réserve Dzanga-Sangha',
      duration: '8 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'SAFARI',
      from: 'BANGUI',
      to: 'DZANGA-SANGHA',
      price: 3499,
      salePrice: 3299,
      includesAir: true,
      dates: 'NOV-FÉV',
      image: defaultCircuitImages['RCA4'],
      link: '/safarizanga'
    },
    {
      id: 'RCA5',
      name: 'Aventure Sahélienne au Nord',
      duration: '10 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'AVENTURE',
      from: 'BANGUI',
      to: 'BIRAO',
      price: 3799,
      includesAir: true,
      dates: 'OCT-MARS',
      image: defaultCircuitImages['RCA5'],
      link: '/aventuresahel'
    },
    {
      id: 'RCA6',
      name: 'Tour Complet de l\'Ouest Centrafricain',
      duration: '14 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'GRAND TOUR',
      from: 'BANGUI',
      to: 'BERBÉRATI',
      price: 4599,
      includesAir: true,
      dates: '',
      image: defaultCircuitImages['RCA6'],
      link: '/tourouest'
    },
    {
      id: 'RCA7',
      name: 'Découverte des Chutes de Boali',
      duration: '5 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'DÉTENTE',
      from: 'BANGUI',
      to: 'BOALI',
      price: 1699,
      salePrice: 1499,
      dates: 'DÉC-FÉV',
      image: defaultCircuitImages['RCA7'],
      link: '/chutes'
    },
    {
      id: 'RCA8',
      name: 'Immersion en Forêt Équatoriale',
      duration: '11 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'ÉCOTOURISME',
      from: 'BANGUI',
      to: 'SANGHA',
      price: 3299,
      dates: 'MARS-MAI',
      image: defaultCircuitImages['RCA8'],
      link: '/immersionforet'
    },
    {
      id: 'RCA9',
      name: 'Routes du Centre : Traditions et Commerce',
      duration: '8 Jours, 1 Pays',
      country: 'République Centrafricaine',
      category: 'CULTURE',
      from: 'BANGUI',
      to: 'NDÉLÉ',
      price: 2899,
      includesAir: true,
      dates: 'MAI-OCT',
      image: defaultCircuitImages['RCA9'],
      link: '/routecentre'
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
          backgroundImage: `url(${rcaHero})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">Circuits en République Centrafricaine</h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4">Le Joyau Caché de l'Afrique Centrale</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-5xl">
          La République Centrafricaine, véritable joyau méconnu de l'Afrique centrale, offre une expérience authentique et préservée. Des forêts denses de la Sangha aux vastes savanes du nord, des mégalithes mystérieux de Bouar aux majestueuses chutes de Boali, ce pays révèle une biodiversité exceptionnelle et des traditions ancestrales. Découvrez l'hospitalité légendaire des Centrafricains et explorez des écosystèmes uniques à travers nos circuits spécialement conçus pour les voyageurs en quête d'authenticité.
        </p>

        <h3 className="text-3xl font-serif mb-8">Découvrez la Richesse Centrafricaine avec les Circuits Globus</h3>

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
                            <span className="text-sm">Bangui</span>
                          </div>
                          <span className="text-sm text-gray-500">9</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Berbérati</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bouar</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bambari</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bangassou</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Birao</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Mbaïki</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Dzanga-Sangha</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Boali</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Ndélé</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
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
                          <span className="text-sm text-gray-500">1</span>
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
                          <span>5 jours</span>
                          <span>14 jours</span>
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
                            <span className="text-sm">Expédition</span>
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
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Écotourisme</span>
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
                              <span className="text-sm leading-snug">Découverte de l'Afrique Centrale : Économisez 200 $ par couple sur les circuits RCA 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">4</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Aventure Centrafricaine : Économisez 150 $ par couple sur les circuits safari*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">3</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Économisez 20 $ supplémentaires par personne sur les circuits RCA 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">6</span>
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
                              e.target.src = "https://images.unsplash.com/photo-1566647387313-9fda80664848?w=800&q=80";
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 13V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
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