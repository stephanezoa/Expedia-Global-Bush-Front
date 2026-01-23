import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award, CheckCircle, Compass, TrendingUp, Shield } from 'lucide-react';
import Footer from "../components/Footer"; // Import du Footer externe

export default function Mission() {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: 'Excellence du Service',
      description: 'Offrir une expérience client exceptionnelle à chaque étape du voyage, avec attention et professionnalisme.'
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: 'Intégrité & Confiance',
      description: 'Construire des relations durables basées sur la transparence, l\'honnêteté et le respect de nos engagements.'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Responsabilité Sociale',
      description: 'Contribuer au développement des communautés locales et préserver le patrimoine culturel africain.'
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Durabilité',
      description: 'Promouvoir un tourisme responsable qui protège l\'environnement et valorise la biodiversité.'
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Innovation',
      description: 'Adopter les meilleures technologies et pratiques pour améliorer continuellement nos services.'
    },
    {
      icon: <Compass className="w-10 h-10 text-blue-600" />,
      title: 'Passion du Voyage',
      description: 'Partager notre amour pour l\'Afrique et créer des souvenirs mémorables pour chaque voyageur.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '50 000+', label: 'Voyageurs satisfaits' },
    { number: '12', label: 'Pays desservis' },
    { number: '24/7', label: 'Support client' }
  ];

  const commitments = [
    'Garantir la sécurité et le confort de tous nos voyageurs',
    'Offrir des tarifs compétitifs sans compromis sur la qualité',
    'Respecter les délais et les engagements pris',
    'Former continuellement notre équipe aux meilleures pratiques',
    'Soutenir l\'économie locale et l\'emploi au Cameroun',
    'Minimiser notre impact environnemental',
    'Promouvoir le patrimoine culturel africain',
    'Innover pour améliorer l\'expérience client'
  ];

  const timeline = [
    { year: '2010', event: 'Fondation de Global Bush Travel à Douala' },
    { year: '2012', event: 'Obtention de l\'accréditation IATA' },
    { year: '2015', event: 'Expansion dans 5 pays d\'Afrique Centrale' },
    { year: '2018', event: 'Lancement de notre plateforme numérique' },
    { year: '2020', event: 'Certification DMC Cameroun' },
    { year: '2024', event: '50 000+ voyageurs servis' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section améliorée */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-28 px-4 overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-8 p-4 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
              <Target className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Notre Mission & Vision
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-semibold mb-6 max-w-5xl mx-auto leading-relaxed">
              Révéler la magie de l'Afrique Centrale à travers des expériences de voyage authentiques et inoubliables
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Depuis 2010, nous connectons les voyageurs du monde entier aux merveilles de l'Afrique, 
              en créant des souvenirs qui durent toute une vie.
            </p>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Mission Statement améliorée */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-50"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Notre <span className="text-blue-600">Mission</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Chez <strong className="text-blue-600">Global Bush Travel</strong>, notre mission est de 
                    <strong className="text-blue-600"> transformer chaque voyage en une aventure exceptionnelle</strong> qui enrichit 
                    la vie de nos clients et soutient les communautés locales.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nous nous engageons à offrir des services de voyage de classe mondiale, 
                    à promouvoir le tourisme durable et à faire découvrir les trésors cachés de l'Afrique Centrale 
                    tout en respectant l'environnement et les cultures locales.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 shadow-xl">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                  <CheckCircle className="w-4 h-4" />
                  Ce qui nous anime
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Objectifs Clés</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Créer des expériences de voyage personnalisées et mémorables",
                  "Promouvoir le patrimoine naturel et culturel de l'Afrique",
                  "Garantir la sécurité et le confort de chaque voyageur",
                  "Contribuer au développement économique local"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="p-1 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision améliorée */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
              <div className="relative z-10">
                <Eye className="w-12 h-12 mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4">Notre Vision 2030</h3>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Devenir le <strong className="text-white">leader incontesté du tourisme en Afrique Centrale</strong>, 
                  reconnu pour l'excellence de nos services, notre engagement envers la durabilité 
                  et notre contribution au développement du continent africain.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <TrendingUp className="w-5 h-5" />, text: "Expansion dans 20 pays africains" },
                    { icon: <Globe className="w-5 h-5" />, text: "100 000+ voyageurs par an" },
                    { icon: <Users className="w-5 h-5" />, text: "500+ emplois créés" }
                  ].map((goal, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 bg-opacity-30 rounded-lg">
                        {goal.icon}
                      </div>
                      <span className="text-blue-100">{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Notre <span className="text-blue-600">Vision</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nous aspirons à <strong className="text-blue-600">redéfinir le tourisme africain</strong> en 
                  offrant des expériences qui transcendent les attentes et révèlent la véritable essence de l'Afrique.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  À travers l'innovation technologique, l'excellence du service et un engagement sans faille 
                  envers la durabilité, nous voulons inspirer une nouvelle génération de voyageurs à découvrir 
                  les merveilles de notre continent.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border-l-4 border-blue-600 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic leading-relaxed">
                        "L'Afrique n'est pas juste une destination, c'est une expérience qui transforme les perspectives 
                        et enrichit les âmes. C'est cette transformation que nous nous engageons à offrir."
                      </p>
                      <p className="mt-3 text-sm text-gray-500 font-semibold">
                        — Équipe de Direction, Global Bush Travel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline améliorée */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              15 ans de passion et d'engagement au service du voyage
            </p>
          </div>

          <div className="relative">
            {/* Ligne de temps */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-100"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className={`p-6 rounded-xl shadow-md border-2 border-blue-100 bg-white ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  
                  {/* Point sur la ligne */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values améliorée */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent notre culture d'entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 hover:scale-[1.02]"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements améliorée */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Chiffres Clés</h2>
            <p className="text-xl text-blue-100">
              Des réalisations qui témoignent de notre engagement et de notre croissance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-100">
                  {achievement.number}
                </div>
                <div className="text-lg text-blue-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments améliorée */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Engagements
            </h2>
            <p className="text-xl text-gray-600">
              Des promesses que nous tenons chaque jour auprès de nos clients et partenaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 group"
              >
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action améliorée */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10">
            <div className="inline-block p-4 bg-white bg-opacity-10 rounded-full backdrop-blur-sm mb-6">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Faites Partie de Notre Mission
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Que vous soyez voyageur, partenaire ou futur collaborateur, 
              ensemble nous pouvons faire de l'Afrique une destination de rêve pour le monde entier.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Users className="w-5 h-5" />
              Devenez Partenaire
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              <Award className="w-5 h-5" />
              Rejoignez l'équipe
            </a>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Ensemble, construisons l'avenir du tourisme africain
          </p>
        </div>
      </section>

      {/* Utilisation du Footer externe */}
      <Footer />
    </div>
  );
}