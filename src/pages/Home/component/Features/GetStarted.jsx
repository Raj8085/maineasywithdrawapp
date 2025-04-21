// // /* eslint-disable react/prop-types */
// // const steps = [
// //   {
// //     title: "Sign Up & Log In",
// //     description: "Create your account and access all financial tools"
// //   },
// //   {
// //     title: "Choose Your Cards",
// //     description: "Select from a wide range of digital and credit-backed cards"
// //   },
// //   {
// //     title: "Repair & Build Credit",
// //     description: "Use our credit solutions to improve your score and financial health"
// //   }
// // ];

// // function StepItem({ title, description }) {
// //   return (
// //     <div className="flex flex-col font-poppins md:flex-row items-start md:items-center gap-4 py-6 border-b border-purple-300/20 last:border-0">
// //       <h3 className="text-xl  md:text-2xl font-medium text-[#997300] whitespace-nowrap">{title}</h3>
// //       <span className="hidden md:block text-purple-300/60">-</span>
// //       <p className="text-white text-lg md:text-xl">{description}</p>
// //     </div>
// //   );
// // };

// // function GetStarted() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#09001B] to-[#580092] py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-4xl mx-auto">
// //         <div className=" rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-xl font-salsa">
// //           <h1 className="text-[36px] md:text-5xl font-bold text-center text-white mb-12">
// //             Get Started in Three Simple Steps:
// //           </h1>
// //           <div className="space-y-4">
// //             {steps.map((step, index) => (
// //               <StepItem key={index} {...step} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default GetStarted;


// export default function GetStarted() {
//   return (
//     <div className="w-full bg-gradient-to-b from-[#27012F]  to-[#550665] py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-4xl mx-auto  bg-gradient-to-b from-[#09001B]  to-[#580092]   rounded-2xl p-6 md:p-10">
//         <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
//           Get Started in Three Simple Steps:
//         </h2>

//         <div className="space-y-6 md:space-y-8">
//           <div className="flex flex-col md:flex-row md:items-center gap-2">
//             <span className="text-amber-400 font-medium">Sign Up & Log In</span>
//             <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
//               Create your account and access all financial tools
//             </span>
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center gap-2">
//             <span className="text-amber-400 font-medium">Choose Your Cards</span>
//             <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
//               Select from a wide range of digital and credit-backed cards
//             </span>
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center gap-2">
//             <span className="text-amber-400 font-medium">Repair & Build Credit</span>
//             <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
//               Use our credit solutions to improve your score and financial health.
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



  import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What is Ease Withdraw?",
    answer:
      "Ease Withdraw is an all-in-one digital finance platform that offers access to a wide range of digital cards, credit solutions, and Bitcoin (BTC) integration—all in one place. We simplify how you manage and grow your finances.",
  },
  {
    question: "Can I access all my digital cards on one platform?",
    answer:
      "Yes! With Ease Withdraw, you can buy, manage, and use multiple digital cards—such as Cash App, Coinbase, Nexo, PayPal, Trust Wallet, and Robinhood—all from one secure dashboard."
  },
  {
    question: "Is Bitcoin supported on your platform?",
    answer:
      "Absolutely. We support Bitcoin (BTC) through various crypto-friendly cards like Nexo, Coinbase, and more. You can use your BTC for spending, transfers, and real-time conversions.",
  },
  {
    question: "Can I build or repair my credit with Ease Withdraw?",
    answer:
      "Yes. We provide powerful tools and credit-backed solutions designed to help you build, improve, or repair your credit score. Whether you’re starting from scratch or working to fix past issues, we’ve got you covered.",
  },
  {
    question: "Do the crypto cards support other cryptocurrencies besides Bitcoin?",
    answer:
      "Yes. While Bitcoin (BTC) is fully supported, many of our partner cards—like Coinbase and Nexo—also support other major cryptocurrencies like Ethereum (ETH), USDT, and more",
  },
];

export default function GetStartedWithFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#27012F] to-[#1F0025] py-16 px-4 md:px-8 lg:px-16 space-y-16">
      {/* Get Started Section */}
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#09001B] to-[#580092] rounded-2xl p-6 md:p-10">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
          Get Started in Three Simple Steps:
        </h2>

        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-amber-400 font-medium">Sign Up & Log In</span>
            <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
              Create your account and access all financial tools
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-amber-400 font-medium">Choose Your Cards</span>
            <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
              Select from a wide range of digital and credit-backed cards
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-amber-400 font-medium">Repair & Build Credit</span>
            <span className="text-white md:before:content-['-'] md:before:mx-2 md:before:text-white">
              Use our credit solutions to improve your score and financial health.
            </span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-12">
          Frequently asked questions.
        </h2>

        <div className="bg-gradient-to-t from-[#6F1F8A] to-[#290036] rounded-3xl p-6 md:p-10">
          <div className="space-y-6">
            {faqData.map((faq, index) => ( 
              <div
                key={index}
                className="border-b border-purple-800 last:border-0 pb-6 last:pb-0"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-white text-lg md:text-xl font-medium pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={cn(
                      "bg-purple-600 rounded-full p-2 flex items-center justify-center transition-transform duration-300",
                      openIndex === index ? "rotate-180" : ""
                    )}
                  >
                    <ChevronDown className="h-4 w-4 text-white" />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="mt-4 text-white text-base md:text-lg opacity-90 pr-10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
