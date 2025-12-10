// InfoGlobush.jsx - Version compacte et horizontale
import React from 'react';
import { Globe, Users, Shield, Star, Award, ChevronRight } from 'lucide-react';

const InfoGlobush = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Expérience Mondiale",
      description: "Plus de 50 pays desservis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experts Voyage",
      description: "Équipe de professionnels passionnés"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Assurance Complète",
      description: "Protection voyage incluse"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Service Premium",
      description: "4.9/5 sur Trustpilot"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-tr from-red-100 via-white to-blue-100 py-12 md:py-3">
      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Image */}
              <div className="w-full md:w-2/5">
                <div className="relative group">
                  <img 
                    src="/src/assets/logoApp.jpg" 
                    alt="Équipe Global Bush"
                    className="w-full  object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e40af'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3EGlobal Bush%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    <Award className="w-5 h-5 inline mr-2" />
                    Depuis 2010
                  </div>
                </div>
              </div>
              
              {/* Texte */}
              <div className="w-full md:w-3/5 text-black">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bienvenue chez <span className="text-blue-500">Global Bush</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre partenaire de confiance pour créer des expériences de voyage inoubliables. 
                  Nous transformons vos rêves de voyage en réalité grâce à des solutions personnalisées.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2">
                    Réserver un voyage
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                    Nos services
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 items-center flex justify-center">
              <img src="/src/assets/personvoy2-removebg-preview.png" alt="" className='w-50'/>
            </div>
          </div>
        </div>
{/*         
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm rounded-xl p-4 border border-gray-300 shadow-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">{feature.title}</h4>
                    <p className="text-gray-700 text-xs">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InfoGlobush;