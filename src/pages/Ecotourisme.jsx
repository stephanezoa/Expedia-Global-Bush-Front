// src/pages/Ecotourisme.jsx
import React from "react";
import Footer from "../components/Footer";

const Ecotourisme = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Écotourisme au Cameroun
          </h1>

          <p className="text-gray-700 mb-6">
            Que vous appeliez cela voyage vert, éco-voyage ou voyage durable, si vous souhaitez voyager plus léger et de manière plus respectueuse de l'environnement, nous sommes là pour vous.  
            Des projets de conservation et des lodges hors réseau aux safaris tout compris qui soutiennent réellement les communautés locales, en passant par des hôtels boutique et des itinéraires de luxe, notre agence de voyage éco-responsable porte vraiment votre cœur vert sur sa manche.
          </p>

          <h2 className="text-2xl font-semibold mb-3">🌿 Explorez la beauté naturelle du Cameroun avec nos forfaits écotourisme</h2>

          <p className="text-gray-700 mb-6">
            Découvrez la riche biodiversité et les paysages époustouflants du Cameroun grâce à nos forfaits écotourisme soigneusement conçus. Nous nous engageons à offrir des expériences de voyage durables qui vous connectent à la nature tout en préservant l'environnement et en soutenant les communautés locales.
          </p>

          <h2 className="text-2xl font-semibold mb-3">🌟 Ce que comprennent nos forfaits écotourisme :</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Safaris nature :</strong> Visites guidées à travers les magnifiques parcs nationaux et réserves du Cameroun, y compris Waza, Korup et Lobéké.</li>
            <li><strong>Expériences culturelles :</strong> Visitez des villages traditionnels et découvrez les coutumes locales, la cuisine et l’artisanat.</li>
            <li><strong>Rencontres avec la faune :</strong> Observez la faune unique, y compris les gorilles, éléphants et oiseaux exotiques, dans leur habitat naturel.</li>
            <li><strong>Hébergements durables :</strong> Séjournez dans des lodges et camps éco-responsables alliant confort et conservation.</li>
            <li><strong>Randonnées guidées :</strong> Explorez des forêts vierges, montagnes et cascades avec des guides expérimentés.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Pourquoi choisir nos forfaits écotourisme ?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>✔ Favorise le voyage durable et la conservation de l'environnement.</li>
            <li>✔ Soutient les communautés locales grâce au tourisme responsable.</li>
            <li>✔ Expériences adaptées aux voyageurs seuls, familles et groupes.</li>
            <li>✔ Transport fiable et guides professionnels pour une aventure sans souci.</li>
          </ul>

          <p className="text-gray-700 mb-6 font-semibold">
            🌍 Partez pour un voyage éco-responsable à la découverte des merveilles naturelles et culturelles du Cameroun !
          </p>

          <p className="text-gray-700 font-semibold">
            📞 Contactez-nous pour en savoir plus sur nos forfaits écotourisme et planifiez votre aventure inoubliable dès aujourd'hui !
          </p>

          <p className="mt-6 text-center text-green-700 font-bold">
            RENT A DRIVER CAMEROON
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ecotourisme;
