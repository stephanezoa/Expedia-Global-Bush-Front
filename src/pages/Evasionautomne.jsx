import React from "react";
import Footer from "../../assets/components/Footer";


const Evasionautomne = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-serif text-center px-4">
            Évasion d’Automne
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-6 text-center">
          Autumn Escape Travel Package
        </h2>

        <p className="text-gray-700 text-justify mb-8">
          L’évasion d’automne est un séjour spécialement conçu pour les voyageurs qui souhaitent profiter d’un climat doux, de paysages colorés et d’une ambiance paisible après la haute saison touristique. Cette période offre une atmosphère idéale pour explorer la nature, découvrir la culture locale et vivre des expériences authentiques sans la foule. Ce forfait combine détente, découverte et aventure dans un cadre confortable et sécurisé.
        </p>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Aperçu du séjour</h3>
          <p className="text-gray-700 text-justify">
            Ce programme d’évasion d’automne met l’accent sur la découverte culturelle, les excursions naturelles et la relaxation. Les voyageurs bénéficient d’un hébergement de qualité, de repas traditionnels, de visites guidées et de moments libres pour profiter pleinement de la destination. L’automne est une saison parfaite pour admirer les paysages, participer à des festivals locaux et explorer des sites historiques dans une atmosphère calme.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Itinéraire suggéré</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li><strong>Jour 1 :</strong> Arrivée, accueil personnalisé et installation à l’hôtel.</li>
            <li><strong>Jour 2 :</strong> Visite guidée de la ville, marchés locaux et découverte culturelle.</li>
            <li><strong>Jour 3 :</strong> Excursion nature : randonnée légère, paysages d’automne et photographie.</li>
            <li><strong>Jour 4 :</strong> Journée détente : spa, plage ou activités libres.</li>
            <li><strong>Jour 5 :</strong> Excursion gastronomique et immersion dans la cuisine locale.</li>
            <li><strong>Jour 6 :</strong> Visite historique et sites patrimoniaux.</li>
            <li><strong>Jour 7 :</strong> Temps libre et départ.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Points forts</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Paysages naturels aux couleurs d’automne</li>
            <li>Ambiance calme hors saison touristique</li>
            <li>Expériences culturelles authentiques</li>
            <li>Détente et bien-être</li>
            <li>Gastronomie locale</li>
            <li>Visites guidées enrichissantes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Services inclus</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Hébergement confortable</li>
            <li>Transferts aéroport</li>
            <li>Guide professionnel</li>
            <li>Excursions organisées</li>
            <li>Petit-déjeuner quotidien</li>
            <li>Assistance voyage 24h/24</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-serif mb-3">Conclusion</h3>
          <p className="text-gray-700 text-justify">
            L’évasion d’automne est idéale pour les voyageurs en quête de tranquillité, de beauté naturelle et de découverte culturelle. Ce séjour offre un équilibre parfait entre exploration et détente, permettant de vivre une expérience mémorable dans un environnement apaisant et inspirant.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Evasionautomne;
