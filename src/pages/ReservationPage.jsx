import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flightData = location.state?.flightData;

  if (!flightData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Aucun vol sélectionné</h1>
          <button 
            onClick={() => navigate('/vols')}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Retour aux vols
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Votre interface de réservation */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Réservation du vol {flightData.from.city} → {flightData.to.city}</h1>
        {/* Formulaire de réservation */}
      </div>
    </div>
  );
};

export default ReservationPage;