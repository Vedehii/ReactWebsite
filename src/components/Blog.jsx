import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { BlogImage1, BlogImage2, BlogImage3 } from '../assets';
import ServiceBanner from '../../components/ServicesBanner.jsx';
const blogPosts = [
  {
    id: 1,
    date: '15 MAR',
    tag: 'Student Success',
    title: 'How Real Projects Transformed My Programming Skills',
    author: 'Priya Singh',
    readTime: '6 min read',
    image: BlogImage1,
    hover: {
      headline: 'Unlock Your Potential',
      description: "Discover how hands-on experience in real projects can accelerate your programming journey and open doors to new opportunities. Learn from Priya's success story!",
    },
  },
  {
    id: 2,
    date: '15 MAR',
    tag: 'Technical Guide',
    title: 'From Bootcamp to Job: A Success Story',
    author: 'Sumit Jha',
    readTime: '5 min read',
    image: BlogImage2,
    hover: {
      headline: 'Your Career, Reimagined',
      description: "Follow Sumit's inspiring path from a coding bootcamp graduate to a successful professional. Get insights into his learning curve and job search strategies.",
    },
  },
  {
    id: 3,
    date: '15 MAR',
    tag: 'Industry Trends',
    title: 'Mastering Full-Stack: The Future of Web Development',
    author: 'Sneha Gupta',
    readTime: '6 min read',
    image: BlogImage3,
    hover: {
      headline: 'Stay Ahead of the Curve',
      description: 'Explore the evolving landscape of full-stack development and what it takes to thrive in this dynamic field. Sneha shares her expert views on upcoming trends.',
    },
  },
];

const Blog = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#DCDEF8] py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="grid md:grid-cols-2 gap-4 items-start"
            onMouseEnter={() => setHovered(post.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Left Hover Content */}
            <div className="hidden md:block">
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  hovered === post.id || (!hovered && post.id === 1)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex items-center text-purple-700 font-semibold text-lg mb-8">
                  <div className="w-6 h-6 rounded-full bg-blue-700"></div>
                  <div className="w-2 h-6 -ml-1 rounded-full bg-purple-400 opacity-70"></div>
                  <div className="w-2 h-6 -ml-1 rounded-full bg-purple-400 opacity-50"></div>
                  Our Blog
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  {post.hover.headline}
                </h2>
                <p className="text-lg text-gray-600 mt-4">{post.hover.description}</p>
                <button className="mt-8 inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-[#5400FE] text-white shadow-sm hover:bg-[#24026688] transform hover:-translate-y-1 transition-all duration-300">
                  More Blogs <FiArrowRight className="ml-3 h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Blog Card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105 h-48">
              <div className="flex items-center p-4 h-full">
                <div className="flex-grow flex items-center">
                  <div className="relative mr-4">
                    <img
                      className="h-32 w-32 lg:h-32 lg:w-32 rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="absolute top-2 left-2 bg-gray-400 bg-opacity-30 rounded-xl w-10 h-10 flex flex-col items-center justify-center shadow">
                      <span className="text-sm font-bold text-white">{post.date.split(' ')[0]}</span>
                      <span className="text-xs font-medium text-white">{post.date.split(' ')[1]}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium border border-[#5400FE] text-[#5400FE] rounded-full mb-1">
                      {post.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{post.title}</h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>By - {post.author}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <FiArrowRight className="flex-shrink-0 ml-2 text-[#5400FE] transition-transform duration-300 hover:translate-x-1" size={20} />
                </div>
              </div>
            </div>
          </div>
          
        ))}
        
      </div>
      
    </section>
  );
};

export default Blog;

