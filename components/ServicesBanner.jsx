import React from 'react';

const services = [
  { name: 'Software Development' },
  { name: 'Cloud Solutions' },
  { name: 'Cybersecurity' },
  
];

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
    <div className="w-full bg-[#5400FE] py-6 md:py-8 overflow-hidden">
      <div className="whitespace-nowrap flex items-center animate-marquee space-x-16 text-white text-lg md:text-xl font-medium tracking-wide">
        <StarburstIcon />
        {services.map((service) => (
          <React.Fragment key={service.name}>
            <span>{service.name}</span>
            <StarburstIcon />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
