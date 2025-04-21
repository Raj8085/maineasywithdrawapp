// /* eslint-disable react/jsx-no-comment-textnodes */
// // // // // // import { useState } from "react"
// // // // // // import { ChevronLeft, ChevronRight, Wifi } from "lucide-react"

// // // // // // export default function CryptoCardLanding() {
// // // // // //   const [currentCard, setCurrentCard] = useState(0)

// // // // // //   const cards = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       name: "BTC Card",
// // // // // //       type: "VISA",
// // // // // //       label: "DEBIT",
// // // // // //       appLabel: "CASHAPP",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       name: "ETH Card",
// // // // // //       type: "VISA",
// // // // // //       label: "DEBIT",
// // // // // //       appLabel: "CRYPTOWALLET",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       name: "USDC Card",
// // // // // //       type: "MASTERCARD",
// // // // // //       label: "PREPAID",
// // // // // //       appLabel: "STABLECOIN",
// // // // // //     },
// // // // // //   ]

// // // // // //   const nextCard = () => {
// // // // // //     setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
// // // // // //   }

// // // // // //   const prevCard = () => {
// // // // // //     setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="bg-gradient-to-b from-[#27012F] to-[#550665] flex flex-col min-h-screen md:px-10">
// // // // // //       <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
// // // // // //         {/* Left side content */}
// // // // // //         <div className="w-full md:w-3/5 text-white mb-12 md:mb-0 md:pr-8">
// // // // // //           <h1 className="text-4xl md:text-5xl lg:text-6xl text-[48px] font-salsa  mb-6 leading-tight">
// // // // // //             No More <span className="italic">Hassle</span> - Access Every <span className="italic">Card</span> Instantly
// // // // // //             and Spend Bitcoin with Ease
// // // // // //           </h1>
// // // // // //           <p className="text-[24px] md:text-[24px] mb-8 opacity-90">
// // // // // //             Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
// // // // // //             need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy, manage, and
// // // // // //             use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
// // // // // //             supported cards for real-time, seamless transaction
// // // // // //           </p>
// // // // // //           <p className="text-text-[24px] md:text-[24px] font-medium">
// // // // // //             No more searching. No more hassle. Just the cards you need, when you need them.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Right side card carousel */}
// // // // // //         <div className="w-full md:w-2/5 relative">
// // // // // //           <div className="relative h-56 md:h-64 lg:h-72 w-full max-w-sm mx-auto">
// // // // // //             {/* Card */}
// // // // // //             <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-900 rounded-xl overflow-hidden shadow-2xl border border-orange-500/30 p-4 flex flex-col justify-between transform transition-all duration-300">
// // // // // //               <div className="flex justify-between items-start">
// // // // // //                 <div className="text-orange-500 font-bold">{cards[currentCard].name}</div>
// // // // // //                 <Wifi className="text-orange-500 h-6 w-6" />
// // // // // //               </div>

// // // // // //               <div className="flex flex-col space-y-1">
// // // // // //                 <div className="w-12 h-8 bg-yellow-500/30 rounded-sm mb-2"></div>
// // // // // //                 <div className="text-right">
// // // // // //                   <div className="text-orange-500 text-sm">{cards[currentCard].label}</div>
// // // // // //                   <div className="text-orange-500 text-sm">{cards[currentCard].appLabel}</div>
// // // // // //                   <div className="text-yellow-400 text-2xl font-bold italic">{cards[currentCard].type}</div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Carousel controls */}
// // // // // //           <div className="flex justify-center mt-6 space-x-4">
// // // // // //             <button
// // // // // //               onClick={prevCard}
// // // // // //               className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
// // // // // //               aria-label="Previous card"
// // // // // //             >
// // // // // //               <ChevronLeft className="h-6 w-6" />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={nextCard}
// // // // // //               className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
// // // // // //               aria-label="Next card"
// // // // // //             >
// // // // // //               <ChevronRight className="h-6 w-6" />
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Indicators */}
// // // // // //           <div className="flex justify-center mt-4 space-x-2">
// // // // // //             {cards.map((_, index) => (
// // // // // //               <button
// // // // // //                 key={index}
// // // // // //                 onClick={() => setCurrentCard(index)}
// // // // // //                 className={`w-2 h-2 rounded-full ${currentCard === index ? "bg-white" : "bg-white/30"}`}
// // // // // //                 aria-label={`Go to card ${index + 1}`}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }




