import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About us');
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const navItems = [
    'Home',
    'About us',
    'Services',
    'Pricing',
    'Contact',
    'Blog',
    'Careers',
  ];

  const getLinkClasses = (item) => {
    const baseClasses = 'cursor-pointer font-medium text-sm transition-colors duration-200';
    if (item === activeItem) {
      return `${baseClasses} text-indigo-800 bg-indigo-100 rounded-lg px-4 py-1.5 shadow-sm`;
    } else {
      return `${baseClasses} text-gray-700 hover:text-gray-900 px-4 py-1.5 hover:bg-gray-50 rounded-lg`;
    }
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="text-xl font-bold text-indigo-800">MyBrand</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => setActiveItem(item)}
                className={getLinkClasses(item)}
              >
                {item}
              </a>
            ))}
            <button
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#5400FE] hover:bg-[#1f094b] transition-colors duration-200 shadow-md transform hover:scale-[1.01]"
              onClick={() => console.log('Get started clicked')}
            >
              Get started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  setIsOpen(false);
                }}
                className={getLinkClasses(item) + ' block'}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full mt-2 px-4 py-2 text-white bg-[#5400FE] rounded-lg hover:bg-[#1f094b] transition-colors duration-200 shadow-md"
              onClick={() => {
                console.log('Get started clicked');
                setIsOpen(false);
              }}
            >
              Get started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
