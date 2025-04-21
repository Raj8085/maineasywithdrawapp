/* eslint-disable react/no-unknown-property */
// /* eslint-disable react/no-unknown-property */
// // // /* eslint-disable react/no-unknown-property */
// // // // /* eslint-disable react/no-unknown-property */
// // // // // /* eslint-disable react/no-unknown-property */
// // // // // // // // // // // /* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

// // // // // // // // // // // function CryptoLanding() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // // // // // // // //       {/* Left content section */}
// // // // // // // // // // //       <div className="w-full md:w-1/2 mb-12 md:mb-0">
// // // // // // // // // // //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
// // // // // // // // // // //           The Evolution of Crypto Starts Here
// // // // // // // // // // //         </h1>
// // // // // // // // // // //         <p className="text-gray-700 mb-6">
// // // // // // // // // // //           Coinbase is one of the world&apos;s most trusted crypto platforms-
// // // // // // // // // // //           empowering millions to buy, sell, and grow with digital assets.
// // // // // // // // // // //         </p>
// // // // // // // // // // //         <p className="text-gray-700">
// // // // // // // // // // //           Now, with Base.Coinbase introduction a new era: faster
// // // // // // // // // // //           transaction, lower costs, and real-world utility-all while
// // // // // // // // // // //           keeping security and simplicity at the core
// // // // // // // // // // //         </p>
// // // // // // // // // // //       </div>
      
// // // // // // // // // // //       {/* Right coin animation section */}
// // // // // // // // // // //       <div className="w-full md:w-1/2 relative h-64 md:h-96">
// // // // // // // // // // //         {/* Individual floating coins */}
// // // // // // // // // // //         <div className="absolute top-0 right-12 animate-float-slow">
// // // // // // // // // // //           <CoinIcon color="blue" size="lg" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute top-24 right-24 animate-float-medium">
// // // // // // // // // // //           <CoinIcon color="purple" size="md" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute top-48 right-8 animate-float-fast">
// // // // // // // // // // //           <CoinIcon color="yellow" size="lg" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute top-16 right-0 animate-float-medium">
// // // // // // // // // // //           <CoinIcon color="gray" size="md" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute bottom-0 right-16 animate-float-slow">
// // // // // // // // // // //           <CoinIcon color="green" size="md" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute bottom-20 right-36 animate-float-fast">
// // // // // // // // // // //           <CoinIcon color="indigo" size="md" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // // Coin component with different colors
// // // // // // // // // // // function CoinIcon({ color, size }) {
// // // // // // // // // // //   const sizeClasses = {
// // // // // // // // // // //     sm: "w-10 h-10",
// // // // // // // // // // //     md: "w-16 h-16",
// // // // // // // // // // //     lg: "w-20 h-20"
// // // // // // // // // // //   };
  
// // // // // // // // // // //   const colorClasses = {
// // // // // // // // // // //     blue: "text-blue-400 bg-blue-100",
// // // // // // // // // // //     purple: "text-purple-400 bg-purple-100",
// // // // // // // // // // //     yellow: "text-yellow-400 bg-yellow-100",
// // // // // // // // // // //     gray: "text-gray-400 bg-gray-100",
// // // // // // // // // // //     green: "text-green-400 bg-green-100",
// // // // // // // // // // //     indigo: "text-indigo-400 bg-indigo-100"
// // // // // // // // // // //   };
  
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
// // // // // // // // // // //       <span className="text-2xl">₿</span>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // // export default CryptoLanding;



// // // // // // // // // // function CryptoLanding() {
// // // // // // // // // //   // Array of coin images - update these paths to match your actual image files
// // // // // // // // // //   const coinImages = [
// // // // // // // // // //     '/State=state 1.png',  // Using the provided image path
// // // // // // // // // //     '/State=state 1.png',  // Duplicate for now, replace with other coin images
// // // // // // // // // //     '/State=state 1.png',
// // // // // // // // // //     '/State=state 1.png',
// // // // // // // // // //     '/State=state 1.png',
// // // // // // // // // //     '/State=state 1.png',
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // // // // // // //       {/* Left content section */}
// // // // // // // // // //       <div className="w-full md:w-1/2 mb-12 md:mb-0">
// // // // // // // // // //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
// // // // // // // // // //           The Evolution of Crypto Starts Here
// // // // // // // // // //         </h1>
// // // // // // // // // //         <p className="text-gray-700 mb-6">
// // // // // // // // // //           Coinbase is one of the world's most trusted crypto platforms-
// // // // // // // // // //           empowering millions to buy, sell, and grow with digital assets.
// // // // // // // // // //         </p>
// // // // // // // // // //         <p className="text-gray-700">
// // // // // // // // // //           Now, with Base.Coinbase introduction a new era: faster
// // // // // // // // // //           transaction, lower costs, and real-world utility-all while
// // // // // // // // // //           keeping security and simplicity at the core
// // // // // // // // // //         </p>
// // // // // // // // // //       </div>
      
// // // // // // // // // //       {/* Right coin animation section */}
// // // // // // // // // //       <div className="w-full md:w-1/2 relative h-64 md:h-96">
// // // // // // // // // //         {/* Individual floating coins */}
// // // // // // // // // //         <div className="absolute top-0 right-12 animate-float-slow">
// // // // // // // // // //           <img src={coinImages[0]} alt="Cryptocurrency coin" className="w-20 h-20" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="absolute top-24 right-24 animate-float-medium">
// // // // // // // // // //           <img src={coinImages[1]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="absolute top-48 right-8 animate-float-fast">
// // // // // // // // // //           <img src={coinImages[2]} alt="Cryptocurrency coin" className="w-20 h-20" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="absolute top-16 right-0 animate-float-medium">
// // // // // // // // // //           <img src={coinImages[3]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="absolute bottom-0 right-16 animate-float-slow">
// // // // // // // // // //           <img src={coinImages[4]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="absolute bottom-20 right-36 animate-float-fast">
// // // // // // // // // //           <img src={coinImages[5]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // export default CryptoLanding;


// // // // // // // // // import React from 'react';

// // // // // // // // // function CryptoLanding() {
// // // // // // // // //   // Assuming you have multiple coin images
// // // // // // // // //   const coinImages = [
// // // // // // // // //     '/State=state 1.png', // Center coin
// // // // // // // // //     '/State=state 1.png', // First coin in circle
// // // // // // // // //     '/State=state 1.png', // Second coin in circle
// // // // // // // // //     '/State=state 1.png', // Third coin in circle
// // // // // // // // //     '/State=state 1.png', // Fourth coin in circle
// // // // // // // // //     '/State=state 1.png', // Fifth coin in circle
// // // // // // // // //     '/State=state 1.png', // Sixth coin in circle
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // // // // // //       {/* Left content section */}
// // // // // // // // //       <div className="w-full md:w-1/2 mb-12 md:mb-0">
// // // // // // // // //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
// // // // // // // // //           The Evolution of Crypto Starts Here
// // // // // // // // //         </h1>
// // // // // // // // //         <p className="text-gray-700 mb-6">
// // // // // // // // //           Coinbase is one of the world's most trusted crypto platforms-
// // // // // // // // //           empowering millions to buy, sell, and grow with digital assets.
// // // // // // // // //         </p>
// // // // // // // // //         <p className="text-gray-700">
// // // // // // // // //           Now, with Base.Coinbase introduction a new era: faster
// // // // // // // // //           transaction, lower costs, and real-world utility-all while
// // // // // // // // //           keeping security and simplicity at the core
// // // // // // // // //         </p>
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Right coin animation section - circle layout */}
// // // // // // // // //       <div className="w-full md:w-1/2 relative h-64 md:h-96">
// // // // // // // // //         {/* Center coin */}
// // // // // // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float-medium">
// // // // // // // // //           <img src={coinImages[0]} alt="Center cryptocurrency coin" className="w-20 h-20" />
// // // // // // // // //         </div>
        