// // // // // export default function CryptoCardLanding() {
// // // // //     const cards = [
// // // // //         { id: 1, src: "/coinbase.png", alt: "BTC Card" },
// // // // //         { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
// // // // //         { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
// // // // //         { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
// // // // //         { id: 4, src: "/robinhood.png", alt: "SOL Card" },
// // // // //         { id: 4, src: "/cashapp (1).png", alt: "SOL Card" },

    
// // // // //       ]
// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-[#27012F] to-[#550665] flex flex-col min-h-screen md:px-10">
// // // // //       <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
// // // // //         {/* Left side content */}
// // // // //         <div className="w-full md:w-3/5 text-white mb-12 md:mb-0 md:pr-8">
// // // // //           <h1 className="text-4xl md:text-5xl lg:text-6xl text-[48px] font-salsa  mb-6 leading-tight">
// // // // //             No More <span className="italic">Hassle</span> - Access Every <span className="italic">Card</span> Instantly
// // // // //             and Spend Bitcoin with Ease
// // // // //           </h1>
// // // // //           <p className="text-[24px] mb-8 opacity-90">
// // // // //             Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
// // // // //             need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy, manage, and
// // // // //             use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
// // // // //             supported cards for real-time, seamless transaction
// // // // //           </p>
// // // // //           <p className="text-[24px] font-medium">
// // // // //             No more searching. No more hassle. Just the cards you need, when you need them.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Right side marquee carousel */}
// // // // //         <div className="w-full md:w-2/5 overflow-hidden">
// // // // //           <div className="flex animate-marquee gap-6 w-max">
// // // // //             {cards.concat(cards).map((card, index) => (
// // // // //               <img
// // // // //                 key={index}
// // // // //                 src={card.src}
// // // // //                 alt={card.alt}
// // // // //                 className="w-60 h-auto rounded-xl shadow-lg"
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }



// // // // import { PieChart } from "lucide-react";

// // // // export default function CryptoCardLanding() {
// // // //   const cards = [
// // // //     { id: 1, src: "/coinbase.png", alt: "BTC Card" },
// // // //     { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
// // // //     { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
// // // //     { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
// // // //     { id: 5, src: "/robinhood.png", alt: "SOL Card" },
// // // //     { id: 6, src: "/cashapp (1).png", alt: "SOL Card" },
// // // //   ];

// // // //   return (
// // // //     <div className="flex flex-col min-h-screen">
// // // //       {/* Hero Section */}
// // // //       <div className="bg-gradient-to-b from-[#27012F] to-[#550665] w-full px-4 md:px-10 py-12 md:py-24">
// // // //         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
// // // //           {/* Left Side */}
// // // //           <div className="w-full md:w-3/5 text-white md:pr-8 mb-12 md:mb-0">
// // // //             <h1 className="text-4xl md:text-5xl lg:text-6xl text-[48px] font-salsa mb-6 leading-tight">
// // // //               No More <span className="italic">Hassle</span> - Access Every{" "}
// // // //               <span className="italic">Card</span> Instantly and Spend Bitcoin with Ease
// // // //             </h1>
// // // //             <p className="text-[24px] mb-8 opacity-90">
// // // //               Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
// // // //               need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy,
// // // //               manage, and use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly
// // // //               through supported cards for real-time, seamless transaction
// // // //             </p>
// // // //             <p className="text-[24px] font-medium">
// // // //               No more searching. No more hassle. Just the cards you need, when you need them.
// // // //             </p>
// // // //           </div>

// // // //           {/* Right Side Marquee */}
// // // //           <div className="w-full md:w-2/5 overflow-hidden">
// // // //             <div className="flex animate-marquee gap-6 w-max">
// // // //               {cards.concat(cards).map((card, index) => (
// // // //                 <img
// // // //                   key={index}
// // // //                   src={card.src}
// // // //                   alt={card.alt}
// // // //                   className="w-60 h-auto rounded-xl shadow-lg"
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Feature Cards Section */}
// // // //       <div className="bg-gradient-to-br from-[#550665] to-[#A98C18] w-full py-12 px-4 md:px-8 lg:px-12">
// // // //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {/* Card 1 */}
// // // //           <div
// // // //             style={{
// // // //               background: "linear-gradient(to bottom right, #130432 0%, #31064D 50%, #52006D 100%)",
// // // //             }}
// // // //             className="rounded-xl p-8 flex flex-col justify-between shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // // //           >
// // // //             <h2 className="text-amber-400 text-3xl font-bold mb-8">Grow your Saving</h2>
// // // //             <div className="flex items-end justify-center h-48 space-x-4">
// // // //               <div className="w-12 h-32 bg-indigo-500 rounded-t-md relative">
// // // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
// // // //               </div>
// // // //               <div className="w-12 h-16 bg-indigo-500 rounded-t-md"></div>
// // // //               <div className="w-12 h-24 bg-indigo-500 rounded-t-md relative">
// // // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
// // // //               </div>
// // // //               <div className="w-12 h-8 bg-indigo-500 rounded-t-md"></div>
// // // //               <div className="w-12 h-40 bg-indigo-500 rounded-t-md relative">
// // // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="w-full h-[1px] bg-indigo-500/50 mt-2"></div>
// // // //           </div>

