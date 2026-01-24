import React, { useState } from "react";
import { AlertCircle, XCircle, Info } from "lucide-react";
import Footer from "../components/Footer";

const Cancelation = () => {
  const [formData, setFormData] = useState({
    service: "Transfert",
    reference: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande d'annulation :", formData);
    alert("Votre demande d'annulation a été enregistrée ✅");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Policy Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-blue-100">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Politique d'Annulation
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Chez <span className="font-bold text-blue-700">Global Bush Travel</span>, toutes les réservations sont <span className="font-bold">finales</span>. Une fois votre réservation confirmée, <span className="font-bold text-blue-600">les annulations ne sont pas éligibles pour un remboursement</span>.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg mb-3">
                  Nous vous encourageons fortement à examiner attentivement vos plans de voyage avant de confirmer votre réservation. En procédant à votre réservation, vous reconnaissez et acceptez que <span className="font-bold text-red-600">aucun remboursement ne sera émis</span> pour les annulations, les absences ou les modifications effectuées après la finalisation de la réservation.
                </p>
              </div>
            </div>

            <div className="text-center py-8">
              <p className="text-xl font-semibold text-blue-600">
                Merci de votre compréhension.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Request Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Demande d'Annulation
            </h2>
          </div>
          
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Annulez facilement un transfert, une eSIM ou une assurance. 
            Fournissez les informations nécessaires pour traiter votre demande.
          </p>

          <div className="max-w-lg mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                >
                  <option>Transfert</option>
                  <option>eSIM</option>
                  <option>Assurance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Référence / ID du service
                </label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  placeholder="Ex : REF123456"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Soumettre la demande d'annulation
              </button>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Important :</span> Conformément à notre politique d'annulation, veuillez noter que les remboursements ne sont pas disponibles. Cette demande sera traitée selon nos conditions générales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cancelation;