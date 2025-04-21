
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Custom styles for the card rotations that Tailwind doesn't provide
// const cardStyles = {
//   leftCard: {
//     transform: 'rotate(-15deg) translateX(-20px)'
//   },
//   middleCard: {
//     transform: 'rotate(5deg)'
//   },
//   rightCard: {
//     transform: 'rotate(15deg) translateX(20px)'
//   }
// };


export default function HeroSection() {
  return (
    <div className="md:h-[41rem] h-[56rem]  bg-[#FAE1E9] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content Section */}
        <div className="w-full  md:w-1/2 md:pr-8 md:mb-56 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#000000]">
            Your Keys. Your Wallet.<br />Your Rules.
          </h1>
          <p className="text-base md:text-lg text-[#000000] mb-8 max-w-lg">
            Discover a powerful 3-card series that brings the core of Trust Wallet into your hands — real tools for real 
            control in the decentralized world
          </p>
          <Link to="/login">
          <button className="bg-gradient-to-r from-purple-500 to-pink-200 text-black font-semibold py-3 px-6 md:px-20 rounded-full flex items-center justify-center w-full md:w-auto transition-all duration-300 hover:shadow-lg">
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
        {/* Right Cards Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-56">
          <div className="bg-[#FFCDDD]  w-64 h-64 lg:w-[27rem]  md:w-[27rem] md:h-[27rem] rounded-full flex items-center justify-center">
            <div className="relative w-48 h-36 md:w-96 md:h-72 ">
              {/* Card 1 - Left positioned */}
              <img src='/groupImage-removebg-preview.png' alt=''/>
            </div>
          </div>
        </div>
      </div>        
    </div>
  );
}