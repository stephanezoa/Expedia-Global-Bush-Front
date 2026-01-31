import React from "react";
import Footer from "../../assets/components/Footer";


const Egyptejordaniecombine = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1508261303041-1f6f3bb4db35?w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-serif tracking-wide text-center px-4">
            Égypte & Jordanie Combiné
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-6 text-center">
          Egypt & Jordan Combined Tour
        </h2>

        <p className="text-gray-700 text-justify mb-8">
          Ce circuit combiné Égypte & Jordanie est une expérience unique reliant deux des plus grandes civilisations de l’histoire. Ce voyage vous emmène à travers les temples majestueux de l’Égypte antique, les merveilles archéologiques de Pétra, les paysages désertiques du Wadi Rum et les eaux relaxantes de la mer Rouge et de la mer Morte. C’est un mélange parfait de culture, aventure et détente.
        </p>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Overview</h3>
          <p className="text-gray-700 text-justify">
            Le programme combine croisière, visites guidées, exploration historique et découverte naturelle. Vous visiterez des sites classés au patrimoine mondial, découvrirez les traditions locales et profiterez d’un hébergement confortable. Chaque étape du voyage est pensée pour offrir un équilibre entre exploration et repos.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Itinéraire détaillé</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li><strong>Jour 1 :</strong> Arrivée en Égypte, accueil et transfert à l’hôtel.</li>
            <li><strong>Jour 2 :</strong> Visite des pyramides de Gizeh, Sphinx et musée du Caire.</li>
            <li><strong>Jour 3 :</strong> Vol vers Louxor, visite des temples et embarquement en croisière.</li>
            <li><strong>Jour 4 :</strong> Vallée des Rois, temple d’Hatchepsout, navigation sur le Nil.</li>
            <li><strong>Jour 5 :</strong> Temple de Kom Ombo et d’Edfou.</li>
            <li><strong>Jour 6 :</strong> Arrivée à Assouan, excursion et détente.</li>
            <li><strong>Jour 7 :</strong> Vol vers la Jordanie, installation à Amman.</li>
            <li><strong>Jour 8 :</strong> Visite de Pétra, cité nabatéenne.</li>
            <li><strong>Jour 9 :</strong> Désert du Wadi Rum en jeep 4x4.</li>
            <li><strong>Jour 10 :</strong> Détente à la mer Morte.</li>
            <li><strong>Jour 11 :</strong> Retour et fin du séjour.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Points forts</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Pyramides de Gizeh et temples antiques</li>
            <li>Croisière sur le Nil</li>
            <li>Découverte de Pétra</li>
            <li>Safari désert Wadi Rum</li>
            <li>Détente mer Morte</li>
            <li>Rencontre culturelle</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-3xl font-serif mb-3">Services inclus</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Hébergement hôtels & croisière</li>
            <li>Pension complète durant la croisière</li>
            <li>Guides professionnels</li>
            <li>Transferts aéroport</li>
            <li>Excursions et entrées des sites</li>
            <li>Assistance 24h/24</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-serif mb-3">Conclusion</h3>
          <p className="text-gray-700 text-justify">
            Le combiné Égypte & Jordanie est un voyage exceptionnel pour les passionnés d’histoire, de paysages spectaculaires et de cultures anciennes. Il offre une immersion totale dans deux civilisations mythiques tout en garantissant confort et aventure.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Egyptejordaniecombine;
