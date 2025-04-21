// // // // /* eslint-disable react/no-unknown-property */
// // // // // import { useEffect, useRef } from "react"

// // // // // export default function CryptoCardsSection() {
// // // // //   const canvasRef = useRef(null)

// // // // //   useEffect(() => {
// // // // //     const canvas = canvasRef.current
// // // // //     if (!canvas) return

// // // // //     const ctx = canvas.getContext("2d")
// // // // //     if (!ctx) return

// // // // //     const resizeCanvas = () => {
// // // // //       const container = canvas.parentElement
// // // // //       if (!container) return

// // // // //       canvas.width = container.clientWidth
// // // // //       canvas.height = Math.min(200, container.clientWidth * 0.25)

// // // // //       drawWave(ctx, canvas.width, canvas.height)
// // // // //     }

// // // // //     resizeCanvas()
// // // // //     window.addEventListener("resize", resizeCanvas)

// // // // //     return () => {
// // // // //       window.removeEventListener("resize", resizeCanvas)
// // // // //     }
// // // // //   }, [])

// // // // //   const drawWave = (ctx, width, height) => {
// // // // //     ctx.clearRect(0, 0, width, height)

// // // // //     const gradient = ctx.createLinearGradient(0, 0, width, 0)
// // // // //     gradient.addColorStop(0, "#4caf50") // Bright green
// // // // //     gradient.addColorStop(1, "#d4e157") // Yellow-green

// // // // //     ctx.beginPath()
// // // // //     ctx.moveTo(0, height * 0.5)

// // // // //     // Create wave points
// // // // //     const segments = 20
// // // // //     const amplitude = height * 0.4

// // // // //     for (let i = 0; i <= segments; i++) {
// // // // //       const x = (i / segments) * width
// // // // //       const y = height * 0.5 + Math.sin((i / segments) * Math.PI) * amplitude
// // // // //       ctx.lineTo(x, y)
// // // // //     }

// // // // //     ctx.lineTo(width, height)
// // // // //     ctx.lineTo(0, height)
// // // // //     ctx.closePath()
// // // // //     ctx.fillStyle = gradient
// // // // //     ctx.fill()
// // // // //   }

// // // // //   return (
// // // // //     <div className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-20 overflow-hidden">
// // // // //       {/* Wave background */}
// // // // //       {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
// // // // //         <canvas ref={canvasRef} className="w-full h-auto" style={{ position: "absolute", top: "0", left: "0" }} />
// // // // //       </div> */}

// // // // //       {/* Content */}
// // // // //       <div className="relative z-10 flex flex-col items-center">
// // // // //         {/* Heading */}
// // // // //         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
// // // // //           Built on Base. Backed by <span className="text-[#4caf50]">Coinbase</span>.
// // // // //         </h2>

// // // // //         {/* Subtext */}
// // // // //         <p className="text-center max-w-2xl mb-12 md:mb-16 text-sm md:text-base">
// // // // //           All Base Cards are secured through Coinbase&apos;s trusted infrastructure and run on the Base Layer 2
// // // // //           blockchain—bringing you speed, savings, and unmatched transparency.
// // // // //         </p>

// // // // //         <img src="/Ellipse 187.png" alt="" className=""/>