// // // // // // // // //         {/* Circle of coins - each positioned at different angles around a circle */}
// // // // // // // // //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float-slow">
// // // // // // // // //           <img src={coinImages[1]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="absolute top-1/4 right-0 transform translate-x-1/4 -translate-y-1/4 animate-float-fast">
// // // // // // // // //           <img src={coinImages[2]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="absolute bottom-0 right-1/4 transform translate-x-1/4 translate-y-1/4 animate-float-medium">
// // // // // // // // //           <img src={coinImages[3]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-float-slow">
// // // // // // // // //           <img src={coinImages[4]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="absolute top-1/4 left-0 transform -translate-x-1/4 -translate-y-1/4 animate-float-fast">
// // // // // // // // //           <img src={coinImages[5]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-float-medium">
// // // // // // // // //           <img src={coinImages[6]} alt="Cryptocurrency coin" className="w-16 h-16" />
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default CryptoLanding;



// // // // // // // // import { useState, useEffect } from 'react';

// // // // // // // // const CryptoLanding = () => {
// // // // // // // //   // For the circular arrangement of coins
// // // // // // // //   const [coins, setCoins] = useState([]);
// // // // // // // //   const centerX = 0;
// // // // // // // //   const centerY = 0;
// // // // // // // //   const radius = 150;
// // // // // // // //   const numCoins = 6;


// // // // // // // //   useEffect(() => {
// // // // // // // //     const generateCoins = () => {
// // // // // // // //       const coinArray = [];
      
// // // // // // // //       // Generate positions in a perfect circle
// // // // // // // //       for (let i = 0; i < numCoins; i++) {
// // // // // // // //         // Calculate position using circular trigonometry
// // // // // // // //         const angle = (i / numCoins) * 2 * Math.PI;
// // // // // // // //         const x = centerX + radius * Math.cos(angle);
// // // // // // // //         const y = centerY + radius * Math.sin(angle);
        
// // // // // // // //         // Assign different animation durations for variety
// // // // // // // //         const animationDuration = 3 + (i % 3); // Varies between 3, 4, and 5 seconds
        
// // // // // // // //         coinArray.push({
// // // // // // // //           id: i,
// // // // // // // //           x,
// // // // // // // //           y,
// // // // // // // //           animationDuration,
// // // // // // // //           size: 16 + (i % 2) * 4 // Alternates between 16px and 20px
// // // // // // // //         });
// // // // // // // //       }
// // // // // // // //       setCoins(coinArray);
// // // // // // // //     };
    
// // // // // // // //     generateCoins();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // // // // //       {/* Left content section */}
// // // // // // // //       <div className="w-full md:w-1/2 mb-12 md:mb-0">
// // // // // // // //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
// // // // // // // //           The Evolution of Crypto Starts Here
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-gray-700 mb-6">
// // // // // // // //           Coinbase is one of the world&apos;s most trusted crypto platforms-
// // // // // // // //           empowering millions to buy, sell, and grow with digital assets.
// // // // // // // //         </p>
// // // // // // // //         <p className="text-gray-700">
// // // // // // // //           Now, with Base.Coinbase introduction a new era: faster
// // // // // // // //           transaction, lower costs, and real-world utility-all while
// // // // // // // //           keeping security and simplicity at the core
// // // // // // // //         </p>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Right coin animation section - proper circle layout */}
// // // // // // // //       <div className="w-full md:w-1/2 relative h-96">
// // // // // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // // // // // // //           {/* Center coin */}
// // // // // // // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animation: `float 4s ease-in-out infinite`}}>
// // // // // // // //             <img src="/State=state 1.png" alt="Center cryptocurrency coin" className="w-20 h-20" />
// // // // // // // //           </div>
          
// // // // // // // //           {/* Circle of coins with mathematically calculated positions */}
// // // // // // // //           {coins.map((coin) => (
// // // // // // // //             <div 
// // // // // // // //               key={coin.id} 
// // // // // // // //               className="absolute"
// // // // // // // //               style={{
// // // // // // // //                 left: `calc(50% + ${coin.x}px)`,
// // // // // // // //                 top: `calc(50% + ${coin.y}px)`,
// // // // // // // //                 transform: 'translate(-50%, -50%)',
// // // // // // // //                 animation: `float ${coin.animationDuration}s ease-in-out infinite`
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               <img 
// // // // // // // //                 src="/State=state 1.png" 
// // // // // // // //                 alt={`Cryptocurrency coin ${coin.id}`} 
// // // // // // // //                 className={`w-${coin.size} h-${coin.size}`} 
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };
// // // // // // // // export default CryptoLanding;



// // // // // // // import { useState, useEffect } from 'react';

// // // // // // // const CryptoLanding = () => {
// // // // // // //   // Array of your 7 different coin images
// // // // // // //   const coinImages = [
// // // // // // //     '/Coin.png',  // Center coin image - replace with your actual path
// // // // // // //     '/State=state 2.png',  // First coin in circle - replace with your actual path
// // // // // // //     '/State=state 3 (1).png',  // Second coin
// // // // // // //     '/Cam2-removebg-preview.png',  // Third coin/Cam2-removebg-preview.png
// // // // // // //     '/State=state 3 (1).png',
// // // // // // //     '/Cam2-removebg-preview.png',
// // // // // // //   ];
  
// // // // // // //   // For the circular arrangement of coins
// // // // // // //   const [coins, setCoins] = useState([]);
// // // // // // //   const centerX = 0;
// // // // // // //   const centerY = 0;
// // // // // // //   const radius = 200;
// // // // // // //   const numCoins = 5; // 6 coins in the circle, 1 in the center

// // // // // // //   useEffect(() => {
// // // // // // //     const generateCoins = () => {
// // // // // // //       const coinArray = [];
      
// // // // // // //       // Generate positions in a perfect circle for the 6 outer coins
// // // // // // //       for (let i = 0; i < numCoins; i++) {
// // // // // // //         // Calculate position using circular trigonometry
// // // // // // //         const angle = (i / numCoins) * 2 * Math.PI;
// // // // // // //         const x = centerX + radius * Math.cos(angle);
// // // // // // //         const y = centerY + radius * Math.sin(angle);
        
// // // // // // //         // Assign different animation durations for variety
// // // // // // //         const animationDuration = 3 + (i % 3); // Varies between 3, 4, and 5 seconds
        
// // // // // // //         coinArray.push({
// // // // // // //           id: i,
// // // // // // //           x,
// // // // // // //           y,
// // // // // // //           animationDuration,
// // // // // // //           size: 144 + (i % 2) * 36, // Alternates between 16px and 20px
// // // // // // //           image: coinImages[i + 1] // Use different coin images for each position (+1 because center coin is at index 0)
// // // // // // //         });
// // // // // // //       }
      
// // // // // // //       setCoins(coinArray);
// // // // // // //     };
    
// // // // // // //     generateCoins();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // // // //       {/* Left content section */}
// // // // // // //       <div className="w-full md:w-1/2 max-w-xl">
// // // // // // //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
// // // // // // //               The Evolution of Crypto Starts Here
// // // // // // //             </h1>
// // // // // // //             <div className="space-y-4 text-gray-700">
// // // // // // //               <p className="text-base md:text-lg">
// // // // // // //                 Coinbase is one of the world&apos;s most trusted crypto platforms- empowering millions to buy, sell, and
// // // // // // //                 grow with digital assets.
// // // // // // //               </p>
// // // // // // //               <p className="text-base md:text-lg">
// // // // // // //                 Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
// // // // // // //                 utility-all while keeping security and simplicity at the core
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
      
// // // // // // //       {/* Right coin animation section - proper circle layout */}
// // // // // // //       <div className="w-full md:w-1/2 relative h-96">
// // // // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // // // // // //           {/* Center coin */}
// // // // // // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animation: `float 4s ease-in-out infinite`}}>
// // // // // // //             <img src={coinImages[0]} alt="Center cryptocurrency coin" className="w-20 h-20" />
// // // // // // //           </div>
          
