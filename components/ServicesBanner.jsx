import React from 'react';

// Data structure for the services
const services = [
  { name: 'Software Development' },
  { name: 'Cloud Solutions' },
  { name: 'Cybersecurity' },
];

// Inline SVG for the starburst icon, designed to be simple and crisp.
const StarburstIcon = () => (
  <svg 
    className="w-8 h-8 text-white shrink-0" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4M16 8l-8 8m0-8l8 8" />
  </svg>
);

const ServiceBanner = () => {
  return (
    
    <div className="w-full bg-[#5400FE] py-6 md:py-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-nowrap justify-center items-center text-white space-x-12 w-fit mx-auto">
          
          
          <StarburstIcon />

          {services.map((service, index) => (
            <React.Fragment key={service.name}>
              {/* Service Name */}
              <span className="text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">
                {service.name}
              </span>             
              <StarburstIcon />

              
            </React.Fragment>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;