// // // // //         {/* Cards */}
// // // // //         <div className="relative w-full max-w-md h-48 md:h-64 mt-4">
// // // // //           {/* Green Card */}
// // // // //           <div className="absolute right-0 md:right-4 top-0 transform rotate-2 z-30 w-48 md:w-64 transition-all duration-300 hover:translate-y-[-10px]">
// // // // //             <img
// // // // //               src=""
// // // // //               alt="Green Crypto Card"
// // // // //               width={300}
// // // // //               height={190}
// // // // //               className="w-full h-auto rounded-xl shadow-lg"
// // // // //               style={{
// // // // //                 filter: "brightness(0.9) hue-rotate(120deg)",
// // // // //                 background: "linear-gradient(145deg, #1b5e20, #2e7d32)",
// // // // //               }}
// // // // //             />
// // // // //             <div className="absolute top-4 left-4 text-yellow-400 font-bold text-xs md:text-sm">Crypto Cards</div>
// // // // //             <div className="absolute bottom-6 left-4 text-white text-xs">1.MC</div>
// // // // //             <div className="absolute bottom-8 right-4 text-white font-bold">
// // // // //               <span className="text-xs">CREDIT</span>
// // // // //               <div className="text-lg text-white">VISA</div>
// // // // //             </div>
// // // // //             <div className="absolute top-6 right-6">
// // // // //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                 <path
// // // // //                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //                 <path
// // // // //                   d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //               </svg>
// // // // //             </div>
// // // // //             <div className="absolute top-1/2 left-4">
// // // // //               <div className="w-10 h-6 bg-yellow-400 rounded-sm"></div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Black Card */}
// // // // //           <div className="absolute left-1/2 -translate-x-1/2 top-2 transform -rotate-2 z-20 w-48 md:w-64 transition-all duration-300 hover:translate-y-[-10px]">
// // // // //             <img
// // // // //               src="/placeholder.svg?height=380&width=600"
// // // // //               alt="Black Crypto Card"
// // // // //               width={300}
// // // // //               height={190}
// // // // //               className="w-full h-auto rounded-xl shadow-lg"
// // // // //               style={{
// // // // //                 filter: "brightness(0.7)",
// // // // //                 background: "linear-gradient(145deg, #000000, #212121)",
// // // // //               }}
// // // // //             />
// // // // //             <div className="absolute top-4 left-4 text-yellow-400 font-bold text-xs md:text-sm">Crypto Cards</div>
// // // // //             <div className="absolute bottom-6 left-4 text-white text-xs">F.8R°</div>
// // // // //             <div className="absolute top-6 right-6">
// // // // //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                 <path
// // // // //                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //                 <path
// // // // //                   d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //               </svg>
// // // // //             </div>
// // // // //             <div className="absolute top-1/2 left-4">
// // // // //               <div className="w-10 h-6 bg-yellow-400 rounded-sm"></div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Red Card */}
// // // // //           <div className="absolute left-0 md:left-4 top-4 transform -rotate-6 z-10 w-48 md:w-64 transition-all duration-300 hover:translate-y-[-10px]">
// // // // //             <img
// // // // //               src="/placeholder.svg?height=380&width=600"
// // // // //               alt="Red Crypto Card"
// // // // //               width={300}
// // // // //               height={190}
// // // // //               className="w-full h-auto rounded-xl shadow-lg"
// // // // //               style={{
// // // // //                 filter: "brightness(0.8) hue-rotate(320deg)",
// // // // //                 background: "linear-gradient(145deg, #7b1fa2, #6a1b9a)",
// // // // //               }}
// // // // //             />
// // // // //             <div className="absolute top-4 left-4 text-yellow-400 font-bold text-xs md:text-sm">Crypto Cards</div>
// // // // //             <div className="absolute bottom-6 left-4 text-white text-xs">E.8R°</div>
// // // // //             <div className="absolute top-6 right-6">
// // // // //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                 <path
// // // // //                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //                 <path
// // // // //                   d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8"
// // // // //                   stroke="white"
// // // // //                   strokeWidth="2"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 />
// // // // //               </svg>
// // // // //             </div>
// // // // //             <div className="absolute top-1/2 left-4">
// // // // //               <div className="w-10 h-6 bg-yellow-400 rounded-sm"></div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // import { useEffect, useState } from "react";

// // // // export default function CryptoCards() {
// // // //   const [isMobile, setIsMobile] = useState(false);

// // // //   useEffect(() => {
// // // //     const checkIfMobile = () => {
// // // //       setIsMobile(window.innerWidth < 640);
// // // //     };

