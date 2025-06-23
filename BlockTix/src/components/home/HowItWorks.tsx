import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Link your MetaMask wallet to access blockchain features and manage your digital assets securely.'
  },
  {
    number: '02',
    title: 'Browse Events',
    description: 'Explore upcoming events and choose from a variety of concerts, sports games, conferences, and more.'
  },
  {
    number: '03',
    title: 'Purchase Tickets',
    description: 'Buy tickets using MATIC tokens on the Polygon network with low gas fees and instant confirmation.'
  },
  {
    number: '04',
    title: 'Attend or Trade',
    description: 'Use your digital ticket to attend the event or resell it on our secure marketplace if plans change.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How BlockTix Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Simple steps to get started with blockchain ticketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step number */}
              <div className="absolute -top-6 -left-6 text-7xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/10 transition-colors duration-300 z-0">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary-100 dark:hover:border-primary-900/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;