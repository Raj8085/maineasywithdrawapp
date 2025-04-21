import Hero from './components/Hero'
import platformImage from '../../assets/nexon-mock1.png'
import MochUP2 from '../../assets/nexon-mock2.png'
import MochUP3 from '../../assets/nexon-mock3.png'
import Cards from './components/Cards'
import FAQAccordion from './components/FAQAccordion'
import CallToAction from '../cashApp/components/CallToAction'

const Nexon = () => {
  return (
    <div>
      <Hero />

      <section className="m-6 md:m-12 px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="md:w-[40%] text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-medium leading-snug mb-6 font-popins" style={{ lineHeight: '1.4' }}>
            The Everyday Platform for <br />
            <span className="text-black">Crypto-Driven Finance</span>
          </h2>

          <p className="text-gray-700 text-xl" style={{ lineHeight: '1.5' }}>
            Nexo gives you a simple and secure way to manage <br /> your digital wealth. Designed for everyday users, <br /> investors, and forward-thinkers, our ecosystem turns <br /> your crypto into a powerful financial tool.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[60%] flex justify-center">
          <img
            src={platformImage}
            alt="Tablet with crypto platform"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>


      <section className="bg-[#f6f1fb] px-6 md:px-12 py-10 md:py-20 ">
        <div className="max-w-full m-6 grid md:grid-cols-2 gap-20 items-center">

          {/* Left: Card Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={MochUP2} // Replace with actual path
              alt="Crypto Card"
              className="rounded-xl w-full max-w-lg"
            />
          </div>

          {/* Right: Text and Features */}
          <div className=''>
            <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
              More Than a Card—<br className="hidden md:block" />
              It’s Your Gateway to Smart Finance
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Seamlessly connect your Nexo Card with all the features you already use:
            </p>

            <ul className="space-y-4 text-gray-800 text-base">
              {[
                "Get personalized service if you manage larger balances",
                "Use advanced strategies to grow your Bitcoin stack",
                "Trade BTC and other digital assets instantly",
                "Track your crypto taxes automatically",
                "Earn daily rewards on idle crypto"
              ].map((item, idx) => (
                <li key={idx} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Credit Line Powered by Your <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">Assets</span>.
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Let your assets do more than sit in a wallet. Use them to unlock real-world financial power.<br className="hidden md:block" />
            Get approved faster by backing your credit with what you already own.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f7f0ed] hover:bg-[#FCE7C7] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300">
            <img src="\bitcoin_16866014 2 (4).png" alt="Borrow" className="mx-auto mb-4 w-24 h-24 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Borrow Against Your Crypto</h3>
            <p className="text-gray-700 text-sm">
              Access a credit line using your crypto holdings as collateral, enabling spending without liquidating your assets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7f0ed] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:bg-[#FCE7C7] hover:shadow-none transition-shadow duration-300">
            <img src="\coins_18670279 2 (1).png" alt="Rewards" className="mx-auto mb-4 w-24 h-24 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Earn Crypto Rewards</h3>
            <p className="text-gray-700 text-sm">
              Receive up to 2% cashback on purchases, paid in NEXO Tokens or Bitcoin, depending on your loyalty tier.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f0ed] hover:bg-[#FCE7C7] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300">
            <img src="\cashflow_18818466 2.png" alt="Flexible Repayments" className="mx-auto mb-4 w-24 h-24 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Flexible Repayments</h3>
            <p className="text-gray-700 text-sm">
              Repay at your convenience with no fixed schedules, offering financial flexibility.
            </p>
          </div>
        </div>
      </section>



      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Introducing the New <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">Nexo Card Series</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            One Platform. Three Cards. Limitless Possibilities.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We’re launching a powerful new lineup of Nexo Cards—built for every kind of crypto user.
            Whether you’re just getting started or managing a full digital portfolio, there’s a Nexo Card
            made to match your financial lifestyle.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
            Each card connects directly to your Nexo Credit Line, so you access instant liquidity,
            make everyday purchases, and earn rewards — without ever selling your crypto.
          </p>
        </div>
      </section>

      <Cards />


      <section className="bg-gradient-to-br from-green-50 to-green-100 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start gap-8">

          {/* Text Container - Center Aligned */}
          <div className="text-center md:text-center max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
              Take Control of Your Crypto Future
            </h2>
            <p className="text-gray-700 text-lg">
              The Nexo Card Series isn’t just about spending—it’s about evolving the way you use, grow, and protect your digital wealth. With full access to your credit line, seamless integration across the Nexo platform, and tailored options for every lifestyle, you’re not just getting a card—you’re unlocking a smarter financial future.
            </p>
          </div>

          {/* Image Container - Left Aligned */}
          <div className="w-full flex justify-start">
            <img
              src={MochUP3} // Replace with your actual image path
              alt="Crypto Cards"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section>

      <div className='flex justify-center my-32 '>
        <FAQAccordion />
      </div>
      <CallToAction/>

    </div>
  )
}

export default Nexon