// // // //           {/* Card 2 */}
// // // //           <div
// // // //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // // //             style={{
// // // //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
// // // //             }}
// // // //           >
// // // //             <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
// // // //             <div className="mt-8">
// // // //               <PieChart className="w-24 h-24 text-indigo-400 opacity-70" />
// // // //             </div>
// // // //           </div>

// // // //           {/* Card 3 */}
// // // //           <div
// // // //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // // //             style={{
// // // //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
// // // //             }}
// // // //           >
// // // //             <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
// // // //             <div className="mt-8 relative">
// // // //               <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
// // // //                 <span className="text-purple-900 text-2xl font-bold">€</span>
// // // //               </div>
// // // //               <div className="absolute top-1/2 left-full w-16 h-[2px] bg-amber-400/30"></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import { PieChart } from "lucide-react"

// // // export default function CryptoHeroWithFeatures() {
// // //   const cards = [

// // //     { id: 1, src: "/coinbase.png", alt: "BTC Card" },
// // //     { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
// // //     { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
// // //     { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
// // //     { id: 5, src: "/robinhood.png", alt: "SOL Card" },
// // //     { id: 6, src: "/cashapp (1).png", alt: "SOL Card" },

// // //   ]

// // //   return (
// // //     <div className="bg-gradient-to-b from-[#27012F] via-[#550665] to-[#766520] w-full">
// // //       {/* Hero Section */}
// // //       <div className="container mx-auto md:px-10 px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
// // //         {/* Left side content */}
// // //         <div className="w-full md:w-3/5 text-white mb-12 md:mb-0 md:pr-8">
// // //           <h1 className="text-[36px] md:text-5xl lg:text-[48px]  font-salsa mb-6 leading-tight">
// // //             No More <span className="italic">Hassle</span> - Access Every <span className="italic">Card</span> Instantly
// // //             and Spend Bitcoin with Ease
// // //           </h1>
// // //           <p className="text-[24px] mb-8 opacity-90">
// // //             Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
// // //             need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy, manage, and
// // //             use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
// // //             supported cards for real-time, seamless transaction
// // //           </p>
// // //           <p className="text-[24px] font-medium">
// // //             No more searching. No more hassle. Just the cards you need, when you need them.
// // //           </p>
// // //         </div>

// // //         {/* Right side marquee carousel */}
// // //         <div className="w-full md:w-2/5 overflow-hidden">
// // //           <div className="flex animate-marquee gap-6 w-max">
// // //             {cards.concat(cards).map((card, index) => (
// // //               <img
// // //                 key={index}
// // //                 src={card.src}
// // //                 alt={card.alt}
// // //                 className="w-60 h-auto rounded-xl shadow-lg"
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Feature Cards Section */}
// // //       <div className="w-full px-4 md:px-8 lg:px-12 pb-20">
// // //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {/* Card 1 - Grow your Saving */}
// // //           <div
// // //             style={{
// // //               background: "linear-gradient(to bottom right, #130432 0%, #31064D 50%, #52006D 100%)"
// // //             }}
// // //             className="rounded-xl p-8 flex flex-col justify-between shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // //           >
// // //             <h2 className="text-amber-400 text-3xl font-bold mb-8">Grow your Saving</h2>
// // //             <div className="flex items-end justify-center h-48 space-x-4">
// // //               <div className="w-12 h-32 bg-indigo-500 rounded-t-md relative">
// // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full" />
// // //               </div>
// // //               <div className="w-12 h-16 bg-indigo-500 rounded-t-md" />
// // //               <div className="w-12 h-24 bg-indigo-500 rounded-t-md relative">
// // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full" />
// // //               </div>
// // //               <div className="w-12 h-8 bg-indigo-500 rounded-t-md" />
// // //               <div className="w-12 h-40 bg-indigo-500 rounded-t-md relative">
// // //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full" />
// // //               </div>
// // //             </div>
// // //             <div className="w-full h-[1px] bg-indigo-500/50 mt-2" />
// // //           </div>

