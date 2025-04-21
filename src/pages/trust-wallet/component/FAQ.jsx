/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const faqs = [
  {
    question: "Can I use these cards with other wallets too?",
    answer: "Yes. They work with any crypto wallet that gives you a recovery phrase - like MetaMask, Exodus, or Ledger."
  },
  {
    question: "How can I get this card set?",
    answer: "You can order the card set directly from our website. Just click the Get the Cards button and check out."
  },
  {
    question: "How do these cards help me?",
    answer: " These cards help you save and protect your recovery phrase, back it up, and give you a quick guide for using your wallet safely. It's everything you need to keep your crypto safe and in your control."
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