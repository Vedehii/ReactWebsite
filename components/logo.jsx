import React from "react";

export default function LogoHeading({ mainText = "About", highlightText = "US" }) {
  return (
    // ADDED: w-fit and mx-auto
    <div className="flex items-center space-x-2 w-fit mx-auto">
      {/* Decorative Shape */}
      <div className="flex items-center">
        {/* Circle */}
        <div className="w-6 h-6 rounded-full bg-blue-700"></div>
        {/* Overlapping ellipses */}
        <div className="w-2 h-6 -ml-1 rounded-full bg-purple-400 opacity-70"></div>
        <div className="w-2 h-6 -ml-1 rounded-full bg-purple-400 opacity-50"></div>
      </div>

      {/* Text */}
      <h2 className="text-xl font-bold">
        {mainText} <span className="text-[#5400FE]">{highlightText}</span>
      </h2>
    </div>
  );
}
