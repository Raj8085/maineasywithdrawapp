import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  
  const [openItems, setOpenItems] = useState([]); 

  const faqItems = [
    {
      id: 0,
      question: "What is Cashaap?",
      answer: "Cashaap is an all-in-one financial platform offering credit cards connected with Bitcoin. You can build credit, spend globally, and grow your crypto-all in one place. "
    },
    {
      id: 1,
      question: "How are the Cashaap cards linked with Bitcoin (BTC)?",
      answer: "Each Cashaap card gives you the ability to purchase Bitcoin, earn BTC rewards, and track your crypto directly from your dashboard. Some tiers even let you back your credit line with crypto assets. "
    },
    {
      id: 2,
      question: "Do Cashaap cards help build credit?",
      answer: "Absolutely. All cards report to major credit bureaus, helping you build or repair your credit score as you spend responsibly"
    }
  ];

  
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
      background: 'linear-gradient(to top, #F2EFEF, #FFE2DD)'
    }}>
      <h2 className="text-black text-center text-3xl md:text-4xl font-medium mb-12">
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
            <div className="bg-gray-600 bg-opacity-70 rounded-full p-2">
              {openItems.includes(item.id) ? 
                <ChevronUp size={20} color="#444" /> : 
                <ChevronDown size={20} color="#444" />
              }
            </div>
          </button>
          
        
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