import { useState } from 'react';
import Footer from "../components/Footer";

// Import des images depuis assets
import saotomeHero from "../assets/images/saotome-hero.jpg";

// Images par défaut pour les circuits - utilise tes propres images ou placeholders
const defaultCircuitImages = {
  'STP1': "https://images.unsplash.com/photo-1586899028174-e09c6c5d7c9b?w=800&q=80",
  'STP2': "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&q=80",
  'STP3': "https://images.unsplash.com/photo-1573843989-c9d4a65d6c8c?w=800&q=80",
  'STP4': "https://images.unsplash.com/photo-1578837268581-d5b8e5d17c01?w=800&q=80",
  'STP5': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'STP6': "https://images.unsplash.com/photo-1599601859392-2f7a4c61f901?w=800&q=80",
  'STP7': "https://images.unsplash.com/photo-1583494939363-9d2c0d0e1a2a?w=800&q=80",
  'STP8': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  'STP9': "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
};

// Composant Modal pour la carte
function MapModal({ tour, isOpen, onClose }) {
  if (!isOpen || !tour) return null;

  // Itinéraires pour chaque circuit - sites principaux visités
  const circuitItineraries = {
    'STP1': ['São Tomé', 'Praia Jale', 'Roca Agostinho Neto', 'Cascata de São Nicolau'],
    'STP2': ['São Tomé', 'Monte Café', 'Trilha da Ponta Figo', 'Praia das Conchas'],
    'STP3': ['São Tomé', 'Ilhéu das Rolas', 'Praia Banana', 'Roca São João'],
    'STP4': ['São Tomé', 'Praia Lagarto', 'Pico Cão Grande', 'Lagoa Azul'],
    'STP5': ['São Tomé', 'Neves', 'Santo António', 'Praia Macaco'],
    'STP6': ['São Tomé', 'Praia Piscina', 'Ilhéu Santana', 'Cascata do Pico'],
    'STP7': ['São Tomé', 'Roca Bombaim', 'Praia Micoló', 'Reserva Natural Obô'],
    'STP8': ['São Tomé', 'Praia dos Tamarindos', 'Cascata Água Izé', 'Roca São João'],
    'STP9': ['São Tomé', 'Praia Ribeira Peixe', 'Praia das Sete Ondas', 'Santo António'],
  };

  const currentItinerary = circuitItineraries[tour.id] || ['São Tomé', 'Praia Jale'];

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
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50">
                  <div className="absolute bottom-4 left-4 text-blue-800 font-bold text-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm10 0v8h8V3h-8z"/>
                      </svg>
                      Océan Atlantique
                    </div>
                  </div>
                </div>

                {/* Île de São Tomé (principale) */}
                <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-green-100 to-green-50 border-4 border-green-800 rounded-full shadow-lg">
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-900 font-bold text-xl">
                    ÎLE DE SÃO TOMÉ
                  </div>
                  
                  {/* São Tomé (ville) */}
                  <div className="absolute left-1/4 top-1/4 group">
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      São Tomé
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold bg-white/90 px-2 py-1 rounded">
                      São Tomé
                    </div>
                  </div>

                  {/* Praia Jale */}
                  <div className="absolute left-1/2 bottom-1/4 group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 14.5c1.11 0 2-.9 2-2s-.89-2-2-2c-1.1 0-2 .9-2 2s.9 2 2 2m-6-7c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m-7.5 8.5C4.5 14 3 15.5 3 17.5S4.5 21 6.5 21s3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Praia Jale
                    </div>
                  </div>

                  {/* Monte Café */}
                  <div className="absolute left-1/3 top-1/3 group">
                    <div className="w-10 h-10 bg-gray-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Monte Café
                    </div>
                  </div>

                  {/* Roca Agostinho Neto */}
                  <div className="absolute right-1/4 top-1/2 group">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Roca Agostinho Neto
                    </div>
                  </div>

                  {/* Pico Cão Grande */}
                  <div className="absolute left-2/3 top-1/4 group">
                    <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Pico Cão Grande
                    </div>
                  </div>

                  {/* Île de Príncipe (plus petite) */}
                  <div className="absolute right-1/8 top-3/4 group">
                    <div className="w-20 h-20 bg-gradient-to-b from-green-200 to-green-100 border-4 border-green-700 rounded-full shadow-lg">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-900 font-bold text-sm">
                        ÎLE DE PRÍNCIPE
                      </div>
                      
                      {/* Santo António */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group2-hover:opacity-100 transition-opacity">
                          Santo António
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ilhéu das Rolas */}
                  <div className="absolute bottom-1/8 right-1/3 group">
                    <div className="w-12 h-12 bg-gradient-to-b from-green-300 to-green-200 border-4 border-green-600 rounded-full shadow-lg flex items-center justify-center">
                      <div className="text-xs font-bold text-green-900 text-center">ILHÉU<br />DAS ROLAS</div>
                    </div>
                  </div>

                  {/* Lignes d'itinéraire pour le circuit sélectionné */}
                  {tour.id === 'STP1' && (
                    <>
                      {/* Ligne São Tomé → Praia Jale → Roca Agostinho Neto */}
                      <div className="absolute left-[25%] top-[25%] w-[25%] h-[25%] border-t-2 border-dashed border-red-500 transform rotate-45"></div>
                      <div className="absolute left-[50%] top-[50%] w-[15%] h-[15%] border-t-2 border-dashed border-red-500 transform rotate-90"></div>
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-red-600 font-bold text-lg bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                          Itinéraire Circuit {tour.id}
                        </div>
                      </div>
                    </>
                  )}

                  {tour.id === 'STP5' && (
                    <>
                      {/* Ligne São Tomé → Neves → Santo António */}
                      <div className="absolute left-[25%] top-[25%] w-[20%] h-[20%] border-t-2 border-dashed border-red-500 transform rotate-30"></div>
                      <div className="absolute left-[45%] top-[45%] w-[30%] h-[30%] border-t-2 border-dashed border-red-500 transform rotate-120"></div>
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
                        <div className="font-semibold">Plages et sites côtiers</div>
                        <div className="text-sm text-gray-600">Plages et baies paradisiaques</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 6l-1-2-1 2-2 2 2 2 1 2 1-2 2-2-2-2zM6 10l-2-2 2-2 2 2-2 2zM22 10l-2-2 2-2 2 2-2 2zM16 6l2-2 2 2-2 2-2-2zM12 2l2 2-2 2-2-2 2-2zM4 8l2 2-2 2-2-2 2-2zM20 8l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Montagnes et pics</div>
                        <div className="text-sm text-gray-600">Sites d'altitude</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Rocas (plantations)</div>
                        <div className="text-sm text-gray-600">Anciennes plantations coloniales</div>
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
                Sites visités (Circuit {tour.id})
              </h3>
              <div className="space-y-3">
                {currentItinerary.map((site, index) => (
                  <div key={site} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-red-100 text-red-800 font-bold rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{site}</div>
                      <div className="text-sm text-gray-600">
                        {getSiteDescription(site)}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {getRegionForSite(site)}
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
                    <div>Hôtels 3-4 étoiles et éco-lodges</div>
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
              <button className="px-6 py-3 bg-green-800 text-white hover:bg-green-700 rounded-lg transition-colors font-semibold">
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
function getSiteDescription(site) {
  const descriptions = {
    'São Tomé': 'Capitale de São Tomé-et-Principe',
    'Praia Jale': 'Plage paradisiaque au sable doré',
    'Roca Agostinho Neto': 'Ancienne plantation de cacao historique',
    'Cascata de São Nicolau': 'Cascade spectaculaire en forêt',
    'Monte Café': 'Plantation de café en altitude',
    'Praia das Conchas': 'Plage aux coquillages uniques',
    'Ilhéu das Rolas': 'Îlot traversé par l\'équateur',
    'Praia Banana': 'Plage emblématique en forme de banane',
    'Roca São João': 'Plantation historique préservée',
    'Praia Lagarto': 'Plage sauvage et préservée',
    'Pico Cão Grande': 'Pic volcanique emblématique',
    'Lagoa Azul': 'Lagune aux eaux cristallines',
    'Neves': 'Ville portuaire traditionnelle',
    'Santo António': 'Capitale de l\'île de Príncipe',
    'Praia Macaco': 'Plage isolée pour l\'observation',
    'Praia Piscina': 'Piscine naturelle à marée basse',
    'Ilhéu Santana': 'Îlot préservé et sauvage',
    'Cascata do Pico': 'Cascade au pied du Pico',
    'Roca Bombaim': 'Plantation de cacao biologique',
    'Praia Micoló': 'Plage préservée et sauvage',
    'Reserva Natural Obô': 'Réserve de biodiversité',
    'Praia dos Tamarindos': 'Plage bordée de tamariniers',
    'Cascata Água Izé': 'Cascade historique',
    'Praia Ribeira Peixe': 'Plage de pêche traditionnelle',
    'Praia das Sete Ondas': 'Plage aux vagues régulières',
  };
  return descriptions[site] || 'Site naturel de São Tomé-et-Principe';
}

function getRegionForSite(site) {
  const regions = {
    'São Tomé': 'ÎLE DE SÃO TOMÉ',
    'Praia Jale': 'CÔTE EST',
    'Roca Agostinho Neto': 'INTÉRIEUR',
    'Cascata de São Nicolau': 'FORÊT TROPICALE',
    'Monte Café': 'RÉGION MONTAGNEUSE',
    'Praia das Conchas': 'CÔTE NORD',
    'Ilhéu das Rolas': 'ÎLOT ÉQUATORIAL',
    'Praia Banana': 'CÔTE SUD',
    'Roca São João': 'HÉRITAGE COLONIAL',
    'Praia Lagarto': 'CÔTE SAUVAGE',
    'Pico Cão Grande': 'SITE EMBLÉMATIQUE',
    'Lagoa Azul': 'CÔTE SUD-OUEST',
    'Neves': 'CÔTE OUEST',
    'Santo António': 'ÎLE DE PRÍNCIPE',
    'Praia Macaco': 'CÔTE NORD-EST',
    'Praia Piscina': 'CÔTE SUD-EST',
    'Ilhéu Santana': 'ÎLOT PRÉSERVÉ',
    'Cascata do Pico': 'SITE NATUREL',
    'Roca Bombaim': 'AGRICULTURE BIO',
    'Praia Micoló': 'CÔTE SAUVAGE',
    'Reserva Natural Obô': 'RÉSERVE NATURELLE',
    'Praia dos Tamarindos': 'CÔTE EST',
    'Cascata Água Izé': 'PATRIMOINE',
    'Praia Ribeira Peixe': 'VILLAGE DE PÊCHE',
    'Praia das Sete Ondas': 'CÔTE OUEST',
  };
  return regions[site] || 'SÃO TOMÉ-ET-PRÍNCIPE';
}

function getIncludedActivities(circuitId) {
  const activities = {
    'STP1': [
      'Visite de São Tomé et son marché central',
      'Journée à la plage de Praia Jale',
      'Découverte des anciennes plantations',
      'Randonnée vers les cascades',
    ],
    'STP3': [
      'Excursion à l\'Ilhéu das Rolas',
      'Visite de la célèbre Praia Banana',
      'Découverte des plantations historiques',
      'Snorkeling dans les eaux cristallines',
    ],
    'STP4': [
      'Observation du Pico Cão Grande',
      'Baignade à la Lagoa Azul',
      'Randonnée en forêt tropicale',
      'Découverte de la faune endémique',
    ],
    'STP6': [
      'Tour complet des deux îles',
      'Visite de Santo António à Príncipe',
      'Découverte des plages les plus belles',
      'Observation des oiseaux endémiques',
    ],
  };

  return activities[circuitId] || [
    'Transport en véhicule 4x4',
    'Guide francophone expert',
    'Hébergement en éco-lodges',
    'Excursions et activités incluses',
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

export default function Saotome() {
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
      id: 'STP1',
      name: 'Découverte des Trésors de São Tomé',
      duration: '7 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'DÉCOUVERTE',
      from: 'SÃO TOMÉ',
      to: 'PRAIA JALE',
      price: 1899,
      salePrice: 1699,
      dates: 'MAI-SEPT',
      image: defaultCircuitImages['STP1'],
      link: '/decouvertesaotome'
    },
    {
      id: 'STP2',
      name: 'Randonnées au Cœur des Plantations',
      duration: '8 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'RANDONNÉE',
      from: 'SÃO TOMÉ',
      to: 'MONTE CAFÉ',
      price: 2099,
      dates: 'JUIN-OCT',
      image: defaultCircuitImages['STP2'],
      link: '/randonneplantation' 
    },
    {
      id: 'STP3',
      name: 'Plages et Îlots Paradisiaques',
      duration: '6 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'DÉTENTE',
      from: 'SÃO TOMÉ',
      to: 'ILHÉU DAS ROLAS',
      price: 1599,
      includesAir: true,
      dates: 'NOV-AVR',
      image: defaultCircuitImages['STP3'],
      link: '/plageparadis'
    },
    {
      id: 'STP4',
      name: 'Aventure au Pico Cão Grande',
      duration: '9 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'AVENTURE',
      from: 'SÃO TOMÉ',
      to: 'PICO CÃO GRANDE',
      price: 2399,
      salePrice: 2199,
      includesAir: true,
      dates: 'JUILL-SEPT',
      image: defaultCircuitImages['STP4'],
      link: '/aventuregrande'
    },
    {
      id: 'STP5',
      name: 'Circuit des Deux Îles',
      duration: '10 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'GRAND TOUR',
      from: 'SÃO TOMÉ',
      to: 'SANTO ANTÓNIO',
      price: 2799,
      includesAir: true,
      dates: 'TOUTE L\'ANNÉE',
      image: defaultCircuitImages['STP5'],
      link: '/circuitdeuxiles'
    },
    {
      id: 'STP6',
      name: 'Nature et Biodiversité',
      duration: '8 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'NATURE',
      from: 'SÃO TOMÉ',
      to: 'RESERVA OBÔ',
      price: 1999,
      dates: 'MARS-NOV',
      image: defaultCircuitImages['STP6'],
      link: '/naturebiodiversite'
    },
    {
      id: 'STP7',
      name: 'Cacao et Chocolat de Luxe',
      duration: '7 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'GASTRONOMIE',
      from: 'SÃO TOMÉ',
      to: 'ROCA BOMBAIM',
      price: 1899,
      dates: 'AOÛT-DÉC',
      image: defaultCircuitImages['STP7'],
      link: '/cacao'
    },
    {
      id: 'STP8',
      name: 'Plages Secrètes de l\'Archipel',
      duration: '6 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'PLAGE',
      from: 'SÃO TOMÉ',
      to: 'PRAIA TAMARINDOS',
      price: 1499,
      salePrice: 1399,
      dates: 'DÉC-MARS',
      image: defaultCircuitImages['STP8'],
      link: '/plagesecrete'
    },
    {
      id: 'STP9',
      name: 'Culture et Traditions Santoméennes',
      duration: '8 Jours, 1 Pays',
      country: 'São Tomé-et-Principe',
      category: 'CULTURE',
      from: 'SÃO TOMÉ',
      to: 'RIBEIRA PEIXE',
      price: 1799,
      includesAir: true,
      dates: 'AVR-JUIN',
      image: defaultCircuitImages['STP9'],
      link: '/culturetradition'
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
          backgroundImage: `url(${saotomeHero})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">Circuits à São Tomé-et-Principe</h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4">Le Paradis Vert de l'Atlantique</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-5xl">
          São Tomé-et-Principe, archipel volcanique perdu dans l'Atlantique, offre un paradis préservé de forêts tropicales, de plages de sable doré et d'eaux cristallines. Surnommé "les îles du milieu du monde" pour leur position sur l'équateur, ce petit État insulaire vous invite à découvrir son riche patrimoine colonial, ses plantations de cacao renommées, ses pics volcaniques spectaculaires et une biodiversité exceptionnelle. Une destination authentique et hors des sentiers battus.
        </p>

        <h3 className="text-3xl font-serif mb-8">Explorez l'Archipel avec les Circuits Globus</h3>

        {/* Logos des Marques */}
        <div className="flex gap-0 mb-8 border-b border-gray-300">
          <button 
            onClick={() => setSelectedBrand('globus')}
            className={`border-r border-b-0 border-gray-300 px-8 py-4 transition-colors ${
              selectedBrand === 'globus' ? 'bg-white' : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="text-green-600 font-bold text-2xl tracking-wider">
              GLOBUS<span className="text-xs align-super">®</span>
            </div>
          </button>
          <button 
            onClick={() => setSelectedBrand('cosmos')}
            className={`px-8 py-4 transition-colors ${
              selectedBrand === 'cosmos' ? 'bg-green-600' : 'bg-gray-100 hover:bg-gray-50'
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
                  <button className="text-sm text-gray-600 hover:text-green-700 tracking-wide">
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
                    className={`p-2 ${viewType === 'grid' ? 'text-green-700' : 'text-gray-400'}`}
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
                    className={`p-2 ${viewType === 'list' ? 'text-green-700' : 'text-gray-400'}`}
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
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
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

                {/* Filtre Site */}
                <div className="mb-8">
                  <h4 
                    className="font-semibold text-sm tracking-wider mb-4 pb-2 border-b border-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => setCityOpen(!cityOpen)}
                  >
                    SITES PRINCIPAUX
                    <span className="text-xl">{cityOpen ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {cityOpen && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Sites
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">São Tomé (ville)</span>
                          </div>
                          <span className="text-sm text-gray-500">9</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Praia Jale</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Ilhéu das Rolas</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Pico Cão Grande</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Santo António</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Monte Café</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Praia Banana</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Reserva Natural Obô</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Roca Bombaim</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Praia dos Tamarindos</span>
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
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Prix
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">1 499 $ et moins</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">1 500 $ à 1 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">2 000 $ à 2 499 $</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">2 500 $ à 2 999 $</span>
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
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Durée
                      </button>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-center mb-2 text-xs text-gray-600">
                          <span>6 jours</span>
                          <span>10 jours</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full mb-2">
                          <div className="absolute inset-0 flex items-center justify-between px-1">
                            <div className="w-3 h-3 bg-green-700 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                            <div className="w-3 h-3 bg-green-700 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                          </div>
                        </div>
                        <div className="flex justify-center text-xs text-gray-600 mt-3">
                          <div className="flex flex-col items-center">
                            <span>1 semaine</span>
                            <span className="mt-1">10 jours</span>
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
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Catégories
                      </button>
                      
                      <div className="space-y-2">
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
                            <span className="text-sm">Randonnée</span>
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
                            <span className="text-sm">Aventure</span>
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
                            <span className="text-sm">Nature</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Gastronomie</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Plage</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Culture</span>
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
                      <button className="text-sm text-gray-600 hover:text-green-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Promotions
                      </button>
                      
                      <div className="space-y-3">
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Découverte des Îles Équatoriales : Économisez 200 $ par couple sur les circuits 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">4</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Aventure Tropicale : Économisez 150 $ par couple sur les circuits randonnée*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">2</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Économisez 30 $ supplémentaires par personne sur les circuits plage*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">3</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Vols internes offerts pour les circuits deux îles*</span>
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
                              e.target.src = "https://images.unsplash.com/photo-1586899028174-e09c6c5d7c9b?w=800&q=80";
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
                            className="ml-auto text-xs text-green-600 hover:text-green-800 hover:underline"
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
                          <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 24 24">
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
                              <div className="text-2xl font-bold text-green-700">
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
                          className="w-full bg-green-800 text-white py-3 text-sm font-semibold tracking-wider hover:bg-green-700 rounded transition-colors"
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
      <button className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-green-700 flex items-center gap-2 z-50 transition-colors">
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