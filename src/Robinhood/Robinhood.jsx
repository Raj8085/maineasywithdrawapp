import Hero from './components/Hero'
import RobinhoodCardSection from '../Robinhood/components/RobinhoodCardSection'
import RobinhoodLanding from '../Robinhood/components/RobinhoodLanding'
import FAQAccordion from '../Robinhood/components/FAQAccordion'


const Robinhood = () => {
  return (
    <div>
        <Hero />

        <section className="py-20 px-4 md:px-12 lg:px-24 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-medium text-black">
        A New Way to Move, Spend, and Control Money
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Robin Hood is a U.S.-based payment gateway and card ecosystem built for people who are tired of being taxed
        by hidden fees, ignored by traditional banks, and stuck with outdated tools.
      </p>
    </section>

        <RobinhoodCardSection />

        <RobinhoodLanding />

        <div className="w-full md:h-[100vh] flex justify-center items-center py-10">
      <img
        src="/robinhood-card-mockup.png"
        alt="Description of Image"
        className="w-[80%] h-auto"
      />
    </div>


    <div>
  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-[#FF696E] to-[#941216] bg-clip-text text-transparent text-center py-10">
    Extra Features Across All Robin Hood Cards :
  </h2>
</div>


<div className='w-full relative px-4 sm:px-5 pt-10 sm:pt-20'>
    <div className="w-full rounded-md bg-[#E3E4FF]">
        <div className="px-4 sm:px-5 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Left: Bullet Points */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8 order-2 md:order-1">
                {[
                    "Real-world utility — not just a gimmick",
                    "Secure your BTC and crypto with confidence",
                    "A smart tool for serious holders — and a perfect gift for new ones",
                    "Slim, durable, and designed to go wherever you",
                    "Helps prevent loss, confusion, or compromise"
                ].map((text, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <span className="min-w-4 min-h-4 relative mt-1.5">
                            <span className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400"></span>
                            <span className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gradient-to-br from-pink-500 to-yellow-400 opacity-50 -top-1 -left-1"></span>
                        </span>
                        <p className="text-base sm:text-lg leading-relaxed text-black">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
                <img 
                    src="/robinhood-mock1.png"
                    alt="Crypto App Preview"
                    className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] md:translate-x-0 lg:translate-x-8" 
                />
            </div>
        </div>
    </div>
</div>
     


        <FAQAccordion />
    </div>
  )
}

export default Robinhood