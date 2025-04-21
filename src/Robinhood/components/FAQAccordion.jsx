import  { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState([]); // Start with the second item open by default

  // FAQ data
  const faqItems = [
    {
      id: 0,
      question: "Can I use these cards with other wallets too?",
      answer: "Yes. They work with any crypto wallet that gives you a recovery phrase - like MetaMask, Exodus, or Ledger."
    },
    {
      id: 1,
      question: " How can I get this card set?",
      answer: "You can order the card set directly from our website. Just click the 'Get the Cards'button and check out."
    },
    {
      id: 2,
      question: "How do these cards help me?",
      answer: " These cards help you save and protect your recovery phrase, back it up, and give you a quick guide for using your wallet safely. It's everything you need to keep your crypto safe and in your control."
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

        

<div className='h-[80vh] flex flex-col justify-center items-center py-10 mb-16'>
<div>
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center py-10 salsa-font">
            Frequently asked questions.
            </h2>
        </div>
        <div className="w-[85%] mx-auto rounded-xl p-8" style={{
      background: 'linear-gradient(to top, #FFBE63, #FFEDB2)'
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
    </div>
  );
}