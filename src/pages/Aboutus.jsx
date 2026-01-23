import React from 'react';
import Footer from "../components/Footer"; // Assurez-vous que le chemin est correct

// Importez vos images si elles existent déjà
// import aboutImage from '../assets/image.jpg';
// import teamPhoto from '../assets/team-photo.jpg';

export default function AboutUs() {
  const services = [
    { icon: '✈️', title: "Billets d'avion", color: 'text-red-400' },
    { icon: '🎯', title: 'Tour Packages', color: 'text-red-400' },
    { icon: '⬆️', title: 'Aide aux visas', color: 'text-red-400' },
    { icon: '🎫', title: "Transfert de l'aéroport", color: 'text-red-400' },
    { icon: '🏨', title: "Réservation d'hôtel et hébergement", color: 'text-red-400' },
    { icon: '🚗', title: 'Location de voitures', color: 'text-red-400' },
    { icon: '👶', title: 'Assurance voyage', color: 'text-red-400' },
    { icon: '🎨', title: "Service d'accueil & Réunion", color: 'text-red-400' },
    { icon: '⭐', title: 'Voyage en mer', color: 'text-red-400' },
    { icon: '🏥', title: 'Tourisme médical', color: 'text-red-400' },
    { icon: '✈️', title: 'Services de fret', color: 'text-red-400' },
    { icon: '⭐', title: "Services d'affrètement", color: 'text-red-400' }
  ];

  const values = [
    {
      icon: '👤',
      title: "L'excellence centrée sur le client",
      description: 'Prioritize customer satisfaction by delivering personalized, high-quality services and unforgettable travel experiences.'
    },
    {
      icon: '⭐',
      title: 'Intégrité et confiance',
      description: 'Uphold honesty, transparency, and ethical practices in all interactions with clients, partners, and staff.'
    },
    {
      icon: '⭐',
      title: 'Innovation et adaptabilité',
      description: 'Embrace new technologies and trends to offer creative travel solutions that meet evolving customer needs.'
    },
    {
      icon: '⭐',
      title: 'Durabilité et responsabilité',
      description: 'Promote eco-friendly travel options and support sustainable tourism practices to preserve the beauty and culture of destinations.'
    },
    {
      icon: '⭐',
      title: "Travail d'équipe et collaboration",
      description: 'Foster a supportive and inclusive environment where teamwork drives exceptional results.'
    },
    {
      icon: '🌍',
      title: 'Appréciation culturelle',
      description: 'Celebrate diversity and encourage travelers to explore and respect the cultural richness of different destinations.'
    },
    {
      icon: '⭐',
      title: 'Sécurité et fiabilité',
      description: 'Ensure a safe and seamless travel experience through meticulous planning and dependable services.'
    },
    {
      icon: '⭐',
      title: 'Add Your Heading Text Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec texte introductif */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
        
        </div>
      </section>

      {/* About Section - 2 colonnes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche - Texte */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">
                À propos de l'agence de voyage et de tourisme Global Bush
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bienvenue à l'agence de voyage et de tourisme Global Bush, votre partenaire de 
                confiance pour créer des expériences de voyage inoubliables. Nous nous 
                engageons à transformer vos rêves de voyage en réalité en vous proposant des 
                solutions de voyage personnalisées et sans tracas, adaptées à vos besoins.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-black">Qui sommes-nous ?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                À l'agence de voyage et de tourisme Global Bush, nous sommes passionnés par 
                la découverte du monde et nous aidons les autres à faire de même. Avec une 
                équipe de professionnels du voyage expérimentés, nous combinons notre 
                expertise avec un service à la clientèle exceptionnel pour faire en sorte que 
                chaque voyage soit fluide, agréable et mémorable.
              </p>

              <h3 className="text-2xl font-bold mb-3 text-black">Notre mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Inspirer les gens et leur donner les moyens d'explorer le monde en leur offrant des 
                expériences de voyage uniques, abordables et de grande qualité.
              </p>
            </div>

            {/* Colonne droite - Image Travel The World */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-lg">
                {/* Remplacer le SVG par votre image locale */}
                <img 
                  src="/src/assets/travel-tour.jpg" // Chemin vers votre image
                  alt="Travel The World"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                  onError={(e) => {
                    // Fallback au SVG si l'image n'est pas trouvée
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6'/%3E%3Cstop offset='100%25' style='stop-color:%231e40af'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' fill='url(%23bg)' rx='20'/%3E%3Ccircle cx='300' cy='280' r='150' fill='white' stroke='%23e0e0e0' stroke-width='8'/%3E%3Ctext x='300' y='270' text-anchor='middle' font-size='48' font-weight='bold' fill='%233b82f6'%3ETRAVEL%3C/text%3E%3Ctext x='300' y='300' text-anchor='middle' font-size='24' fill='%23666'%3EThe%3C/text%3E%3Ctext x='300' y='330' text-anchor='middle' font-size='48' font-weight='bold' fill='%233b82f6'%3EWorld%3C/text%3E%3Cpath d='M150 100 Q200 80 250 100' fill='none' stroke='white' stroke-width='2' stroke-dasharray='5,5'/%3E%3Cpath d='M350 100 Q400 80 450 100' fill='none' stroke='white' stroke-width='2' stroke-dasharray='5,5'/%3E%3Ccircle cx='100' cy='150' r='30' fill='%23fbbf24'/%3E%3Cpolygon points='500,120 520,140 500,160 480,140' fill='%23ef4444'/%3E%3Ccircle cx='520' cy='80' r='25' fill='%23f87171'/%3E%3Cpolygon points='80,450 100,480 60,480' fill='%2310b981'/%3E%3Crect x='450' y='450' width='80' height='100' fill='%23ef4444'/%3E%3Crect x='250' y='480' width='60' height='30' fill='%23fb923c'/%3E%3C/svg%3E"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Colonnes - Ce que nous faisons / Pourquoi nous choisir / Explorons ensemble */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Colonne 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-500">Ce que nous faisons</h3>
              <p className="text-gray-700 mb-4">
                Nous sommes spécialisés dans la fourniture de services de voyage complets, y compris :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Réservation de vols et d'hébergements.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Voyages sur mesure pour les particuliers, les familles et les groupes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assistance en matière de visas, d'assurance voyage et de documentation.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Organiser des visites, des transports et des activités locales.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>24/7 support for smooth and stress-free travel.</span>
                </li>
              </ul>
            </div>

            {/* Colonne 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-500">Pourquoi nous choisir ?</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="mb-2">
                    <strong>Service personnalisé :</strong> Nous sommes à l'écoute de vos besoins et créons des itinéraires personnalisés qui correspondent à vos préférences et à votre budget.
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Conseils d'experts :</strong> Grâce à nos années d'expérience, nous nous assurons que vous bénéficiez des meilleures options de voyage et des meilleurs conseils.
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Fiabilité :</strong> Nous vous accompagnons à chaque étape, de la planification à votre retour chez vous.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Prix compétitifs :</strong> Nous offrons des solutions rentables sans compromettre la qualité.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-500">Explorons ensemble !</h3>
              <p className="text-gray-700 leading-relaxed">
                Que vous prévoyiez une escapade relaxante à la plage, une expédition aventureuse ou un voyage 
                d'affaires, l'agence de voyage et de tourisme Global Bush est là pour vous aider à réaliser votre projet. 
                Laissez-nous nous occuper des détails pour que vous puissiez vous concentrer sur le plaisir du voyage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs fondamentales */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Valeurs fondamentales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-5xl mb-4 text-cyan-400">{value.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-black">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rencontrer l'équipe - MAINTENANT AVANT LES SERVICES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Rencontrer l'équipe</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-black">Spécialiste des voyages et propriétaire</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Wainfen Victor est le fondateur visionnaire de Global Bush Travel and Tourism 
                  Agency, une agence de voyage qui se consacre à l'organisation de voyages 
                  inoubliables. Avec une passion pour l'exploration et une profonde compréhension 
                  des diverses cultures, Wainfen Victor a créé une entreprise fondée sur la 
                  conviction que le voyage est plus qu'une destination – c'est une occasion de se 
                  connecter, d'apprendre et de grandir.
                </p>
                <p>
                  Avec 20 ans d'expérience dans l'industrie du voyage et de l'hôtellerie, Wainfen 
                  Victor apporte une richesse de connaissances et d'expertise à chaque voyage 
                  planifié. Leur engagement en faveur de l'excellence garantit que les clients 
                  bénéficient d'une expérience de voyage sans faille, adaptée à leurs besoins et à 
                  leurs rêves.
                </p>
                <p>
                  Wainfen Victor n'est pas seulement un expert en voyages, c'est aussi un citoyen du 
                  monde qui a une connaissance de première main des destinations du monde 
                  entier. Leurs aventures personnelles inspirent la mission de l'agence, qui est de 
                  proposer des options de voyage authentiques et durables, afin d'aider les clients à 
                  explorer le monde tout en ayant un impact positif.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                Sous la direction de Wainfen Victor, l'agence de voyage et de tourisme Global Bush 
                est devenue synonyme de confiance, d'innovation et de service personnalisé, ce 
                qui en fait le partenaire privilégié des aventuriers, des familles et des voyageurs 
                d'affaires.
                </p>
              

                
              </div>
            </div>

            {/* Colonne droite - Photo avec thème bleu clair */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Carte avec thème bleu clair */}
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6">
                    {/* En-tête avec décorations */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-8 h-8 bg-blue-300 rounded-full opacity-30"></div>
                      <div className="text-blue-700 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                        Fondateur
                      </div>
                      <div className="w-8 h-8 bg-blue-300 rounded-full opacity-30"></div>
                    </div>
                    
                    {/* Photo de profil */}
                    <div className="relative mb-6">
                      <div className="w-56 h-56 mx-auto rounded-full border-4 border-blue-100 shadow-lg overflow-hidden">
                        <img 
                          src="/src/assets/boss.jpeg" 
                          alt="Wainfen Victor" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback si l'image n'est pas trouvée
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-blue-200">
                                <span class="text-blue-600 text-5xl font-bold">WV</span>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      {/* Décoration autour de la photo */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xl text-white">⭐</span>
                      </div>
                    </div>
                    
                    {/* Informations */}
                    <div className="text-center">
                      <h4 className="text-blue-800 text-2xl font-bold mb-2">Wainfen Victor</h4>
                      <p className="text-blue-600 text-lg font-medium mb-4">Fondateur & Propriétaire</p>
                      
                      {/* Barre de séparation */}
                      <div className="w-32 h-1 bg-blue-200 mx-auto mb-6 rounded-full"></div>
                      
                      {/* Expérience */}
                      <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                        <div className="flex items-center justify-center gap-3">
                          <div className="text-blue-500 text-2xl">🎯</div>
                          <div>
                            <p className="text-blue-800 font-bold">20+ ans d'expérience</p>
                            <p className="text-blue-600 text-sm">Expert en voyages et tourisme</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Compétences */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Voyages</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Tourisme</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Leadership</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Innovation</span>
                      </div>
                      
                      {/* Citation */}
                      <div className="relative">
                        <div className="text-blue-700 italic text-center p-4 border-l-4 border-blue-300 bg-blue-50 rounded-r-lg">
                          "Le voyage est plus qu'une destination – c'est une occasion de se connecter, d'apprendre et de grandir."
                        </div>
                        <div className="absolute -top-3 right-6 text-4xl text-blue-300">❝</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bas de la carte avec dégradé */}
                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 h-4 rounded-b-2xl border-t border-blue-200"></div>
                </div>
                
                {/* Effets décoratifs */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-30 blur-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - MAINTENANT À LA FIN */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Nos Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`text-5xl mb-4 ${service.color}`}>{service.icon}</div>
                <h3 className="text-sm font-semibold text-black">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer importé */}
      <Footer />
    </div>
  );
}