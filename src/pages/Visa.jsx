import React, { useState } from "react";
import Footer from "../components/Footer";

const Visa = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [passportFrom, setPassportFrom] = useState("");
  const [travelTo, setTravelTo] = useState("");

  const countries = [
    { id: 1, name: "États-Unis", rank: 185, color: "bg-blue-600" },
    { id: 2, name: "Canada", rank: 185, color: "bg-blue-600" },
    { id: 3, name: "Royaume-Uni", rank: 187, color: "bg-blue-600" },
    { id: 4, name: "France", rank: 189, color: "bg-blue-600" },
    { id: 5, name: "Allemagne", rank: 190, color: "bg-blue-600" },
    { id: 6, name: "Italie", rank: 189, color: "bg-blue-600" },
    { id: 7, name: "Espagne", rank: 189, color: "bg-blue-600" },
    { id: 8, name: "Japon", rank: 193, color: "bg-blue-600" },
    { id: 9, name: "Australie", rank: 185, color: "bg-blue-600" },
    { id: 10, name: "Brésil", rank: 170, color: "bg-blue-400" },
    { id: 11, name: "Chine", rank: 80, color: "bg-red-500" },
    { id: 12, name: "Inde", rank: 60, color: "bg-red-500" },
    { id: 13, name: "Mexique", rank: 159, color: "bg-blue-400" },
    { id: 14, name: "Émirats Arabes Unis", rank: 179, color: "bg-blue-400" },
  ];

  const getRankColor = (rank) => {
    if (rank >= 180) return "bg-blue-600";
    if (rank >= 150) return "bg-blue-400";
    return "bg-red-500";
  };

  const handleCheckRequirements = () => {
    if (!phoneNumber || !email || !passportFrom || !travelTo) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    alert(`Vérification des exigences de visa de ${passportFrom} vers ${travelTo}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Exigences de Visa d'Entrée par Ambassade de Pays
            <br />
            <span className="text-blue-200">et Classement des Passeports</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-4xl mx-auto">
            Avant de voyager à l'étranger, connaître vos exigences de visa est indispensable. Notre outil permet
            aux voyageurs de vérifier instantanément les règles de visa pour n'importe quelle destination.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">190+</div>
              <div className="text-blue-200">Pays couverts</div>
            </div>
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">5B+</div>
              <div className="text-blue-200">Personnes servies</div>
            </div>
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Mises à jour en temps réel</div>
            </div>
          </div>

          {/* Check Requirements Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Ai-je besoin d'un visa?
              </h2>
              <p className="text-blue-600">Vérifiez si vous avez besoin d'un visa</p>
            </div>
            
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-2 border-b border-blue-100">
                  Informations de Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Numéro de Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="ex., +237 6XX XXX XXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="ex., votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Visa Check Section */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-2 border-b border-blue-100">
                  Vérification des Exigences de Visa
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        J'AI UN PASSEPORT DE
                      </span>
                    </label>
                    <select
                      value={passportFrom}
                      onChange={(e) => setPassportFrom(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white transition-all"
                    >
                      <option value="">Sélectionner le pays</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name} (Classement: {country.rank})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        JE VEUX VOYAGER VERS
                      </span>
                    </label>
                    <select
                      value={travelTo}
                      onChange={(e) => setTravelTo(e.target.value)}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white transition-all"
                    >
                      <option value="">Sélectionner le pays</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name} (Classement: {country.rank})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckRequirements}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Vérifier les exigences de visa
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Découvrez Où Votre Passeport Peut Vous Emmener
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg">
            <p>
              Accédez à des exigences de visa claires et à jour pour chaque pays, ainsi qu'aux classements mondiaux des passeports basés sur l'accès sans visa.
            </p>
            <p>
              Vérifiez facilement quels documents vous avez besoin, si votre passeport nécessite un visa, et tous les pays que vous pouvez visiter sans visa.
            </p>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Carte Mondiale des Classements de Passeports
            </h3>
            <div className="bg-white rounded-xl p-4 shadow-inner">
              <div className="relative">
                <img 
                  src="src/assets/monde.jpg" 
                  alt="Carte mondiale des services de visa"
                  className="w-full rounded-lg border border-blue-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1200px-Equirectangular_projection_SW.jpg";
                  }}
                />
                {/* Overlay Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Légende du Classement</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      <span className="text-sm text-gray-700">Excellent (180+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-400 rounded"></div>
                      <span className="text-sm text-gray-700">Bon (150-179)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-gray-700">Limité (&lt;100)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  À propos du classement des passeports
                </h4>
                <p className="text-gray-700">
                  Le classement est basé sur le nombre de pays que les citoyens peuvent visiter sans visa 
                  ou avec visa à l'arrivée. Un score plus élevé indique une plus grande liberté de voyage.
                  Les données sont mises à jour trimestriellement pour refléter les changements de politique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-3">Support Multilingue</h4>
            <p className="text-gray-600">
              Assistance disponible en français, anglais, et espagnol pour vous guider à travers le processus.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-3">Mises à jour en Temps Réel</h4>
            <p className="text-gray-600">
              Les informations sur les visas sont constamment mises à jour selon les changements de politique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-3">Précision Garantie</h4>
            <p className="text-gray-600">
              Données vérifiées directement auprès des ambassades et consulats officiels.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Visa;