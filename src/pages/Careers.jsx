import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Globe, Plane, Heart, Award, ChevronRight, Send } from 'lucide-react';
import Footer from "../components/Footer";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null
  });

  const jobOffers = [
    {
      id: 1,
      title: 'Guide Touristique Senior',
      department: 'Operations',
      location: 'Douala, Cameroun',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Accompagnez nos clients dans des expériences inoubliables à travers le Cameroun et l\'Afrique Centrale.',
      requirements: ['Expérience en guidage touristique', 'Maîtrise du français et de l\'anglais', 'Connaissance approfondie de la région', 'Permis de conduire']
    },
    {
      id: 2,
      title: 'Agent de Voyages d\'Affaires',
      department: 'Corporate',
      location: 'Douala, Cameroun',
      type: 'CDI',
      experience: '2-4 ans',
      description: 'Gérez les voyages d\'affaires de nos clients corporate et assurez une expérience sans faille.',
      requirements: ['Expérience en gestion de voyages d\'affaires', 'Excellente organisation', 'Maîtrise des outils de réservation', 'Sens du service client']
    },
    {
      id: 3,
      title: 'Responsable Marketing Digital',
      department: 'Marketing',
      location: 'Douala / Télétravail',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Développez notre présence en ligne et attirez de nouveaux clients grâce à des stratégies digitales innovantes.',
      requirements: ['Expertise en marketing digital', 'SEO/SEA', 'Gestion des réseaux sociaux', 'Analyse de données']
    },
    {
      id: 4,
      title: 'Conseiller(ère) en Voyages',
      department: 'Ventes',
      location: 'Douala, Cameroun',
      type: 'CDI',
      experience: '1-3 ans',
      description: 'Conseillez nos clients et créez des expériences de voyage sur mesure adaptées à leurs besoins.',
      requirements: ['Passion pour le voyage', 'Excellent relationnel', 'Connaissance géographique', 'Esprit commercial']
    },
    {
      id: 5,
      title: 'Chef de Projet Événementiel',
      department: 'Events',
      location: 'Douala, Cameroun',
      type: 'CDD - 12 mois',
      experience: '3+ ans',
      description: 'Organisez et coordonnez des événements d\'entreprise, séminaires et incentives en Afrique.',
      requirements: ['Expérience en gestion d\'événements', 'Capacité de gestion de projet', 'Créativité', 'Gestion de budget']
    },
    {
      id: 6,
      title: 'Stagiaire - Service Client',
      department: 'Support',
      location: 'Douala, Cameroun',
      type: 'Stage',
      experience: 'Débutant',
      description: 'Rejoignez notre équipe support client et apprenez les métiers du tourisme dans un environnement dynamique.',
      requirements: ['Étudiant en tourisme/hôtellerie', 'Bon relationnel', 'Maîtrise du français et de l\'anglais', 'Dynamisme']
    }
  ];

  const benefits = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: 'Voyages à Prix Réduit',
      description: 'Bénéficiez de tarifs préférentiels sur nos destinations'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Équipe Multiculturelle',
      description: 'Travaillez avec des collègues du monde entier'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Formation Continue',
      description: 'Développez vos compétences avec nos programmes de formation'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Assurance Santé',
      description: 'Couverture médicale complète pour vous et votre famille'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Opportunités d\'Évolution',
      description: 'Progressez dans votre carrière au sein du groupe'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Flexibilité',
      description: 'Horaires flexibles et possibilité de télétravail'
    }
  ];

  const departments = [
    { value: 'all', label: 'Tous les départements' },
    { value: 'Operations', label: 'Opérations' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Ventes', label: 'Ventes' },
    { value: 'Events', label: 'Événementiel' },
    { value: 'Support', label: 'Support' }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOffers 
    : jobOffers.filter(job => job.department === selectedDepartment);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationForm(prev => ({ 
      ...prev, 
      [name]: files ? files[0] : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi vers votre backend
    alert('Candidature envoyée avec succès ! Nous vous contacterons bientôt.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      cv: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rejoignez l'Aventure
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Construisez votre carrière avec Global Bush Travel
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Leader du tourisme en Afrique Centrale depuis 2010, nous créons des expériences de voyage exceptionnelles. Rejoignez une équipe passionnée et dynamique !
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Nous Rejoindre ?
            </h2>
            <p className="text-xl text-gray-600">
              Des avantages qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Offres d'Emploi
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Trouvez le poste qui vous correspond
            </p>

            {/* Filter */}
            <div className="max-w-md mx-auto">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                    </div>
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="space-y-2 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type} • {job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Profil recherché :</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#postuler"
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Postuler Maintenant
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="postuler" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Candidature Spontanée
            </h2>
            <p className="text-xl text-gray-600">
              Vous ne trouvez pas le poste idéal ? Envoyez-nous votre CV !
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Poste Visé *
                  </label>
                  <select
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un poste</option>
                    {jobOffers.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Lettre de Motivation
                </label>
                <textarea
                  name="message"
                  value={applicationForm.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Parlez-nous de vous et de votre motivation..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  CV (PDF) *
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf"
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">Taille maximale : 5MB</p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer ma Candidature
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Des Questions sur nos Opportunités ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Notre équipe RH est disponible pour répondre à toutes vos questions
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:rh@globalbushtratour.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              rh@globalbushtratour.com
            </a>
            <a
              href="tel:+237233477000"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              (+237) 233 47 70 00
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}