// // // //     checkIfMobile();
// // // //     window.addEventListener("resize", checkIfMobile);

// // // //     return () => {
// // // //       window.removeEventListener("resize", checkIfMobile);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       {/* <img src="/Ellipse 187.png" alt="ellipse"/> */}
// // // //       <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[500px]">
// // // //         <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-24">
// // // //           <section className="max-w-4xl mx-auto text-center md:mt-36">
// // // //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
// // // //               Built on Base. Backed by <span className=" bg-gradient-to-b from-[#2EFD35] to-[#1fa526] bg-clip-text text-transparent">Coinbase.</span>
// // // //             </h1>
// // // //             <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto mt-10">
// // // //               All Base Cards are secured through Coinbase’s trusted
// // // //               infrastructure and run on the Base Layer 2 blockchain—bringing you
// // // //               speed, savings, and unmatched transparency.
// // // //             </p>
// // // //           </section>
// // // //         </main>
// // // //         {/* Card container with perspective */}
// // // //         <img src="/Ellipse 187.png" alt="ellipse" />
// // // //         <div className="relative w-full h-full perspective-[1000px]">
// // // //           {/* X Card - Left */}
// // // //           <div
// // // //             className="absolute left-0 sm:left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px] 
// // // //                       transform rotate-y-[-25deg] rotate-z-[5deg] translate-z-[-100px] origin-center
// // // //                       transition-all duration-500 hover:translate-z-[-50px] hover:rotate-y-[-15deg] "
// // // //           >
// // // //             <img
// // // //               src="public/Frame 651.png"
// // // //               alt="Crypto Card X"
// // // //               width={500}
// // // //               height={300}
// // // //               className="w-full h-auto rounded-2xl "
// // // //             />
// // // //           </div>

// // // //           {/* Edge Card - Middle */}
// // // //           <div
// // // //             className="absolute left-[calc(50%-140px)] sm:left-[calc(50%-160px)] md:left-[calc(50%-190px)] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px]
// // // //                       transform rotate-y-[-5deg] rotate-z-[2deg] translate-z-[-50px] origin-center
// // // //                       transition-all duration-500 hover:translate-z-[0px] hover:rotate-y-[0deg] z-10"
// // // //           >
// // // //             <img
// // // //               src="public/Frame 652.png"
// // // //               alt="Crypto Card Edge"
// // // //               width={500}
// // // //               height={300}
// // // //               className="w-full h-auto rounded-2xl "
// // // //             />
// // // //           </div>

// // // //           {/* Lite Card - Right */}
// // // //           <div
// // // //             className="absolute right-0 sm:right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px]
// // // //                       transform rotate-y-[15deg] rotate-z-[-3deg] translate-z-[0px] origin-center
// // // //                       transition-all duration-500 hover:translate-z-[50px] hover:rotate-y-[5deg] z-20"
// // // //           >
// // // //             <img
// // // //               src="public/Frame 6.png"
// // // //               alt="Crypto Card Lite"
// // // //               width={500}
// // // //               height={300}
// // // //               className="w-full h-auto"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile view - stacked cards with less extreme angles */}
// // // //         {isMobile && (
// // // //           <style jsx global>{`
// // // //             .perspective-[1000px] {
// // // //               perspective: 1000px;
// // // //             }
// // // //             .rotate-y-[-25deg] {
// // // //               transform: rotateY(-15deg) rotateZ(5deg) translateZ(-50px);
// // // //             }
// // // //             .rotate-y-[-5deg] {
// // // //               transform: rotateY(-2deg) rotateZ(2deg) translateZ(-25px);
// // // //             }
// // // //             .rotate-y-[15deg] {
// // // //               transform: rotateY(8deg) rotateZ(-3deg) translateZ(0px);
// // // //             }
// // // //           `}</style>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import { useState,useEffect } from "react";

