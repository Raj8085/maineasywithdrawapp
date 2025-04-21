import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="/WhatsApp Video 2025-04-14 at 21.21.18_96a04a3a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl p-4 font-bold text-white md:text-5xl lg:text-6xl">
            Powered by Coinbase. Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              What&apos;s Next
            </span>
          </h1>
          <p className="mt-4 p-4 text-lg text-white/90 md:text-xl">
            Welcome to the future of digital finance—secure, seamless, and built for everyone.
          </p>
          <Link to="/login">
          <Button
            className="mt-8 m-4   bg-gradient-to-r from-[#5D4DBA] to-[#407BA9] px-10 py-7 text-[20px]  hover:from-indigo-600 hover:to-purple-700 rounded-2xl  font-semibold"
          >
            Get Started
          </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