// // //           {/* Card 2 - Manage your assets */}
// // //           <div
// // //             style={{
// // //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)"
// // //             }}
// // //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // //           >
// // //             <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
// // //             <div className="mt-8">
// // //               <PieChart className="w-24 h-24 text-indigo-400 opacity-70" />
// // //             </div>
// // //           </div>

// // //           {/* Card 3 - Spend anywhere */}
// // //           <div
// // //             style={{
// // //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)"
// // //             }}
// // //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// // //           >
// // //             <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
// // //             <div className="mt-8 relative">
// // //               <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
// // //                 <span className="text-purple-900 text-2xl font-bold">€</span>
// // //               </div>
// // //               <div className="absolute top-1/2 left-full w-16 h-[2px] bg-amber-400/30" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // import { PieChart } from "lucide-react"
// // import { useState } from "react";

// // const cards = [
// //   { id: 1, src: "/coinbase.png", alt: "BTC Card" },
// //   { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
// //   { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
// //   { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
// //   { id: 5, src: "/robinhood.png", alt: "SOL Card" },
// //   { id: 6, src: "/cashapp (1).png", alt: "SOL Card" },
// // ]

// // export default function CryptoCardLanding() {
// //   const [isHovered, setIsHovered] = useState(false);
// //   return (
// //     <div className="bg-gradient-to-b from-[#27012F] via-[#550665] to-[#796518] w-full">
// //       {/* Hero + Marquee */}
// //       <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
// //         <div className="w-full md:w-3/5 text-white mb-12 md:mb-0 md:pr-8">
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl text-[48px] font-salsa mb-6 leading-tight">
// //             No More <span className="italic">Hassle</span> - Access Every{" "}
// //             <span className="italic">Card</span> Instantly and Spend Bitcoin with Ease
// //           </h1>
// //           <p className="text-[24px] mb-8 opacity-90">
// //             Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
// //             need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy, manage, and
// //             use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
// //             supported cards for real-time, seamless transaction
// //           </p>
// //           <p className="text-[24px] font-medium">
// //             No more searching. No more hassle. Just the cards you need, when you need them.
// //           </p>
// //         </div>

// //         {/* Marquee Section */}
// //         <div className="w-full md:w-2/5 overflow-hidden">
// //           <div className="flex animate-marquee gap-6 w-max">
// //             {cards.concat(cards).map((card, index) => (
// //               <img
// //                 key={index}
// //                 src={card.src}
// //                 alt={card.alt}
// //                 className="w-60 h-auto rounded-xl shadow-lg"
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Feature Cards */}
// //       <div className="w-full py-12 px-4 md:px-8 lg:px-12">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {/* Card 1 - Grow your Saving */}


// //           <div 
// //       className="group relative w-full max-w-md mx-auto"
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       onTouchStart={() => setIsHovered(true)}
// //       onTouchEnd={() => setIsHovered(false)}
// //     >
// //       {/* First Card - Initial View */}
// //       <div
// //         style={{
// //           background: "linear-gradient(to bottom left, #130432 100%, #31064D 100%, #52006D 100%)",
// //           opacity: isHovered ? 0 : 1,
// //           transition: "opacity 0.5s ease-in-out"
// //         }}
// //         className="rounded-xl p-8 flex flex-col justify-between shadow-lg border h-[600px]"
// //       >
// //         <h2 className="text-amber-400 text-3xl font-bold mb-8">Grow your Saving</h2>
// //         <div className="flex items-end justify-center h-48 space-x-4">
// //           {[32, 16, 24, 8, 40].map((h, i) => (
// //             <div 
// //               key={i} 
// //               className="bg-indigo-500 rounded-t-md relative" 
// //               style={{ width: '3rem', height: `${h * 0.25}rem` }}
// //             >
// //               {(i % 2 === 0) && (
// //                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //         <div className="w-full h-[1px] bg-indigo-500/50 mt-2"></div>
// //       </div>

// //       {/* Second Card - Expand from Center on Hover */}
// //       <div 
// //         className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
// //         style={{
// //           clipPath: isHovered ? "circle(150% at center)" : "circle(0% at center)",
// //           transition: "clip-path 0.7s ease-in-out"
// //         }}
// //       >
// //         <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
// //           <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
// //             <div 
// //               className="w-full pt-4"
// //               style={{
// //                 opacity: isHovered ? 1 : 0,
// //                 transform: isHovered ? "translateY(0)" : "translateY(-20px)",
// //                 transition: "opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s"
// //               }}
// //             >
// //               <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Grow your Saving</h1>
// //             </div>
            
