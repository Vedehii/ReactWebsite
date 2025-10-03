import React from 'react';
// Replaced external react-icons imports with inline SVG components

// Inline SVG Icons
const FaTwitter = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l156.6-188.7L21 48h140.7l102 129.8zm-29.2 360h33.4L99.6 77.2H66.4l246.6 360z"/>
  </svg>
);
const FaFacebookF = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.47 209.25 245V360h-64v-72h64v-56c0-62.2 37-96.8 93.5-96.8 27.18 0 55.51 4.84 55.51 4.84V196h-30.29c-29.98 0-38.77 18.7-38.77 37.98v52.22h70.7l-11.29 72h-59.41v141c118.44-18.53 209.13-121.22 209.13-245z"/>
  </svg>
);
const FaInstagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M224.1 100.3l-.1-.4C201 56 160.8 32 112 32h-96C5.5 32 0 37.5 0 44V168c0 5.5 5.5 10 12 10H80c5.5 0 10-4.5 10-10V88h86.1c4.5 0 8.7 1.8 11.8 5l54 90.3 3.1 5.3 54-90.3c3.1-3.2 7.3-5 11.8-5H358V168c0 5.5 4.5 10 10 10h68c6.5 0 12-4.5 12-10V44c0-6.5-5.5-12-12-12h-96c-48.8 0-89 24-112.1 68.3zM448 200V468c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V200c0-24.3 19.7-44 44-44H404c24.3 0 44 19.7 44 44zm-96 220H96V256h256v164zM224 400c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z"/>
  </svg>
);


const QuickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Career', href: '#' },
];

const OurServices = [
  { name: 'Custom Software Development', href: '#' },
  { name: 'Cloud Solutions & Migration', href: '#' },
  { name: 'IT Consulting & Strategy', href: '#' },
  { name: 'Cybersecurity & Compliance', href: '#' },
  { name: 'Data Analytics & AI Solutions', href: '#' },
];

const Footer = () => {
  const socialIcons = [
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaFacebookF, href: '#', label: 'Facebook' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    // Main container with dark blue background matching the image
    <footer className="bg-[#1C2833] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Top Section: Four Columns for Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16 border-b border-gray-700/50 pb-10 mb-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Doet</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Connecting students, mentors, and clients to work together on real projects. Build skills, gain experience, deliver impact.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {socialIcons.map(({ Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  className="text-white hover:text-[#5400FE] transition-colors duration-200"
                >
                  {/* Pass w-5 h-5 class down to the SVG component */}
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {QuickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#5400FE] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {OurServices.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-[#5400FE] transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Information</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                131, Mayur Colony,<br />
                Kothrud, Pune,<br />
                Maharashtra 411038
              </p>
              <p className="pt-2">
                +91 9898 911230<br />
                +91 81234 98765
              </p>
              <p className="pt-2">
                <a href="mailto:info@doet.com" className="hover:text-[#5400FE] transition-colors duration-200">
                  info@doet.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section: Copyright */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Doet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
