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





import { useEffect, useState } from "react"
// import { Globe } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
      }
    }, [navigate]);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = { email, password };
  
      try {
        const response = await fetch(
          "https://wallentcardwithauthentication.onrender.com/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
  
        const result = await response.json();
        console.log(result);
  
        if (response.ok) {
          // Store token and user data
          localStorage.setItem("token", result.token);
          
          // Store user data for navbar display
          const userData = {
            username: result.user?.username || email.split('@')[0], // fallback to email username if name not provided
            email: email
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          
          // Notify navbar about authentication state change
          window.dispatchEvent(new Event("authStateChanged"));
          
          navigate("/");
        } else {
          alert(result.message || "Login failed.");
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred during login. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="background bg-gradient-to-br from-[#2E023D] to-[#100514] min-h-screen flex items-center justify-center p-4">
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

          <form onSubmit={handleLogin}>
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
              className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Log in"
              )}
            </button>
{/* 
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-black font-medium rounded-full py-3 px-4 transition-colors ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600"}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button> */}
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