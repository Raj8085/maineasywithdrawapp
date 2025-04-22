// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//    const navigate = useNavigate()


//    useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("userData");
  
//     if (token && userData) {
//       // User is already logged in, redirect them
//       navigate("/");
//     }
//   }, []);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const data = { username, email, phoneNumber, password };

//     try {
//       const response = await fetch(
//         "https://wallentcardwithauthentication.onrender.com/auth/register",
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
//         localStorage.setItem("userData", JSON.stringify(result.user));
//         alert("Signup successful!");
//         navigate("/")
//       } else {
//         alert(result.message || "Signup failed.");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//     }
//     finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 py-16"
//       style={{
//         background:
//           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
//       }}
//     >
//       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//         {/* Left side visual */}
//         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
//           {/* Stars */}
//           <img
//             src="../star.png"
//             alt="Star"
//             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
//           />

//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
//             Smarter Credit
//             <br />
//             Starts Here
//           </h2>
//           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
//             Log in to explore personalized consulting, easy access to financial
//             solutions, and expert advice.
//           </p>

//           {/* Arrow */}
//           <img
//             src="../arrow.png"
//             alt="Arrow"
//             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
//           />

//           {/* Cards Image */}
//           <div className="mt-16 sm:mt-20 z-10">
//             <img
//               src="../cards.png"
//               alt="Credit cards illustration"
//               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
//             />
//           </div>
//         </div>
//         {/* Right side form */}
//         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//             Register
//           </h2>
//           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

//           <form
//             className="flex flex-col space-y-4 sm:space-y-6"
//             onSubmit={handleSignup}
//           >
//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Phone number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Create Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <label className="flex items-center text-sm text-gray-600 mt-1">
//               <input type="checkbox" className="mr-2" required />I agree with
//               the{" "}
//               <span className="text-purple-600 ml-1 cursor-pointer">
//                 Terms & Conditions
//               </span>
//             </label>

//             {/* <button
//               type="submit"
//               className="bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium mt-2"
//             >
//               Sign Up
//             </button> */}

//             <button
//               type="submit"
//               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Loading...
//                 </>
//               ) : (
//                 "Log in"
//               )}
//             </button>
//             <p className="text-sm text-gray-600 text-center mt-4">
//               Already have an account?{" "}
//               <a
//                 href="/login"
//                 className="text-purple-600 font-semibold hover:underline"
//               >
//                 Log in
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");
  
    if (token && userData) {
      // User is already logged in, redirect them
      navigate("/");
    }
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form submits
    
    const data = { username, email, phoneNumber, password };

    try {
      const response = await fetch(
        "https://wallentcardwithauthentication.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userData", JSON.stringify(result.user));
        
        // Dispatch event to update navbar
        window.dispatchEvent(new Event("authStateChanged"));
        
        // Show success toast instead of alert
        
        // Navigate after a short delay to allow toast to be seen
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(result.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("An error occurred during signup. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background:
          "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
      }}
    >
<ToastContainer 
  position="top-right" 
  autoClose={3000} 
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick={true}
  rtl={false}
  pauseOnFocusLoss={false}
  draggable={true}
  pauseOnHover={true}
  theme="colored"
  closeButton={true}
/>
      
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side visual */}
        <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
          {/* Stars */}
          <img
            src="../star.png"
            alt="Star"
            className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
          />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
            Smarter Credit
            <br />
            Starts Here
          </h2>
          <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
            Sign up to explore personalized consulting, easy access to financial
            solutions, and expert advice.
          </p>

          {/* Arrow */}
          <img
            src="../arrow.png"
            alt="Arrow"
            className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
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
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Register
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

          <form
            className="flex flex-col space-y-4 sm:space-y-6"
            onSubmit={handleSignup}
          >
            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Create Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                required
              />
            </div>

            <label className="flex items-center text-sm text-gray-600 mt-1">
              <input type="checkbox" className="mr-2" required />I agree with
              the{" "}
              <span className="text-purple-600 ml-1 cursor-pointer">
                Terms & Conditions
              </span>
            </label>

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
                "Sign Up" // Fixed button text from "Log in" to "Sign Up"
              )}
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-600 font-semibold hover:underline"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;