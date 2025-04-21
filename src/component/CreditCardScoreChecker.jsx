
// // // // import { useState } from "react";
// // // // import ReactSpeedometer from "react-d3-speedometer";

// // // // export default function CreditScoreChecker() {
// // // //   const [cardNumber, setCardNumber] = useState("");
// // // //   const [expiry, setExpiry] = useState("");
// // // //   const [cvv, setCvv] = useState("");
// // // //   const [score, setScore] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const handleCheckScore = (e) => {
// // // //     e.preventDefault();

// // // //     // Optional: Validate inputs here
// // // //     setLoading(true);

// // // //     setTimeout(() => {
// // // //       // Simulate fetching a score - can be replaced with real API logic
// // // //       setScore(700); // or generate random between 700-850 if needed
// // // //       setLoading(false);
// // // //     }, 2000);
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
// // // //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// // // //       <form onSubmit={handleCheckScore} className="space-y-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Credit Card Number"
// // // //           className="w-full p-2 border rounded-lg"
// // // //           value={cardNumber}
// // // //           onChange={(e) => setCardNumber(e.target.value)}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Expiry Date (MM/YY)"
// // // //           className="w-full p-2 border rounded-lg"
// // // //           value={expiry}
// // // //           onChange={(e) => setExpiry(e.target.value)}
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="CVV"
// // // //           className="w-full p-2 border rounded-lg"
// // // //           value={cvv}
// // // //           onChange={(e) => setCvv(e.target.value)}
// // // //         />

// // // //         <button
// // // //           type="submit"
// // // //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// // // //         >
// // // //           {loading ? "Checking..." : "Check Score"}
// // // //         </button>
// // // //       </form>

// // // //       {score !== null && !loading && (
// // // //         <div className="mt-6">
// // // //           <ReactSpeedometer
// // // //             value={score}
// // // //             minValue={300}
// // // //             maxValue={850}
// // // //             needleColor="steelblue"
// // // //             startColor="red"
// // // //             endColor="green"
// // // //             segments={5}
// // // //             height={200}
// // // //           />
// // // //           <p className="text-center mt-2 font-semibold text-lg">
// // // //             Your Credit Score: <span className="text-green-600">{score}</span>
// // // //           </p>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // import  { useState } from "react";
// // // import ReactSpeedometer from "react-d3-speedometer";

// // // export default function CreditScoreChecker() {
// // //   const [cardNumber, setCardNumber] = useState("");
// // //   const [expiry, setExpiry] = useState("");
// // //   const [cvv, setCvv] = useState("");
// // //   const [score, setScore] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [errors, setErrors] = useState({});

// // //   const validateFields = () => {
// // //     const newErrors = {};

// // //     // Card Number - 16 digits
// // //     if (!/^\d{16}$/.test(cardNumber)) {
// // //       newErrors.cardNumber = "Card number must be 16 digits";
// // //     }

// // //     // Expiry Date - MM/YY format
// // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
// // //       newErrors.expiry = "Expiry must be in MM/YY format";
// // //     }

// // //     // CVV - 3 digits
// // //     if (!/^\d{3}$/.test(cvv)) {
// // //       newErrors.cvv = "CVV must be 3 digits";
// // //     }

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleCheckScore = (e) => {
// // //     e.preventDefault();

// // //     if (!validateFields()) return;

// // //     setLoading(true);
// // //     setScore(null);

// // //     setTimeout(() => {
// // //       setScore(700); // default or dynamic
// // //       setLoading(false);
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
// // //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// // //       <form onSubmit={handleCheckScore} className="space-y-4">
// // //         <div>
// // //           <input
// // //             type="text"
// // //             placeholder="Credit Card Number"
// // //             className="w-full p-2 border rounded-lg"
// // //             value={cardNumber}
// // //             onChange={(e) => setCardNumber(e.target.value)}
// // //           />
// // //           {errors.cardNumber && (
// // //             <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <input
// // //             type="text"
// // //             placeholder="Expiry Date (MM/YY)"
// // //             className="w-full p-2 border rounded-lg"
// // //             value={expiry}
// // //             onChange={(e) => setExpiry(e.target.value)}
// // //           />
// // //           {errors.expiry && (
// // //             <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <input
// // //             type="password"
// // //             placeholder="CVV"
// // //             className="w-full p-2 border rounded-lg"
// // //             value={cvv}
// // //             onChange={(e) => setCvv(e.target.value)}
// // //           />
// // //           {errors.cvv && (
// // //             <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
// // //           )}
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// // //         >
// // //           {loading ? "Checking..." : "Check Score"}
// // //         </button>
// // //       </form>

// // //       {score !== null && !loading && (
// // //         <div className="mt-6">
// // //           <ReactSpeedometer
// // //             value={score}
// // //             minValue={300}
// // //             maxValue={850}
// // //             needleColor="steelblue"
// // //             startColor="red"
// // //             endColor="green"
// // //             segments={5}
// // //             height={200}
// // //           />
// // //           <p className="text-center mt-2 font-semibold text-lg">
// // //             Your Credit Score: <span className="text-green-600">{score}</span>
// // //           </p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // import  { useState } from "react";
// // import ReactSpeedometer from "react-d3-speedometer";

// // export default function CreditScoreChecker() {
// //   const [cardNumber, setCardNumber] = useState("");
// //   const [expiry, setExpiry] = useState("");
// //   const [cvv, setCvv] = useState("");
// //   const [score, setScore] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   const validateFields = () => {
// //     const newErrors = {};

// //     // Card Number - 16 digits
// //     if (!/^\d{16}$/.test(cardNumber)) {
// //       newErrors.cardNumber = "Card number must be 16 digits";
// //     }

// //     // Expiry Date - MM/YY format
// //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
// //       newErrors.expiry = "Expiry must be in MM/YY format";
// //     }

// //     // CVV - 3 digits
// //     if (!/^\d{3}$/.test(cvv)) {
// //       newErrors.cvv = "CVV must be 3 digits";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleCheckScore = (e) => {
// //     e.preventDefault();

// //     if (!validateFields()) return;

// //     setLoading(true);
// //     setScore(null);

// //     setTimeout(() => {
// //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// //       setScore(randomScore);
// //       setLoading(false);
// //     }, 2000);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500">
// //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// //       <form onSubmit={handleCheckScore} className="space-y-4">
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Credit Card Number"
// //             className="w-full p-2 border rounded-lg"
// //             value={cardNumber}
// //             onChange={(e) => setCardNumber(e.target.value)}
// //           />
// //           {errors.cardNumber && (
// //             <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
// //           )}
// //         </div>

// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Expiry Date (MM/YY)"
// //             className="w-full p-2 border rounded-lg"
// //             value={expiry}
// //             onChange={(e) => setExpiry(e.target.value)}
// //           />
// //           {errors.expiry && (
// //             <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
// //           )}
// //         </div>

// //         <div>
// //           <input
// //             type="password"
// //             placeholder="CVV"
// //             className="w-full p-2 border rounded-lg"
// //             value={cvv}
// //             onChange={(e) => setCvv(e.target.value)}
// //           />
// //           {errors.cvv && (
// //             <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
// //           )}
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// //         >
// //           {loading ? "Checking..." : "Check Score"}
// //         </button>
// //       </form>

// //       {score !== null && !loading && (
// //         <div className="mt-6">
// //           <ReactSpeedometer
// //             value={score}
// //             minValue={300}
// //             maxValue={850}
// //             needleColor="steelblue"
// //             startColor="red"
// //             endColor="green"
// //             segments={5}
// //             height={200}
// //             customSegmentLabels={[
// //               {
// //                 text: "Poor",
// //                 position: "INSIDE",
// //                 color: "#555",
// //               },
// //               {
// //                 text: "Fair",
// //                 position: "INSIDE",
// //                 color: "#555",
// //               },
// //               {
// //                 text: "Good",
// //                 position: "INSIDE",
// //                 color: "#555",
// //               },
// //               {
// //                 text: "Very Good",
// //                 position: "INSIDE",
// //                 color: "#555",
// //               },
// //               {
// //                 text: "Excellent",
// //                 position: "INSIDE",
// //                 color: "#555",
// //               },
// //             ]}
// //           />
// //           <p className="text-center mt-2 font-semibold text-lg">
// //             Your Credit Score: <span className="text-green-600">{score}</span>
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






// import { useState } from "react";

// export default function CreditScoreChecker() {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [score, setScore] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [flip, setFlip] = useState(false);

//   const validateFields = () => {
//     const newErrors = {};

//     if (!cardName.trim()) newErrors.cardName = "Name on card is required";
//     if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, "")))
//       newErrors.cardNumber = "Card number must be 16 digits";
//     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry))
//       newErrors.expiry = "Expiry must be in MM/YY format";
//     if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const formatCardNumber = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     const matches = v.match(/\d{4,16}/g);
//     const match = (matches && matches[0]) || "";
//     const parts = [];

//     for (let i = 0; i < match.length; i += 4) {
//       parts.push(match.substring(i, i + 4));
//     }

//     return parts.length ? parts.join(" ") : value;
//   };

//   const handleCardNumberChange = (e) => {
//     const formattedValue = formatCardNumber(e.target.value);
//     setCardNumber(formattedValue);
//   };

//   const handleExpiryChange = (e) => {
//     let { value } = e.target;
//     value = value.replace(/[^\d]/g, "");

//     if (value.length <= 2) {
//       setExpiry(value);
//     } else if (value.length > 2) {
//       setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
//     }
//   };

//   const handleCheckScore = (e) => {
//     e.preventDefault();
//     if (!validateFields()) return;

//     setLoading(true);
//     setScore(null);

//     setTimeout(() => {
//       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
//       setScore(randomScore);
//       setLoading(false);
//     }, 2000);
//   };

//   const getScoreColor = () => {
//     if (!score) return "text-gray-700";
//     if (score < 580) return "text-red-600";
//     if (score < 670) return "text-yellow-600";
//     if (score < 740) return "text-blue-600";
//     return "text-green-600";
//   };

//   const getScoreCategory = () => {
//     if (!score) return "";
//     if (score < 580) return "Poor";
//     if (score < 670) return "Fair";
//     if (score < 740) return "Good";
//     if (score < 800) return "Very Good";
//     return "Excellent";
//   };

//   const getScoreWidth = () => {
//     if (!score) return "0%";
//     return `${((score - 300) / (850 - 300)) * 100}%`;
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <div className=" bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
//         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

//         <div className={`credit-card-container ${flip ? "flipped" : ""} relative h-56 mb-8`}>
//           {/* Front */}
//           <div className={`rounded-xl p-6 absolute w-full h-full backface-hidden ${flip ? "hidden" : "block"} bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg`}>
//             <div className="flex justify-between items-start">
//               <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
//               <button onClick={() => setFlip(true)} className="text-xs underline text-gray-300 hover:text-white">
//                 Flip for CVV
//               </button>
//             </div>
//             <div className="mt-6">
//               <p className="text-gray-400 text-xs mb-1">Card Number</p>
//               <p className="font-mono text-xl mb-4">{cardNumber || "•••• •••• •••• ••••"}</p>
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-gray-400 text-xs mb-1">Card Holder</p>
//                   <p className="font-semibold uppercase">{cardName || "YOUR NAME"}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-xs mb-1">Expires</p>
//                   <p className="font-mono">{expiry || "MM/YY"}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Back */}
//           <div className={`rounded-xl absolute w-full h-full backface-hidden ${flip ? "block" : "hidden"} bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg`}>
//             <div className="w-full h-12 bg-gray-900 mt-4"></div>
//             <div className="p-6">
//               <div className="flex justify-end mb-4">
//                 <button onClick={() => setFlip(false)} className="text-xs underline text-gray-300 hover:text-white">
//                   Back to front
//                 </button>
//               </div>
//               <div className="bg-white h-10 flex items-center">
//                 <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
//                   <p className="font-mono text-gray-800">{cvv || "•••"}</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={handleCheckScore} className="space-y-4">
//           <div>
//             <label className="block text-sm mb-1 text-gray-200">Name on Card</label>
//             <input
//               type="text"
//               placeholder="e.g. John Smith"
//               className="w-full p-3 border rounded-lg text-gray-800"
//               value={cardName}
//               onChange={(e) => setCardName(e.target.value)}
//             />
//             {errors.cardName && <p className="text-red-300 text-sm mt-1">{errors.cardName}</p>}
//           </div>

//           <div>
//             <label className="block text-sm mb-1 text-gray-200">Card Number</label>
//             <input
//               type="text"
//               placeholder="1234 5678 9012 3456"
//               className="w-full p-3 border rounded-lg text-gray-800 font-mono"
//               value={cardNumber}
//               onChange={handleCardNumberChange}
//               maxLength={19}
//             />
//             {errors.cardNumber && <p className="text-red-300 text-sm mt-1">{errors.cardNumber}</p>}
//           </div>

//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-gray-200">Expiry Date</label>
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
//                 value={expiry}
//                 onChange={handleExpiryChange}
//                 maxLength={5}
//               />
//               {errors.expiry && <p className="text-red-300 text-sm mt-1">{errors.expiry}</p>}
//             </div>

//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-gray-200">CVV</label>
//               <input
//                 type="password"
//                 placeholder="123"
//                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
//                 maxLength={3}
//               />
//               {errors.cvv && <p className="text-red-300 text-sm mt-1">{errors.cvv}</p>}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
//                 Checking...
//               </div>
//             ) : "Check Credit Score"}
//           </button>
//         </form>
//       </div>

//       {score !== null && !loading && (
//         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

//           <div className="flex justify-between text-xs mb-1">
//             <span>Poor</span>
//             <span>Fair</span>
//             <span>Good</span>
//             <span>Excellent</span>
//           </div>

//           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
//             <div
//               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
//               style={{ width: getScoreWidth() }}
//             ></div>
//           </div>

//           <div className="flex justify-between">
//             <span className="text-xs">300</span>
//             <span className="text-xs">850</span>
//           </div>

//           <div className="text-center mt-6">
//             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
//               {score}
//             </p>
//             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
//             <p className="mt-4 text-gray-600 text-sm">
//               {score < 670
//                 ? "Consider improving your credit score by paying bills on time and reducing debt."
//                 : "Congratulations! You have a healthy credit score."}
//             </p>
//           </div>
//         </div>
//       )}

    
//     </div>
//   );
// }


import { useState } from "react";

export default function CreditScoreChecker() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [flip, setFlip] = useState(false);

  const validateFields = () => {
    const newErrors = {};
    if (!cardName.trim()) newErrors.cardName = "Name on card is required";
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Card number must be 16 digits";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) newErrors.expiry = "Expiry must be in MM/YY format";
    if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (e) => {
    let { value } = e.target;
    value = value.replace(/[^\d]/g, "");
    if (value.length <= 2) {
      setExpiry(value);
    } else if (value.length > 2) {
      setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const handleCheckScore = (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    setLoading(true);
    setScore(null);

    const userKey = `${cardName.trim().toLowerCase()}|${cardNumber.replace(/\s/g, "")}|${expiry}`;
    const storedScore = localStorage.getItem(userKey);

    if (storedScore) {
      setTimeout(() => {
        setScore(parseInt(storedScore));
        setLoading(false);
      }, 1000);
    } else {
      const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
      localStorage.setItem(userKey, randomScore);
      setTimeout(() => {
        setScore(randomScore);
        setLoading(false);
      }, 1000);
    }
  };

  const getScoreColor = () => {
    if (!score) return "text-gray-700";
    if (score < 580) return "text-red-600";
    if (score < 670) return "text-yellow-600";
    if (score < 740) return "text-blue-600";
    return "text-green-600";
  };

  const getScoreCategory = () => {
    if (!score) return "";
    if (score < 580) return "Poor";
    if (score < 670) return "Fair";
    if (score < 740) return "Good";
    if (score < 800) return "Very Good";
    return "Excellent";
  };

  const getScoreWidth = () => {
    if (!score) return "0%";
    return `${((score - 300) / (850 - 300)) * 100}%`;
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#550665] to-[#27012F] flex items-center justify-center p-4 ">
    <div className="max-w-md mx-auto p-4 shadow-2xl">
      <div className="rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

        <div className={`credit-card-container ${flip ? "flipped" : ""} relative h-56 mb-8`}>
          {/* Front of card */}
          <div className={`rounded-xl p-6 absolute w-full h-full backface-hidden ${flip ? "hidden" : "block"} bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg`}>
            <div className="flex justify-between items-start">
              <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
              <button onClick={() => setFlip(true)} className="text-xs underline text-gray-300 hover:text-white">
                Flip for CVV
              </button>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-xs mb-1">Card Number</p>
              <p className="font-mono text-xl mb-4">{cardNumber || "•••• •••• •••• ••••"}</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Card Holder</p>
                  <p className="font-semibold uppercase">{cardName || "YOUR NAME"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Expires</p>
                  <p className="font-mono">{expiry || "MM/YY"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className={`rounded-xl absolute w-full h-full backface-hidden ${flip ? "block" : "hidden"} bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg`}>
            <div className="w-full h-12 bg-gray-900 mt-4"></div>
            <div className="p-6">
              <div className="flex justify-end mb-4">
                <button onClick={() => setFlip(false)} className="text-xs underline text-gray-300 hover:text-white">
                  Back to front
                </button>
              </div>
              <div className="bg-white h-10 flex items-center">
                <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
                  <p className="font-mono text-gray-800">{cvv || "•••"}</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleCheckScore} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-200">Name on Card</label>
            <input
              type="text"
              placeholder="e.g. John Smith"
              className="w-full p-3 border rounded-lg text-gray-800"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            {errors.cardName && <p className="text-red-300 text-sm mt-1">{errors.cardName}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 border rounded-lg text-gray-800 font-mono"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
            {errors.cardNumber && <p className="text-red-300 text-sm mt-1">{errors.cardNumber}</p>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-200">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 border rounded-lg text-gray-800 font-mono"
                value={expiry}
                onChange={handleExpiryChange}
                maxLength={5}
              />
              {errors.expiry && <p className="text-red-300 text-sm mt-1">{errors.expiry}</p>}
            </div>

            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-200">CVV</label>
              <input
                type="password"
                placeholder="123"
                className="w-full p-3 border rounded-lg text-gray-800 font-mono"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                maxLength={3}
              />
              {errors.cvv && <p className="text-red-300 text-sm mt-1">{errors.cvv}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
                Checking...
              </div>
            ) : "Check Credit Score"}
          </button>
        </form>
      </div>

      {score !== null && !loading && (
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

          <div className="flex justify-between text-xs mb-1">
            <span>Poor</span>
            <span>Fair</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>

          <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
            <div 
              className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
              style={{ width: getScoreWidth() }}
            ></div>
          </div>

          <div className="flex justify-between">
            <span className="text-xs">300</span>
            <span className="text-xs">850</span>
          </div>

          <div className="text-center mt-6">
            <p className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
              {score}
            </p>
            <p className="text-lg font-medium text-gray-700">
              {getScoreCategory()} Credit Score
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              {score < 670 ? 
                "Consider improving your credit score by paying bills on time and reducing debt." :
                "Congratulations! You have a healthy credit score."
              }
            </p>
          </div>
        </div>
      )}

    
    </div>
    </div>
  );
}
