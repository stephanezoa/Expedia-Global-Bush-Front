import { useState } from 'react';
import PiedDePage from "../components/Footer";

// Importation des images depuis les ressources
import heroGuineeEquatoriale from "../assets/images/guinee-equatoriale-hero.jpg";

// Images par défaut pour les circuits
const imagesCircuitParDefaut = {
  'GQE1': "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
  'GQE2': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'GQE3': "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  'GQE4': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  'GQE5': "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  'GQE6': "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
  'GQE7': "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  'GQE8': "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  'GQE9': "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
};

// Composant Modal pour la carte
function ModalCarte({ circuit, estOuvert, onFermer }) {
  if (!estOuvert || !circuit) return null;

  // Itinéraires pour chaque circuit - villes principales visitées
  const itinerairesCircuit = {
    'GQE1': ['Malabo', 'Bata', 'Mongomo'],
    'GQE2': ['Malabo', 'Luba', 'Ureca'],
    'GQE3': ['Bata', 'Ebebiyín', 'Mongomo'],
    'GQE4': ['Malabo', 'Annobón', 'Corisco'],
    'GQE5': ['Bata', 'Mbini', 'Cogo'],
    'GQE6': ['Malabo', 'Bata', 'Mongomo', 'Ebebiyín'],
    'GQE7': ['Bata', 'Mbini', 'Kogo'],
    'GQE8': ['Malabo', 'Riaba', 'Moca'],
    'GQE9': ['Malabo', 'Bata', 'Mongomo'],
  };

  const itineraireActuel = itinerairesCircuit[circuit.id] || ['Malabo', 'Bata'];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animation-apparition">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-serif">{circuit.nom}</h2>
            <p className="text-gray-600">Circuit {circuit.id} - Itinéraire détaillé</p>
          </div>
          <button
            onClick={onFermer}
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
                {/* Île de Bioko */}
                <div className="absolute right-8 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-green-100 to-green-50 rounded-xl border-2 border-green-300">
                  <div className="absolute top-4 left-4 text-green-800 font-bold text-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L4 9v12h16V9l-8-6zm0 2.5l5.5 4.1V19h-2v-6H8.5v6h-2V9.6L12 5.5z"/>
                      </svg>
                      Île de Bioko
                    </div>
                  </div>
                </div>

                {/* Région Continentale (Río Muni) */}
                <div className="absolute left-4 top-8 w-2/3 h-4/5 bg-gradient-to-b from-green-50 to-blue-50 border-2 border-green-200 rounded-xl">
                  <div className="absolute top-4 left-4 text-green-800 font-bold">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 12l-4-4-4 4 4 4 4-4zM12 3L2 12l3 3 7-7 7 7 3-3-10-9z"/>
                      </svg>
                      Région Continentale (Río Muni)
                    </div>
                  </div>
                </div>

                {/* Océan Atlantique */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50 opacity-30 rounded-lg"></div>

                {/* Villes - Positionnées selon leur région */}
                <div className="absolute inset-0">
                  {/* Malabo (Bioko) */}
                  <div className="absolute right-[30%] top-[40%] group">
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Malabo (capitale)
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Malabo
                    </div>
                  </div>

                  {/* Bata (Río Muni) */}
                  <div className="absolute left-[25%] top-[60%] group">
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Bata (plus grande ville)
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Bata
                    </div>
                  </div>

                  {/* Mongomo */}
                  <div className="absolute left-[60%] top-[30%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Mongomo
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Mongomo
                    </div>
                  </div>

                  {/* Ebebiyín */}
                  <div className="absolute left-[70%] top-[20%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Ebebiyín
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Ebebiyín
                    </div>
                  </div>

                  {/* Luba (Bioko) */}
                  <div className="absolute right-[20%] top-[60%] group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Luba
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Luba
                    </div>
                  </div>

                  {/* Mbini */}
                  <div className="absolute left-[15%] top-[70%] group">
                    <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Mbini (port)
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Mbini
                    </div>
                  </div>

                  {/* Annobón (île éloignée) */}
                  <div className="absolute right-[10%] bottom-[10%] group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Île d'Annobón
                    </div>
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Annobón
                    </div>
                  </div>

                  {/* Parc National de Monte Alén */}
                  <div className="absolute left-[40%] top-[40%] group">
                    <div className="w-10 h-10 bg-green-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm10 0v8h8V3h-8z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Parc Monte Alén
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                      Monte Alén
                    </div>
                  </div>

                  {/* Lignes d'itinéraire pour le circuit sélectionné */}
                  {circuit.id === 'GQE1' && (
                    <>
                      {/* Ligne Malabo → Bata → Mongomo */}
                      <div className="absolute right-[30%] top-[40%] w-[25%] h-[20%] border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute left-[25%] top-[40%] w-[35%] h-0 border-t-2 border-dashed border-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-red-600 font-bold text-lg bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                          Itinéraire Circuit {circuit.id}
                        </div>
                      </div>
                    </>
                  )}

                  {circuit.id === 'GQE4' && (
                    <>
                      {/* Ligne Malabo → Annobón → Corisco */}
                      <div className="absolute right-[30%] top-[40%] w-0 h-[30%] border-l-2 border-dashed border-red-500"></div>
                      <div className="absolute right-[30%] bottom-[10%] w-[20%] h-0 border-t-2 border-dashed border-red-500"></div>
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
                      <div className="w-8 h-8 bg-green-700 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm10 0v8h8V3h-8z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Parcs nationaux</div>
                        <div className="text-sm text-gray-600">Réserves naturelles protégées</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Ports</div>
                        <div className="text-sm text-gray-600">Villes portuaires importantes</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full border-2 border-white mr-3 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.5l6.09 11.5H5.91L12 5.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Îles éloignées</div>
                        <div className="text-sm text-gray-600">Îles isolées de l'archipel</div>
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
                Villes visitées (Circuit {circuit.id})
              </h3>
              <div className="space-y-3">
                {itineraireActuel.map((ville, index) => (
                  <div key={ville} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-red-100 text-red-800 font-bold rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{ville}</div>
                      <div className="text-sm text-gray-600">
                        {obtenirDescriptionVille(ville)}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {obtenirRegionPourVille(ville)}
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
                {obtenirActivitesIncluses(circuit.id).map((activite, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="text-sm">{activite}</span>
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
                    <div className="font-semibold">{circuit.duree}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Départ</div>
                    <div className="font-semibold">{circuit.de}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Arrivée</div>
                    <div className="font-semibold">{circuit.a}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Période idéale</div>
                    <div>{circuit.dates || 'Décembre à Mai'}</div>
                  </div>
                  <div className="col-span-2 pt-3 border-t">
                    <div className="font-medium text-gray-600">Hébergement</div>
                    <div>Hôtels 4-5 étoiles avec petit-déjeuner</div>
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
                {circuit.prixPromo ? (
                  <>
                    <span className="text-gray-500 line-through text-lg mr-2">${circuit.prix.toLocaleString()}</span>
                    <span className="text-red-700">${circuit.prixPromo.toLocaleString()}</span>
                  </>
                ) : (
                  <span>${circuit.prix.toLocaleString()}</span>
                )}
                <sup className="text-sm ml-1 text-gray-500">Ⓘ</sup>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onFermer}
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

// Fonctions d'aide
function obtenirDescriptionVille(ville) {
  const descriptions = {
    'Malabo': 'Capitale sur l\'île de Bioko, architecture coloniale espagnole',
    'Bata': 'Plus grande ville du pays, port important sur le continent',
    'Mongomo': 'Ville natale du président, architecture moderne',
    'Ebebiyín': 'Ville frontalière avec le Gabon et le Cameroun',
    'Luba': 'Deuxième ville de Bioko, port historique',
    'Mbini': 'Port de pêche sur l\'estuaire du Río Muni',
    'Annobón': 'Île volcanique isolée dans l\'Atlantique Sud',
    'Corisco': 'Île paradisiaque aux plages de sable blanc',
    'Ureca': 'Village sur la côte sud de Bioko, réserve naturelle',
  };
  return descriptions[ville] || 'Ville de Guinée Équatoriale';
}

function obtenirRegionPourVille(ville) {
  const regions = {
    'Malabo': 'ÎLE DE BIOKO',
    'Luba': 'ÎLE DE BIOKO',
    'Ureca': 'ÎLE DE BIOKO',
    'Bata': 'RÍO MUNI',
    'Mongomo': 'RÍO MUNI',
    'Ebebiyín': 'RÍO MUNI',
    'Mbini': 'RÍO MUNI',
    'Cogo': 'RÍO MUNI',
    'Annobón': 'ÎLE ANNOBÓN',
    'Corisco': 'ÎLE CORISCO',
  };
  return regions[ville] || 'GUINÉE ÉQUATORIALE';
}

function obtenirActivitesIncluses(idCircuit) {
  const activites = {
    'GQE1': [
      'Visite de Malabo et son centre historique',
      'Excursion à Bata et ses plages',
      'Découverte de Mongomo et son architecture moderne',
      'Rencontres culturelles',
    ],
    'GQE4': [
      'Exploration des îles d\'Annobón et Corisco',
      'Plongée avec tuba dans les eaux cristallines',
      'Observation de la faune marine',
      'Détente sur les plages de sable blanc',
    ],
    'GQE6': [
      'Tour complet de la Guinée Équatoriale',
      'Visite des deux régions principales',
      'Découverte culturelle complète',
      'Expérience urbaine et naturelle',
    ],
  };

  return activites[idCircuit] || [
    'Transport en véhicule climatisé',
    'Guide francophone expert',
    'Hébergement en hôtels 4-5 étoiles',
    'Certains repas inclus',
  ];
}

// Ajout du CSS pour les animations
const styles = `
  @keyframes apparition {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animation-apparition {
    animation: apparition 0.3s ease-out;
  }
`;

export default function Guineeequatorial() {
  const [anneeSelectionnee, setAnneeSelectionnee] = useState('2026');
  const [typeAffichage, setTypeAffichage] = useState('grille');
  const [resultatsParPage, setResultatsParPage] = useState(12);
  const [trierPar, setTrierPar] = useState('duree');
  const [marqueSelectionnee, setMarqueSelectionnee] = useState('globus');
  const [circuitSelectionnePourCarte, setCircuitSelectionnePourCarte] = useState(null);
  
  // États pour gérer l'ouverture/fermeture des sections
  const [departOuvert, setDepartOuvert] = useState(true);
  const [villeOuvert, setVilleOuvert] = useState(false);
  const [prixOuvert, setPrixOuvert] = useState(false);
  const [dureeOuvert, setDureeOuvert] = useState(false);
  const [categorieOuvert, setCategorieOuvert] = useState(false);
  const [promotionOuvert, setPromotionOuvert] = useState(false);

  const circuits = [
    {
      id: 'GQE1',
      nom: 'Découverte des Deux Rives : Malabo et Bata',
      duree: '7 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'DÉCOUVERTE',
      de: 'MALABO',
      a: 'BATA',
      prix: 3299,
      prixPromo: 2999,
      dates: 'DEC-MAI',
      image: imagesCircuitParDefaut['GQE1'],
      lien: '/decouvertedeuxrives'
    },
    {
      id: 'GQE2',
      nom: 'Aventure sur l\'Île de Bioko : Volcans et Plages',
      duree: '6 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'AVENTURE',
      de: 'MALABO',
      a: 'URECA',
      prix: 2899,
      inclutVol: true,
      dates: 'NOV-APR',
      image: imagesCircuitParDefaut['GQE2'],
      lien: '/aventurebioko'
    },
    {
      id: 'GQE3',
      nom: 'Río Muni Authentique : Forêts et Cultures',
      duree: '8 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'CULTURE',
      de: 'BATA',
      a: 'EBEBIYÍN',
      prix: 2799,
      dates: 'JAN-DEC',
      image: imagesCircuitParDefaut['GQE3'],
      lien: '/riomuni'
    },
    {
      id: 'GQE4',
      nom: 'Îles Paradisiaques : Annobón et Corisco',
      duree: '9 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'PLAGE',
      de: 'MALABO',
      a: 'ANNOBÓN',
      prix: 3999,
      inclutVol: true,
      dates: 'DEC-MARS',
      image: imagesCircuitParDefaut['GQE4'],
      lien: '/iles'
    },
    {
      id: 'GQE5',
      nom: 'Nature Sauvage : Parcs Nationaux de Guinée Équatoriale',
      duree: '10 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'NATURE',
      de: 'BATA',
      a: 'COGO',
      prix: 3499,
      dates: 'JUN-SEPT',
      image: imagesCircuitParDefaut['GQE5'],
      lien: '/naturesauvage'
    },
    {
      id: 'GQE6',
      nom: 'Guinée Équatoriale Complète : Îles et Continent',
      duree: '12 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'GRAND TOUR',
      de: 'MALABO',
      a: 'EBEBIYÍN',
      prix: 4599,
      inclutVol: true,
      dates: '',
      image: imagesCircuitParDefaut['GQE6'],
      lien: '/guineeequatorialecomplete'
    },
    {
      id: 'GQE7',
      nom: 'Côte Atlantique : Pêche et Traditions',
      duree: '5 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'CÔTE',
      de: 'BATA',
      a: 'KOGO',
      prix: 2199,
      prixPromo: 1999,
      dates: 'TOUTE L\'ANNÉE',
      image: imagesCircuitParDefaut['GQE7'],
      lien: '/cote'
    },
    {
      id: 'GQE8',
      nom: 'Luxe à Malabo : Hôtels 5 Étoiles et Gastronomie',
      duree: '4 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'LUXE',
      de: 'MALABO',
      a: 'RIABA',
      prix: 1899,
      dates: 'TOUTE L\'ANNÉE',
      image: imagesCircuitParDefaut['GQE8'],
      lien: '/luxemalabo'
    },
    {
      id: 'GQE9',
      nom: 'Affaires et Découverte : Voyage Court',
      duree: '3 Jours, 1 Pays',
      pays: 'Guinée Équatoriale',
      categorie: 'AFFAIRES',
      de: 'MALABO',
      a: 'MONGOMO',
      prix: 1599,
      dates: 'TOUTE L\'ANNÉE',
      image: imagesCircuitParDefaut['GQE9'],
      lien: '/affairesdecouverte'
    }
  ];

  const mois = ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'];

  const gererVoirCarte = (circuit) => {
    setCircuitSelectionnePourCarte(circuit);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{styles}</style>
      
      {/* Section Hero */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroGuineeEquatoriale || 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80'})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">Circuits en Guinée Équatoriale</h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4">La Perle de l'Afrique Centrale</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-5xl">
          La Guinée Équatoriale, seul pays hispanophone d'Afrique, offre une diversité exceptionnelle entre ses îles volcaniques et sa région continentale. De la capitale moderne de Malabo sur l'île de Bioko aux vastes forêts tropicales du Río Muni, en passant par les plages paradisiaques d'Annobón et Corisco, ce pays discret révèle des trésors naturels et culturels uniques. Découvrez l'héritage colonial espagnole, la richesse pétrolière moderne, et l'authenticité des cultures fang et bubi à travers nos circuits soigneusement conçus.
        </p>

        <h3 className="text-3xl font-serif mb-8">Explorez la Diversité Équatoguinéenne avec les Circuits Globus</h3>

        {/* Logos des Marques */}
        <div className="flex gap-0 mb-8 border-b border-gray-300">
          <button 
            onClick={() => setMarqueSelectionnee('globus')}
            className={`border-r border-b-0 border-gray-300 px-8 py-4 transition-colors ${
              marqueSelectionnee === 'globus' ? 'bg-white' : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="text-red-600 font-bold text-2xl tracking-wider">
              GLOBUS<span className="text-xs align-super">®</span>
            </div>
          </button>
          <button 
            onClick={() => setMarqueSelectionnee('cosmos')}
            className={`px-8 py-4 transition-colors ${
              marqueSelectionnee === 'cosmos' ? 'bg-red-600' : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className={`font-light text-2xl tracking-widest ${
              marqueSelectionnee === 'cosmos' ? 'text-white' : 'text-gray-600'
            }`}>
              COSMOS
            </div>
          </button>
        </div>

        {marqueSelectionnee === 'globus' ? (
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
                    value={trierPar}
                    onChange={(e) => setTrierPar(e.target.value)}
                    className="border-b border-gray-400 bg-transparent text-sm py-1 pr-8 focus:outline-none focus:border-gray-600"
                  >
                    <option value="duree">Durée (Courte à Longue)</option>
                    <option value="prix-bas">Prix (Bas à Haut)</option>
                    <option value="prix-haut">Prix (Haut à Bas)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-wider">RÉSULTATS PAR PAGE</span>
                  <select 
                    value={resultatsParPage}
                    onChange={(e) => setResultatsParPage(Number(e.target.value))}
                    className="border-b border-gray-400 bg-transparent text-sm py-1 pr-8 focus:outline-none focus:border-gray-600"
                  >
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setTypeAffichage('grille')}
                    className={`p-2 ${typeAffichage === 'grille' ? 'text-red-700' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setTypeAffichage('liste')}
                    className={`p-2 ${typeAffichage === 'liste' ? 'text-red-700' : 'text-gray-400'}`}
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
                    onClick={() => setDepartOuvert(!departOuvert)}
                  >
                    DATE DE DÉPART
                    <span className="text-xl">{departOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {departOuvert && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser les Dates
                      </button>
                      
                      <div className="flex gap-0 mb-4">
                        <button 
                          onClick={() => setAnneeSelectionnee('2026')}
                          className={`flex-1 py-2 text-center border-2 border-gray-800 font-semibold ${anneeSelectionnee === '2026' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        >
                          2026
                        </button>
                        <button 
                          onClick={() => setAnneeSelectionnee('2027')}
                          className={`flex-1 py-2 text-center border-2 border-l-0 border-gray-800 font-semibold ${anneeSelectionnee === '2027' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        >
                          2027
                        </button>
                      </div>

                      <button className="w-full py-3 bg-gray-800 text-white text-sm font-semibold tracking-wider hover:bg-gray-700 mb-6">
                        SÉLECTIONNER TOUTE L'ANNÉE
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        {mois.map((mois) => (
                          <button
                            key={mois}
                            className="py-2 text-xs font-semibold tracking-wider border border-gray-300 hover:border-gray-800 hover:bg-gray-50"
                          >
                            {mois}
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
                    onClick={() => setVilleOuvert(!villeOuvert)}
                  >
                    VILLE
                    <span className="text-xl">{villeOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {villeOuvert && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Ville
                      </button>
                      
                      <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Malabo</span>
                          </div>
                          <span className="text-sm text-gray-500">6</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Bata</span>
                          </div>
                          <span className="text-sm text-gray-500">5</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Mongomo</span>
                          </div>
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Ebebiyín</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Luba</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Mbini</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Annobón</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Corisco</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Ureca</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Cogo</span>
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
                    onClick={() => setPrixOuvert(!prixOuvert)}
                  >
                    PRIX
                    <span className="text-xl">{prixOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {prixOuvert && (
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
                          <span className="text-sm text-gray-500">3</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">2 000 $ à 2 999 $</span>
                          </div>
                          <span className="text-sm text-gray-500">2</span>
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
                    onClick={() => setDureeOuvert(!dureeOuvert)}
                  >
                    DURÉE DU CIRCUIT
                    <span className="text-xl">{dureeOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {dureeOuvert && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Durée
                      </button>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-center mb-2 text-xs text-gray-600">
                          <span>3 jours</span>
                          <span>12 jours</span>
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
                            <span>Courte durée</span>
                            <span className="mt-1">Longue durée</span>
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
                    onClick={() => setCategorieOuvert(!categorieOuvert)}
                  >
                    CATÉGORIES DE CIRCUITS
                    <span className="text-xl">{categorieOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {categorieOuvert && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
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
                            <span className="text-sm">Aventure</span>
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
                            <span className="text-sm">Nature</span>
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
                            <span className="text-sm">Côte</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Luxe</span>
                          </div>
                          <span className="text-sm text-gray-500">1</span>
                        </label>
                        <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 border-gray-300" />
                            <span className="text-sm">Affaires</span>
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
                    onClick={() => setPromotionOuvert(!promotionOuvert)}
                  >
                    PROMOTIONS
                    <span className="text-xl">{promotionOuvert ? '⌃' : '⌄'}</span>
                  </h4>
                  
                  {promotionOuvert && (
                    <>
                      <button className="text-sm text-gray-600 hover:text-red-700 mb-4 tracking-wide">
                        &gt; Réinitialiser Promotions
                      </button>
                      
                      <div className="space-y-3">
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Découverte de l'Afrique Centrale : Économisez 300 $ par couple sur les circuits 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">4</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Îles Paradisiaques : Économisez 200 $ par couple sur les circuits îles*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">2</span>
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-start cursor-pointer hover:bg-gray-50 p-2">
                          <input type="checkbox" className="w-4 h-4 border-gray-300 mt-1 flex-shrink-0" />
                          <div className="ml-2 flex-1">
                            <div className="flex justify-between items-start">
                              <span className="text-sm leading-snug">Économisez 25 $ supplémentaires par personne sur les circuits 2026*</span>
                              <span className="text-sm text-gray-500 ml-2 flex-shrink-0">5</span>
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
                  {circuits.map((circuit) => (
                    <div key={circuit.id} className="border border-gray-200 bg-white group hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                      {/* Image du Circuit avec lien */}
                      <div className="relative h-48 overflow-hidden">
                        <a href={circuit.lien} className="block h-full">
                          <img 
                            src={circuit.image} 
                            alt={circuit.nom}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80";
                            }}
                          />
                        </a>
                        {circuit.dates && (
                          <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-semibold tracking-wider">
                            {circuit.dates}
                          </div>
                        )}
                        <div className="absolute top-3 left-3 flex items-center gap-2 text-xs text-gray-700">
                          <span>Circuit : <strong>{circuit.id}</strong></span>
                          <button 
                            onClick={() => gererVoirCarte(circuit)}
                            className="text-gray-600 hover:text-gray-900"
                            title="Voir l'itinéraire sur la carte"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => gererVoirCarte(circuit)}
                            className="ml-auto text-xs text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Voir la carte
                          </button>
                        </div>
                      </div>

                      {/* Contenu du Circuit */}
                      <div className="p-4">
                        <h3 className="text-xl font-serif mb-3 min-h-[3.5rem] leading-tight">
                          {circuit.nom}
                        </h3>

                        {/* Sélecteur d'Année */}
                        <select className="w-full border-2 border-gray-800 px-3 py-2 mb-4 text-sm font-semibold rounded">
                          <option>2026</option>
                          <option>2027</option>
                        </select>

                        {/* Itinéraire */}
                        <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                          <span className="font-semibold">{circuit.de}</span>
                          <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                          </svg>
                          <span className="font-semibold">{circuit.a}</span>
                        </div>

                        {/* Durée */}
                        <div className="text-center text-sm mb-2">
                          <div>{circuit.duree}</div>
                          <div className="font-semibold">{circuit.pays}</div>
                        </div>

                        {/* Badge Catégorie */}
                        <div className="flex items-center justify-center gap-2 bg-black text-white py-2 mb-4 rounded">
                          <span className="text-lg font-bold">G</span>
                          <span className="text-xs font-semibold tracking-widest">{circuit.categorie}</span>
                        </div>

                        {/* Prix */}
                        <div className="text-center mb-4">
                          <div className="text-xs text-gray-600 mb-1">
                            À partir de :
                            <br />
                            (USD)
                          </div>
                          {circuit.prixPromo ? (
                            <>
                              <div className="text-sm text-gray-500 line-through">${circuit.prix.toLocaleString()}</div>
                              <div className="text-2xl font-bold text-red-700">
                                ${circuit.prixPromo.toLocaleString()}
                                <sup className="text-sm">Ⓘ</sup>
                              </div>
                            </>
                          ) : (
                            <div className="text-2xl font-bold">
                              ${circuit.prix.toLocaleString()}
                              <sup className="text-sm">Ⓘ</sup>
                            </div>
                          )}
                          {circuit.inclutVol && (
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
                          onClick={() => gererVoirCarte(circuit)}
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
      <ModalCarte 
        circuit={circuitSelectionnePourCarte}
        estOuvert={!!circuitSelectionnePourCarte}
        onFermer={() => setCircuitSelectionnePourCarte(null)}
      />

      {/* Bouton Chat en Direct */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.29-3.88-.8l-.28-.13-2.91.49.49-2.91-.13-.28C4.79 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
        </svg>
        <span className="font-semibold">Chat en Direct</span>
      </button>

      {/* Pied de Page */}
      <PiedDePage />
    </div>
  );
}