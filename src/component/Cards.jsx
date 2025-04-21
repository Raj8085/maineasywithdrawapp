/* eslint-disable react/prop-types */
export function CreditCard({ lastFour, expiry, status, userName }) {
    return (
      <div className="relative min-w-[320px] h-[200px] rounded-xl p-6 flex flex-col justify-between bg-[#0a0b3b] overflow-hidden group">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <svg className="absolute w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,400 C100,300 200,200 400,200 C200,200 100,300 0,400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-400/20"
            />
          </svg>
        </div>
  
        <div className="relative flex justify-between items-start">
          <div className="space-y-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(252)-VxLovBKZn5nwq77wfCMXNCgL6VpTx0.png"
              alt="Visa Logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-white/80 text-sm">{userName}</p>
          </div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(252)-VxLovBKZn5nwq77wfCMXNCgL6VpTx0.png"
            alt="ViserCard Logo"
            className="h-6 w-auto brightness-0 invert"
          />
        </div>
  
        <div className="relative space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 rounded bg-white/20" />
            <p className="text-white font-mono text-lg tracking-wider">**** **** **** {lastFour}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-white/60 text-xs">Expires: {expiry}</p>
              <div className="flex gap-4">
                <p className="text-white/60 text-xs">CVC: ***</p>
                <p className="text-white/60 text-xs">Pin: ****</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">{status}</span>
          </div>
        </div>
  
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    )
  }
  
  