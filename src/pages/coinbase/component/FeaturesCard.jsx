// import { useEffect, useState } from "react"

export default function FeatureCards() {
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  // // Prevent hydration mismatch
  
  // if (!isMounted) {
  //   return null
  // }

  // // Base ellipse style with responsive widths applied in the component
  // const getEllipseStyle = (width) => ({
  //   width: width,
  //   height: "70px",
  //   borderRadius: "50%",
  //   background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
  //   boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
  // })

  return (
    <div className="container md:mt-32 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <section className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Introducing the Base Card Collection
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
            Your Wallet, Upgraded. Your Crypto, in Motion
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2 sm:px-4">
            Three unique cards, one powerful network. The Base Card Collection gives you real-world spending power
            directly from your on-chain wallet. Shop, earn, and grow with every transaction.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div 
            className="relative rounded-3xl bg-[#FBF8FF] p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            style={{borderColor: "#C0FAC2"}}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 inline-block bg-gradient-to-b from-[#B569EF] to-[#0F001A] bg-clip-text text-transparent">
              BASE LITE
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Simple. Smart. For everyday starters</p>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 font-normal">
              New users, casual spenders, and anyone looking to dip into crypto with confidence.
            </p>
            <div className="space-y-1 mb-16 sm:mb-20 w-full">
              <p className="font-medium text-sm sm:text-base">1.5% back in USDC or ETH</p>
              <p className="font-medium text-sm sm:text-base">No annual fee</p>
              <p className="font-medium text-sm sm:text-base">Easy wallet connection via Coinbase</p>
              <p className="font-medium text-sm sm:text-base">Clean, beginner-friendly interface</p>
            </div>
            <div className="absolute bottom-0 right-0 w-[80px] h-[45px] sm:w-[100px] sm:h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
              <img src="/Vector (2).svg" alt="Vector" className="w-6 h-6 mt-3 ml-8 sm:w-8 sm:h-8 sm:mt-4 sm:ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#F2FFF2] p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">
              BASE EDGE
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Flexible, Fast, Built for daily crypto earners</p>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 font-normal">
              Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
            </p>
            <div className="space-y-1 mb-16 sm:mb-20 w-full">
              <p className="font-medium text-sm sm:text-base">2.5% back in crypto</p>
              <p className="font-medium text-sm sm:text-base">Apple Pay & Google Pay enabled</p>
              <p className="font-medium text-sm sm:text-base">Auto top-up from your Base wallet</p>
              <p className="font-medium text-sm sm:text-base">Real-time spend tracking</p>
            </div>
            <div className="absolute bottom-0 right-0 w-[80px] h-[45px] sm:w-[100px] sm:h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
              <img src="/Vector.svg" alt="Vector" className="w-6 h-6 mt-3 ml-8 sm:w-8 sm:h-8 sm:mt-4 sm:ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#FFFCF5] p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-md lg:max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 inline-block bg-gradient-to-b from-[#F5BD33] to-[#6E5004] bg-clip-text text-transparent">
              BASE X
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Elite, Exclusive, Designed for Web3</p>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 font-normal">
              Advanced users, crypto-native professionals, and high-volume spenders looking for maximum value.
            </p>
            <div className="space-y-1 mb-16 sm:mb-20 w-full">
              <p className="font-medium text-sm sm:text-base">5% crypto rewards on every spend</p>
              <p className="font-medium text-sm sm:text-base">NFT & Web3 unlocks</p>
              <p className="font-medium text-sm sm:text-base">VIP support + global lounge access</p>
              <p className="font-medium text-sm sm:text-base">Metal card with smart-chip security</p>
            </div>
            <div className="absolute bottom-0 right-0 w-[80px] h-[45px] sm:w-[100px] sm:h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
              <img src="/Vector (1).svg" alt="Vector" className="w-6 h-6 mt-3 ml-8 sm:w-8 sm:h-8 sm:mt-4 sm:ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
            </div>
          </div>
        </div>
      </div>  
  )
}