// // // // // // //           {/* Circle of coins with mathematically calculated positions */}
// // // // // // //           {coins.map((coin) => (
// // // // // // //             <div 
// // // // // // //               key={coin.id} 
// // // // // // //               className="absolute"
// // // // // // //               style={{
// // // // // // //                 left: `calc(50% + ${coin.x}px)`,
// // // // // // //                 top: `calc(50% + ${coin.y}px)`,
// // // // // // //                 transform: 'translate(-50%, -50%)',
// // // // // // //                 animation: `float ${coin.animationDuration}s ease-in-out infinite`
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <img 
// // // // // // //                 src={coin.image} 
// // // // // // //                 alt={`Cryptocurrency coin ${coin.id + 1}`} 
// // // // // // //                 width={coin.size}
// // // // // // //                 height={coin.size}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CryptoLanding;


// // // // // import { useState, useEffect } from 'react';

// // // // // const CryptoLanding = () => {
// // // // //   // 6 total coins = 1 center + 5 around
// // // // //   const coinImages = [
// // // // //     '/Coin.png',                    // Center coin
// // // // //     '/State=state 2.png',
// // // // //     '/State=state 3 (1).png',
// // // // //     '/Cam2-removebg-preview.png',
// // // // //     '/State=state 3 (1).png',
// // // // //     '/Cam2-removebg-preview.png',
// // // // //   ];

// // // // //   const [coins, setCoins] = useState([]);
// // // // //   const centerX = 0;
// // // // //   const centerY = 0;
// // // // //   const radius = 220;
// // // // //   const numCoins = 5; // 5 outer coins

// // // // //   useEffect(() => {
// // // // //     const generateCoins = () => {
// // // // //       const coinArray = [];

// // // // //       // Add a slight rotation offset to balance the layout
// // // // //       const angleOffset = Math.PI / 2; // Start at top (90 degrees)

// // // // //       for (let i = 0; i < numCoins; i++) {
// // // // //         const angle = (i / numCoins) * 2 * Math.PI - angleOffset;
// // // // //         const x = centerX + radius * Math.cos(angle);
// // // // //         const y = centerY + radius * Math.sin(angle);

// // // // //         const animationDuration = 3 + (i % 3);

// // // // //         coinArray.push({
// // // // //           id: i,
// // // // //           x,
// // // // //           y,
// // // // //           animationDuration,
// // // // //           size: 160 + (i % 2) * 40,
// // // // //           image: coinImages[i + 1], // +1 because center coin is at index 0
// // // // //         });
// // // // //       }

// // // // //       setCoins(coinArray);
// // // // //     };

// // // // //     generateCoins();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
// // // // //       {/* Left content section */}
// // // // //       <div className="w-full md:w-1/2 max-w-xl">
// // // // //         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
// // // // //           The Evolution of Crypto Starts Here
// // // // //         </h1>
// // // // //         <div className="space-y-4 text-gray-700">
// // // // //           <p className="text-base md:text-lg">
// // // // //             Coinbase is one of the world&apos;s most trusted crypto platforms — empowering millions to buy, sell, and
// // // // //             grow with digital assets.
// // // // //           </p>
// // // // //           <p className="text-base md:text-lg">
// // // // //             Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
// // // // //             utility — all while keeping security and simplicity at the core.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Right coin animation section */}
// // // // //       <div className="w-full md:w-1/2 relative h-96">
// // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // // // //           {/* Center coin */}
// // // // //           <div
// // // // //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// // // // //             style={{ animation: `float 4s ease-in-out infinite` }}
// // // // //           >
// // // // //             <img src={coinImages[0]} alt="Center cryptocurrency coin" className="w-40 h-40" />
// // // // //           </div>

// // // // //           {/* Outer coins */}
// // // // //           {coins.map((coin) => (
// // // // //             <div
// // // // //               key={coin.id}
// // // // //               className="absolute"
// // // // //               style={{
// // // // //                 left: `calc(50% + ${coin.x}px)`,
// // // // //                 top: `calc(50% + ${coin.y}px)`,
// // // // //                 transform: 'translate(-50%, -50%)',
// // // // //                 animation: `float ${coin.animationDuration}s ease-in-out infinite`,
// // // // //               }}
// // // // //             >
// // // // //               <img
// // // // //                 src={coin.image}
// // // // //                 alt={`Cryptocurrency coin ${coin.id + 1}`}
// // // // //                 width={coin.size}
// // // // //                 height={coin.size}
// // // // //               />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CryptoLanding;




// // // // // // import { useState, useEffect } from 'react';

// // // // // // const CryptoLanding = () => {
// // // // // //   // 6 total coins = 1 center + 5 around
// // // // // //   const coinImages = [
// // // // // //     '/Coin.png',                    // Center coin
// // // // // //     '/State=state 2.png',
// // // // // //     '/State=state 3 (1).png',
// // // // // //     '/Cam2-removebg-preview.png',
// // // // // //     '/State=state 3 (1).png',
// // // // // //     '/Cam2-removebg-preview.png',
// // // // // //   ];
  
// // // // // //   const [coins, setCoins] = useState([]);
// // // // // //   const [setRadius] = useState(220);
// // // // // //   const centerX = 0;
// // // // // //   const centerY = 0;
// // // // // //   const numCoins = 5; // 5 outer coins

// // // // // //   // Function to calculate radius based on viewport width
// // // // // //   const calculateRadius = () => {
// // // // // //     const width = window.innerWidth;
// // // // // //     if (width < 640) {
// // // // // //       return 120; // Small mobile devices
// // // // // //     } else if (width < 768) {
// // // // // //       return 160; // Larger mobile devices
// // // // // //     } else if (width < 1024) {
// // // // // //       return 180; // Tablets
// // // // // //     } else {
// // // // // //       return 220; // Desktop
// // // // // //     }
// // // // // //   };

// // // // // //   // Function to calculate coin size based on viewport width
// // // // // //   const calculateCoinSize = (baseSize) => {
// // // // // //     const width = window.innerWidth;
// // // // // //     if (width < 640) {
// // // // // //       return baseSize * 0.5; // Small mobile devices
// // // // // //     } else if (width < 768) {
// // // // // //       return baseSize * 0.65; // Larger mobile devices
// // // // // //     } else if (width < 1024) {
// // // // // //       return baseSize * 0.8; // Tablets
// // // // // //     } else {
// // // // // //       return baseSize; // Desktop
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     // Function to generate coins with the current radius
// // // // // //     const generateCoins = () => {
// // // // // //       const currentRadius = calculateRadius();
// // // // // //       const coinArray = [];
// // // // // //       // Add a slight rotation offset to balance the layout
// // // // // //       const angleOffset = Math.PI / 2; // Start at top (90 degrees)
      
// // // // // //       for (let i = 0; i < numCoins; i++) {
// // // // // //         const angle = (i / numCoins) * 2 * Math.PI - angleOffset;
// // // // // //         const x = centerX + currentRadius * Math.cos(angle);
// // // // // //         const y = centerY + currentRadius * Math.sin(angle);
// // // // // //         const animationDuration = 3 + (i % 3);
// // // // // //         const baseSize = 160 + (i % 2) * 40;
        
// // // // // //         coinArray.push({
// // // // // //           id: i,
// // // // // //           x,
// // // // // //           y,
// // // // // //           animationDuration,
// // // // // //           size: calculateCoinSize(baseSize),
// // // // // //           image: coinImages[i + 1], // +1 because center coin is at index 0
// // // // // //         });
// // // // // //       }
      
// // // // // //       setCoins(coinArray);
// // // // // //       setRadius(currentRadius);
// // // // // //     };

// // // // // //     // Generate coins initially
// // // // // //     generateCoins();

// // // // // //     // Update coins whenever window is resized
// // // // // //     const handleResize = () => {
// // // // // //       generateCoins();
// // // // // //     };

// // // // // //     window.addEventListener('resize', handleResize);
// // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // //   }, []);

// // // // // //   // Calculate center coin size based on viewport
// // // // // //   const centerCoinSize = calculateCoinSize(160);

// // // // // //   return (
// // // // // //     <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 md:p-8">
// // // // // //       {/* Left content section */}
// // // // // //       <div className="w-full lg:w-1/2 max-w-xl mb-12 lg:mb-0 text-center lg:text-left">
// // // // // //         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
// // // // // //           The Evolution of Crypto Starts Here
// // // // // //         </h1>
// // // // // //         <div className="space-y-3 md:space-y-4 text-gray-700 px-4 sm:px-0">
// // // // // //           <p className="text-sm sm:text-base md:text-lg">
// // // // // //             Coinbase is one of the world&apos;s most trusted crypto platforms — empowering millions to buy, sell, and
// // // // // //             grow with digital assets.
// // // // // //           </p>
// // // // // //           <p className="text-sm sm:text-base md:text-lg">
// // // // // //             Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
// // // // // //             utility — all while keeping security and simplicity at the core.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {/* Right coin animation section */}
// // // // // //       <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96">
// // // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // // // // //           {/* Center coin */}
// // // // // //           <div
// // // // // //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// // // // // //             style={{ animation: `float 4s ease-in-out infinite` }}
// // // // // //           >
// // // // // //             <img 
// // // // // //               src={coinImages[0]} 
// // // // // //               alt="Center cryptocurrency coin" 
// // // // // //               className="w-20 sm:w-24 md:w-32 lg:w-40" 
// // // // // //               style={{ width: `${centerCoinSize}px`, height: `${centerCoinSize}px` }}
// // // // // //             />
// // // // // //           </div>
          
// // // // // //           {/* Outer coins */}
// // // // // //           {coins.map((coin) => (
// // // // // //             <div
// // // // // //               key={coin.id}
// // // // // //               className="absolute"
// // // // // //               style={{
// // // // // //                 left: `calc(50% + ${coin.x}px)`,
// // // // // //                 top: `calc(50% + ${coin.y}px)`,
// // // // // //                 transform: 'translate(-50%, -50%)',
// // // // // //                 animation: `float ${coin.animationDuration}s ease-in-out infinite`,
// // // // // //               }}
// // // // // //             >
// // // // // //               <img
// // // // // //                 src={coin.image}
// // // // // //                 alt={`Cryptocurrency coin ${coin.id + 1}`}
// // // // // //                 style={{
// // // // // //                   width: `${coin.size}px`,
// // // // // //                   height: `${coin.size}px`,
// // // // // //                 }}
// // // // // //               />
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {/* Add global CSS animation for floating effect */}
// // // // // //       <style jsx global>{`
// // // // // //         @keyframes float {
// // // // // //           0% {
// // // // // //             transform: translate(-50%, -50%);
// // // // // //           }
// // // // // //           50% {
// // // // // //             transform: translate(-50%, -60%);
// // // // // //           }
// // // // // //           100% {
// // // // // //             transform: translate(-50%, -50%);
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CryptoLanding;





// // // // import { useState, useEffect } from 'react';

// // // // const CombinedCryptoPage = () => {
// // // //   // 6 total coins = 1 center + 5 around
// // // //   const coinImages = [
// // // //     '/Coin.png',                    // Center coin
// // // //     '/State=state 2.png',
// // // //     '/State=state 3 (1).png',
// // // //     '/Cam2-removebg-preview.png',
// // // //     '/State=state 3 (1).png',
// // // //     '/Cam2-removebg-preview.png',
// // // //   ];

// // // //   const [coins, setCoins] = useState([]);
// // // //   const centerX = 0;
// // // //   const centerY = 0;
// // // //   const radius = 220;
// // // //   const numCoins = 5; // 5 outer coins

// // // //   useEffect(() => {
// // // //     const generateCoins = () => {
// // // //       const coinArray = [];

// // // //       // Add a slight rotation offset to balance the layout
// // // //       const angleOffset = Math.PI / 2; // Start at top (90 degrees)

// // // //       for (let i = 0; i < numCoins; i++) {
// // // //         const angle = (i / numCoins) * 2 * Math.PI - angleOffset;
// // // //         const x = centerX + radius * Math.cos(angle);
// // // //         const y = centerY + radius * Math.sin(angle);

// // // //         const animationDuration = 3 + (i % 3);

// // // //         coinArray.push({
// // // //           id: i,
// // // //           x,
// // // //           y,
// // // //           animationDuration,
// // // //           size: 160 + (i % 2) * 40,
// // // //           image: coinImages[i + 1], // +1 because center coin is at index 0
// // // //         });
// // // //       }

// // // //       setCoins(coinArray);
// // // //     };

// // // //     generateCoins();
// // // //   }, []);

// // // //   return (
// // // //     <div className="">
// // // //       {/* Hero Section with Coins */}
// // // //       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4 sm:p-6 md:p-8">
// // // //         {/* Left content section */}
// // // //         <div className="w-full md:w-1/2 max-w-xl px-4">
// // // //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
// // // //             The Evolution of Crypto Starts Here
// // // //           </h1>
// // // //           <div className="space-y-4 text-gray-700">
// // // //             <p className="text-base md:text-lg">
// // // //               Coinbase is one of the world&apos;s most trusted crypto platforms — empowering millions to buy, sell, and
// // // //               grow with digital assets.
// // // //             </p>
// // // //             <p className="text-base md:text-lg">
// // // //               Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
// // // //               utility — all while keeping security and simplicity at the core.
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right coin animation section */}
// // // //         <div className="w-full md:w-1/2 relative h-96 mt-8 md:mt-0">
// // // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // // //             {/* Center coin */}
// // // //             <div
// // // //               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// // // //               style={{ animation: `float 4s ease-in-out infinite` }}
// // // //             >
// // // //               <img src={coinImages[0]} alt="Center cryptocurrency coin" className="w-32 sm:w-40 h-32 sm:h-40" />
// // // //             </div>

// // // //             {/* Outer coins */}
// // // //             {coins.map((coin) => (
// // // //               <div
// // // //                 key={coin.id}
// // // //                 className="absolute"
// // // //                 style={{
// // // //                   left: `calc(50% + ${coin.x * 0.7}px)`, // Scaled down for mobile
// // // //                   top: `calc(50% + ${coin.y * 0.7}px)`, // Scaled down for mobile
// // // //                   transform: 'translate(-50%, -50%)',
// // // //                   animation: `float ${coin.animationDuration}s ease-in-out infinite`,
// // // //                   '@media (min-width: 768px)': {
// // // //                     left: `calc(50% + ${coin.x}px)`,
// // // //                     top: `calc(50% + ${coin.y}px)`,
// // // //                   }
// // // //                 }}
// // // //               >
// // // //                 <img
// // // //                   src={coin.image}
// // // //                   alt={`Cryptocurrency coin ${coin.id + 1}`}
// // // //                   className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
// // // //                   style={{
// // // //                     width: coin.size * 0.6, // Scaled down for mobile
// // // //                     height: coin.size * 0.6, // Scaled down for mobile
// // // //                     maxWidth: '100%'
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Pricing Cards Section */}
// // // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
// // // //         <section className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
// // // //           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Introducing the Base Card Collection</h1>
// // // //           <h2 className="text-lg sm:text-xl lg:text-2xl mb-6">Your Wallet, Upgraded. Your Crypto, in Motion</h2>
// // // //           <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
// // // //             Three unique cards, one powerful network. The Base Card Collection gives you real-world spending power - world
// // // //             spending power - directly from your on-chain wallet. Shop, earn, and grow with every transaction.
// // // //           </p>
// // // //         </section>
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {/* BASE LITE Card */}
// // // //           <div className="rounded-3xl bg-[#FBF8FF] p-8 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm">
// // // //           <h2 className="text-3xl font-bold  mb-4 inline-block bg-gradient-to-b from-[#B569EF] to-[#0F001A] bg-clip-text text-transparent">BASE LITE</h2>
// // // //           <p className="text-xl font-medium mb-4">Simple. Smart. For everyday starters</p>
// // // //           <p className="text-gray-600 mb-8 font-normal">
// // // //             New users, casual spenders, and anyone looking to dip into crypto with confidence.
// // // //           </p>
// // // //           <div className="space-y-3 mb-8 w-full">
// // // //             <p className="font-medium">1.5% back in USDC or ETH</p>
// // // //             <p className="font-medium">No annual fee</p>
// // // //             <p className="font-medium">Easy wallet connection via Coinbase</p>
// // // //             <p className="font-medium">Clean, beginner-friendly interface</p>
// // // //           </div>
// // // //           <div className="w-full flex justify-end mt-6 ml-[64px] mb-[-36px]">
// // // //            <div className="w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[60px] relative">
// // // //            <img 
// // // //                  src="/Vector.png" 
// // // //                  alt="Vector" 
// // // //                  className="absolute inset-0 w-14 h-14 mt-8 ml-6"
// // // //                />
// // // //            </div>
// // // //          </div>
// // // //         </div>
// // // //           {/* BASE EDGE Card */}
// // // //           <div className="rounded-3xl bg-[#F2FFF2] p-8 flex flex-col items-center text-center">
// // // //           <h2 className="text-3xl font-bold  mb-4 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">BASE EDGE</h2>
// // // //           <p className="text-xl font-medium mb-4">Flexible, Fast, Build for daily crypto earners</p>
// // // //           <p className="text-gray-600 mb-8 font-normal">
// // // //           Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// // // //           </p>
// // // //           <div className="space-y-3 mb-8 w-full">
// // // //             <p className="font-medium">2.5% back in crypto
// // // //             </p>
// // // //             <p className="font-medium">Apple Pay & Google Pay enabled
// // // //             </p>
// // // //             <p className="font-medium">Auto top-up from your Base wallet
// // // //             </p>
// // // //             <p className="font-medium">Real-time spend tracking
// // // //             </p>
// // // //           </div>

