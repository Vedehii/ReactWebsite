import { TrendingUp, Users, Shield, Lightbulb } from '../assets/icon.js';
import LogoHeading from '../../components/logo.jsx';
import ServiceBanner from '../../components/ServicesBanner.jsx';

const coreValues = [
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We believe in continuous learning and improvement, always pushing boundaries to achieve more."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Success comes from working together, sharing knowledge, and supporting each other's journey."
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We build trust through honest communication, clear expectations, and open feedback."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas, technologies, and approaches to create better learning experiences."
  }
];

const CoreValues = () => {
  return (
    <section className="w-full">
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-0">
        <div className="text-center mb-12 flex flex-col items-center">
          <LogoHeading mainText="Core" highlightText="Values" />
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The foundation of <span className="text-[#5400FE]"><br className="hidden md:inline" />everything we do. </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-2">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="p-8 rounded-xl bg-[#F2EAFB] flex flex-col items-center text-center shadow-lg transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-5 flex justify-center">
                <img
                  src={value.icon}
                  alt={value.title + " icon"}
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-[#555555] text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ServiceBanner />
    </section>
  );
};

export default CoreValues;
