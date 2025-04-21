function CoreFeatures() {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-medium text-center mb-6 text-black">
            The Wallet That Puts You in Control
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Trust Wallet is a secure, decentralized cryptocurrency wallet that lets you truly own your crypto assets. It supports thousands of coins, NFTs, Web3 dApps, all in one place — and most importantly, you control the keys.
          </p>
        </div>
  
        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Core Features That Give You{" "}
            <span className="bg-gradient-to-r from-[#A5EE1E] to-[#0EC460] bg-clip-text text-transparent">Full</span>{" "}
            <span className="bg-gradient-to-r from-[#A5EE1E] to-[#0EC460] bg-clip-text text-transparent">Control</span>
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
            {/* Self-Custody Card */}
            <div className="bg-[#FFE8E8] rounded-2xl p-6 w-full max-w-sm transition-transform hover:scale-105">
              <div className="mb-4">
                <img src="/noto_key.svg" alt="" className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl text-[#896700] font-semibold mb-2">Self-Custody</h3>
              <p className="text-[#222121]">You own your private keys, not a third party.</p>
            </div>
  
            {/* Multi-Chain Support Card */}
            <div className="bg-[#F4F5DF] rounded-2xl p-6 w-full max-w-sm transition-transform hover:scale-105">
              <div className="mb-4">
                <img src='/Group.svg' alt='' className="w-8 h-8 text-[#40E0D0]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <span className="text-[#40E0D0]">Multi-Chain</span> <span className="text-[#5F5FFF]">Support</span>
              </h3>
              <p className="text-[#222121]">Store and manage thousands of tokens across dozens of blockchains</p>
            </div>
  
            {/* Web3 Ready Card */}
            <div className="bg-[#FFE4F5] rounded-2xl p-6 w-full max-w-sm transition-transform hover:scale-105">
              <div className="mb-4">
                <img src='/mdi_web.svg' alt='' className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <span className="text-[#DA1C90]">Web3</span> <span className="text-[#DA1C90]">Ready</span>
              </h3>
              <p className="text-[#222121]">Access dApps, NFTs, and DeFi directly from your wallet.</p>
            </div>
  
            {/* Secure & Anonymous Card */}
            <div className="bg-[#FFE8F8] rounded-2xl p-6 w-full max-w-sm transition-transform hover:scale-105">
              <div className="mb-4">
                <img src='/arcticons_secure-signin.svg' alt='' className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl text-[#5D0281] font-semibold mb-2">Secure & Anonymous</h3>
              <p className="text-[#222121]">No KYC, no centralized data collection — just pure ownership.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CoreFeatures;
  