// // // //           <div className="w-full flex justify-end mt-6 ml-14 mb-[-30px]">
// // // //            <div className="w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[60px] relative">
// // // //            <img 
// // // //                  src="/Vector (1).png" 
// // // //                  alt="Vector" 
// // // //                  className="absolute inset-0 w-14 h-14 mt-8 ml-6"
// // // //                />
// // // //            </div>
// // // //          </div>
// // // //         </div>

// // // //           {/* BASE X Card */}
// // // //           <div className="rounded-3xl bg-[#FFFCF5] p-8 flex flex-col items-center text-center">
// // // //           <h2 className="text-3xl font-bold  mb-4 inline-block bg-gradient-to-b from-[#F5BD33] to-[#6E5004] bg-clip-text text-transparent">BASE X</h2>
// // // //           <p className="text-xl font-medium mb-4">Elite, Exclusive, Designed for Web3</p>
// // // //           <p className="text-gray-600 mb-8 font-normal">
// // // //           Advanced users, crypto-native professionals, and high-volume spenders looking for maximum value.
// // // //           </p>
// // // //           <div className="space-y-3 mb-8 w-full">
// // // //             <p className="font-medium">5% crypto rewards on every spend
// // // //             </p>
// // // //             <p className="font-medium">NFT & Web3 unlocks
// // // //             </p>
// // // //             <p className="font-medium">VIP support + global lounge access
// // // //             </p>
// // // //             <p className="font-medium">Metal card with smart-chip security
// // // //             </p>
// // // //           </div>

// // // //           <div className="w-full flex justify-end mt-6 ml-14 mb-[-30px]">
// // // //            <div className="w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[60px] relative">
// // // //            <img 
// // // //                  src="/Vector (2).png" 
// // // //                  alt="Vector" 
// // // //                  className="absolute inset-0 w-14 h-14 mt-8 ml-6"
// // // //                />
// // // //            </div>
// // // //          </div>
// // // //         </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Add CSS for floating animation */}
// // // //       <style jsx>{`
// // // //         @keyframes float {
// // // //           0% {
// // // //             transform: translate(-50%, -50%) translateY(0px);
// // // //           }
// // // //           50% {
// // // //             transform: translate(-50%, -50%) translateY(-15px);
// // // //           }
// // // //           100% {
// // // //             transform: translate(-50%, -50%) translateY(0px);
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CombinedCryptoPage;



// // // import { useState, useEffect } from 'react';

// // // const CombinedCryptoPage = () => {
// // //   // 6 total coins = 1 center + 5 around
// // //   const coinImages = [
// // //     '/Coin.png',                    // Center coin
// // //     '/State=state 2.png',
// // //     '/State=state 3 (1).png',
// // //     '/Cam2-removebg-preview.png',
// // //     '/State=state 3 (1).png',
// // //     '/Cam2-removebg-preview.png',
// // //   ];

// // //   const [coins, setCoins] = useState([]);
// // //   const centerX = 0;
// // //   const centerY = 0;
// // //   const radius = 220;
// // //   const numCoins = 5; // 5 outer coins

// // //   useEffect(() => {
// // //     const generateCoins = () => {
// // //       const coinArray = [];

// // //       // Add a slight rotation offset to balance the layout
// // //       const angleOffset = Math.PI / 2; // Start at top (90 degrees)

// // //       for (let i = 0; i < numCoins; i++) {
// // //         const angle = (i / numCoins) * 2 * Math.PI - angleOffset;
// // //         const x = centerX + radius * Math.cos(angle);
// // //         const y = centerY + radius * Math.sin(angle);

// // //         const animationDuration = 3 + (i % 3);

// // //         coinArray.push({
// // //           id: i,
// // //           x,
// // //           y,
// // //           animationDuration,
// // //           size: 160 + (i % 2) * 40,
// // //           image: coinImages[i + 1], // +1 because center coin is at index 0
// // //         });
// // //       }

// // //       setCoins(coinArray);
// // //     };

// // //     generateCoins();
// // //   }, []);

// // //   return (
// // //     <div className="bg-gradient-to-br from-indigo-50 to-purple-100">
// // //       {/* Hero Section with Coins */}
// // //       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4 sm:p-6 md:p-8">
// // //         {/* Left content section */}
// // //         <div className="w-full md:w-1/2 max-w-xl px-4">
// // //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
// // //             The Evolution of Crypto Starts Here
// // //           </h1>
// // //           <div className="space-y-4 text-gray-700">
// // //             <p className="text-base md:text-lg">
// // //               Coinbase is one of the world&apos;s most trusted crypto platforms — empowering millions to buy, sell, and
// // //               grow with digital assets.
// // //             </p>
// // //             <p className="text-base md:text-lg">
// // //               Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
// // //               utility — all while keeping security and simplicity at the core.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Right coin animation section */}
// // //         <div className="w-full md:w-1/2 relative h-96 mt-8 md:mt-0">
// // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// // //             {/* Center coin */}
// // //             <div
// // //               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// // //               style={{ animation: `float 4s ease-in-out infinite` }}
// // //             >
// // //               <img src={coinImages[0]} alt="Center cryptocurrency coin" className="w-32 sm:w-40 h-32 sm:h-40" />
// // //             </div>
// // //             {/* Outer coins */}
// // //             {coins.map((coin) => (
// // //               <div
// // //                 key={coin.id}
// // //                 className="absolute"
// // //                 style={{
// // //                   left: `calc(50% + ${coin.x * 0.7}px)`, // Scaled down for mobile
// // //                   top: `calc(50% + ${coin.y * 0.7}px)`, // Scaled down for mobile
// // //                   transform: 'translate(-50%, -50%)',
// // //                   animation: `float ${coin.animationDuration}s ease-in-out infinite`,
// // //                   '@media (min-width: 768px)': {
// // //                     left: `calc(50% + ${coin.x}px)`,
// // //                     top: `calc(50% + ${coin.y}px)`,
// // //                   }
// // //                 }}
// // //               >
// // //                 <img
// // //                   src={coin.image}
// // //                   alt={`Cryptocurrency coin ${coin.id + 1}`}
// // //                   className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
// // //                   style={{
// // //                     width: coin.size * 0.6, // Scaled down for mobile
// // //                     height: coin.size * 0.6, // Scaled down for mobile
// // //                     maxWidth: '100%'
// // //                   }}
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Pricing Cards Section */}
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
// // //         <section className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
// // //           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">Introducing the Base Card Collection</h1>
// // //           <h2 className="text-lg sm:text-xl lg:text-2xl mb-4">Your Wallet, Upgraded. Your Crypto, in Motion</h2>
// // //           <p className="text-sm sm:text-base max-w-3xl mx-auto">
// // //             Three unique cards, one powerful network. The Base Card Collection gives you real-world spending power - world
// // //             spending power - directly from your on-chain wallet. Shop, earn, and grow with every transaction.
// // //           </p>
// // //         </section>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {/* BASE LITE Card */}
// // //           <div className="rounded-3xl bg-[#F2FFF2] p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm">
// // //             <h2 className="text-xl sm:text-2xl font-bold mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">BASE EDGE</h2>
// // //             <p className="text-base sm:text-lg font-medium mb-2">Flexible, Fast, Build for daily crypto earners</p>
// // //             <p className="text-gray-600 mb-3 font-normal text-sm">
// // //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// // //             </p>
// // //             <div className="space-y-1 mb-4 w-full">
// // //               <p className="font-medium text-sm">2.5% back in crypto</p>
// // //               <p className="font-medium text-sm">Apple Pay & Google Pay enabled</p>
// // //               <p className="font-medium text-sm">Auto top-up from your Base wallet</p>
// // //               <p className="font-medium text-sm">Real-time spend tracking</p>
// // //             </div>

