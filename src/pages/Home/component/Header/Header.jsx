// import { useState } from "react"
// import { Menu, X } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <nav className="bg-gradient-to-b font-salsa text-[16px] from-[#550665] to-[#27012F] text-white py-4 px-6 md:px-10">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center">
//             <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path d="M8 14L12 10L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//             <span className="font-bold text-xl">
//               EASE <span className="text-sm font-normal">WITHDRAW</span>
//             </span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="#" className="hover:text-gray-300">
//             CashApp
//           </Link>
//           <Link to="#" className="hover:text-gray-300">
//             Nexo
//           </Link>
//           <Link to="#" className="hover:text-gray-300">
//             Coinbase
//           </Link>
//           <Link to="#" className="hover:text-gray-300">
//             Paypal
//           </Link>
//           <Link to="#" className="hover:text-gray-300">
//             Trustwallet
//           </Link>
//           <Link to="#" className="hover:text-gray-300">
//             Robinhood
//           </Link>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             to="/login"
//             className="bg-[#B58700] hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="border border-[#B58700] hover:bg-[#B58700] text-white px-6 py-2 rounded-full font-medium"
//           >
//             Sign up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden mt-4 pb-4 px-4">
//           <div className="flex flex-col space-y-4">
//             <Link to="#" className="hover:text-gray-300 py-2">
//               CashApp
//             </Link>
//             <Link to="#" className="hover:text-gray-300 py-2">
//               Nexo
//             </Link>
//             <Link to="#" className="hover:text-gray-300 py-2">
//               Coinbase
//             </Link>
//             <Link to="#" className="hover:text-gray-300 py-2">
//               Paypal
//             </Link>
//             <Link to="#" className="hover:text-gray-300 py-2">
//               Trustwallet
//             </Link>
//             <Link to="#" className="hover:text-gray-300 py-2">
//               Robinhood
//             </Link>

//             <div className="flex flex-col space-y-3 pt-2">
//               <Link
//                 to="/login"
//                 className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-medium text-center"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="border border-white hover:bg-purple-800 text-white px-6 py-2 rounded-full font-medium text-center"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-b font-salsa text-[16px] from-[#550665] to-[#27012F] text-white py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
          <img src="/Nexo_black300 (1) 1.png" alt=""/>
          </Link>
        </div>

        {/* Desktop and Tablet Navigation */}
        <div className="hidden md:flex items-center flex-wrap justify-center gap-4 lg:gap-8">
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            CashApp
          </Link>
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            Nexo
          </Link>
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            Coinbase
          </Link>
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            Paypal
          </Link>
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            Trustwallet
          </Link>
          <Link to="#" className="hover:text-gray-300 whitespace-nowrap">
            Robinhood
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Link
            to="/login"
            className="bg-[#B58700] hover:bg-yellow-700 text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border border-[#B58700] hover:bg-[#B58700] text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="#" className="hover:text-gray-300 py-2">
              CashApp
            </Link>
            <Link to="#" className="hover:text-gray-300 py-2">
              Nexo
            </Link>
            <Link to="#" className="hover:text-gray-300 py-2">
              Coinbase
            </Link>
            <Link to="#" className="hover:text-gray-300 py-2">
              Paypal
            </Link>
            <Link to="#" className="hover:text-gray-300 py-2">
              Trustwallet
            </Link>
            <Link to="#" className="hover:text-gray-300 py-2">
              Robinhood
            </Link>

            <div className="flex flex-col space-y-3 pt-2">
              <Link
                to="/login"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-white hover:bg-purple-800 text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}