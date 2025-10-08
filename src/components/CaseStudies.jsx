import React, { useState, useRef } from 'react';
import { FeaturedCaseStudy1, FeaturedCaseStudy2 } from '../assets';

// Inline SVG for the Arrow Right icon (mimicking lucide-react)
const ArrowRight = ({ className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-purple-600 transition-transform duration-300 group-hover:translate-x-1 ${className}`}>
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
);

// Component for the pill-shaped tags
const TagPill = ({ text, bgColor, textColor }) => (
    <div className={`px-3 py-1 text-sm font-semibold rounded-full ${bgColor} ${textColor} whitespace-nowrap`}>
        {text}
    </div>
);

// Main Case Study Card Component
const CaseStudyCard = ({ data }) => {
    return (
        // The outer container defines the overall rounding and shadow
        <div className="bg-white rounded-xl shadow-2xl transition-all duration-300 hover:shadow-purple-400/50 flex flex-col h-full transform translate-x-0">
            
            {/* Image Section - This div now has padding (p-6) around the image */}
            <div className="p-4 sm:p-6"> 
                <img
                    src={data.imageUrl}
                    alt={data.title}
                    // The image now has rounding applied to all corners
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03] aspect-[2/1] rounded-xl" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/1200x600/f3e8ff/5b21b6?text=Image+Not+Found";
                    }}
                />
            </div>

            {/* Content Section - This section gets the padding to separate it from the edges */}
            {/* NOTE: Padding here starts from the left/right edges of the card, but NOT the top edge,
                       as the padding around the image handles the space above the text. */}
            <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {data.title}
                </h2>
                <p className="text-gray-600 text-base mb-6 flex-grow">
                    {data.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {data.tags.map((tag, index) => (
                        <TagPill
                            key={index}
                            text={tag.text}
                            bgColor={tag.bgColor}
                            textColor={tag.textColor}
                        />
                    ))}
                </div>
                <div className="mt-auto flex justify-start items-center group cursor-pointer">
                    <ArrowRight />
                </div>
            </div>
        </div>
    );
};

// Main App Component
export default function App() {
    // --- Data and State Setup ---
    const aditiSharmaData = {
        imageUrl: "https://placehold.co/1200x600/6A5ACD/ffffff?text=Aditi+Sharma",
        title: "Aditi Sharma: From Design Enthusiast to Professional UI/UX Designer",
        description: "Built a full-stack app and landed a freelance role. Transformed from design enthusiast to professional UI/UX designer in just 8 weeks through Doet mentorship program. This is an incredible story of career change!",
        tags: [
            { text: "8 weeks journey", bgColor: "bg-purple-100", textColor: "text-purple-700" },
            { text: "12+ skills learned", bgColor: "bg-teal-100", textColor: "text-teal-700" },
            { text: "4 projects completed", bgColor: "bg-indigo-100", textColor: "text-indigo-700" },
        ],
    };

    const aishaData = {
        imageUrl:{ FeaturedCaseStudy1},
        title: "How Our Internship Helped Aisha Land a High-Paying UX Role",
        description: "From landing her first design internship to securing a full-time position at a Fortune 500 company, discover how the Doet program transformed Aisha's career in just 6 months!",
        tags: [
            { text: "$85K starting salary", bgColor: "bg-blue-100", textColor: "text-blue-700" },
            { text: "3 job offers", bgColor: "bg-green-100", textColor: "text-green-700" },
            { text: "6 months to success", bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
        ],
    };
    
    // Added a third card for demonstration
    const thirdCard = {
        imageUrl:{FeaturedCaseStudy2},
        title: "John's Journey: Scaling a Side Hustle to a Full-Time Business",
        description: "Leveraged design principles and full-stack development skills from the program to optimize his e-commerce store, resulting in a 300% revenue increase in the first quarter.",
        tags: [
            { text: "E-commerce success", bgColor: "bg-red-100", textColor: "text-red-700" },
            { text: "300% growth", bgColor: "bg-fuchsia-100", textColor: "text-fuchsia-700" },
            { text: "Business scale", bgColor: "bg-lime-100", textColor: "text-lime-700" },
        ],
    };

    const caseStudiesData = [aditiSharmaData, aishaData, thirdCard];
    
    // State to track the currently focused card (for pagination)
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = caseStudiesData.length;
    
    // Ref to target the scrolling container
    const carouselRef = useRef(null);

    // --- Navigation Functions ---
    const scrollToCard = (index) => {
        if (carouselRef.current) {
            // Find the target card element
            const targetCard = carouselRef.current.querySelector(`#card-${index}`);
            if (targetCard) {
                // Use scrollIntoView for reliable scrolling to the start of the element
                targetCard.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
                setCurrentIndex(index);
            }
        }
    };

    const goToPrev = () => {
        const newIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
        scrollToCard(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
        scrollToCard(newIndex);
    };

    // --- Component Render ---
    return (
        <div className="min-h-screen bg-indigo-50 p-4 sm:p-8 font-['Inter']">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center p-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-700">
                    Featured Case Studies
                </h1>
                <div className="flex space-x-2">
                    {/* Previous Button */}
                    <button 
                        onClick={goToPrev}
                        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-purple-600 hover:bg-gray-50 transition"
                        aria-label="Previous Case Study"
                    >
                        <ArrowRight className="transform rotate-180"/>
                    </button>
                    {/* Next Button */}
                    <button 
                        onClick={goToNext}
                        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-purple-600 hover:bg-gray-50 transition"
                        aria-label="Next Case Study"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="max-w-6xl mx-auto w-full">
                <div 
                    ref={carouselRef} 
                    // Flex container with scroll and snap-scrolling enabled
                    className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4 md:pb-6 scroll-smooth" 
                    // Hide the default scrollbar visually
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                >
                    {caseStudiesData.map((data, index) => (
                        <div 
                            key={index} 
                            id={`card-${index}`} // Unique ID for scrollIntoView
                            // IMPORTANT: Set card width to show one full and one partial card
                            // w-[95%] on small screens, w-[calc(50%-12px)] on medium/large screens (50% minus half the space-x-6 gap)
                            className="flex-shrink-0 snap-start w-[95%] md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]" 
                        >
                            <CaseStudyCard data={data} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamic Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
                {caseStudiesData.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${
                            index === currentIndex ? 'w-8 bg-purple-700' : 'w-3 bg-purple-300'
                        }`}
                        onClick={() => scrollToCard(index)} // Use scrollToCard
                        aria-label={`Go to slide ${index + 1}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