// //             <div 
// //               className="max-w-md px-4 py-8"
// //               style={{
// //                 opacity: isHovered ? 1 : 0,
// //                 transform: isHovered ? "scale(1)" : "scale(0.95)",
// //                 transition: "opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s"
// //               }}
// //             >
// //               <p className="text-xl font-medium italic text-white md:text-2xl">
// //                 Unlock <span className="font-semibold">smarter ways</span> to save. With credit-backed cards and integrated
// //                 rewards, your money works harder—earn while you spend and grow your savings effortlessly.
// //               </p>
// //             </div>
            
// //             <div 
// //               className="w-full pb-8"
// //               style={{
// //                 opacity: isHovered ? 1 : 0,
// //                 transform: isHovered ? "translateY(0)" : "translateY(20px)",
// //                 transition: "opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out 0.7s"
// //               }}
// //             >
// //               <p className="text-xl font-semibold text-white md:text-2xl">&quot;Save smarter. Earn more. Grow faster&quot;</p>
// //             </div>
// //           </div>

// //           {/* Background Effects */}
// //           <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
// //           <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
// //         </div>
// //       </div>
// //     </div>


          

// //           {/* Card 2 - Manage your assets */}
// //           <div
// //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// //             style={{
// //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
// //             }}
// //           >
// //             <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
// //             <div className="mt-8">
// //               <PieChart className="w-24 h-24 text-indigo-400 opacity-70" />
// //             </div>
// //           </div>

// //           {/* Card 3 - Spend anywhere */}
// //           <div
// //             className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
// //             style={{
// //               background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
// //             }}
// //           >
// //             <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
// //             <div className="mt-8 relative">
// //               <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
// //                 <span className="text-purple-900 text-2xl font-bold">€</span>
// //               </div>
// //               <div className="absolute top-1/2 left-full w-16 h-[2px] bg-amber-400/30"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { useState } from "react";

// const cards = [
//   { id: 1, src: "/coinbase.png", alt: "BTC Card" },
//   { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
//   { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
//   { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
//   { id: 5, src: "/robinhood.png", alt: "SOL Card" },
//   { id: 6, src: "/cashapp (1).png", alt: "SOL Card" },
// ]