// // //             <div className="absolute bottom-0 right-0 w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
// // //             <img src="/Vector (1).svg" alt="Vector" className="w-14 h-14 mt-8 ml-6" />
// // //           </div>
// // //           </div>

// // //           {/* BASE EDGE Card */}
// // //           <div className="rounded-3xl bg-[#F2FFF2] p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm">
// // //             <h2 className="text-xl sm:text-2xl font-bold mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">BASE EDGE</h2>
// // //             <p className="text-base sm:text-lg font-medium mb-2">Flexible, Fast, Build for daily crypto earners</p>
// // //             <p className="text-gray-600 mb-3 font-normal text-sm">
// // //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// // //             </p>
// // //             <div className="space-y-1 mb-4 w-full">
// // //               <p className="font-medium text-sm">2.5% back in crypto</p>
// // //               <p className="font-medium text-sm">Apple Pay & Google Pay enabled</p>
// // //               <p className="font-medium text-sm">Auto top-up from your Base wallet</p>
// // //               <p className="font-medium text-sm">Real-time spend tracking</p>
// // //             </div>

// // //             <div className="absolute bottom-0 right-0 w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
// // //             <img src="/Vector (1).svg" alt="Vector" className="w-14 h-14 mt-8 ml-6" />
// // //           </div>
// // //           </div>

// // //           {/* BASE X Card */}
// // //           <div className="rounded-3xl bg-[#F2FFF2] p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm">
// // //             <h2 className="text-xl sm:text-2xl font-bold mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">BASE EDGE</h2>
// // //             <p className="text-base sm:text-lg font-medium mb-2">Flexible, Fast, Build for daily crypto earners</p>
// // //             <p className="text-gray-600 mb-3 font-normal text-sm">
// // //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// // //             </p>
// // //             <div className="space-y-1 mb-4 w-full">
// // //               <p className="font-medium text-sm">2.5% back in crypto</p>
// // //               <p className="font-medium text-sm">Apple Pay & Google Pay enabled</p>
// // //               <p className="font-medium text-sm">Auto top-up from your Base wallet</p>
// // //               <p className="font-medium text-sm">Real-time spend tracking</p>
// // //             </div>

// // //             <div className="absolute bottom-0 right-0 w-[110px] h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
// // //             <img src="/Vector (1).svg" alt="Vector" className="w-14 h-14 mt-8 ml-6" />
// // //           </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Add CSS for floating animation */}
// // //       <style jsx>{`
// // //         @keyframes float {
// // //           0% {
// // //             transform: translate(-50%, -50%) translateY(0px);
// // //           }
// // //           50% {
// // //             transform: translate(-50%, -50%) translateY(-15px);
// // //           }
// // //           100% {
// // //             transform: translate(-50%, -50%) translateY(0px);
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };
// // // export default CombinedCryptoPage;








// // "use client"

// // import { useState, useEffect } from "react"

// // const CombinedCryptoPage = () => {
// //   // 6 total coins = 1 center + 5 around
// //   const coinImages = [
// //     "/Coin.png", // Center coin
// //     "/State=state 2.png",
// //     "/State=state 3 (1).png",
// //     "/Cam2-removebg-preview.png",
// //     "/State=state 3 (1).png",
// //     "/Cam2-removebg-preview.png",
// //   ]

// //   const [coins, setCoins] = useState([])
// //   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

// //   useEffect(() => {
// //     // Handle window resize
// //     const handleResize = () => {
// //       setWindowWidth(window.innerWidth)
// //     }

// //     // Add event listener
// //     if (typeof window !== "undefined") {
// //       setWindowWidth(window.innerWidth)
// //       window.addEventListener("resize", handleResize)
// //     }

// //     // Clean up
// //     return () => {
// //       if (typeof window !== "undefined") {
// //         window.removeEventListener("resize", handleResize)
// //       }
// //     }
// //   }, [])

// //   useEffect(() => {
// //     const generateCoins = () => {
// //       const coinArray = []
// //       const numCoins = 5 // 5 outer coins

// //       // Responsive radius based on screen size
// //       let radius = 120 // Default for mobile

// //       if (windowWidth >= 768) {
// //         radius = 180 // Tablet
// //       }

// //       if (windowWidth >= 1024) {
// //         radius = 220 // Desktop
// //       }

// //       // Add a slight rotation offset to balance the layout
// //       const angleOffset = Math.PI / 2 // Start at top (90 degrees)

// //       for (let i = 0; i < numCoins; i++) {
// //         const angle = (i / numCoins) * 2 * Math.PI - angleOffset
// //         const x = radius * Math.cos(angle)
// //         const y = radius * Math.sin(angle)

// //         const animationDuration = 3 + (i % 3)

// //         // Responsive coin size
// //         let size = 100 // Mobile base size

// //         if (windowWidth >= 768) {
// //           size = 130 // Tablet
// //         }

// //         if (windowWidth >= 1024) {
// //           size = 160 + (i % 2) * 40 // Desktop with variation
// //         }

// //         coinArray.push({
// //           id: i,
// //           x,
// //           y,
// //           animationDuration,
// //           size,
// //           image: coinImages[i + 1], // +1 because center coin is at index 0
// //         })
// //       }

// //       setCoins(coinArray)
// //     }

// //     generateCoins()
// //   }, [windowWidth])

// //   // Calculate center coin size based on screen width
// //   const getCenterCoinSize = () => {
// //     if (windowWidth >= 1024) return "w-40 h-40"
// //     if (windowWidth >= 768) return "w-32 h-32"
// //     return "w-24 h-24"
// //   }

