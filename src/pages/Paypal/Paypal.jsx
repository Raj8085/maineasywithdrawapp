import Hero from "./components/Hero";
import Cards from "./components/Cards";
import FAQAccordion from "./components/FAQAccordion";
import WhyDifferentSection from "./components/WhyDifferentSection";
import Gif1 from "../../assets/graffiti.gif";
import Gif2 from "../../assets/global.gif";
import Gif4 from "../../assets/medal.gif";
import Gif3 from "../../assets/wallet.gif";
import CallToAction from "../cashApp/components/CallToAction";

// import { Lightning, Globe, Wallet, Medal } from 'lucide-react';

const Paypal = () => {
  return (
    <div>
      <Hero />

      <div className="bg-white py-40 px-5 md:px-20 rounded-lg shadow-md w-full ">
        <div className="bg-pink-100 py-16 px-10 gap-20 rounded-lg flex flex-col lg:flex-row">
          <div className="lg:w-[55%]  mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-5xl mb-10">
              Simple. Secure. Seamless.
            </h1>

            <p className="text-xl md:mr-20 mb-8">
              Think of us your upgraded PayPal - but smarter, faster, and build
              for today. We've reimagined how money moves, stores, and grows
            </p>

            <p className="text-xl md:mr-20 mb-4">
              With full wallet integration, on-chain transparency, and
              multi-asset support, you get:
            </p>
          </div>

          <div className="lg:w-[45%] lg:pr-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pink-100 border-2 border-yellow-100 p-6 rounded-lg flex flex-col items-center text-center hover:bg-yellow-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-full mb-4 border border-yellow-200">
                <img src={Gif1} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <p className="text-lg">Instant payments in fiat or crypto</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg flex flex-col items-center text-center shadow-sm shadow-yellow-200">
              <div className="bg-white rounded-full mb-4 border border-yellow-200">
                <img src={Gif2} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <p className="text-lg">Instant payments in fiat or crypto</p>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg flex flex-col items-center text-center shadow-sm shadow-green-200">
              <div className="bg-white rounded-full mb-4 border border-yellow-200">
                <img src={Gif3} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <p className="text-lg">
                Full control from your mobile wallet or browser
              </p>
            </div>

            <div className=" border-2 border-white p-6 rounded-lg flex flex-col items-center text-center hover:bg-green-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-full mb-4 border border-yellow-200">
                <img src={Gif4} alt="" className="w-12 h-12 rounded-full" />
              </div>
              <p className="text-lg">
                Smart rewards that adapt to how you spend
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cards />

      <WhyDifferentSection />

      <div className="flex justify-center my-32 ">
        <FAQAccordion />
      </div>
      <CallToAction/>
    </div>
  );
};

export default Paypal;