// export default function CryptoCardLanding() {
//   // Create separate hover states for each card
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   return (
//     <div className="bg-gradient-to-b from-[#27012F] to-[#550665] md:p-6 w-full">
//       {/* Hero + Marquee */}
//       <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
//         <div className="w-full md:w-3/5 text-white mb-12 md:mb-0 md:pr-8">
//           <h1 className="text-[32px] font-salsa mb-6 leading-tight">
//             No More <span className="italic">Hassle</span> - Access Every{" "}
//             <span className="italic">Card</span> Instantly and Spend Bitcoin with Ease
//           </h1>
//           <p className="text-[24px] mb-8 opacity-90">
//             Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
//             need crypto-friendly cards, prepaid options, or credit-backed solutions, we&apos;ve got it all. Buy, manage, and
//             use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
//             supported cards for real-time, seamless transaction
//           </p>
//           <p className="text-[24px] font-medium">
//             No more searching. No more hassle. Just the cards you need, when you need them.
//           </p>
//         </div>

//         {/* Marquee Section */}
//         <div className="w-full md:w-2/5 overflow-hidden">
//           <div className="flex animate-marquee gap-6 w-max">
//             {cards.concat(cards).map((card, index) => (
//               <img
//                 key={index}
//                 src={card.src}
//                 alt={card.alt}
//                 className="w-60 h-auto rounded-xl shadow-lg"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Feature Cards */}
//       <div className="w-full py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#3C0449] via-[#796518] to-[#27012F]">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 - Grow your Saving */}
//           <div 
//             className="relative w-full"
//             onMouseEnter={() => setHoveredCard(1)}
//             onMouseLeave={() => setHoveredCard(null)}
//             onTouchStart={() => setHoveredCard(1)}
//             onTouchEnd={() => setHoveredCard(null)}
//           >
//             {/* First Card - Initial View */}
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
//                 opacity: hoveredCard === 2 ? 0 : 1,
//                 transition: "opacity 0.5s ease-in-out"
//               }}
//               className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
//             >
//               <h2 className="text-amber-400 text-3xl font-bold text-center">Grow your Saving</h2>
//               <img src="public/28376229-57d5-45d9-949b-956c5bf780ff.gif" className="w-72 h-72 text-indigo-400 opacity-70" />
//               <div className="w-full h-[1px] bg-indigo-500/50 mt-2"></div>
//             </div>

//             {/* Second Card - Expand from Center on Hover */}
//             <div 
//               className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
//               style={{
//                 clipPath: hoveredCard === 1 ? "circle(150% at center)" : "circle(0% at center)",
//                 transition: "clip-path 0.7s ease-in-out"
//               }}
//             >
//               <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
//                 <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
//                   <div 
//                     className="w-full pt-4"
//                     style={{
//                       opacity: hoveredCard === 1 ? 1 : 0,
//                       transform: hoveredCard === 1 ? "translateY(0)" : "translateY(-20px)",
//                       transition: "opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s"
//                     }}
//                   >
//                     <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Grow your Saving</h1>
//                   </div>
                  
//                   <div 
//                     className="max-w-md px-4 py-8"
//                     style={{
//                       opacity: hoveredCard === 1 ? 1 : 0,
//                       transform: hoveredCard === 1 ? "scale(1)" : "scale(0.95)",
//                       transition: "opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s"
//                     }}
//                   >
//                     <p className="text-xl font-medium italic text-white md:text-2xl">
//                       Unlock <span className="font-semibold">smarter ways</span> to save. With credit-backed cards and integrated
//                       rewards, your money works harder—earn while you spend and grow your savings effortlessly.
//                     </p>
//                   </div>
                  
//                   <div 
//                     className="w-full pb-8"
//                     style={{
//                       opacity: hoveredCard === 1 ? 1 : 0,
//                       transform: hoveredCard === 1 ? "translateY(0)" : "translateY(20px)",
//                       transition: "opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out 0.7s"
//                     }}
//                   >
//                     <p className="text-xl font-semibold text-white md:text-2xl">&quot;Save smarter. Earn more. Grow faster&quot;</p>
//                   </div>
//                 </div>

//                 {/* Background Effects */}
//                 <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
//                 <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 - Manage your assets */}
//           <div 
//             className="relative w-full"
//             onMouseEnter={() => setHoveredCard(2)}
//             onMouseLeave={() => setHoveredCard(null)}
//             onTouchStart={() => setHoveredCard(2)}
//             onTouchEnd={() => setHoveredCard(null)}
//           >
//             {/* First Card - Initial View */}
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
//                 opacity: hoveredCard === 2 ? 0 : 1,
//                 transition: "opacity 0.5s ease-in-out"
//               }}
//               className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
//             >
//               <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
//               <div className="mt-8">
//                 <img src="/a434b7f2-1fa3-45bf-92cd-9407cad573c9.gif" className="w-72 h-72 text-indigo-400 opacity-70" />
//               </div>
//             </div>

//             {/* Second Card - Expand from Center on Hover */}
//             <div 
//               className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
//               style={{
//                 clipPath: hoveredCard === 2 ? "circle(150% at center)" : "circle(0% at center)",
//                 transition: "clip-path 0.7s ease-in-out"
//               }}
//             >
//               <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
//                 <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
//                   <div 
//                     className="w-full pt-4"
//                     style={{
//                       opacity: hoveredCard === 2 ? 1 : 0,
//                       transform: hoveredCard === 2 ? "translateY(0)" : "translateY(-20px)",
//                       transition: "opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s"
//                     }}
//                   >
//                     <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Manage your assets</h1>
//                   </div>
//                   <div 
//                     className="max-w-md px-4 py-8"
//                     style={{
//                       opacity: hoveredCard === 2 ? 1 : 0,
//                       transform: hoveredCard === 2 ? "scale(1)" : "scale(0.95)",
//                       transition: "opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s"
//                     }}
//                   >
//                     <p className="text-xl font-medium italic text-white md:text-2xl">
//                     Track, control, and optimize all your financial assets in one place. From crypto to cash, you’re in full control with real-time insights and smart tools.
//                     </p>
//                   </div>
//                   <div 
//                     className="w-full pb-8"
//                     style={{
//                       opacity: hoveredCard === 2 ? 1 : 0,
//                       transform: hoveredCard === 2 ? "translateY(0)" : "translateY(20px)",
//                       transition: "opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out 0.7s"
//                     }}
//                   >
//                     <p className="text-xl font-semibold text-white md:text-2xl">“Total control. Real-time clarity.”</p>
//                   </div>
//                 </div>
//                 {/* Background Effects */}
//                 <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
//                 <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 - Spend anywhere */}
//           <div 
//             className="relative w-full"
//             onMouseEnter={() => setHoveredCard(3)}
//             onMouseLeave={() => setHoveredCard(null)}
//             onTouchStart={() => setHoveredCard(3)}
//             onTouchEnd={() => setHoveredCard(null)}
//           >
//             {/* First Card - Initial View */}
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
//                 opacity: hoveredCard === 3 ? 0 : 1,
//                 transition: "opacity 0.5s ease-in-out"
//               }}
//               className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
//             >
//               <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
//               <div className="mt-8 relative">
                
//                   <img className="text-purple-900 text-2xl font-bold h-72 w-72" src="/866b0154-fecb-46cf-9d37-bc10a851944c.gif" alt="" />
//                 {/* <div className="absolute top-1/2 left-full w-16 h-[2px] bg-amber-400/30"></div> */}
//               </div>
//             </div>
//             {/* Second Card - Expand from Center on Hover */}
//             <div 
//               className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
//               style={{
//                 clipPath: hoveredCard === 3 ? "circle(150% at center)" : "circle(0% at center)",
//                 transition: "clip-path 0.7s ease-in-out"
//               }}
//             >
//               <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
//                 <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
//                   <div 
//                     className="w-full pt-4"
//                     style={{
//                       opacity: hoveredCard === 3 ? 1 : 0,
//                       transform: hoveredCard === 3 ? "translateY(0)" : "translateY(-20px)",
//                       transition: "opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s"
//                     }}
//                   >
//                     <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Spend anywhere</h1>
//                   </div>
                  
//                   <div 
//                     className="max-w-md px-4 py-8"
//                     style={{
//                       opacity: hoveredCard === 3 ? 1 : 0,
//                       transform: hoveredCard === 3 ? "scale(1)" : "scale(0.95)",
//                       transition: "opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s"
//                     }}
//                   >
//                     <p className="text-xl font-medium italic text-white md:text-2xl">
                    
//                     Whether it’s online, in-store, or across borders—spend freely and securely with digital cards accepted worldwide. Your money, your way, wherever you go.
//                     </p>
//                   </div>
                  
//                   <div 
//                     className="w-full pb-8"
//                     style={{
//                       opacity: hoveredCard === 3 ? 1 : 0,
//                       transform: hoveredCard === 3 ? "translateY(0)" : "translateY(20px)",
//                       transition: "opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out 0.7s"
//                     }}
//                   >
//                     <p className="text-xl font-semibold text-white md:text-2xl">“Total control. Real-time clarity.”</p>
//                   </div>
//                 </div>

//                 {/* Background Effects */}
//                 <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
//                 <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





import { useState } from 'react';

const cards = [
  { id: 1, src: "/coinbase.png", alt: "BTC Card" },
  { id: 2, src: "/Cashapp.png", alt: "ETH Card" },
  { id: 3, src: "/paypal@2x.png", alt: "USDC Card" },
  { id: 4, src: "/nexo (1).png", alt: "SOL Card" },
  { id: 5, src: "/robinhood.png", alt: "SOL Card" },
  { id: 6, src: "/trustwalletcard-removebg-preview.png", alt: "SOL Card" },
];

function CryptoCardLanding() {
  const [setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] w-full">
      {/* First Section - BoostCard */}
      <div className="w-full p-4 md:p-8 flex items-center justify-center">
        <div 
          className="w-full max-w-7xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
        </div>
      </div>
      {/* Second Section - CryptoCardLanding */}

      <div  className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 md:p-4 text-white mb-12 md:mb-0 md:pr-8">
          <h1 className="text-[32px] md:text-[48px] font-salsa mb-6 leading-tight">
            No More <span className="italic">Hassle</span> - Access Every{" "}
            <span className="italic">Card</span> Instantly and Spend Bitcoin with Ease
          </h1>
          <p className="text-[24px] mb-8 opacity-90">
            Tired of juggling multiple platforms for different cards? We bring everything under one roof. Whether you
            need crypto-friendly cards, prepaid options, or credit-backed solutions, we've got it all. Buy, manage, and
            use your digital financial cards—instantly, securely, and effortlessly. Plus (BTC) directly through
            supported cards for real-time, seamless transaction
          </p>
          <p className="text-[24px] font-medium">
            No more searching. No more hassle. Just the cards you need, when you need them.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="w-full md:w-2/5 overflow-hidden">
          <div className="flex animate-marquee-slow gap-6 w-max">
            {cards.concat(cards).map((card, index) => (
              <img
                key={index}
                src={card.src}
                alt={card.alt}
                className="w-60 h-auto rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>


      {/* Feature Cards */}
      <div className="w-full py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#3C0449] via-[#796518] to-[#27012F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Grow your Saving */}
          <div 
            className="relative w-full"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard(1)}
            onTouchEnd={() => setHoveredCard(null)}
          >
            {/* First Card - Initial View */}
            <div
              style={{
                background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
                opacity: hoveredCard === 1 ? 0 : 1,
                transition: "opacity 0.5s ease-in-out"
              }}
              className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
            >
              <h2 className="text-amber-400 text-3xl font-bold text-center">Grow your Saving</h2>
              <img src="/28376229-57d5-45d9-949b-956c5bf780ff.gif" className="w-72 h-72 text-indigo-400 opacity-70" />
              <div className="w-full h-[1px] bg-indigo-500/50 mt-2"></div>
            </div>
            {/* Second Card - Expand from Center on Hover */}
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
              style={{
                clipPath: hoveredCard === 1 ? "circle(150% at center)" : "circle(0% at center)",
                transition: "clip-path 0.7s ease-in-out"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
                <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
                  <div className="w-full pt-4">
                    <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Grow your Saving</h1>
                  </div>
                  
                  <div className="max-w-md px-4 py-8">
                    <p className="text-xl font-medium italic text-white md:text-2xl">
                      Unlock <span className="font-semibold">smarter ways</span> to save. With credit-backed cards and integrated
                      rewards, your money works harder—earn while you spend and grow your savings effortlessly.
                    </p>
                  </div>
                  
                  <div className="w-full pb-8">
                    <p className="text-xl font-semibold text-white md:text-2xl">"Save smarter. Earn more. Grow faster"</p>
                  </div>
                </div>

                {/* Background Effects */}
                <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Manage your assets */}
          <div 
            className="relative w-full"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard(2)}
            onTouchEnd={() => setHoveredCard(null)}
          >
            {/* First Card - Initial View */}
            <div
              style={{
                background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
                opacity: hoveredCard === 2 ? 0 : 1,
                transition: "opacity 0.5s ease-in-out"
              }}
              className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
            >
              <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
              <div className="mt-8">
                <img src="/a434b7f2-1fa3-45bf-92cd-9407cad573c9.gif" className="w-72 h-72 text-indigo-400 opacity-70" />
              </div>
            </div>

            {/* Second Card - Expand from Center on Hover */}
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
              style={{
                clipPath: hoveredCard === 2 ? "circle(150% at center)" : "circle(0% at center)",
                transition: "clip-path 0.7s ease-in-out"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
                <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
                  <div className="w-full pt-4">
                    <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Manage your assets</h1>
                  </div>
                  <div className="max-w-md px-4 py-8">
                    <p className="text-xl font-medium italic text-white md:text-2xl">
                      Track, control, and optimize all your financial assets in one place. From crypto to cash, you're in full control with real-time insights and smart tools.
                    </p>
                  </div>
                  <div className="w-full pb-8">
                    <p className="text-xl font-semibold text-white md:text-2xl">"Total control. Real-time clarity."</p>
                  </div>
                </div>
                {/* Background Effects */}
                <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Card 3 - Spend anywhere */}
          <div 
            className="relative w-full"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard(3)}
            onTouchEnd={() => setHoveredCard(null)}
          >
            {/* First Card - Initial View */}
            <div
              style={{
                background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)",
                opacity: hoveredCard === 3 ? 0 : 1,
                transition: "opacity 0.5s ease-in-out"
              }}
              className="rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border h-[600px]"
            >
              <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
              <div className="mt-8 relative">
                <img className="text-purple-900 text-2xl font-bold h-72 w-72" src="/866b0154-fecb-46cf-9d37-bc10a851944c.gif" alt="" />
              </div>
            </div>

            {/* Second Card - Expand from Center on Hover */}
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none"
              style={{
                clipPath: hoveredCard === 3 ? "circle(150% at center)" : "circle(0% at center)",
                transition: "clip-path 0.7s ease-in-out"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#34013D] via-[#7C238B] to-[#540062] rounded-xl shadow-lg">
                <div className="relative z-10 flex flex-col items-center justify-between min-h-[600px] p-8 text-center">
                  <div className="w-full pt-4">
                    <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">Spend anywhere</h1>
                  </div>
                  
                  <div className="max-w-md px-4 py-8">
                    <p className="text-xl font-medium italic text-white md:text-2xl">
                      Whether it's online, in-store, or across borders—spend freely and securely with digital cards accepted worldwide. Your money, your way, wherever you go.
                    </p>
                  </div>
                  
                  <div className="w-full pb-8">
                    <p className="text-xl font-semibold text-white md:text-2xl">"Freedom to spend. Anywhere."</p>
                  </div>
                </div>

                {/* Background Effects */}
                <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-[#7C238B]/40 blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-[#540062]/30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCardLanding;


