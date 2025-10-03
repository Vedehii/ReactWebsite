import React, { useState, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Image1, Image2, Image3, Image4 } from '../assets';
import LogoHeading from '../../components/logo';
import ServiceBanner from '../../components/ServicesBanner';


const teamMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Founder & CEO',
    bio: 'Edtech innovator with 10+ years bridging academics and industry.',
    image: Image1,
  },
  {
    name: 'Karan Malhotra',
    title: 'Head of Education',
    bio: 'Expert in project-based learning and curriculum design.',
    image: Image2,
  },
  {
    name: 'Aditya Nair',
    title: 'Client Success Manager',
    bio: 'Connects students with real-world projects and industry partners.',
    image: Image3,
  },
  {
    name: 'Priya Sharma',
    title: 'Lead Mentor',
    bio: 'Full-stack developer mentoring students in tech and careers.',
    image: Image4,
  },
  {
    name: 'Neha Singh',
    title: 'Program Director',
    bio: 'Drives operations to deliver exceptional student experience.',
    image: Image3,
  },
];

const OurTeam = () => {
  const scrollRef = useRef(null);

  // Function to scroll the carousel left/right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth / 2; // Scroll by half the visible width

      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Heading Section - Consolidated Content */}
        <div className="text-center mb-12 **flex flex-col items-center**">
          {/* Logo Heading (Assuming this is a smaller heading/logo component) */}
          <LogoHeading mainText="Meet" highlightText=" Our Team" />

          {/* Main Title */}
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Industry experts and educators <span className="text-[#5400FE]"> <br className="hidden md:inline" />  transforming your learning journey.</span>
          </h1>
        </div>
        {/* Arrow Buttons Section */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => scroll('left')}
            className="p-2 mr-2 rounded-full text-white hover:bg-purple-500 bg-purple-300 transition"
            aria-label="Previous"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full text-white hover:bg-purple-500 bg-purple-300 transition"
            aria-label="Next"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Container (The main scrollable area) */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll pb-4 space-x-8 scrollbar-hide"
          // Custom inline styles for smooth scrolling and snap points
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {teamMembers.map((member, index) => (
            // Individual Team Member Card
            <div
              key={index}
              className="flex-shrink-0 w-6 md:w-72 lg:w-80"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex flex-col items-center text-center">

                {/* Image & Hover Overlay */}
                <div className="relative group rounded-full overflow-hidden w-48 h-48 mb-6  shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-grey-800 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300 flex flex-col justify-center items-center">

                    {/* Social Icons (Visible on Hover) */}
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        aria-label="Facebook"
                        className="p-2 bg-white rounded-full text-blue-600"
                      >
                        <FaFacebookF size={18} />
                      </a>
                      <a
                        href="#"
                        aria-label="X (Twitter)"
                        className="p-2 bg-white rounded-full text-gray-800"
                      >
                        <FaTwitter size={18} />
                      </a>
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="p-2 bg-white rounded-full text-pink-600"
                      >
                        <FaInstagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{member.title}</p>
                <p className="text-sm text-gray-500 max-w-xs">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <ServiceBanner />
    </div>

  );
};

export default OurTeam;