// // // export default function CryptoCards() {
// // //   const [deviceSize, setDeviceSize] = useState("desktop");

// // //   useEffect(() => {
// // //     const checkDeviceSize = () => {
// // //       const width = window.innerWidth;
// // //       if (width < 640) {
// // //         setDeviceSize("mobile");
// // //       } else if (width < 1024) {
// // //         setDeviceSize("tablet");
// // //       } else {
// // //         setDeviceSize("desktop");
// // //       }
// // //     };

// // //     checkDeviceSize();
// // //     window.addEventListener("resize", checkDeviceSize);

// // //     return () => {
// // //       window.removeEventListener("resize", checkDeviceSize);
// // //     };
// // //   }, []);

// // //   // Dynamic card positioning based on device size
// // //   const getCardStyles = () => {
// // //     const styles = {
// // //       leftCard: {
// // //         left: deviceSize === "mobile" ? "5%" : deviceSize === "tablet" ? "10%" : "15%",
// // //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// // //         zIndex: 1,
// // //         transform: deviceSize === "mobile" 
// // //           ? "rotateY(-10deg) rotateZ(3deg) translateZ(-30px)" 
// // //           : "rotateY(-25deg) rotateZ(5deg) translateZ(-100px)"
// // //       },
// // //       middleCard: {
// // //         left: deviceSize === "mobile" ? "calc(50% - 120px)" : deviceSize === "tablet" ? "calc(50% - 150px)" : "calc(50% - 190px)",
// // //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// // //         zIndex: 2,
// // //         transform: deviceSize === "mobile" 
// // //           ? "rotateY(-3deg) rotateZ(1deg) translateZ(-20px)" 
// // //           : "rotateY(-5deg) rotateZ(2deg) translateZ(-50px)"
// // //       },
// // //       rightCard: {
// // //         right: deviceSize === "mobile" ? "5%" : deviceSize === "tablet" ? "10%" : "15%",
// // //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// // //         zIndex: 3,
// // //         transform: deviceSize === "mobile" 
// // //           ? "rotateY(5deg) rotateZ(-2deg) translateZ(0px)" 
// // //           : "rotateY(15deg) rotateZ(-3deg) translateZ(0px)"
// // //       }
// // //     };
// // //     return styles;
// // //   };

// // //   const cardStyles = getCardStyles();

// // //   return (
// // //     <div className="relative w-full overflow-hidden">
// // //       <div className="relative w-full mx-auto h-auto">
// // //         {/* Hero section */}
// // //         <main className="flex w-full flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
// // //           <section className="w-full mx-auto text-center">
// // //             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
// // //               Built on Base. Backed by <span className="bg-gradient-to-b from-[#2EFD35] to-[#1fa526] bg-clip-text text-transparent">Coinbase.</span>
// // //             </h1>
// // //             <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-2">
// // //               All Base Cards are secured through Coinbase&apos;s trusted
// // //               infrastructure and run on the Base Layer 2 blockchain—bringing you
// // //               speed, savings, and unmatched transparency.
// // //             </p>
// // //           </section>
// // //         </main>

// // //         {/* Background element */}
// // //         <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
// // //           <img src="/Ellipse 187.png" alt="ellipse" className="w-full max-w-4xl" />
// // //         </div>

// // //         {/* Cards container with perspective */}
// // //         <div className="relative w-full h-full perspective-[1000px]">
// // //           {/* X Card - Left */}
// // //           <div
// // //             className="absolute left-0 sm:left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px] 
// // //                       transform rotate-y-[-25deg] rotate-z-[5deg] translate-z-[-100px] origin-center
// // //                       transition-all duration-500 hover:translate-z-[-50px] hover:rotate-y-[-15deg] "
// // //           >
// // //             <img
// // //               src="public/Frame 651.png"
// // //               alt="Crypto Card X"
// // //               width={500}
// // //               height={300}
// // //               className="w-full h-auto rounded-2xl "
// // //             />
// // //           </div>

