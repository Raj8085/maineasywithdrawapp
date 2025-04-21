
// import { useState } from "react"
// import { ChevronDown, ChevronUp } from "lucide-react"



// export function FaqAccordion() {
//   const [faqs, setFaqs] = useState([
//     {
//       question: "What is CoinBase?",
//       answer:
//         "Base is a secure, Ethereum Layer 2 network built by Coinbase. It offers faster, cheaper blockchain transactions while staying fully compatible with Ethereum and connected to your Coinbase wallet.",
//       isOpen: true,
//     },
//     {
//       question: "What can I use the Base Card for?",
//       answer:
//         "The Base Card can be used for everyday purchases, online shopping, and withdrawing cash from ATMs. It connects directly to your Coinbase account, allowing you to spend your crypto assets after converting them to fiat currency.",
//       isOpen: false,
//     },
//     {
//       question: "Are the Base Cards physical or virtual?",
//       answer:
//         "Base Cards are available in both physical and virtual formats. The virtual card can be used immediately for online purchases, while the physical card will be mailed to your address and can be used for in-person transactions and ATM withdrawals.",
//       isOpen: false,
//     },
//   ])

//   const toggleFaq = (index) => {
//     setFaqs(
//       faqs.map((faq, i) => ({
//         ...faq,
//         isOpen: i === index ? !faq.isOpen : faq.isOpen,
//       })),
//     )
//   }

//   return (
//     <div className="rounded-xl  p-6 md:p-20">
//       {faqs.map((faq, index) => (
//         <div key={index} className="border-b border-[#e0f0c0] bg-[#f8ffdc] p-10 last:border-b-0">
//           <button onClick={() => toggleFaq(index)} className="flex w-full items-center justify-between py-6 text-left">
//             <h3 className="text-xl font-medium text-[#333333] md:text-2xl">{faq.question}</h3>
//             <div
//               className={`flex h-10 w-10 items-center justify-center rounded-full ${faq.isOpen ? "bg-[#0a5c36]" : "bg-[#0a5c36]"}`}
//             >
//               {faq.isOpen ? (
//                 <ChevronUp className="h-5 w-5 text-white" />
//               ) : (
//                 <ChevronDown className="h-5 w-5 text-white" />
//               )}
//             </div>
//           </button>
//           <div
//             className={`overflow-hidden transition-all duration-300 ease-in-out ${
//               faq.isOpen ? "max-h-96 pb-6" : "max-h-0"
//             }`}
//           >
//             <p className="text-[#333333] text-lg">{faq.answer}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }





/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const faqs = [
  {
    question: "What is CoinBase?",
    answer: "Base is a secure, Ethereum Layer 2 network built by Coinbase. It offers faster, cheaper blockchain transactions while staying fully compatible with Ethereum and connected to your Coinbase wallet."
  },
  {
    question: "What can I use the Base Card for?",
    answer: "You can use it anywhere major cards are accepted—online, in-store, or internationally. Your spending draws directly from your Base or Coinbase-linked wallet."
  },
  {
    question: " Are the Base Cards physical or virtual?",
    answer: "All Base Cards come with instant virtual access, and a physical card (standard or metal, depending on tier) can be requested and shipped to your address."
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4  rounded-lg text-left transition-all duration-200 hover:bg-[#f5fae8]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4  mt-1 rounded-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <div className="md:m-20 bg-gradient-to-t from-[#E0FFE1] to-[#F6FFC5] py-12 px-4 sm:px-6 lg:px-8">
         <h1 className="text-3xl font-bold text-center mb-12">
          Frequently asked questions.
        </h1>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;