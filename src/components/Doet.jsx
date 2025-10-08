import React, { useState } from 'react';
import { DoetImage } from '../assets';
import LogoHeading from '../../components/logo.jsx';
import ServiceBanner from '../../components/ServicesBanner.jsx';

const Doet = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { title: "Job offers", text: "Get hired directly through project performance and partner company placements." },
    { title: "1:1 Mentor Support", text: "Learn from industry mentors who guide you at every step of your journey." },
    { title: "Affordable Subscription", text: "Access professional training, mentorship, and projects at student-friendly pricing." },
    { title: "Hands-On Projects", text: "Gain practical experience by working on real client and team-based projects." },
    { title: "Structured Learning", text: "Follow a clear roadmap designed to take you from beginner to job-ready." },
  ];

  const itemsToShow = 3;
  const maxIndex = cards.length - itemsToShow;
  const cardWidth = 280;
  const gap = 16;

  const handleNext = () => setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setActiveIndex(prev => Math.max(prev - 1, 0));

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center font-inter mt-10">
      <div className="text-center mb-12 flex flex-col items-center">
        <LogoHeading mainText="Meet" highlightText=" Our Team" />
        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          The smarter way to
          <span className="text-[#5400FE]">
            <br className="hidden md:inline" /> learn, build, and succeed.
          </span>
        </h1>
      </div>

      <div className="relative w-full shadow-2xl overflow-hidden mb-16">
        <img src={DoetImage} alt="Carousel Background" className="absolute inset-0 w-full h-full object-cover z-10" />
        <div className="absolute inset-0 bg-gray-300 opacity-70 z-20"></div>

        <div className="relative z-30 flex flex-col items-center mt-10">
          <div className="overflow-visible w-full px-4 sm:px-8">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out items-center"
              style={{
                transform: `translateX(${
                  -(activeIndex * (cardWidth + gap)) + ((itemsToShow - 1) * (cardWidth + gap)) / 2
                }px)`,
              }}
            >
              {cards.map((card, index) => {
                const isCenter = index === activeIndex + Math.floor(itemsToShow / 2);
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[280px] transition-transform duration-500 ease-in-out transform ${isCenter ? 'scale-110 z-20' : 'scale-90 opacity-80 z-10'}`}
                  >
                    <div className="bg-[#F2EAFB] rounded-2xl shadow-xl h-[50vh] flex flex-col justify-center items-center text-center p-6">
                      <h3 className="text-2xl font-semibold text-black mb-3">{card.title}</h3>
                      <p className="text-gray-700 text-lg">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-blue-700 hover:bg-blue-900 text-white rounded-full shadow-lg transition-all duration-300 disabled:opacity-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= maxIndex}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-blue-700 hover:bg-blue-900 text-white rounded-full shadow-lg transition-all duration-300 disabled:opacity-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="mt-8 mb-6 flex justify-center space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-blue-700 rounded-full' : 'w-3 bg-white opacity-50 rounded-full'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <ServiceBanner />
    </div>
  );
};

export default Doet;
