/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// import { useEffect, useState } from "react"

// export default function DigitalCardsPage() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   // Card data with image paths
//   // To use your images, place them in the public folder and update the paths below
//   const cardImages = [
//     {
//       name: "NEXO CARDS",
//       src: "/Frame 632.png", // Replace with your actual image path
//       alt: "NEXO CARDS",
//     },
//     {
//       name: "COINBASE CARDS",
//       src: "/Frame 631.png", // Replace with your actual image path
//       alt: "COINBASE CARDS",
//     },
//     {
//       name: "PAYPAL CARDS",
//       src: "/Frame 634.png", // Replace with your actual image path
//       alt: "PAYPAL CARDS",
//     },
//     {
//         name: "ROBINHOOD CARDS",
//         src: "/Frame 636.png", // Replace with your actual image path
//         alt: "TRUST WALLET CARDS",
//       },
//     {
//       name: "TRUST WALLET CARDS",
//       src: "/Frame 635.png", // Replace with your actual image path
//       alt: "TRUST WALLET CARDS",
//     },
//   ]

//   // Duplicate cards for continuous scrolling
//   const allCards = [...cardImages, ...cardImages, ...cardImages]

//   if (!mounted) return null

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#27012F] to-[#550665]">
//       {/* CSS for marquee animation */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-100% / 3));
//           }
//         }
        
//         .marquee-container {
//           overflow: hidden;
//           width: 100%;
//           position: relative;
//         }
        
//         .marquee-content {
//           display: flex;
//           gap: 16px;
//           animation: marquee 30s linear infinite;
//           width: max-content;
//         }
        
//         @media (min-width: 768px) {
//           .marquee-content {
//             gap: 24px;
//           }
//         }
        
//         .card-image {
//           width: 280px;
//           height: 200px;
//           object-fit: contain;
//           border-radius: 12px;
//         }
        
//         @media (min-width: 640px) {
//           .card-image {
//             width: 320px;
//           }
//         }
        
//         @media (min-width: 768px) {
//           .card-image {
//             width: 340px;
//           }
//         }
        
//         .main-heading {
//           color: white;
//           font-size: 28px;
//           font-weight: 700;
//           text-align: center;
//           padding: 48px 16px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         @media (min-width: 768px) {
//           .main-heading {
//             font-size: 36px;
//             padding: 64px 24px;
//           }
//         }
        
//         @media (min-width: 1024px) {
//           .main-heading {
//             font-size: 48px;
//           }
//         }
        
//         .container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 16px 48px;
//         }
        
//         @media (min-width: 768px) {
//           .container {
//             padding: 0 24px 64px;
//           }
//         }
//       `}</style>

//       <div className="container">
//         <h1 className="main-heading">The Best Digital Cards At Your Fingertips</h1>

//         <div className="marquee-container">
//           <div className="marquee-content">
//             {allCards.map((card, index) => (
//               <img
//                 key={index}
//                 src={card.src || "/placeholder.svg"}
//                 alt={card.alt}
//                 className="card-image"
//                 loading={index < 4 ? "eager" : "lazy"} // Load first set of images eagerly
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






import  { useEffect, useState } from 'react';
import { Wallet, CreditCard, Globe2, Shield, Layout } from 'lucide-react';

// function FeatureCard({ icon: Icon, title, description }) {
//   return (
//     <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 hover:bg-black/30 transition-all cursor-pointer group">
//       <div className="rounded-full bg-purple-500/20 p-3">
//         <Icon className="w-6 h-6 text-purple-400" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//         <p className="text-gray-300">{description}</p>
//       </div>
//       <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
//         →
//       </div>
//     </div>
//   );
// }


function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 transition-all cursor-pointer group hover:bg-gradient-to-r hover:from-[#8855C9] hover:to-[#190632]">
      <div className="rounded-full  p-3">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </div>
  );
}


function DigitalCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  ];

  const allCards = [...cardImages, ...cardImages, ...cardImages];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665]">
      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-content {
          animation: marquee 10s linear infinite;
        }
      `}</style>

      {/* Digital Cards Section */}
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          The Best Digital Cards At Your Fingertips
        </h1>

        <div className="overflow-hidden w-full relative mb-24">
          <div className="flex gap-4 md:gap-6 marquee-content">
            {allCards.map((card, index) => (
              <img
                key={index}
                src={card.src}
                alt={card.alt}
                className="w-[280px] md:w-[320px] lg:w-[340px] h-[200px] object-cover rounded-xl"
                loading={index < 4 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Wallet}
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
            icon={Layout}
            title="User-Friendly Experience"
            description="Easy navigation and quick setup"
          />
        </div>
        <div className="mt-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Globe2}
            title="Global Accessibility"
            description="Use your cards anywhere, anytime"
          />
        </div>
      </div>
    </div>
  );
}

export default DigitalCard;