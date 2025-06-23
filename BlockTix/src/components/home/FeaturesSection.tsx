import React from 'react';
import { Shield, Zap, Banknote, Ticket } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary-600" />,
    title: 'Secure Blockchain Technology',
    description: 'All transactions are recorded on the Polygon blockchain, ensuring transparency and preventing ticket fraud or counterfeiting.'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-600" />,
    title: 'Instant Transfers',
    description: 'Transfer or resell your tickets instantly with our peer-to-peer marketplace, all securely verified by smart contracts.'
  },
  {
    icon: <Banknote className="h-6 w-6 text-primary-600" />,
    title: 'Lower Fees',
    description: 'Cut out middlemen and save on transaction fees. Our platform charges minimal fees compared to traditional ticketing services.'
  },
  {
    icon: <Ticket className="h-6 w-6 text-primary-600" />,
    title: 'Digital Collectibles',
    description: 'Tickets exist as NFTs that can be collected and stored in your digital wallet even after the event is over.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose BlockTix?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our blockchain-powered platform revolutionizes how tickets are bought, sold, and managed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;