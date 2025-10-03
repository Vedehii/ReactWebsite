import React from 'react';


const CTABanner = () => {
  // Placeholder image URL
  // NOTE: In a real application, you should use a stable, local image or a CDN link.
  const backgroundImageUrl = '../assets/Group 158.png'; // Replace with your actual image path

  // Inline SVG for the Arrow Right Icon, replacing FiArrowRight
  const ArrowRightIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={3} // Increased stroke width to match the bold look of Fi icons
      stroke="currentColor" 
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Main Container:
        - Very large rounded corners (rounded-3xl or rounded-[3rem])
        - Overflow hidden to keep the image inside the rounded border
      */}
      <div 
        className="relative overflow-hidden rounded-[3rem] shadow-2xl"
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Background Image Container */}
        <div className="relative w-full h-80 sm:h-96 md:h-[400px] lg:h-[450px]">
          {/* Image */}
          <img
            src={backgroundImageUrl}
            alt="Two professionals shaking hands"
            className="w-full h-full object-cover"
            // The image in the example has a subtle purple/blue tint.
            // We use grayscale and opacity here to help the overlay color dominate.
            style={{ filter: 'grayscale(100%)', opacity: 0.8 }} 
          />
          
          {/* Blue/Purple Overlay (The shade you mentioned) */}
          <div className="absolute inset-0 bg-purple-700 opacity-50"></div>
          
          {/* Content Container (Text and Button)
            - This is positioned absolutely on the left half of the banner
          */}
          <div className="absolute inset-0 flex items-center p-8 md:p-16 lg:p-20">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                Lets Build Future Together
              </h1>
              
              {/* Button with arrow icon */}
              <button className="inline-flex items-center justify-center 
                                  px-10 py-4 sm:px-12 sm:py-5 
                                  text-lg font-bold rounded-full 
                                  bg-white text-purple-700 
                                  shadow-xl transition-all duration-300 
                                  hover:bg-gray-100 hover:scale-[1.02]">
                
                Get Started
                
                {/* Small rounded purple circle with arrow */}
                <span className="ml-4 p-2 rounded-full bg-purple-700 text-white">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;