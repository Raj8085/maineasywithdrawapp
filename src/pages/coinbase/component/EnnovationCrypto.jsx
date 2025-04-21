export default function EnnovationCrypto() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto p-20 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left content section */}
          <div className="w-full md:w-1/2 max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Evolution of Crypto Starts Here
            </h1>
            <div className="space-y-4 text-gray-700">
              <p className="text-base md:text-lg">
                Coinbase is one of the world&apos;s most trusted crypto platforms- empowering millions to buy, sell, and
                grow with digital assets.
              </p>
              <p className="text-base md:text-lg">
                Now, with Base.Coinbase introduction a new era: faster transaction, lower costs, and real-world
                utility-all while keeping security and simplicity at the core
              </p>
            </div>
          </div>

          {/* Right GIF section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src="/crypto-coins.gif"
                alt="Animated cryptocurrency coins"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
