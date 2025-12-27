// src/components/PopularFlights.jsx
import { useState } from 'react';
import { Plane, MapPin, ChevronDown, ChevronUp, ArrowRightLeft
 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Pays1 from '../assets/pays1.jpg';


export default function PopularFlights() {
  const { language } = useLanguage();
  const [showMore, setShowMore] = useState(false);

  const content = {
    FR: {
      title: 'Vols populaires',
      description: 'Découvrez les itinéraires populaires sur globalbush.com.',
      showMore: 'Afficher plus',
      showLess: 'Afficher moins',
      flights: [
        'Paris = Lisbonne',
        'Paris = Porto',
        'Paris = Madrid',
        'Paris = Londres',
        'Paris = Djeddah',
        'Paris = Tunis',
        'Paris = Tel Aviv',
        'Paris = Saint-Denis',
        'Paris = Barcelone',
        'Paris = Rome',
        'Paris = Milan',
        'Paris = Marrakech',
        'Paris = Bruxelles',
        'Paris = Amsterdam',
        'Paris = Berlin',
        'Paris = Genève'
      ]
    },
    EN: {
      title: 'Popular flights',
      description: 'Discover popular itineraries on globalbush.com.',
      showMore: 'Show more',
      showLess: 'Show less',
      flights: [
        'Paris = Lisbon',
        'Paris = Porto',
        'Paris = Madrid',
        'Paris = London',
        'Paris = Jeddah',
        'Paris = Tunis',
        'Paris = Tel Aviv',
        'Paris = Saint-Denis',
        'Paris = Barcelona',
        'Paris = Rome',
        'Paris = Milan',
        'Paris = Marrakesh',
        'Paris = Brussels',
        'Paris = Amsterdam',
        'Paris = Berlin',
        'Paris = Geneva'
      ]
    }
  };

  const t = content[language] || content.FR;
  const visibleFlights = showMore ? t.flights : t.flights.slice(0, 12);

  return (
    <div className="p-6 flex items-center flex-col ">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
            <p className="text-gray-600 text-sm">{t.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {visibleFlights.map((flight, index) => {
            const [from, to] = flight.split(' = ');
            
            return (
              <div 
                key={index}
                className="grid grid-cols-3  h-18 items-center bg-gradient-to-r hover:shadow-lg border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md group"
              >
                {/* Icône de destination à gauche */}
                <div className="flex-shrink-0 bg-gradient-to-br from-red-500 to-red-600 h-full overflow-hidden rounded-l-lg flex items-center justify-center mr-4 col-span-1">
                  <img src={Pays1} alt="" className='bg-cover object-contain '/>
                </div>
                
                {/* Lieux à droite */}
                <div className="col-span-2">
                  <div className="flex items-center justify-start gap-2 px-2">
                      <div className="text-gray-700 font-medium group-hover:text-blue-800 transition-colors">
                        {from}
                      </div>
                      <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                        <ArrowRightLeft className="w-4 h-4" />
                      </div>
                      <div className="text-gray-900 font-bold text-lg group-hover:text-blue-900 transition-colors">
                        {to}
                      </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className=" py-3 px-4 bg-gradient-to-r bg-gray-200 text-gray-800 font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <span>{showMore ? t.showLess : t.showMore}</span>
        {showMore ? (
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        ) : (
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        )}
      </button>
    </div>
  );
}