// //   return (
// //     <div className="bg-gradient-to-br from-indigo-50 to-purple-100">
// //       {/* Hero Section with Coins */}
// //       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
// //         {/* Left content section */}
// //         <div className="w-full md:w-1/2 max-w-xl px-4 mb-12 md:mb-0 z-10">
// //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
// //             The Evolution of Crypto Starts Here
// //           </h1>
// //           <div className="space-y-3 md:space-y-4 text-gray-700">
// //             <p className="text-sm sm:text-base md:text-lg">
// //               Coinbase is one of the world&apos;s most trusted crypto platforms — empowering millions to buy, sell, and
// //               grow with digital assets.
// //             </p>
// //             <p className="text-sm sm:text-base md:text-lg">
// //               Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world utility —
// //               all while keeping security and simplicity at the core.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Right coin animation section */}
// //         <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] mt-4 md:mt-0">
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
// //             {/* Center coin */}
// //             <div
// //               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// //               style={{ animation: `float 4s ease-in-out infinite` }}
// //             >
// //               <img
// //                 src={coinImages[0] || "/placeholder.svg"}
// //                 alt="Center cryptocurrency coin"
// //                 className={getCenterCoinSize()}
// //               />
// //             </div>
// //             {/* Outer coins */}
// //             {coins.map((coin) => (
// //               <div
// //                 key={coin.id}
// //                 className="absolute"
// //                 style={{
// //                   left: `calc(50% + ${coin.x}px)`,
// //                   top: `calc(50% + ${coin.y}px)`,
// //                   transform: "translate(-50%, -50%)",
// //                   animation: `float ${coin.animationDuration}s ease-in-out infinite`,
// //                 }}
// //               >
// //                 <img
// //                   src={coin.image || "/placeholder.svg"}
// //                   alt={`Cryptocurrency coin ${coin.id + 1}`}
// //                   style={{
// //                     width: `${coin.size}px`,
// //                     height: `${coin.size}px`,
// //                     maxWidth: "100%",
// //                   }}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Pricing Cards Section */}
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
// //         <section className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
// //           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">
// //             Introducing the Base Card Collection
// //           </h1>
// //           <h2 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">Your Wallet, Upgraded. Your Crypto, in Motion</h2>
// //           <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
// //             Three unique cards, one powerful network. The Base Card Collection gives you real-world spending power -
// //             world spending power - directly from your on-chain wallet. Shop, earn, and grow with every transaction.
// //           </p>
// //         </section>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
// //           {/* BASE LITE Card */}
// //           <div className="rounded-3xl bg-[#F2FFF2] p-4 sm:p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm relative overflow-hidden">
// //             <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">
// //               BASE EDGE
// //             </h2>
// //             <p className="text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
// //               Flexible, Fast, Build for daily crypto earners
// //             </p>
// //             <p className="text-gray-600 mb-2 sm:mb-3 font-normal text-xs sm:text-sm">
// //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// //             </p>
// //             <div className="space-y-1 mb-4 w-full">
// //               <p className="font-medium text-xs sm:text-sm">2.5% back in crypto</p>
// //               <p className="font-medium text-xs sm:text-sm">Apple Pay & Google Pay enabled</p>
// //               <p className="font-medium text-xs sm:text-sm">Auto top-up from your Base wallet</p>
// //               <p className="font-medium text-xs sm:text-sm">Real-time spend tracking</p>
// //             </div>

// //             <div className="absolute bottom-0 right-0 w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[40px] sm:rounded-tl-[50px] rounded-br-[15px] sm:rounded-br-[20px]">
// //               <img
// //                 src="/Vector (1).svg"
// //                 alt="Vector"
// //                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mt-5 sm:mt-6 md:mt-8 ml-4 sm:ml-5 md:ml-6"
// //               />
// //             </div>
// //           </div>

// //           {/* BASE EDGE Card */}
// //           <div className="rounded-3xl bg-[#F2FFF2] p-4 sm:p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm relative overflow-hidden">
// //             <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">
// //               BASE EDGE
// //             </h2>
// //             <p className="text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
// //               Flexible, Fast, Build for daily crypto earners
// //             </p>
// //             <p className="text-gray-600 mb-2 sm:mb-3 font-normal text-xs sm:text-sm">
// //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// //             </p>
// //             <div className="space-y-1 mb-4 w-full">
// //               <p className="font-medium text-xs sm:text-sm">2.5% back in crypto</p>
// //               <p className="font-medium text-xs sm:text-sm">Apple Pay & Google Pay enabled</p>
// //               <p className="font-medium text-xs sm:text-sm">Auto top-up from your Base wallet</p>
// //               <p className="font-medium text-xs sm:text-sm">Real-time spend tracking</p>
// //             </div>

// //             <div className="absolute bottom-0 right-0 w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[40px] sm:rounded-tl-[50px] rounded-br-[15px] sm:rounded-br-[20px]">
// //               <img
// //                 src="/Vector (1).svg"
// //                 alt="Vector"
// //                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mt-5 sm:mt-6 md:mt-8 ml-4 sm:ml-5 md:ml-6"
// //               />
// //             </div>
// //           </div>

// //           {/* BASE X Card */}
// //           <div className="rounded-3xl bg-[#F2FFF2] p-4 sm:p-5 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm relative overflow-hidden">
// //             <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">
// //               BASE EDGE
// //             </h2>
// //             <p className="text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
// //               Flexible, Fast, Build for daily crypto earners
// //             </p>
// //             <p className="text-gray-600 mb-2 sm:mb-3 font-normal text-xs sm:text-sm">
// //               Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
// //             </p>
// //             <div className="space-y-1 mb-4 w-full">
// //               <p className="font-medium text-xs sm:text-sm">2.5% back in crypto</p>
// //               <p className="font-medium text-xs sm:text-sm">Apple Pay & Google Pay enabled</p>
// //               <p className="font-medium text-xs sm:text-sm">Auto top-up from your Base wallet</p>
// //               <p className="font-medium text-xs sm:text-sm">Real-time spend tracking</p>
// //             </div>

// //             <div className="absolute bottom-0 right-0 w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[40px] sm:rounded-tl-[50px] rounded-br-[15px] sm:rounded-br-[20px]">
// //               <img
// //                 src="/Vector (1).svg"
// //                 alt="Vector"
// //                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mt-5 sm:mt-6 md:mt-8 ml-4 sm:ml-5 md:ml-6"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Add CSS for floating animation */}
// //       <style jsx>{`
// //         @keyframes float {
// //           0% {
// //             transform: translate(-50%, -50%) translateY(0px);
// //           }
// //           50% {
// //             transform: translate(-50%, -50%) translateY(-15px);
// //           }
// //           100% {
// //             transform: translate(-50%, -50%) translateY(0px);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }

// // export default CombinedCryptoPage





// const CombinedCryptoPage = () => {
//   // 6 total coins = 1 center + 5 around

//   // Calculate center coin size based on screen width with more granular breakpoints
 
//   return (
//     <div className="">
//       {/* Hero Section with Coins */}
//       <div className="min-h-screen w-full ">
//       <div className="container mx-auto md:px-28 p-10 py-12 md:py-24">
//         <div className="relative flex flex-col md:flex-row items-center">
//           {/* Left content */}
//           <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">The Evolution of Crypto Starts Here</h1>
//             <p className="text-gray-800 mb-4 max-w-lg">
//               Coinbase is one of the world&apos;s most trusted crypto platforms- empowering millions to buy, sell, and
//               grow with digital assets.
//             </p>
//             <p className="text-gray-800 max-w-lg">
//               Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
//               utility-all while keeping security and simplicity at the core
//             </p>
//           </div>
//           {/* Right content - Floating coins */}
//           <div className="w-full md:ml-40 py-20 md:w-1/2 relative h-[400px] md:h-[400px] lg:h-[600px]">
//   {/* Glow Layer */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       backgroundColor: '#A59AFF',
//       filter: 'blur(254px)',
//       borderRadius: '50%',
//       width: '100%',
//       height: '100%',
//     }}
//   ></div>
//   {/* Image Layer */}
//   <img
//     src="/coins-removebg-preview.png"
//     alt=""
//     className="relative z-10 w-full h-full object-contain"
//   />
// </div>

