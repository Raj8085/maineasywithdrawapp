import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function BoostCard() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] w-full p-4 md:p-8 flex items-center justify-center">
      <div 
        className="w-full max-w-7xl mx-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* First design */}
        <div 
          className={`absolute inset-0 p-8 md:p-16 rounded-3xl transition-all duration-700 ease-in-out ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(180deg, rgba(89, 25, 116, 0.9) 0%, rgba(26, 8, 33, 0.9) 100%)',
            zIndex: isHovered ? 1 : 2
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-[27px] lg:text-6xl font-Moul text-white leading-tight tracking-tight">
              Boost, Build & Repair Your Credit With Us
            </h1>
            
            <p className="text-lg md:text-xl font-Poppins text-gray-200 leading-relaxed">
              We don&apos;t just provide digital financial cards—we help you take control of your financial future. When you join us, you&apos;ll gain access to powerful credit line solutions designed to help you build, repair, and improve your credit score.
            </p>

            <div className="pt-4">
                {/* <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white border-2 border-[#FFB800] rounded-full hover:bg-[#FFB800] transition-colors duration-300">
                  Read More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button> */}
              </div>
          </div>
        </div>

        {/* Second design */}
        <div 
          className={`p-0 rounded-3xl transition-all duration-700 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: isHovered ? 2 : 1
          }}
        >
          <div 
            className="relative rounded-3xl overflow-hidden bg-cover bg-center p-12 md:p-16"
            style={{
              backgroundImage: `url('/Frame 19.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            }}
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-Moul lg:text-6xl font-bold text-white leading-tight">
                Boost, Build & Repair Your Credit With Us
              </h1>
              
              <p className="text-lg md:text-xl font-Poppins text-gray-200 leading-relaxed">
                We don&apos;t just provide digital financial cards—we help you take control of your financial future. When you join us, you&apos;ll gain access to powerful credit line solutions designed to help you build, repair, and improve your credit score.
              </p>
              <div className="pt-4">
                <Link to="/login">
                {/* <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white border-2 border-[#FFB800] rounded-full hover:bg-[#FFB800] transition-colors duration-300">
                  Read More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostCard;








// import { ChevronRight } from 'lucide-react';
// import { useState } from 'react';

// function BoostCard() {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] w-full p-4 md:p-8 flex items-center justify-center">
//       {!isHovered ? (
//         // First design (default)
//         <div 
//           className="w-full max-w-7xl mx-auto p-8 md:p-16 rounded-3xl transition-all duration-500"
//           style={{
//             background: 'linear-gradient(180deg, rgba(89, 25, 116, 0.9) 0%, rgba(26, 8, 33, 0.9) 100%)'
//           }}
//           onMouseEnter={() => setIsHovered(true)}
//         >
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
//               Boost, Build & Repair Your Credit With Us
//             </h1>
            
//             <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
//               We don&apos;t just provide digital financial cards—we help you take control of your financial future. When you join us, you&apos;ll gain access to powerful credit line solutions designed to help you build, repair, and improve your credit score.
//             </p>

//             <div className="pt-4">
//                 <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white border-2 border-[#FFB800] rounded-full hover:bg-[#FFB800] transition-colors duration-300">
//                   Read More
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//           </div>
//         </div>
//       ) : (
//         // Second design (hovered)
//         <div 
//           className="w-full max-w-7xl mx-auto transition-all duration-500"
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div 
//             className="relative rounded-3xl overflow-hidden bg-cover bg-center p-12 md:p-16"
//             style={{
//               backgroundImage: `linear-gradient(rgba(26, 11, 46, 0.85), rgba(26, 11, 46, 0.85)), url('/Frame 19.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
//             }}
//           >
//             <div className="max-w-4xl mx-auto text-center space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                 Boost, Build & Repair Your Credit With Us
//               </h1>
              
//               <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
//                 We don&apos;t just provide digital financial cards—we help you take control of your financial future. When you join us, you&apos;ll gain access to powerful credit line solutions designed to help you build, repair, and improve your credit score.
//               </p>

//               <div className="pt-4">
//                 <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white border-2 border-[#FFB800] rounded-full hover:bg-[#FFB800] transition-colors duration-300">
//                   Read More
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BoostCard;