import React from "react";
import { Shield, AlertCircle, Home, Plane, Car, MessageSquare, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const guarantees = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Hôtels & Hébergements",
      items: [
        "Changement de réservation : Si votre réservation d'hôtel confirmée est modifiée ou indisponible, nous travaillerons en étroite collaboration avec l'établissement pour organiser un hébergement équivalent ou meilleur sans frais supplémentaires.",
        "Pas de chambre à l'arrivée : Si aucune chambre n'est disponible lors de l'enregistrement, contactez-nous immédiatement. Nous coordonnerons des hébergements alternatifs du même standard à proximité et couvrirons les différences de prix jusqu'au coût de votre première nuit de séjour d'origine.",
        "Compensation : Les réclamations vérifiées seront traitées rapidement, veuillez donc conserver toutes les factures et reçus de paiement."
      ],
      color: "from-blue-50 to-indigo-50",
      note: "Veuillez noter que nos conditions générales détaillées de garantie de chambre sont disponibles sur demande."
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Vols & Voyages",
      items: [
        "Garantie de prix & réservation : Nous garantissons le prix de votre vol après confirmation de paiement et vous dédommagerons si des erreurs de notre part causent des problèmes de billet.",
        "Perturbations de vol : Si vous ratez votre vol de notre faute, nous vous soutiendrons avec une compensation, y compris des remboursements ou des billets de remplacement le cas échéant.",
        "Forfaits Vol + Hôtel : L'annulation gratuite des réservations d'hôtel est disponible si vous ne pouvez pas arriver en raison d'annulations ou de retards de vol indépendants de votre volonté.",
        "Réservations de train et location de voiture : Nous nous efforçons de garantir votre réservation et aiderons et dédommagerons là où des défauts de service se produisent."
      ],
      color: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Transferts Aéroport & Excursions",
      items: [
        "Transferts aéroport : Si votre chauffeur arrive en retard ou que votre service ne peut pas être fourni, nous offrons une compensation ou un remboursement complet plus une compensation supplémentaire le cas échéant.",
        "Visites & Attractions : Si vous rencontrez des problèmes avec vos billets réservés de notre faute, vous pouvez acheter des billets d'entrée directement et recevoir un remboursement complet plus une compensation."
      ],
      color: "from-blue-50 to-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Contactez-nous
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Nous sommes là pour vous soutenir 24h/24 et 7j/7
            </h2>
            <p className="text-blue-100 text-center text-lg">
              Chez <span className="font-bold">Global Bush Travel</span>, votre voyage est notre priorité. Que vous ayez besoin d'assistance avant, pendant ou après votre voyage, notre équipe de support client dédiée est disponible en permanence via chat et téléphone pour garantir une expérience de voyage fluide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Services de Réservation & Circonstances Spéciales */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Services de Réservation & Circonstances Spéciales
            </h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Nous comprenons que des situations imprévues se produisent. Si vous devez annuler en raison d'urgences médicales imprévues (comme une maladie, une hospitalisation ou un deuil familial), veuillez soumettre votre demande d'annulation avec les documents justificatifs dans un délai d'une semaine. Notre équipe travaillera avec diligence pour vous aider à négocier la meilleure résolution possible.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  Assistance d'Urgence
                </h3>
                <p className="text-gray-700">
                  Si vous rencontrez des perturbations de voyage—<span className="font-semibold">bagages ou pièce d'identité perdus, maladie, accidents, ou autres urgences</span>—notre <span className="font-bold text-red-600">support d'urgence 24h/24 et 7j/7</span> est prêt à fournir une aide immédiate pour remettre votre voyage sur les rails.
                </p>
              </div>
            </div>
          </div>

          {/* Politique de Compensation Anticipée */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Politique de Compensation Anticipée
              </h2>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Si un problème survient de notre faute, Global Bush Travel s'engage à enquêter rapidement et à fournir une <span className="font-bold text-blue-600">compensation anticipée</span> lorsque cela est approprié, garantissant votre tranquillité d'esprit tout au long de votre voyage.
            </p>

            <div className="space-y-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className={`bg-gradient-to-br ${guarantee.color} rounded-xl p-6 border border-blue-100`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-2 rounded-lg">
                      {guarantee.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {guarantee.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {guarantee.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  {guarantee.note && (
                    <div className="mt-6 pt-4 border-t border-blue-200">
                      <p className="text-sm text-gray-600 italic">{guarantee.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Reach Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Comment nous contacter
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-center mb-10">
              Pour toute question ou assistance, notre équipe de support client dédiée est à un message ou à un appel de vous.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Chat en direct</h3>
                <p className="text-gray-600">Disponible 24h/24 et 7j/7 sur notre site web</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600 text-lg font-semibold">(+237) 677 24 66 24</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@globalbushtratour.com</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <p className="text-gray-700 font-semibold">
                  Votre satisfaction est notre mission. Nous nous engageons à fournir des solutions rapides et efficaces pour que vous puissiez voyager en toute confiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;