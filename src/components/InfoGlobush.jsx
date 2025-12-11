import React from 'react';
import { Globe, Users, Shield, Star, Award, ChevronRight } from 'lucide-react';
import logoApp from '../assets/logoApp.jpg';
import personVoy from '../assets/personvoy2-removebg-preview.png';

const InfoGlobush = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-red-100 via-white to-blue-100 py-12 md:py-3">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/5">
                <div className="relative group">
                  <img 
                    src={logoApp} 
                    alt="Équipe Global Bush"
                    className="w-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    <Award className="w-5 h-5 inline mr-2" />
                    Depuis 2010
                  </div>
                </div>
              </div>

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
                  <button className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                    Nos services
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
              <img src={personVoy} alt="Personne voyage" className="w-50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGlobush;
