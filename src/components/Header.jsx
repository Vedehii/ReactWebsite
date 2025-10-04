import React from 'react';
import { aboutimage, aboutimage2 } from '../assets/index.js';
import LogoHeading from '../../components/logo'; 
import ServiceBanner from '../../components/ServicesBanner.jsx';

const Header = () => {
  const bannerImageUrl = aboutimage;
  const contentImageUrl = aboutimage2;

  return (
    <div className="w-full"> 
      <div className="relative w-full h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bannerImageUrl}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            About <span className="text-[#5400FE]">Us</span>
          </h1>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Home / About us
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 flex flex-col items-center">
          <LogoHeading mainText="About" highlightText="US" /> 
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Revolutionizing student learning with <span className="text-[#5400FE]">real projects <br className="hidden md:inline"/> and expert mentorship.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
          <div className="md:w-1/2 flex flex-col items-start">
            <p className="text-xl text-[#555555] leading-relaxed">
              Doet is an innovative agency and learning platform that bridges the gap between traditional education and industry requirements. We believe that the best way to learn is by doing real work that matters.
            </p>
            <p className="text-xl text-[#555555] leading-relaxed">
              Doet is an innovative agency and learning platform that bridges the gap between traditional education and industry requirements. We believe that the best way to learn is by doing real work that matters.
            </p>
            <p className="text-xl text-[#555555] leading-relaxed">
              Founded by industry veterans who experienced firsthand the challenges of transitioning from academia to professional software development, we created Lablancer to provide students with the practical experience they need to succeed.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <img
              src={contentImageUrl}
              alt="Illustration of learning"
              className="max-w-[75%] h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      <ServiceBanner/>
    </div>
  );
};

export default Header;
