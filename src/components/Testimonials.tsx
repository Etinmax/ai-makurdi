"use client"
import React from "react";
import Image from "next/image";

const testimonials = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: `Client ${i + 1}`,
  username: `@client${i + 1}`,
  text: "Incredible team! and This service is just amazing! Highly recommend to everyone.",
  image: "/plc.jpg",
}));

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, 10);
  const secondRow = testimonials.slice(10, 20);

  return (
    <section className=" py-10 px-6">
      <h2 className="text-6xl text-black font-extrabold text-center mb-12">
        What Our Clients Are Saying
      </h2>
      <p className="text-center text-black font-bold mb-8 max-w-2xl mx-auto">
        We are proud to have worked with some of the best clients in the industry.
        Here's what they have to say about us.</p>

      {/* Masonry-like two rows */}
      <div className="space-y-3">
        {/* First row - scroll left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-3">
            {firstRow.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-md p-4 w-72 flex-shrink-0"
              >
                {/* Card header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gray-200 p-1 rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">{t.name}</p>
                    <p className="text-sm text-gray-200">{t.username}</p>
                  </div>
                </div>
                {/* Card body */}
                <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scroll right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right space-x-3">
            {secondRow.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-md p-4 w-72 flex-shrink-0"
              >
                {/* Card header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gray-200 p-1 rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">{t.name}</p>
                    <p className="text-sm text-gray-200">{t.username}</p>
                  </div>
                </div>
                {/* Card body */}
                <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="mt-12 flex justify-center">
  <button className="group bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-black hover:text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center gap-3 font-semibold text-lg max-w-sm">
    <span>Join Our Happy Clients</span>
    
    {/* Icon with border */}
    <div className="p-2 rounded-lg border-2 border-gray-300 group-hover:border-white transition-all duration-300 bg-gray-50 group-hover:bg-white/20">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="20" 
        height="20" 
        className="fill-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"/>
      </svg>
    </div>
  </button>
</div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>
      <hr className="border-0 h-px bg-gray-400 my-12" />

    </section>
  );
};

export default TestimonialsSection;
