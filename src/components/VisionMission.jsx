import React from 'react';
import { vision, mission } from '../assets/index.js';

import LogoHeading from '../../components/logo';


// Inline SVG for Vision Icon (Eye)
const VisionIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.437 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Inline SVG for Mission Icon (Target/Goal)
const MissionIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L20.25 9.75M19.5 7.5L16.5 10.5M12 18V6M12 18V6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

// --- CLIP-PATH DEFINITIONS (Only for the diagonal light purple background) ---
// Clip path for the diagonal background blocks (light purple)
// VISION: Slants to the right (left edge is higher than right edge)
const CLIP_PATH_BG_VISION = 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'; 
// MISSION: Slants to the left (right edge is higher than left edge)
const CLIP_PATH_BG_MISSION = 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)';


const VisionMission = () => {
  // --- VISION SECTION ---
  const renderVision = () => (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      
      {/* Vision Image (Left) - Uses rotation for rounded diamond shape */}
      <div className="w-full md:w-5/12 flex justify-center items-center">
        <div 
          className="relative w-[300px] h-[300px] p-4 bg-[#5400FE] transition duration-500 hover:scale-[1.03] shadow-2xl overflow-hidden shrink-0"
          // Rotate the container 45deg to create the diamond shape
          style={{ transform: 'rotate(45deg)', borderRadius: '40px' }} 
        >
          {/* Inner Image container - rotated back to keep content straight */}
          <div 
            className="overflow-hidden w-full h-full"
            style={{ transform: 'rotate(-45deg)', borderRadius: '30px' }}
          >
            <img 
              src={vision} 
              alt="Vision team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Text and Icon (Right) - Includes the diagonal background */}
      <div className="relative md:w-7/12 flex items-start gap-6 lg:gap-10 p-8 md:p-12 min-h-[300px] z-20">
        
        {/* Absolute Diagonal Background (Light Purple) - Parallelogram shape applied */}
        <div 
          className="absolute inset-0 bg-[#F6F4FF] -z-10 transition duration-500 hover:shadow-xl" 
          style={{ clipPath: CLIP_PATH_BG_VISION }}
        ></div>
        
        {/* Icon Container - Large size maintained */}
        <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-[#5400FE] shadow-xl shrink-0 transition duration-500 hover:scale-110">
          {/* Inner SVG Icon - Large size maintained */}
          <VisionIcon className="w-14 h-14 md:w-16 md:h-16 text-white" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our vision is a world where every student graduates with more than a degree — with meaningful real-world experience. We aim to redefine education by making practical learning and industry connections a core part of every journey.
          </p>
        </div>
      </div>
    </div>
  );

  // --- MISSION SECTION ---
  const renderMission = () => (
    // Reverse order for the Mission section (text on left, image/icon on right)
    <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
      
      {/* Mission Image (Right) - Uses rotation for rounded diamond shape */}
      <div className="w-full md:w-5/12 flex justify-center items-center">
        <div 
          className="relative w-[300px] h-[300px] p-4 bg-[#5400FE] transition duration-500 hover:scale-[1.03] shadow-2xl overflow-hidden shrink-0"
          // Rotate the container 45deg to create the diamond shape
          style={{ transform: 'rotate(45deg)', borderRadius: '40px' }} 
        >
          {/* Inner Image container - rotated back to keep content straight */}
          <div 
            className="overflow-hidden w-full h-full"
            style={{ transform: 'rotate(-45deg)', borderRadius: '30px' }}
          >
            <img 
              src={mission} 
              alt="Mission team celebrating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission Text and Icon (Left) - Includes the diagonal background */}
      <div className="relative md:w-7/12 flex items-start gap-6 lg:gap-10 p-8 md:p-12 min-h-[300px] z-20 md:flex-row-reverse">
        
        {/* Absolute Diagonal Background (Light Purple) - Parallelogram shape applied */}
        <div 
          className="absolute inset-0 bg-[#F6F4FF] -z-10 transition duration-500 hover:shadow-xl" 
          style={{ clipPath: CLIP_PATH_BG_MISSION }}
        ></div>
        
        {/* Icon Container - Large size maintained */}
        <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-[#5400FE] shadow-xl shrink-0 transition duration-500 hover:scale-110">
          {/* Inner SVG Icon - Large size maintained */}
          <MissionIcon className="w-14 h-14 md:w-16 md:h-16 text-white" />
        </div>

        {/* Text Content */}
        <div className="flex-1 md:text-right">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our mission is to be the #1 internship-to-career platform, where students gain hands-on experience, build networks, and unlock career opportunities. By connecting learners with real clients and expert mentors, we turn every project into a step toward success.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-16">
          <LogoHeading mainText="Vision" highlightText="& Mission" />
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Turning Ideas into <span className="text-[#5400FE]">Reality</span>
          </h1>
        </div>

        {/* VISION AND MISSION CONTENT */}
        {renderVision()}

        <hr className="border-gray-200/50" />

        {renderMission()}

      </div>
    </div>
  );
};

export default VisionMission;
