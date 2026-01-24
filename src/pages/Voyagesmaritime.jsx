// src/pages/VoyagesMaritime.jsx
import React from "react";
import Footer from "../components/Footer";

const VoyagesMaritime = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Voyages Maritimes et Offshore
          </h1>

          <p className="text-gray-700 mb-6">
            Avec nos racines originaires d'Afrique centrale et occidentale et un réseau de partenaires mondiaux, <strong>Global Bush</strong> poursuit sa tradition d'offrir un excellent ensemble d'avantages aux marins du monde entier grâce à un service personnalisé avec une portée mondiale.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Services proposés :</h2>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Conseil en gestion des voyages</strong></li>
            <li><strong>Gestion de la rotation des équipages (CRM)</strong></li>
            <li><strong>Disponibilité des tarifs aériens MULTI GDS</strong></li>
            <li><strong>Accords corporatifs avec les compagnies aériennes</strong></li>
            <li><strong>Rapports des dépenses de voyage (MIS)</strong></li>
            <li><strong>Service de rencontre et d'accueil</strong></li>
            <li><strong>Ligne d'assistance d'urgence</strong></li>
            <li><strong>Règlement des paiements en devises multiples et unique</strong></li>
            <li><strong>Alertes de voyage</strong></li>
            <li><strong>Services VIP</strong></li>
          </ul>

          <p className="text-gray-700 font-semibold">
            Global Bush fournit des solutions sur mesure pour les marins et les professionnels du secteur maritime, garantissant des voyages sans encombre, des rapports clairs et un soutien personnalisé où que se déroulent vos opérations.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VoyagesMaritime;