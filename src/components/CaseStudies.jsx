import React, { useState, useRef } from "react";
import { FeaturedCaseStudy1, FeaturedCaseStudy2 } from "../assets";

const ArrowRight = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-[#5400FE] transition-transform duration-300 group-hover:translate-x-1 ${className}`}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const TagPill = ({ text, bgColor, textColor }) => (
  <div className={`px-4
   py-2 text-sm sm:text-base font-semibold rounded-xl ${bgColor} ${textColor}`}>
    {text}
  </div>
);

const CaseStudyCard = ({ data }) => (
  <div className="bg-white rounded-3xl shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300 flex flex-col overflow-hidden h-full">
    {/* Unified container for image + content */}
    <div className="flex flex-col h-full px-4 sm:px-6 md:px-12 lg:px-12 py-4 sm:py-6">

      <div className="w-full aspect-[16/9] overflow-hidden bg-green-400 rounded-2xl">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/1200x600/f3e8ff/5b21b6?text=Image+Not+Found";
          }}
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-6 flex-grow">{data.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map((tag, index) => (
            <TagPill key={index} text={tag.text} bgColor={tag.bgColor} textColor={tag.textColor} />
          ))}
        </div>
        <div className="mt-auto flex items-center group cursor-pointer">
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const caseStudiesData = [
    {
      imageUrl: FeaturedCaseStudy2,
      title: "Aditi Sharma: From Design Enthusiast to Professional UI/UX Designer",
      description:
        "Built a full-stack app and landed a freelance role. Transformed from design enthusiast to professional UI/UX designer in just 8 weeks through Doet mentorship program.",
      tags: [
        { text: "8 weeks journey", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "12+ skills learned", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "4 projects completed", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
      ],
    },
    {
      imageUrl: FeaturedCaseStudy1,
      title: "How Our Internship Helped Aisha Land a High-Paying UX Role",
      description:
        "From landing her first design internship to securing a full-time position at a Fortune 500 company, discover how the Doet program transformed Aisha's career in just 6 months!",
      tags: [
        { text: "$85K starting salary", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "3 job offers", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "6 months to success", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
      ],
    },
    {
      imageUrl: FeaturedCaseStudy2,
      title: "John's Journey: Scaling a Side Hustle to a Full-Time Business",
      description:
        "Leveraged design principles and full-stack development skills to optimize his e-commerce store, resulting in a 300% revenue increase in the first quarter.",
      tags: [
        { text: "E-commerce success", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "300% growth", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
        { text: "Business scale", bgColor: "bg-[#DCDEF8]", textColor: "text-[#5400FE]" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalCards = caseStudiesData.length;

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const targetCard = carouselRef.current.querySelector(`#card-${index}`);
      if (targetCard) {
        carouselRef.current.scrollTo({
          left: targetCard.offsetLeft,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  const goToPrev = () => scrollToCard(currentIndex === 0 ? totalCards - 1 : currentIndex - 1);
  const goToNext = () => scrollToCard(currentIndex === totalCards - 1 ? 0 : currentIndex + 1);

  return (
    <div className="min-h-screen bg-[#DCDEF8] p-4 sm:p-8 font-['Inter'] overflow-x-hidden">
      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#5400FE]">Featured Case Studies</h1>
        <div className="flex space-x-2">
          <button
            onClick={goToPrev}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#5400FE]/10 transition"
          >
            <ArrowRight className="rotate-180" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#5400FE]/10 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-6 scroll-smooth no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudiesData.map((data, index) => (
            <div
              key={index}
              id={`card-${index}`}
              className="flex-shrink-0 snap-start w-[100%] md:w-[calc(60%-16px)]"
            >
              <CaseStudyCard data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {caseStudiesData.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-blue-800" : "w-3 bg-blue-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
