// function CreditCardScore() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto text-center space-y-12">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
//           Check Your Credit Score Here
//         </h1>

import { Link } from "react-router-dom";

//         <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//           Your credit score plays a major role in your financial life—it affects everything from loan approvals to interest rates 
//           and even rental applications. Knowing your score is the first step toward improving it.
//         </p>

//         <p className="text-xl md:text-2xl text-[#B8E986] font-medium max-w-4xl mx-auto">
//           Check your credit score right here on our platform and take control of your financial future.
//         </p>

//         <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//           Not where you want your score to be? No worries—we&apos;re here to help. Our platform offers tools and guidance to help 
//           boost your credit score and repair any damage that might be holding you back. Whether you&apos;re rebuilding or just 
//           aiming higher, we&apos;ll help you unlock better opportunities with stronger credit.
//         </p>

//         <p className="text-xl md:text-2xl text-[#B8E986] font-medium max-w-4xl mx-auto">
//           Start your credit journey today—check your score and let us help you reach your goals.
//         </p>

//         <div className="pt-8">
//           <button className="px-12 py-4 text-xl font-semibold text-white bg-transparent border-2 border-[#B8E986] rounded-full 
//             hover:bg-[#B8E986] hover:text-purple-900 transition-all duration-300 ease-in-out">
//             Check Now
//           </button>
//         </div>

//         <div className="pt-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
//             We don&lsquo;t just provide digital cards
//           </h2>
//           <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//             We help you build, repair, and improve your credit. By logging in and joining our platform, you&apos;ll gain access to 
//             exclusive credit line solutions that can boost your financial standing and open new opportunities.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreditCardScore;




function CreditCardScore() {
    return (
        <div className="relative min-h-screen">
        {/* GIF Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/WhatsApp Video 2025-04-07 at 14.05.02_b80965b3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
  
        {/* Content */}
        <div className="relative z-20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-12 font-salsa">
            <h1 className="text-[32px] md:text-[48px] font-salsa text-white mb-8">
              Check Your Credit Score Here
            </h1>
  
            <p className="text-lg md:text-[24px] text-white/90 max-w-4xl mx-auto leading-relaxed">
              Your credit score plays a major role in your financial life—it affects everything from loan approvals to interest rates 
              and even rental applications. Knowing your score is the first step toward improving it.
            </p>
  
            <p className="text-xl md:text-2xl text-[#FFFF] font-medium max-w-4xl mx-auto">
              Check your credit score right here on our platform and take control of your financial future.
            </p>
  
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Not where you want your score to be? No worries—we&apos;re here to help. Our platform offers tools and guidance to help 
              boost your credit score and repair any damage that might be holding you back. Whether you&apos;re rebuilding or just 
              aiming higher, we&apos;ll help you unlock better opportunities with stronger credit.
            </p>
            <p className="text-xl md:text-2xl text-[#FFF] font-medium max-w-4xl mx-auto">
              Start your credit journey today—check your score and let us help you reach your goals.
            </p>
            <div className="pt-8">
              <Link to="/check">
              <button className="px-12 py-4 text-xl font-semibold text-white bg-transparent border-2 border-[#B8E986] rounded-full 
                hover:bg-[#B8E986] hover:text-purple-900 transition-all duration-300 ease-in-out">
                Check Now
              </button>
              </Link>
            </div>
  
            <div className="pt-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                We don&apos;t just provide digital cards
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                We help you build, repair, and improve your credit. By logging in and joining our platform, you&apos;ll gain access to 
                exclusive credit line solutions that can boost your financial standing and open new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CreditCardScore;
  