// // //           {/* Edge Card - Middle */}
// // //           <div
// // //             className="absolute left-[calc(50%-140px)] sm:left-[calc(50%-160px)] md:left-[calc(50%-190px)] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px]
// // //                       transform rotate-y-[-5deg] rotate-z-[2deg] translate-z-[-50px] origin-center
// // //                       transition-all duration-500 hover:translate-z-[0px] hover:rotate-y-[0deg] z-10"
// // //           >
// // //             <img
// // //               src="public/Frame 652.png"
// // //               alt="Crypto Card Edge"
// // //               width={500}
// // //               height={300}
// // //               className="w-full h-auto rounded-2xl "
// // //             />
// // //           </div>

// // //           {/* Lite Card - Right */}
// // //           <div
// // //             className="absolute right-0 sm:right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px]
// // //                       transform rotate-y-[15deg] rotate-z-[-3deg] translate-z-[0px] origin-center
// // //                       transition-all duration-500 hover:translate-z-[50px] hover:rotate-y-[5deg] z-20"
// // //           >
// // //             <img
// // //               src="public/Frame 6.png"
// // //               alt="Crypto Card Lite"
// // //               width={500}
// // //               height={300}
// // //               className="w-full h-auto"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useEffect, useState } from "react";

// // export default function CryptoCards() {
// //   const [deviceSize, setDeviceSize] = useState("desktop");

// //   useEffect(() => {
// //     const checkDeviceSize = () => {
// //       const width = window.innerWidth;
// //       if (width < 640) {
// //         setDeviceSize("mobile");
// //       } else if (width < 1024) {
// //         setDeviceSize("tablet");
// //       } else {
// //         setDeviceSize("desktop");
// //       }
// //     };

// //     checkDeviceSize();
// //     window.addEventListener("resize", checkDeviceSize);

// //     return () => {
// //       window.removeEventListener("resize", checkDeviceSize);
// //     };
// //   }, []);

// //   // Dynamic card positioning based on device size
// //   const getCardStyles = () => {
// //     const styles = {
// //       leftCard: {
// //         left: deviceSize === "mobile" ? "5%" : deviceSize === "tablet" ? "10%" : "15%",
// //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// //         zIndex: 1,
// //         transform: deviceSize === "mobile" 
// //           ? "rotateY(-10deg) rotateZ(3deg) translateZ(-30px)" 
// //           : "rotateY(-25deg) rotateZ(5deg) translateZ(-100px)"
// //       },
// //       middleCard: {
// //         left: deviceSize === "mobile" ? "calc(50% - 120px)" : deviceSize === "tablet" ? "calc(50% - 150px)" : "calc(50% - 190px)",
// //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// //         zIndex: 2,
// //         transform: deviceSize === "mobile" 
// //           ? "rotateY(-3deg) rotateZ(1deg) translateZ(-20px)" 
// //           : "rotateY(-5deg) rotateZ(2deg) translateZ(-50px)"
// //       },
// //       rightCard: {
// //         right: deviceSize === "mobile" ? "5%" : deviceSize === "tablet" ? "10%" : "15%",
// //         width: deviceSize === "mobile" ? "240px" : deviceSize === "tablet" ? "300px" : "380px",
// //         zIndex: 3,
// //         transform: deviceSize === "mobile" 
// //           ? "rotateY(5deg) rotateZ(-2deg) translateZ(0px)" 
// //           : "rotateY(15deg) rotateZ(-3deg) translateZ(0px)"
// //       }
// //     };
// //     return styles;
// //   };

// //   const cardStyles = getCardStyles();

