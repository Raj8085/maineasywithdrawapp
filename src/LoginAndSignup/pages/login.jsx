// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/");
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const data = { email, password };

//     try {
//       const response = await fetch(
//         "https://wallentcardwithauthentication.onrender.com/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await response.json();
//       console.log(result);

//       if (response.ok) {
//         localStorage.setItem("token", result.token);
//         alert("Login successful!");
//         navigate("/")
        
//       } else {
//         alert(result.message || "Login failed.");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(255,146,240,1)] via-[rgb(178,150,250,1)] via-[rgb(177,153,245,1)] to-[rgb(255,151,196,1)] px-4 py-10">
//       <div className="bg-white w-full max-w-6xl rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row relative">
//        {/* Left side visual */}
// <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
//   {/* Stars */}
//   <img
//     src="../star.png"
//     alt="Star"
//     className="absolute top-3 left-2 sm:top-8 sm:left-8 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
//   />

//   {/* Heading */}
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
//     Smarter Credit
//     <br />
//     Starts Here
//   </h2>
//   <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
//     Log in to explore personalized consulting, easy access to financial
//     solutions, and expert advice.
//   </p>

//   {/* Arrow */}
//   <img
//     src="../arrow.png"
//     alt="Arrow"
//     className="absolute top-46 md:top-64 sm:top-40 left-2 sm:left-4 w-24 sm:w-36 h-auto z-0 opacity-100 sm:opacity-100"
//   />

//   {/* Cards Image */}
//   <div className="mt-16 sm:mt-20 z-10">
//     <img
//       src="../cards.png"
//       alt="Credit cards illustration"
//       className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
//     />
//   </div>
// </div>


//         {/* Right side form */}
//         <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//             Login
//           </h2>
//           <p className="text-sm sm:text-base text-gray-500 mb-8">
//             Enter your credentials to access your account.
//           </p>

//           <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
//             <div className="flex flex-col space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium"
//             >
//               Log in
//             </button>
//             <p className="text-sm text-gray-600 text-center mt-4">
//               Don’t have an account?{" "}
//               <a
//                 href="/signup"
//                 className="text-[rgb(72,0,74)] font-semibold hover:underline"
//               >
//                 Create free account
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        
        // alert("Login successful!");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(255,146,240,1)] via-[rgb(178,150,250,1)] via-[rgb(177,153,245,1)] to-[rgb(255,151,196,1)] px-4 py-10">
      <div className="bg-white w-full max-w-6xl rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row relative">
        {/* Left side visual */}
        <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
          {/* Stars */}
          <img
            src="../star.png"
            alt="Star"
            className="absolute top-3 left-2 sm:top-8 sm:left-8 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
          />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
            Smarter Credit
            <br />
            Starts Here
          </h2>
          <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
            Log in to explore personalized consulting, easy access to financial
            solutions, and expert advice.
          </p>

          {/* Arrow */}
          <img
            src="../arrow.png"
            alt="Arrow"
            className="absolute top-46 md:top-64 sm:top-40 left-2 sm:left-4 w-24 sm:w-36 h-auto z-0 opacity-100 sm:opacity-100"
          />

          {/* Cards Image */}
          <div className="mt-16 sm:mt-20 z-10">
            <img
              src="../cards.png"
              alt="Credit cards illustration"
              className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Login
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Enter your credentials to access your account.
          </p>

          <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
            {/* <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div> */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
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
            <p className="text-sm text-gray-600 text-center mt-4">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[rgb(72,0,74)] font-semibold hover:underline"
              >
                Create free account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;