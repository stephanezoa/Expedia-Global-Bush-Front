import React from "react";
import Footer from "../../assets/components/Footer";


export default function Croisiereautomne() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop)',
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">
            Croisière d’Automne au Cameroun
          </h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4 text-center">
          Autumn Cruise Experience in Cameroon
        </h2>

        <p className="text-gray-700 text-base leading-relaxed mb-8 text-justify">
          Découvrez la magie de l’automne au Cameroun à travers une croisière unique mêlant paysages naturels, climat agréable et immersion culturelle. Cette saison offre une atmosphère paisible idéale pour la détente et l’exploration. Les couleurs changeantes de la nature et la douceur du climat rendent cette croisière particulièrement spéciale.
        </p>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Overview</h3>
          <p className="text-gray-700 text-justify">
            Cette croisière automnale combine navigation relaxante, excursions guidées et activités culturelles. Vous explorerez des zones côtières, des villages traditionnels et des réserves naturelles tout en profitant d’un service confortable à bord. L’expérience est conçue pour offrir repos, découverte et moments mémorables.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Programme</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li><strong>Jour 1 :</strong> Accueil, installation à bord et dîner panoramique au coucher du soleil.</li>
            <li><strong>Jour 2 :</strong> Visite de villages côtiers, artisanat local et spectacle culturel.</li>
            <li><strong>Jour 3 :</strong> Observation de la nature, détente, promenade guidée et soirée musicale.</li>
            <li><strong>Jour 4 :</strong> Petit déjeuner, navigation finale et retour.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Activités à bord</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Soirées culturelles camerounaises</li>
            <li>Dégustation de spécialités locales</li>
            <li>Yoga et relaxation sur le pont</li>
            <li>Photographie de paysages</li>
            <li>Conférences sur la culture locale</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Avantages de la saison d’automne</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Climat doux et agréable</li>
            <li>Moins d’affluence touristique</li>
            <li>Paysages naturels magnifiques</li>
            <li>Ambiance calme et relaxante</li>
            <li>Conditions idéales pour la navigation</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-serif mb-3">Conclusion</h3>
          <p className="text-gray-700 text-justify">
            La croisière d’automne au Cameroun est une invitation à ralentir, respirer et profiter pleinement de la beauté naturelle du pays. Une expérience élégante et immersive qui convient aux voyageurs en quête de sérénité et de découverte culturelle.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
