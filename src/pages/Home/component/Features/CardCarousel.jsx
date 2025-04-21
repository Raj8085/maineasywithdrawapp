/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import { Wifi } from 'lucide-react';

// function CardPattern({ pattern }) {
//   switch (pattern) {
//     case "lava":
//       return (
//         <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-red-900 to-transparent" />
//       );
//     case "electric":
//       return (
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-700 to-transparent" />
//           <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
//         </div>
//       );
//     case "space":
//       return (
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black opacity-70" />
//           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white,_rgba(255,255,255,.2)_2px,_transparent_40px)] bg-[length:200px_200px]" />
//         </div>
//       );
//     case "stars":
//       return (
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 opacity-40 bg-[radial-gradient(white,_rgba(255,255,255,.2)_2px,_transparent_40px)] bg-[length:150px_150px]" />
//           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-blue-700 to-transparent" />
//         </div>
//       );
//     default:
//       return null;
//   }
// }

// function Card({ name, background, pattern }) {
//   return (
//     <div className={`relative rounded-xl overflow-hidden aspect-[1.58/1] ${background} shadow-lg`}>
//       <div className="absolute inset-0">
//         <CardPattern pattern={pattern} />
//       </div>
//       <div className="relative h-full p-5 flex flex-col justify-between">
//         <div className="flex justify-between items-start">
//           <div className="text-yellow-500 font-bold">BTC Cards</div>
//           <Wifi className="text-white h-6 w-6" />
//         </div>

//         <div className="flex items-center mt-2">
//           <div className="w-10 h-8 bg-yellow-500 rounded-md mr-2" />
//         </div>

//         <div className="flex justify-between items-end mt-auto">
//           <div>
//             <div className="text-yellow-500 font-bold uppercase text-sm">{name}</div>
//             <div className="text-yellow-500 text-xs">DEBIT</div>
//           </div>
//           <div className="text-yellow-500 font-bold italic text-xl">VISA</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const cards = [
//     {
//       id: 1,
//       src: "/coinbase.png",
//       alt: "BTC Card",
//       name: "Coinbase",
//     },
//     {
//       id: 2,
//       src: "/Cashapp.png",
//       alt: "ETH Card",
//       name: "CashApp",
//     },
//     {
//       id: 3,
//       src: "/paypal@2x.png",
//       alt: "USDC Card",
//       name: "PayPal",
//     },
//     {
//       id: 4,
//       src: "/nexo (1).png",
//       alt: "SOL Card",
//       name: "Nexo",
//     },
//     {
//       id: 5,
//       src: "/robinhood.png",
//       alt: "SOL Card",
//       name: "Robinhood",
//     },
//     {
//       id: 6,
//       src: "/cashapp (1).png",
//       alt: "SOL Card",
//       name: "CashApp",
//     },
//   ];
  


// function CardCarousel() {
//     const carouselRef = React.useRef(null);
//     const [startX, setStartX] = React.useState(null);
//     const [scrollLeft, setScrollLeft] = React.useState(0);
//     const [isDragging, setIsDragging] = React.useState(false);
    

//   // Handle touch start
//   const handleTouchStart = (e) => {
//     if (!carouselRef.current) return;
//     setStartX(e.touches[0].pageX);
//     setScrollLeft(carouselRef.current.scrollLeft);
//     setIsDragging(true);
//   };

//   // Handle touch move
//   const handleTouchMove = (e) => {
//     if (!startX || !carouselRef.current || !isDragging) return;
//     const x = e.touches[0].pageX;
//     const walk = (startX - x) * 2; // Scroll speed multiplier
//     carouselRef.current.scrollLeft = scrollLeft + walk;
//   };

//   // Handle touch end
//   const handleTouchEnd = () => {
//     setIsDragging(false);
//     setStartX(null);
//   };

//   // Handle mouse events for desktop
//   React.useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const handleMouseDown = (e) => {
//       setStartX(e.pageX);
//       setScrollLeft(carousel.scrollLeft);
//       setIsDragging(true);
//       carousel.style.cursor = "grabbing";
//     };

//     const handleMouseMove = (e) => {
//       if (!startX || !isDragging) return;
//       const x = e.pageX;
//       const walk = (startX - x) * 2;
//       carousel.scrollLeft = scrollLeft + walk;
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//       setStartX(null);
//       carousel.style.cursor = "grab";
//     };

//     carousel.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     carousel.addEventListener("mouseleave", handleMouseUp);

//     return () => {
//       carousel.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       carousel.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, [startX, scrollLeft, isDragging]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665]  flex flex-col items-center justify-center p-4 md:p-8">
//       <h1 className="text-[32px] md:text-4xl font-bold text-white mb-8 text-center">
//       Your Go-To Collection Of The Most Popular Digital Cards
//       </h1>
//       <div className="w-full max-w-7xl mx-auto mt-20">
//         <div className="relative overflow-hidden" aria-label="Digital cards carousel">
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory cursor-grab"
//             style={{ 
//               scrollbarWidth: "none", 
//               msOverflowStyle: "none",
//               WebkitOverflowScrolling: "touch"
//             }}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove} 
//             onTouchEnd={handleTouchEnd}
//           >
//             {cards.map((card) => (
//               <div 
//                 key={card.id} 
//                 className="flex-shrink-0 snap-center w-[280px] md:w-[320px] transform transition-transform hover:scale-105"
//               >
//                 <Card 
//                   name={card.name} 
//                   background={card.background} 
//                   pattern={card.pattern} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <p className="text-gray-400 text-sm mt-6 text-center">
//         Swipe or drag to explore more cards
//       </p>
//     </div>
//   );
// }
// export default CardCarousel;




import  { useEffect, useState, useRef } from 'react';
import { ShoppingBag, Shield, CreditCard, Settings, Globe, ArrowRight } from 'lucide-react';

// Card Pattern Component
// eslint-disable-next-line react/prop-types


// Feature Card Component
function FeatureCard({  title, description }) {
  return (
    <div className="relative bg-gradient-to-b from-[#27012F] to-[#550665] hover:from-[#8855C9] hover:to-[#190632] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-2 sm:gap-4 group cursor-pointer transition-all duration-300">
    <div className="p-1 sm:p-2 rounded-lg flex-shrink-0">
      <img src='/money-bag 1 (1).png' alt='' className="w-8 h-8 sm:w-auto sm:h-auto" />
    </div>
    <div className="flex-1 pr-8 sm:pr-10">
      <h3 className="text-white text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
    </div>
    <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#DF8CEF] flex items-center justify-center group-hover:bg-[#DF8CEF]">
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
      </div>
    </div>
  </div>
  );
}

function CardCarousel() {
  const [mounted, setMounted] = useState(false);
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    { id: 1, name: "Coinbase",  image: "/coinbase.png" },
    { id: 2, name: "CashApp",  image: "/Cashapp.png" },
    { id: 3, name: "PayPal",  image: "/paypal@2x.png" },
    { id: 4, name: "Nexo", image: "/nexo (1).png" },
    { id: 5, name: "Robinhood", image: "/robinhood.png" },
    { id: 6, name: "TrustWallet",  image: "/trustwalletcard-removebg-preview.png" },
  ];

  const cardImages = [
    {
      name: "NEXO CARDS",
      src: "/Frame 631.png",
      alt: "NEXO CARDS",
    },
    {
      name: "COINBASE CARDS",
      src: "/Frame 632.png",
      alt: "COINBASE CARDS",
    },
   
    {
      name: "ROBINHOOD CARDS",
      src: "/Frame 634.png",
      alt: "ROBINHOOD CARDS",
    },
    {
      name: "TRUST WALLET CARDS",
      src: "/Frame 635.png",
      alt: "TRUST WALLET CARDS",
    },
    {
        name: "TRUST WALLET CARDS",
        src: "/Frame 636.png",
        alt: "TRUST WALLET CARDS",
      },
      {
        name: "Coinbase CARDS",
        src: "/Frame 633 (3).png",
        alt: "Coinbase",
      },
  ];

  const allCards = [...cardImages, ...cardImages, ...cardImages];

  // Touch handlers
  const handleTouchStart = (e) => {
    if (!carouselRef.current) return;
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!startX || !carouselRef.current || !isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 2;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  // Mouse handlers
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseDown = (e) => {
      setStartX(e.pageX);
      setScrollLeft(carousel.scrollLeft);
      setIsDragging(true);
      carousel.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!startX || !isDragging) return;
      const x = e.pageX;
      const walk = (startX - x) * 2;
      carousel.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setStartX(null);
      carousel.style.cursor = "grab";
    };

    carousel.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseUp);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [startX, scrollLeft, isDragging]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665]">
      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100%)); }
        }
        .marquee-content {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* Auto-scrolling Cards Section */}
      <div className="container mx-auto px-4 pt-16 md:pt-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        The Best Digital Cards At Your Fingertips
      </h1>

      <div className="overflow-hidden  relative mb-24">
        <div className="w-max flex gap-4 md:gap-6 animate-marquee-slow">
          {allCards.map((card, index) => (
            <img
              key={index}
              src={card.src}
              alt={card.alt}
              // Enforcing consistent size with !important to override any inherited styles
              className="w-[280px] md:w-[320px] lg:w-[340px] h-[200px] object-contain rounded-xl"
              style={{ maxWidth: '340px', maxHeight: '200px' }} 
              loading={index < 4 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>

      {/* Interactive Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-[32px] md:text-4xl font-salsa text-white mb-12 text-center">
          Your Go-To Collection Of The Most Popular Digital Cards
        </h2>
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative overflow-hidden" aria-label="Digital cards carousel">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory cursor-grab"
              style={{ 
                scrollbarWidth: "none", 
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove} 
              onTouchEnd={handleTouchEnd}
            >
              {cards.map((card) => (
                <div 
                  key={card.id} 
                  className="flex-shrink-0 snap-center w-[280px] md:w-[320px] transform transition-transform hover:scale-105"
                >
                   <img 
      src={card.image} 
      alt={`${card.name} card`}
      className="w-full h-full object-cover rounded-xl"
    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}

      <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-[48px] font-salsa text-white font-bold text-center mb-16">
          Why Choose Our Platform?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={ShoppingBag}
            title="All-in-One Convenience"
            description="No need to visit multiple providers"
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Instant Transactions"
            description="Fast, encrypted payments—even with Bitcoin"
          />
          <FeatureCard
            icon={CreditCard}
            title="Flexible Credit Solutions"
            description="Expand your financial options"
          />
          <FeatureCard
            icon={Settings}
            title="User-Friendly Experience"
            description="Easy navigation and quick setup"
          />
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="max-w-lg w-full">
            <FeatureCard
              icon={Globe}
              title="Global Accessibility"
              description="Use your cards anywhere, anytime"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default CardCarousel;