// // import { useEffect, useState } from "react"
// // import { Zap, Flame, Globe, Wallet } from "lucide-react"

// // export default function FeatureCards() {
// //   const [isMounted, setIsMounted] = useState(false)

// //   useEffect(() => {
// //     setIsMounted(true)
// //   }, [])

// //   // Prevent hydration mismatch
// //   if (!isMounted) {
// //     return null
// //   }

// //   // CSS for wider elliptical shape
// //   const ellipseStyle = {
// //     width: "400px",
// //     height: "70px",
// //     borderRadius: "50%",
// //     background: "linear-gradient(to bottom, var(--from-color), var(--to-color))"
// //   }

// //   return (
// //     <div className="w-full max-w-7xl mx-auto px-4 py-16">
// //       <div className="relative">
// //         {/* First row */}
// //         <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-0">
// //           {/* First card */}
// //           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
// //             <div className="relative">
// //               <div className="bg-yellow-400 p-2 rounded-md z-10 relative">
// //                 <Zap className="w-8 h-8 text-black" />
// //               </div>
// //               <div className="absolute -bottom-4 -left-4 -right-4 h-4  rounded-full blur-md z-0"></div>
// //             </div>
// //             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
// //               {/* Wider elliptical background with gradient */}
// //               <div className="absolute inset-0 -z-10" style={{ 
// //                 ...ellipseStyle, 
// //                 "--from-color": "#E1DEFF", 
// //                 "--to-color": "#FFFFFF" 
// //               }}></div>
// //               {/* Content positioned inside */}
// //               <div className="flex items-center justify-center h-full px-4">
// //                 <h3 className="text-lg font-medium">Low fees, high performance</h3>
// //               </div>
// //             </div>
// //             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
// //           </div>

// //           {/* Third card */}
// //           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
// //             <div className="relative">
// //               <div className="bg-blue-400 p-2 rounded-full z-10 relative border-2 border-yellow-300">
// //                 <Globe className="w-8 h-8 text-white" />
// //               </div>
// //               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
// //             </div>
// //             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
// //               {/* Wider elliptical background with gradient */}
// //               <div className="absolute inset-0 -z-10" style={{ 
// //                 ...ellipseStyle, 
// //                 "--from-color": "rgb(191, 219, 254)", 
// //                 "--to-color": "rgb(204, 251, 241)" 
// //               }}></div>
// //               {/* Content positioned inside */}
// //               <div className="flex items-center justify-center h-full px-4">
// //                 <h3 className="text-lg font-medium">Built for real-world use</h3>
// //               </div>
// //             </div>
// //             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
// //           </div>
// //         </div>

// //         {/* Second row */}
// //         <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-32 mt-8 md:mt-16">
// //           {/* Second card */}
// //           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
// //             <div className="relative">
// //               <div className="bg-orange-500 p-2 rounded-full z-10 relative border-2 border-yellow-300">
// //                 <Flame className="w-8 h-8 text-white" />
// //               </div>
// //               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
// //             </div>
// //             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
// //               {/* Wider elliptical background with gradient */}
// //               <div className="absolute inset-0 -z-10" style={{ 
// //                 ...ellipseStyle, 
// //                 "--from-color": "rgb(254, 215, 170)", 
// //                 "--to-color": "rgb(254, 249, 195)" 
// //               }}></div>
// //               {/* Content positioned inside */}
// //               <div className="flex items-center justify-center h-full px-4">
// //                 <h3 className="text-lg font-medium">Fully EVM-compatible</h3>
// //               </div>
// //             </div>
// //             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
// //           </div>

