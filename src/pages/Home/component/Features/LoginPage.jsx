// import { useState } from "react"

// import { Globe } from "lucide-react"
// import { Link, useNavigate } from "react-router-dom"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [rememberMe, setRememberMe] = useState(false)
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     navigate("/login")
//     // Handle login logic here
//     console.log({ email, password, rememberMe })
//   }

//   return (
//     <div className="background bg-gradient-to-br from-[#2E023D] to-[#100514] min-h-screen  flex items-center justify-center p-4">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row md:gap-44  rounded-lg overflow-hidden">
//         {/* Left side - Image */}
//         <div className="w-full md:w-[20rem]  h-full md:h-auto relative md:mt-20">
//           <img src="/credit-card-payment-buy-and-sell-products-servi-2025-01-16-15-16-27-utc 1.png" alt="Credit cards"  className="object-cover" />
//         </div>

//         {/* Right side - Login form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12">
//           <h1 className="text-white text-3xl font-bold mb-3">Welcome back 👋</h1>
//           <p className="text-gray-300 mb-8">
//             Clarity gives you the blocks and components you need to create a truly professional website.
//           </p>

//           <button className="w-full bg-gray-800 text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 mb-6 hover:bg-gray-700 transition-colors">
//           <Globe className="h-5 w-5" />
//             <span>Sign in with Google</span>
//           </button>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="example@gmail.com"
//                 className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:border-purple-500"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-300 mb-2 text-sm">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:border-purple-500"
//                 required
//               />
//             </div>

//             <div className="flex items-center mb-6">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="mr-2 h-4 w-4"
//               />
//               <label htmlFor="remember" className="text-gray-300 text-sm">
//                 Remember me
//               </label>
//             </div>

//             <Link to="/login">
//             <button
//               type="submit"
//               className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-full py-3 px-4 transition-colors"
//             >
             
//               Login
              
//             </button>
//             </Link>
//           </form>

//           <div className="mt-6 text-center text-sm">
//             <span className="text-gray-400">Don&apos;t have an account? </span>
//             <Link href="#" className="text-blue-400 hover:underline">
//               Create free account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





import { useState } from "react"
// import { Globe } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token)
        toast.success("Login successful!", {
          position: "top-center",
        })

        setTimeout(() => {
          navigate("/")
          window.location.reload()
        }, 1500)
      } else {
        toast.error(data.message || "Login failed", {
          position: "top-center",
        })
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="background bg-gradient-to-br from-[#2E023D] to-[#100514] min-h-screen flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-5xl flex flex-col md:flex-row md:gap-44 rounded-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="w-full md:w-[20rem] h-full md:h-auto relative md:mt-20 mb-8 md:mb-0">
          <img src="/credit-card-payment-buy-and-sell-products-servi-2025-01-16-15-16-27-utc 1.png" alt="Credit cards" className="object-cover" />
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-white text-3xl font-bold mb-3">Welcome back 👋</h1>
          <p className="text-gray-300 mb-8">
            Clarity gives you the blocks and components you need to create a truly professional website.
          </p>

          {/* <button className="w-full bg-gray-800 text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 mb-6 hover:bg-gray-700 transition-colors">
            <Globe className="h-5 w-5" />
            <span>Sign in with Google</span>
          </button> */}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 mb-2 text-sm">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="remember" className="text-gray-300 text-sm">Remember me</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-black font-medium rounded-full py-3 px-4 transition-colors ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600"}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Don&apos;t have an account? </span>
            <Link to="/login" className="text-blue-400 hover:underline">Create free account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}