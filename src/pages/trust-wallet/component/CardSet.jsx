
function CardSet() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-[#257D05] to-[#44E30A] bg-clip-text text-transparent ] mb-6">
          The Trust Control Card Set
        </h1>
        <p className="text-xl sm:text-2xl text-[#000000] mb-4">
          This isn&apos;t just a collectible. It&apos;s a smart, secure, and durable card set built for real holders
        </p>
        <p className="text-lg text-[#2D2D2F]">
          Inspired by the core of Trust Wallet - ownership, protection, and access.
        </p>
      </div>

      {/* What's Inside Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF696E] to-[#941216] bg-clip-text text-transparent mb-6">
          What&apos;s Inside the Card Set
        </h2>
        <p className="text-lg text-[#000000] mb-12">
          Built to safely store your recovery phrase offline. Designed as a daily reminder that your keys mean your control.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* The Key Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFC880] hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">The Key Card</h3>
          <h4 className="text-xl font-semibold text-[#000000] mb-4">Own It. Protect It.</h4>
          <p className="text-[#000000] mb-6">Built to safely store your recovery phrase offline.</p>
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-gradient-to-t from-[#F86627] to-[#DE9000] mt-2 mr-2"></span>
              <span>Store your seed phrase securely</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-orange-400 mt-2 mr-2"></span>
              <span>Keep it private, offline, protected</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-orange-400 mt-2 mr-2"></span>
              <span>Discreet and durable - fits right in your wallet</span>
            </li>
          </ul>
        </div>

        {/* The Vault Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#ED1E79] hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-[#780538] mb-4">The Vault Card</h3>
          <h4 className="text-xl font-semibold text-[#000000] mb-4">Backup That&apos;s Built Build</h4>
          <p className="text-[#000000] mb-6">A secondary storage card for backup or emergency recovery use.</p>
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
              <span>Record a duplicate recovery phrase</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
              <span>Use as a cold storage fallback</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-purple-400 mt-2 mr-2"></span>
              <span>Designed for long-term protection</span>
            </li>
          </ul>
        </div>

        {/* The Access Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#189571] hover:shadow-xl transition-shadow lg:col-span-1 md:col-span-2 lg:col-auto">
          <h3 className="text-2xl font-bold text-[#2D8440] mb-4">The Access Card</h3>
          <h4 className="text-xl font-semibold text-[#000000] mb-4">Your Crypto Cheat Sheet</h4>
          <p className="text-[#000000] mb-6">Quick-reference tool for wallet functions, smart tips, and trusted links.</p>
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-green-400 mt-2 mr-2"></span>
              <span className='text-[#000000]'>Easy reference for sending, receiving, or restoring</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-green-400 mt-2 mr-2"></span>
              <span>QR links to official resources</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-green-400 mt-2 mr-2"></span>
              <span>Great for onboarding or gifting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSet;