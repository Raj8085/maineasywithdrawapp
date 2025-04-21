// import { useState } from "react"
// import { ChevronDown } from "lucide-react"
// import { cn } from "@/lib/utils"



// const faqData = [
//   {
//     question: "What is Ease Withdraw?",
//     answer:
//       "Ease Withdraw is a platform that allows you to easily withdraw and manage your digital assets. It provides a seamless experience for accessing your funds whenever you need them.",
//   },
//   {
//     question: "Can I access all my digital cards on one platform?",
//     answer:
//       "Yes, Ease Withdraw allows you to access and manage all your digital cards in one convenient platform. This makes it easier to keep track of your various digital assets.",
//   },
//   {
//     question: "Is Bitcoin supported on your platform?",
//     answer:
//       "Yes, Bitcoin is fully supported on our platform. You can easily deposit, withdraw, and manage your Bitcoin holdings through our secure interface.",
//   },
//   {
//     question: "Can I build or repair my credit with Ease Withdraw?",
//     answer:
//       "Yes, Ease Withdraw offers features that can help you build or repair your credit. Our platform provides tools and resources designed to improve your financial health.",
//   },
//   {
//     question: "Do the crypto cards support other cryptocurrencies besides Bitcoin?",
//     answer:
//       "Yes, our crypto cards support a wide range of cryptocurrencies beyond just Bitcoin. This includes major cryptocurrencies like Ethereum, Litecoin, and many others.",
//   },
// ]

// export default function FAQAccordion() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <div className="w-full bg-purple-950 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-12">Frequently asked questions.</h2>

//         <div className="bg-purple-900 rounded-3xl p-6 md:p-10">
//           <div className="space-y-6">
//             {faqData.map((faq, index) => (
//               <div key={index} className="border-b border-purple-800 last:border-0 pb-6 last:pb-0">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex justify-between items-center text-left"
//                 >
//                   <h3 className="text-white text-lg md:text-xl font-medium pr-4">{faq.question}</h3>
//                   <div
//                     className={cn(
//                       "bg-purple-600 rounded-full p-2 flex items-center justify-center transition-transform duration-300",
//                       openIndex === index ? "rotate-180" : "",
//                     )}
//                   >
//                     <ChevronDown className="h-4 w-4 text-white" />
//                   </div>
//                 </button>

//                 {openIndex === index && (
//                   <div className="mt-4 text-white text-base md:text-lg opacity-90 pr-10">{faq.answer}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
