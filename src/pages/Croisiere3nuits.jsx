import React from "react";
import Footer from "../../assets/components/Footer";


export default function Croisiere3nuits() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1600&auto=format&fit=crop)',
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif tracking-wide">
            Croisière 3 Nuits au Cameroun
          </h1>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-4 text-center">
          3 Nights Cruise Experience in Cameroon
        </h2>

        <p className="text-gray-700 text-base leading-relaxed mb-8 text-justify">
          Profitez d’une croisière exceptionnelle de 3 nuits au Cameroun, combinant détente, découverte culturelle et paysages naturels spectaculaires. Cette expérience unique vous permet d’explorer les côtes, les fleuves et les zones naturelles du pays dans un confort total. Idéale pour les couples, familles ou voyageurs d’affaires, cette croisière offre un équilibre parfait entre aventure et repos.
        </p>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Overview</h3>
          <p className="text-gray-700 text-justify">
            La croisière inclut hébergement à bord, restauration complète, excursions guidées, animations culturelles et observation de la nature. Les passagers découvrent des villages riverains, l’artisanat local et la biodiversité du Cameroun tout en profitant d’un service premium.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Programme</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li><strong>Jour 1 :</strong> Accueil, embarquement, cocktail de bienvenue, navigation au coucher du soleil.</li>
            <li><strong>Jour 2 :</strong> Excursion dans un village côtier, découverte culturelle, repas traditionnel.</li>
            <li><strong>Jour 3 :</strong> Observation de la faune, détente, activités nautiques et soirée musicale.</li>
            <li><strong>Jour 4 :</strong> Petit déjeuner, retour et débarquement.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Services inclus</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Cabine confortable climatisée</li>
            <li>Repas complets et boissons</li>
            <li>Guide touristique professionnel</li>
            <li>Excursions et visites culturelles</li>
            <li>Activités nautiques sécurisées</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Pourquoi choisir cette croisière ?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Expérience luxueuse et relaxante</li>
            <li>Découverte culturelle authentique</li>
            <li>Observation de paysages uniques</li>
            <li>Encadrement professionnel</li>
            <li>Adaptée aux voyageurs internationaux</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-serif mb-3">Conclusion</h3>
          <p className="text-gray-700 text-justify">
            Cette croisière de 3 nuits au Cameroun est une invitation à l’évasion. Elle combine nature, culture et confort pour créer un souvenir inoubliable. Une expérience idéale pour découvrir le Cameroun autrement.
          </p>
        </section>
      </div>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}
