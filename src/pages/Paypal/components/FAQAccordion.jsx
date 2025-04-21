import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState([]); // Start with the second item open by default

  // FAQ data
  const faqItems = [
    {
      id: 0,
      question: "What is this platform?",
      answer: "We are a digital payment platform inspired by PayPal — but built for the future. You can send, receive, spend, and earn using both fiat and cryptocurrencies, all from one secure wallet."
    },
    {
      id: 1,
      question: "What currencies do you support?",
      answer: "We support USD, EUR, GBP, and major cryptocurrencies like BTC, ETH, USDC, and more. You can choose which asset to use per transaction."
    },
    {
      id: 2,
      question: "How do I earn rewards?",
      answer: "With the PayPlus and PaySecure cards, you earn automatically when you spend or hold. Rewards are tracked live in your dashboard and can be withdrawn or reinvested."
    }
    


   
  ];

  // Toggle function to open/close FAQ items
  const toggleItem = (id) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter(item => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  return (
   <div>

    <div>
      <h1 className="text-5xl font-bold text-center mb-10 salsa-font">Frequently Asked Questions</h1>
    </div>

<div className="w-[85%] mx-auto rounded-xl p-8" style={{
      background: 'linear-gradient(to top, #FDE5FD, #A67AF3)'
    }}>
      {faqItems.map((item) => (
        <>
        <div className='flex justify-center'>
        <div key={item.id} className="my-4 w-full md:w-[60%]">
          <button 
            onClick={() => toggleItem(item.id)}
            className="w-full flex justify-between items-baseline py-4 px-2 text-left "
            aria-expanded={openItems.includes(item.id)}
          >
            <h3 className="text-xl font-semibold text-gray-800 salsa-font">{item.question}</h3>
            <div className="bg-[#000000] bg-opacity-70 rounded-full p-2">
              {openItems.includes(item.id) ? 
                <ChevronUp size={20} color="#ffff" /> : 
                <ChevronDown size={20} color="#ffff" />
              }
            </div>
          </button>
          
          {/* Content with smooth transition */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(item.id) ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-2 pt-2 pb-4 text-gray-700">{item.answer}</p>
          </div>
        </div>
        </div>
        </>
      ))}
    </div>
   </div>
  );
}