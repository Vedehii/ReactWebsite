import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About us');
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
    <header className="bg-white shadow-md w-full">
      <nav className="w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 md:justify-between items-center">
          {/* Left/Center Menu Links */}
          <div className="flex space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => setActiveItem(item)}
                className={getLinkClasses(item)}
              >
                {item}
              </a>
            ))}
          </div>
          {/* Right-aligned CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="inline-flex items-center justify-center 
              px-4 py-2 border border-transparent text-sm font-medium rounded-lg 
              text-white bg-[#5400FE] hover:bg-[#1f094b] transition-colors 
              duration-200 shadow-md transform hover:scale-[1.01]"
              onClick={() => console.log('Get started clicked')}
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;