// //   return (
// //     <div className="relative w-full overflow-hidden">
// //       <div className="relative w-full mx-auto h-auto">
// //         {/* Hero section */}
// //         <main className="flex w-full flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
// //           <section className="w-full mx-auto text-center">
// //             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
// //               Built on Base. Backed by <span className="bg-gradient-to-b from-[#2EFD35] to-[#1fa526] bg-clip-text text-transparent">Coinbase.</span>
// //             </h1>
// //             <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-2">
// //               All Base Cards are secured through Coinbase&apos;s trusted
// //               infrastructure and run on the Base Layer 2 blockchain—bringing you
// //               speed, savings, and unmatched transparency.
// //             </p>
// //           </section>
// //         </main>

// //         {/* Background element */}
// //         <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
// //           <img src="/Ellipse 187.png" alt="ellipse" className="w-full max-w-4xl" />
// //         </div>

// //         {/* Cards container with perspective */}
// //         <div className="relative w-full flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6 md:px-8">
// //           <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-300 hover:scale-105">
// //             <img 
// //               src="public/coinbase-removebg-preview.png" 
// //               alt="Coinbase" 
// //               className="w-full h-auto object-contain"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";

// export default function CoinbaseSection() {
//   const [deviceSize, setDeviceSize] = useState("desktop");

//   useEffect(() => {
//     const checkDeviceSize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setDeviceSize("mobile");
//       } else if (width < 1024) {
//         setDeviceSize("tablet");
//       } else {
//         setDeviceSize("desktop");
//       }
//     };

//     checkDeviceSize();
//     window.addEventListener("resize", checkDeviceSize);

//     return () => {
//       window.removeEventListener("resize", checkDeviceSize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="relative w-full mx-auto">
//         {/* Hero section */}
//         <main className="flex w-full flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
//           <section className="w-full mx-auto text-center">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
//               Built on Base. Backed by <span className="bg-gradient-to-b from-[#2EFD35] to-[#1fa526] bg-clip-text text-transparent">Coinbase.</span>
//             </h1>
//             <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-2">
//               All Base Cards are secured through Coinbase&apos;s trusted
//               infrastructure and run on the Base Layer 2 blockchain—bringing you
//               speed, savings, and unmatched transparency.
//             </p>
//           </section>
//         </main>

//         {/* Background element */}
//         <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
//           <img src="/Ellipse 187.png" alt="ellipse" className="w-full max-w-4xl" />
//         </div>

//         {/* Single Coinbase Image Container */}
//         <div className="relative w-full flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6 md:px-8">
//           <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-300 hover:scale-105">
//             <img 
//               src="public/coinbase-removebg-preview.png" 
//               alt="Coinbase" 
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function CoinbaseSection() {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceSize("mobile");
      } else if (width < 1024) {
        setDeviceSize("tablet");
      } else {
        setDeviceSize("desktop");
      }
    };

    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden md:mt-32">
      <div className="relative w-full mx-auto">
        {/* Hero section */}
        <main className="flex w-full flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
          <section className="w-full mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Built on Base. Backed by <span className="bg-gradient-to-b from-[#2EFD35] to-[#1fa526] bg-clip-text text-transparent">Coinbase.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-2">
              All Base Cards are secured through Coinbase's trusted
              infrastructure and run on the Base Layer 2 blockchain—bringing you
              speed, savings, and unmatched transparency.
            </p>
          </section>
        </main>

        {/* Content container with properly positioned elements */}
        <div className="relative w-full py-8 sm:py-12 md:py-16">
          {/* Background element positioned with z-index */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full flex justify-center z-0">
            <div className="w-full max-w-4xl px-4">
              <img 
                src="/Ellipse 187.png" 
                alt="ellipse" 
                className="w-full h-auto opacity-90"
              />
            </div>
          </div>

          {/* Single Coinbase Image Container with higher z-index */}
          
        </div>
      </div>
      <div className="relative mb-24 z-10 w-full flex justify-center px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-300 hover:scale-105">
              <img 
                src="/coinbase-removebg-preview.png" 
                alt="Coinbase" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
    </div>
  );
}