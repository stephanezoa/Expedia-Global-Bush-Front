// src/components/Marketplace.jsx
import { 
  ShoppingBag, 
  Gift, 
  Plane, 
  Shield, 
  Users, 
  Sparkles,
  ArrowRight,
  Star,
  Award,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MarketPlace() {
  const { language } = useLanguage();

  const content = {
    FR: {
      title: 'Marketplace. Pour un voyage qui vous ressemble.',
      description: 'Everything you need to personalize your trip. Find services for each part of your journey, all in one place.',
      exploreButton: 'Explore Marketplace',
      referralTitle: 'PARRAINER UN(E) AMI(E)',
      referralDescription: 'Invitez des amis pour recevoir jusqu\'à $500 de crédit',
      referralCta: 'Prendre l\'avion gratuitement',
      guaranteeTitle: 'La nouvelle globalbush.com Guarantee',
      guaranteeDescription: 'Oubliez le stress du voyage',
      services: [
        { name: 'Transferts', icon: ShoppingBag },
        { name: 'Hébergement', icon: ShoppingBag },
        { name: 'Activités', icon: ShoppingBag },
        { name: 'Assurance', icon: Shield },
        { name: 'Bagages', icon: ShoppingBag },
        { name: 'Louage de voiture', icon: ShoppingBag },
      ]
    },
    EN: {
      title: 'Marketplace. For travel that matches you.',
      description: 'Everything you need to personalize your trip. Find services for each part of your journey, all in one place.',
      exploreButton: 'Explore Marketplace',
      referralTitle: 'REFER A FRIEND',
      referralDescription: 'Invite friends to receive up to $500 credit',
      referralCta: 'Fly for free',
      guaranteeTitle: 'The new Kiwi.com Guarantee',
      guaranteeDescription: 'Forget travel stress',
      services: [
        { name: 'Transfers', icon: ShoppingBag },
        { name: 'Accommodation', icon: ShoppingBag },
        { name: 'Activities', icon: ShoppingBag },
        { name: 'Insurance', icon: Shield },
        { name: 'Luggage', icon: ShoppingBag },
        { name: 'Car rental', icon: ShoppingBag },
      ]
    }
  };

  const t = content[language] || content.FR;

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Referral Program */}
          <div className="bg-gradient-to-br shadow-lg from-red-500 to-red-600 backdrop-blur-sm rounded-xl border border-red-500/30 p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-red-300 uppercase tracking-wider mb-1">
                  {t.referralTitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.referralDescription}</h3>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-red-300" />
                <span className="text-white font-bold text-lg">$500</span>
                <span className="text-red-200">de crédit</span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center gap-2">
                <Plane className="w-4 h-4" />
                <span>{t.referralCta}</span>
              </button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-br shadow-lg from-blue-500 to-blue-600 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-300" />
                  <h3 className="text-xl font-bold text-white">{t.guaranteeTitle}</h3>
                </div>
                <p className="text-blue-100">{t.guaranteeDescription}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-blue-200 text-sm">4.9/5 satisfaction</span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}