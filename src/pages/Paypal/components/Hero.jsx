import React from 'react';
import cardImage3 from '../../../assets/hero-mob.png';
import bgImage from '../../../assets/image.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-5 md:px-20 py-20 md:py-0 h-full md:h-[80vh]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 h-full">
          
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 text-center md:text-left font-popins flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#000051]">
              More Than a Card.
              It’s a Key to Your Digital Wealth
            </h1>

            <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Three cards. Infinite possibilities. Whether you’re spending, earning, or stacking — your money moves smarter with us.
            </p>
            <Link to="/login">
          <button className="bg-gradient-to-r from-purple-500 to-pink-200 text-black font-semibold py-3 px-6 md:px-20 rounded-full flex items-center justify-center w-full md:w-auto transition-all duration-300 hover:shadow-lg md:mt-10 mt-4">
  <span className="mr-2 md:mr-4">Sign Up</span>
  <div className="flex items-center justify-center bg-white rounded-full p-1 w-5 h-5 md:w-6 md:h-6">
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3 h-3 md:w-4 md:h-4"
    >
      <path 
        fillRule="evenodd" 
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
        clipRule="evenodd" 
      />
    </svg>
  </div>
</button>
</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full h-full md:w-1/2 md:h-full justify-end items-center p-4 flex">
            <img
              src={cardImage3}
              alt="Crypto Cards"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes floatY {
          0%   { transform: translate(-50%, 0); }
          25%  { transform: translate(-50%, -20px); }
          50%  { transform: translate(-50%, -10px); }
          75%  { transform: translate(-50%, -20px); }
          100% { transform: translate(-50%, 0); }
        }
        .floating-card {
          animation: floatY 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
