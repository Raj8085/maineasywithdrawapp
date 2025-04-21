export default function CryptoCardShowcase() {
  return (
    <section className="w-full bg-[#EFE3FF] py-12 px-4   md:py-16 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          Why This Card Set Matters
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Card Image */}
          <div className="flex justify-center">
            <img
              src="/newimage-removebg-preview.png"
              alt="Crypto Cards Set"
              width={500}
              height={300}
              className="w-full max-w-md"
            />
          </div>
          {/* Benefits List */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-1 flex-shrink-0"></div>
              <p className="text-base text-[#000000] md:text-lg">Real-world utility - not just a gimmick</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-1 flex-shrink-0"></div>
              <p className="text-base text-[#000000] md:text-lg">Secure your BTC and crypto with confidence</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-1 flex-shrink-0"></div>
              <p className="text-base text-[#000000] md:text-lg">A smart tool for serious holders — and a perfect gift for new ones</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-1 flex-shrink-0"></div>
              <p className="text-base text-[#000000] md:text-lg">Slim, durable, and designed to go wherever you</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-1 flex-shrink-0"></div>
              <p className="text-base text-[#000000] md:text-lg">Helps prevent loss, confusion, or compromise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}