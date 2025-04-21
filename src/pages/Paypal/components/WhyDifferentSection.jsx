// import icon1 from '../../../assets/icon1.png';
// import icon2 from '../../../assets/icon2.png';
// import icon3 from '../../../assets/icon3.png';
// import icon4 from '../../../assets/icon4.png';
// import icon5 from '../../../assets/icon5.png';

// const WhyDifferentSection = () => {
//   return (
//     <div className="bg-white w-full flex justify-center items-center px-4 py-32 min-h-[80vh]">
//       <div className="max-w-6xl w-full text-center flex flex-col items-center">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
//           Why We’re Different
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 mb-12 text-lg md:text-xl max-w-2xl">
//           Not just another payment app. A new way to control your wealth.
//         </p>

//         {/* Features Container */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 mb-10 md:mb-16 w-full">

//           {/* Top Row - 3 Features */}
//           <div >
//             <div className="border rounded-2xl py-6 px-10 shadow-sm flex flex-col items-center text-center w-full md:max-w-[260px] 
//                 transition-all duration-300 hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-300">
//               <img src={icon1} alt="Fiat + Crypto" className="w-12 h-12 mb-4" />
//               <h4 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-white">Fiat + Crypto Native:</h4>
//               <p className="text-gray-600 text-sm group-hover:text-white">Use both seamlessly</p>
//             </div>

//           </div>

//           <div>
//             <div className="border rounded-2xl py-6 px-10 shadow-sm flex flex-col items-center text-center w-full md:max-w-[350px] transition-all duration-300 hover:bg-gradient-to-b hover:from-orange-100 hover:to-orange-400">
//               <img src={icon2} alt="Real Ownership" className="w-12 h-12 mb-4" />
//               <h4 className="font-semibold text-lg text-gray-800 mb-1">Real Ownership:</h4>
//               <p className="text-gray-600 text-sm">You hold your keys, we provide the rails</p>
//             </div>
//           </div>

//           <div>
//             <div className="border rounded-2xl py-6 px-10 shadow-sm flex flex-col items-center text-center w-full md:max-w-[260px]transition-all duration-300 hover:bg-gradient-to-b hover:from-red-100 hover:to-red-400">
//               <img src={icon3} alt="Zero Hidden Fees" className="w-12 h-12 mb-4" />
//               <h4 className="font-semibold text-lg text-gray-800 mb-1">Zero Hidden Fees:</h4>
//               <p className="text-gray-600 text-sm">Transparent pricing always</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row - 2 Features */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 w-full">

//           <div className="flex justify-center">
//             <div className="border rounded-2xl py-6 px-10 shadow-sm flex flex-col items-center text-center w-full md:max-w-[280px] transition-all duration-300 hover:bg-gradient-to-b hover:from-green-100 hover:to-green-400">
//               <img src={icon4} alt="Global First" className="w-12 h-12 mb-4" />
//               <h4 className="font-semibold text-lg text-gray-800 mb-1">Global First:</h4>
//               <p className="text-gray-600 text-sm">Multi-currency and borderless</p>
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <div className="border rounded-2xl py-6 px-10 shadow-sm flex flex-col items-center text-center w-full md:max-w-[300px] transition-all duration-300 hover:bg-gradient-to-b  hover:from-[#ffedc5] hover:to-[#fdc649]">
//               <img src={icon5} alt="Reward-Driven" className="w-12 h-12 mb-4" />
//               <h4 className="font-semibold text-lg text-gray-800 mb-1">Reward-Driven:</h4>
//               <p className="text-gray-600 text-sm">Spend smarter, earn automatically</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default WhyDifferentSection;


import icon1 from '../../../assets/icon1.png';
import icon2 from '../../../assets/icon2.png';
import icon3 from '../../../assets/icon3.png';
import icon4 from '../../../assets/icon4.png';
import icon5 from '../../../assets/icon5.png';

const WhyDifferentSection = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl w-full text-center flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-2 md:mb-4">
          Why We're Different
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
          Not just another payment app. A new way to control your wealth.
        </p>

        {/* Features Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-10 w-full">
          {/* Feature 1 */}
          <div className="border rounded-2xl py-5 px-4 sm:px-6 md:px-8 shadow-sm flex flex-col items-center text-center 
              transition-all duration-300 hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-300">
            <img src={icon1} alt="Fiat + Crypto" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Fiat + Crypto Native:</h4>
            <p className="text-xs md:text-sm text-gray-600">Use both seamlessly</p>
          </div>

          {/* Feature 2 */}
          <div className="border rounded-2xl py-5 px-4 sm:px-6 md:px-8 shadow-sm flex flex-col items-center text-center 
              transition-all duration-300 hover:bg-gradient-to-b hover:from-orange-100 hover:to-orange-400">
            <img src={icon2} alt="Real Ownership" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Real Ownership:</h4>
            <p className="text-xs md:text-sm text-gray-600">You hold your keys, we provide the rails</p>
          </div>

          {/* Feature 3 */}
          <div className="border rounded-2xl py-5 px-4 sm:px-6 md:px-8 shadow-sm flex flex-col items-center text-center 
              transition-all duration-300 hover:bg-gradient-to-b hover:from-red-100 hover:to-red-400">
            <img src={icon3} alt="Zero Hidden Fees" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Zero Hidden Fees:</h4>
            <p className="text-xs md:text-sm text-gray-600">Transparent pricing always</p>
          </div>

          {/* Feature 4 */}
          <div className="border rounded-2xl py-5 px-4 sm:px-6 md:px-8 shadow-sm flex flex-col items-center text-center 
              sm:col-span-1 lg:col-start-2 transition-all duration-300 hover:bg-gradient-to-b hover:from-green-100 hover:to-green-400">
            <img src={icon4} alt="Global First" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Global First:</h4>
            <p className="text-xs md:text-sm text-gray-600">Multi-currency and borderless</p>
          </div>

          {/* Feature 5 */}
          <div className="border rounded-2xl py-5 px-4 sm:px-6 md:px-8 shadow-sm flex flex-col items-center text-center 
              sm:col-span-2 lg:col-span-1 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#ffedc5] hover:to-[#fdc649]">
            <img src={icon5} alt="Reward-Driven" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h4 className="font-semibold text-base md:text-lg text-gray-800 mb-1">Reward-Driven:</h4>
            <p className="text-xs md:text-sm text-gray-600">Spend smarter, earn automatically</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferentSection;