// // import { Link } from 'react-router-dom'

// // const CallToAction = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
// //       {/* Main Heading */}
// //       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
// //         Apply Now, Build Credit. Stack Crypto.
// //       </h1>

// //       {/* Supporting paragraph */}
// //       <p className="text-lg text-gray-700 mb-4 max-w-xl">
// //         Cashapp isn’t just a card—it’s your full-access pass to credit + crypto power
// //       </p>

// //       {/* Bold subheading */}
// //       <p className="text-xl font-semibold text-black mb-8">
// //         Join the new economy. Spend smarter. Stack harder.
// //       </p>

// //       {/* Apply Button */}
// //       <Link to="/login">
// //       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition">
// //         Apply Now
// //       </button>
// //       </Link>
// //     </div>
// //   )
// // }

// // export default CallToAction




// import {  useNavigate } from 'react-router-dom'
// // import Feature1 from "../../../assets/";
// const CallToAction = () => {
//   const navigate = useNavigate();

//   const handleApplyNow = () => {
//     navigate("/dashboard-for-user", {
//       state: {
//         images: {
//           core: "/Cashapp.png",
//           plus: "/cashappcore.png",
//           elite: "/cashappplus.png",
//         },
//       },
//     });
//   };
//   return (
//     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
//       {/* Main Heading */}
//       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
//         Apply Now, Build Credit. Stack Crypto.
//       </h1>

//       {/* Supporting paragraph */}
//       <p className="text-lg text-gray-700 mb-4 max-w-xl">
//         Cashapp isn’t just a card—it’s your full-access pass to credit + crypto power
//       </p>

//       {/* Bold subheading */}
//       <p className="text-xl font-semibold text-black mb-8">
//         Join the new economy. Spend smarter. Stack harder.
//       </p>

//       {/* Apply Button */}
//       {/* <Link to="/login"> */}
//       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition
//       "
//       onClick={handleApplyNow}
//       >
//         Apply Now
//       </button>
//       {/* </Link> */}
//     </div>
//   )
// }

// export default CallToAction




import { useNavigate, useLocation } from "react-router-dom";
import Card1 from '../../../assets/nexon-card1.png'
import Card2 from '../../../assets/nexon-card2.png'
import Card3 from '../../../assets/nexon-card3.png'
import CashCard1 from '../../../assets/cash-app-card1.png'
import CashCard2 from '../../../assets/cash-app-card2.png'
import CashCard3 from '../../../assets/cash-app-card3.png'
import PayPalCard1 from '../../../assets/paypal-card1.png'
import PayPalCard2 from '../../../assets/paypal-card2.png'
import PayPalCard3 from '../../../assets/paypal-card3.png'

const CallToAction = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // map route => image set
  const imageMap = {
    "/cash-app": {
      core: CashCard1,
      plus: CashCard2,
      elite: CashCard3,
    },
    "/nexon": {
      core: Card1,
      plus: Card2,
      elite: Card3,
    },
    "/paypal": {
      core: PayPalCard1,
      plus: PayPalCard2,
      elite: PayPalCard3,
    },
    "/coinbase": {
      core: "/coinbase-removebg-preview.png",
      plus: "/coinbase-removebg-preview.png",
      elite: "/coinbase-removebg-preview.png",
    },
    "/robinhood": {
      core: "/robinhoodcore.png",
      plus: "/robinhoodplus.png",
      elite: "/robinhoodelite.png",
    },
    "/trustwallet": {
      core: "/newimage-removebg-preview.png",
      plus: "/newimage-removebg-preview.png",
      elite: "/newimage-removebg-preview.png",
    },
  };

  const handleApplyNow = () => {
    const currentImages = imageMap[location.pathname] || {}; // fallback if not found
    navigate("/dashboard-for-user", {
      state: {
        images: currentImages,
      },
    });
  };

  // const handleApplyNow = () => {
  //   const currentImages = imageMap[location.pathname] || {};
  
  //   navigate("/login", {
  //     state: {
  //       from: "/dashboard-for-user",
  //       images: currentImages,
  //     },
  //   });
  // };


  // const handleApplyNow = () => {
  //   // const currentImages = imageMap[location.pathname] || {};
  
  //   navigate("/login", {
  //     state: {
  //       from: "/dashboard-for-user",
  //       images: imageMap[location.pathname] || {},
  //     },
  //   });
  // };
  

  // const handleApplyNow = () => {
  //   const currentImages = imageMap[location.pathname] || {}; // You already have this logic
  
  //   navigate("/login", {
  //     state: {
  //       from: "/dashboard-for-user", // 🔁 we remember where the user was trying to go
  //       images: currentImages,       // 📦 passing images as additional data
  //     },
  //   });
  // };


  return (
        <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">
        Apply Now, Build Credit. Stack Crypto.
      </h1>

      {/* Supporting paragraph */}
      <p className="text-lg text-gray-700 mb-4 max-w-xl">
        It isn’t just a card—it’s your full-access pass to credit + crypto power
      </p>

      {/* Bold subheading */}
      <p className="text-xl font-semibold text-black mb-8">
        Join the new economy. Spend smarter. Stack harder.
      </p>

      {/* Apply Button */}
      {/* <Link to="/login"> */}
      <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition
      "
      onClick={handleApplyNow}
      >
        Apply Now
      </button>
      {/* </Link> */}
    </div>
  );
};

export default CallToAction;