//         </div>
//       </div>
//     </div>
//       {/* Pricing Cards Section - improved for tablets */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
//         <section className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
//           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
//             Introducing the Base Card Collection
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4">
//             Your Wallet, Upgraded. Your Crypto, in Motion
//           </h2>
//           <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 sm:px-4">
//             Three unique cards, one powerful network. The Base Card Collection gives you real-world spending power -
//             world spending power - directly from your on-chain wallet. Shop, earn, and grow with every transaction.
//           </p>
//         </section>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* BASE LITE Card */}
//         <div className="relative rounded-3xl bg-[#FBF8FF] p-8 flex flex-col items-center text-center shadow-[3.49px_3.49px_3.49px_rgba(0,0,0,0.1)] backdrop-blur-sm"
//         style={{borderColor: "#C0FAC2"}}
//         >
//           <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-b from-[#B569EF] to-[#0F001A] bg-clip-text text-transparent">
//             BASE LITE
//           </h2>
//           <p className="text-xl font-medium mb-4">Simple. Smart. For everyday starters</p>
//           <p className="text-gray-600 mb-8 font-normal">
//             New users, casual spenders, and anyone looking to dip into crypto with confidence.
//           </p>
//           <div className="space-y-1 mb-8 w-full sm:mb-20">
//             <p className="font-medium">1.5% back in USDC or ETH</p>
//             <p className="font-medium">No annual fee</p>
//             <p className="font-medium">Easy wallet connection via Coinbase</p>
//             <p className="font-medium">Clean, beginner-friendly interface</p>
//           </div>
//           <div className="absolute bottom-0 right-0 w-[100px] h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
//             <img src="/Vector (2).svg" alt="Vector" className="w-8 h-8 mt-4 ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
//           </div>
//         </div>
//         {/* BASE EDGE Card */}
//         <div className="relative rounded-3xl bg-[#F2FFF2] p-8 flex flex-col items-center text-center">
//           <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-b from-[#32FF5F] to-[#094B01] bg-clip-text text-transparent">
//             BASE EDGE
//           </h2>
//           <p className="text-xl font-medium mb-4">Flexible, Fast, Built for daily crypto earners</p>
//           <p className="text-gray-600 mb-8 font-normal">
//             Everyday crypto users who want to maximize rewards and stay fully integrated with Base.
//           </p>
//           <div className="space-y-1 mb-8 w-full sm:mb-20">
//             <p className="font-medium">2.5% back in crypto</p>
//             <p className="font-medium">Apple Pay & Google Pay enabled</p>
//             <p className="font-medium">Auto top-up from your Base wallet</p>
//             <p className="font-medium">Real-time spend tracking</p>
//           </div>
//           <div className="absolute bottom-0 right-0 w-[100px] h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
//             <img src="/Vector.svg" alt="Vector" className="w-8 h-8 mt-4 ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
//           </div>
//         </div>

//         {/* BASE X Card */}
//         <div className="relative rounded-3xl bg-[#FFFCF5] p-8 flex flex-col items-center text-center">
//           <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-b from-[#F5BD33] to-[#6E5004] bg-clip-text text-transparent">
//             BASE X
//           </h2>
//           <p className="text-xl font-medium mb-4">Elite, Exclusive, Designed for Web3</p>
//           <p className="text-gray-600 mb-8 font-normal">
//             Advanced users, crypto-native professionals, and high-volume spenders looking for maximum value.
//           </p>
//           <div className="space-y-1 mb-8 w-full sm:mb-20">
//             <p className="font-medium">5% crypto rewards on every spend</p>
//             <p className="font-medium">NFT & Web3 unlocks</p>
//             <p className="font-medium">VIP support + global lounge access</p>
//             <p className="font-medium">Metal card with smart-chip security</p>
//           </div>
//           <div className="absolute bottom-0 right-0 w-[100px] h-[56px] md:w-[110px] md:h-[100px] bg-[#E6E2E2] rounded-tl-[50px] rounded-br-[20px]">
//             <img src="/Vector (1).svg" alt="Vector" className="w-8 h-8 mt-4 ml-10 md:w-14 md:h-14 md:mt-8 md:ml-6"/>
//           </div>
//         </div>
//       </div>
//       </div>

//       {/* Add CSS for floating animation */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translate(-50%, -50%) translateY(0px);
//           }
//           50% {
//             transform: translate(-50%, -50%) translateY(-15px);
//           }
//           100% {
//             transform: translate(-50%, -50%) translateY(0px);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }
// export default CombinedCryptoPage




const CombinedCryptoPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
    // Prevent hydration mismatch
    
    if (!isMounted) {
      return null
    }
  
    // Base ellipse style with responsive widths applied in the component
    const getEllipseStyle = (width) => ({
      width: width,
      height: "70px",
      borderRadius: "50%",
      background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
      boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
    })
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Coins */}
      <div className="min-h-screen w-full mt-10">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="relative flex flex-col md:flex-row items-center">
            {/* Left content */}
            <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-[#000000]">
                The Evolution of Crypto Starts Here
              </h1>
              <p className="text-[#000000] text-base sm:text-lg mb-4 max-w-lg">
                Coinbase is one of the world&apos;s most trusted crypto platforms- empowering millions to buy, sell, and
                grow with digital assets.
              </p>
              <p className="text-[#000000] text-base sm:text-lg max-w-lg">
                Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
                utility-all while keeping security and simplicity at the core
              </p>
            </div>
            {/* Right content - Floating coins */}
            <div className="w-full  md:w-1/2 lg:ml-12 xl:ml-40 relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              {/* Glow Layer */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundColor: '#A59AFF',
                  filter: 'blur(150px)',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                  opacity: '0.8',
                }}
              ></div>
              {/* Image Layer with animation */}
              <img
                src="/coins-removebg-preview.png"
                alt="Cryptocurrency coins"
                className="absolute z-10 w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Cards Section */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
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
      </div> */}

<div className="w-full max-w-7xl mx-auto px-4 py-4">
  <main className="flex flex-col items-center justify-center">
    <section className="w-full max-w-4xl mx-auto text-center mb-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        The Next Layer of Innovation
      </h1>
      <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-2 mb-6">
        Base is a secure, Etherium Layer 2 network built by Coinbase. It&apos;s designed to make blockchain faster, cheaper, and more accessible-without compromising on security or user experience.
      </p>
    </section>
  </main>
  
  <div className="mt-4">
    {/* Features grid - using grid instead of flex for better spacing control */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* First card */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="/graffiti.gif" alt="" className="w-20 h-20"/>
          <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
        </div>
        <div className="mt-6 text-center relative w-full max-w-xs sm:max-w-sm mx-auto" style={{ height: "70px" }}>
          {/* Responsive elliptical background */}
          <div className="absolute inset-0 -z-10" style={{
            width: "100%",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
            boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
          }}></div>
          {/* Content positioned inside */}
          <div className="flex items-center justify-center h-full px-4">
            <h3 className="text-base md:text-lg font-medium">Low fees, high performance</h3>
          </div>
        </div>
      </div>
      
      {/* Second card */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="/global.gif" alt="" className="w-20 h-20"/>
          <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
        </div>
        <div className="mt-6 text-center relative w-full max-w-xs sm:max-w-sm mx-auto" style={{ height: "70px" }}>
          {/* Responsive elliptical background */}
          <div className="absolute inset-0 -z-10" style={{
            width: "100%",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
            boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
          }}></div>
          {/* Content positioned inside */}
          <div className="flex items-center justify-center h-full px-4">
            <h3 className="text-base md:text-lg font-medium">Built for real-world use</h3>
          </div>
        </div>
      </div>
      
      {/* Third card */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="/update.gif" alt="" className="w-20 h-20"/>
          <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
        </div>
        <div className="mt-6 text-center relative w-full max-w-xs sm:max-w-sm mx-auto" style={{ height: "70px" }}>
          {/* Responsive elliptical background */}
          <div className="absolute inset-0 -z-10" style={{
            width: "100%",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
            boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
          }}></div>
          {/* Content positioned inside */}
          <div className="flex items-center justify-center h-full px-4">
            <h3 className="text-base md:text-lg font-medium">Fully EVM-compatible</h3>
          </div>
        </div>
      </div>
      
      {/* Fourth card */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="/wallet.gif" alt="" className="w-20 h-20"/>
          <div className="absolute -bottom-4 -left-4 -right-4 h-4 bg-purple-100 rounded-full blur-md z-0"></div>
        </div>
        <div className="mt-6 text-center relative w-full max-w-xs sm:max-w-sm mx-auto" style={{ height: "70px" }}>
          {/* Responsive elliptical background */}
          <div className="absolute inset-0 -z-10" style={{
            width: "100%", 
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #E1DEFF, #FFFFFF)",
            boxShadow: "6px 7px 4px rgba(0, 0, 0, 0.25)"
          }}></div>
          {/* Content positioned inside */}
          <div className="flex items-center justify-center h-full px-4">
            <h3 className="text-base md:text-lg font-medium">Seamless with Coinbase wallets</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Add CSS for animations and responsive behaviors */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 4s;
          }
        }
      `}</style>
    </div>
  )
}

export default CombinedCryptoPage