// //           {/* Fourth card */}
// //           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
// //             <div className="relative">
// //               <div className="bg-gradient-to-r from-green-400 to-yellow-300 p-2 rounded-md z-10 relative">
// //                 <Wallet className="w-8 h-8 text-white" />
// //               </div>
// //               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
// //             </div>
// //             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
// //               {/* Wider elliptical background with gradient */}
// //               <div className="absolute inset-0 -z-10" style={{ 
// //                 ...ellipseStyle, 
// //                 "--from-color": "rgb(187, 247, 208)", 
// //                 "--to-color": "rgb(167, 243, 208)" 
// //               }}></div>
// //               {/* Content positioned inside */}
// //               <div className="flex items-center justify-center h-full px-4">
// //                 <h3 className="text-lg font-medium">Seamless with Coinbase wallets</h3>
// //               </div>
// //             </div>
// //             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { useEffect, useState } from "react"
// import { Zap, Flame, Globe, Wallet } from "lucide-react"

// export default function FeatureCards() {
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   // Prevent hydration mismatch
//   if (!isMounted) {
//     return null
//   }

//   // CSS for wider elliptical shape with custom gradient and shadow
//   const ellipseStyle = {
//     width: "400px",
//     height: "70px",
//     borderRadius: "50%",
//     background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
//     boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
//   }

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-16">
//       <div className="relative">
//         {/* First row */}
//         <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-0">
//           {/* First card */}
//           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
//             <div className="relative">
//               <div className="bg-yellow-400 p-2 rounded-md z-10 relative">
//                 <Zap className="w-8 h-8 text-black" />
//               </div>
//               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
//             </div>
//             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
//               {/* Elliptical background with custom gradient and shadow */}
//               <div className="absolute inset-0 -z-10" style={ellipseStyle}></div>
//               {/* Content positioned inside */}
//               <div className="flex items-center justify-center h-full px-4">
//                 <h3 className="text-lg font-medium">Low fees, high performance</h3>
//               </div>
//             </div>
//             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
//           </div>

//           {/* Third card */}
//           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
//             <div className="relative">
//               <div className="bg-blue-400 p-2 rounded-full z-10 relative border-2 border-yellow-300">
//                 <Globe className="w-8 h-8 text-white" />
//               </div>
//               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
//             </div>
//             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
//               {/* Elliptical background with custom gradient and shadow */}
//               <div className="absolute inset-0 -z-10" style={ellipseStyle}></div>
//               {/* Content positioned inside */}
//               <div className="flex items-center justify-center h-full px-4">
//                 <h3 className="text-lg font-medium">Built for real-world use</h3>
//               </div>
//             </div>
//             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
//           </div>
//         </div>

//         {/* Second row */}
//         <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-32 mt-8 md:mt-16">
//           {/* Second card */}
//           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
//             <div className="relative">
//               <div className="bg-orange-500 p-2 rounded-full z-10 relative border-2 border-yellow-300">
//                 <Flame className="w-8 h-8 text-white" />
//               </div>
//               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
//             </div>
//             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
//               {/* Elliptical background with custom gradient and shadow */}
//               <div className="absolute inset-0 -z-10" style={ellipseStyle}></div>
//               {/* Content positioned inside */}
//               <div className="flex items-center justify-center h-full px-4">
//                 <h3 className="text-lg font-medium">Fully EVM-compatible</h3>
//               </div>
//             </div>
//             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
//           </div>

//           {/* Fourth card */}
//           <div className="w-full md:w-1/3 mb-16 md:mb-0 flex flex-col items-center">
//             <div className="relative">
//               <div className="bg-gradient-to-r from-green-400 to-yellow-300 p-2 rounded-md z-10 relative">
//                 <Wallet className="w-8 h-8 text-white" />
//               </div>
//               <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
//             </div>
//             <div className="mt-6 text-center relative" style={{ width: "400px", height: "70px" }}>
//               {/* Elliptical background with custom gradient and shadow */}
//               <div className="absolute inset-0 -z-10" style={ellipseStyle}></div>
//               {/* Content positioned inside */}
//               <div className="flex items-center justify-center h-full px-4">
//                 <h3 className="text-lg font-medium">Seamless with Coinbase wallets</h3>
//               </div>
//             </div>
//             <div className="absolute -bottom-8 left-0 right-0 mx-auto w-64 h-8 bg-purple-100 rounded-full blur-lg"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }