import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState([]); // Start with the second item open by default

  // FAQ data
  const faqItems = [
    {
      id: 0,
      question: "What is the Nexo Card?",
      answer: "The Nexo Card is a crypto-powered payment card that allows you to spend without selling your digital assets. It draws from your Nexo Credit Line, using your crypto—like BTC, ETH, and others—as collateral. You keep ownership of your crypto while accessing real-world liquidity instantly."
    },
    {
      id: 1,
      question: "How does the Nexo Credit Line work with the card?",
      answer: "Your available credit is based on the value of the crypto you hold in your Nexo Wallet. The more collateral you have, the more credit you can access. When you swipe your Nexo Card, the funds are automatically borrowed from your credit line, without triggering a taxable event."
    },
    {
      id: 2,
      question: "How does the Nexo Card work?",
      answer: "The Nexo Card connects directly to your crypto-backed Credit Line. Every time you make a purchase, funds are drawn against your available credit without selling your crypto."
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
    <div className="w-[85%] mx-auto rounded-xl p-8" style={{
      background: 'linear-gradient(to top, #F2EFEF, #F8F3FF)'
    }}><h2 className="text-black text-center text-3xl md:text-4xl font-medium mb-12">
      Frequently asked questions.
    </h2>
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
            <div className="bg-[#0A4000] bg-opacity-70 rounded-full p-2">
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
  );
}