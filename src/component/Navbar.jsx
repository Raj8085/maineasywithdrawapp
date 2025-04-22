// /* eslint-disable no-unused-vars */
// // // // import { useState } from "react";
// // // // import Logo from "../assets/easy-withdraw-logo.png"; 
// // // // import { Link } from "react-router-dom";

// // // // const menuItems = [
// // // //   { name: "CashApp", path: "/cash-app" },
// // // //   { name: "Nexo", path: "/nexon" },
// // // //   { name: "Coinbase", path: "/coinbase" },
// // // //   { name: "Paypal", path: "/paypal" },
// // // //   { name: "Trustwallet", path: "/trustwallet" },
// // // //   { name: "Robinhood", path: "/robinhood" },
// // // // ];

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   return (
// // // //     <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#550665] to-[#27012F] opacity-95 text-white px-4 md:px-12 py-4 md:py-8 flex items-center justify-between shadow-md w-full">
      
// // // //       {/* Left Side: Logo */}
// // // //       <div className="flex items-center justify-between w-full md:w-auto">
// // // //         <Link to="/">
// // // //           <img 
// // // //             src={Logo} 
// // // //             alt="Logo" 
// // // //             className="w-32 md:w-60 transition-transform duration-300 hover:scale-105"
// // // //           />
// // // //         </Link>

// // // //         {/* Mobile Menu Button */}
// // // //         <button
// // // //           onClick={() => setIsOpen(!isOpen)}
// // // //           className="md:hidden text-3xl ml-4 focus:outline-none"
// // // //         >
// // // //           {isOpen ? "×" : "☰"}
// // // //         </button>
// // // //       </div>

// // // //       {/* Center: Menu Items - Desktop */}
// // // //       <div className="hidden w-full md:w-auto md:flex space-x-6 lg:space-x-12 text-base lg:text-lg font-semibold salsa-font">
// // // //         {menuItems.map(({ name, path }) => (
// // // //           <Link
// // // //             key={name}
// // // //             to={path}
// // // //             className="hover:text-[#C242DA] cursor-pointer"
// // // //           >
// // // //             {name}
// // // //           </Link>
// // // //         ))}
// // // //       </div>

// // // //       {/* Right Side: Buttons - Desktop */}
// // // //       <Link to="/login">
// // // //       <div className="hidden w-full md:w-auto md:flex space-x-4">
// // // //         <button className="bg-[#B58700] text-white px-6 lg:px-14 py-2 rounded-full hover:bg-yellow-700 transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)]">
// // // //           Login
// // // //         </button>
// // // //         <button className="border border-[#B58700] text-white px-6 lg:px-14 py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
// // // //           Sign up
// // // //         </button>
// // // //       </div>
// // // //       </Link>
// // // //       {/* Mobile Menu */}
// // // //       {isOpen && (
// // // //         <div className="w-full md:hidden absolute top-full left-0 bg-gradient-to-b from-[#550665] to-[#27012F] px-4 py-6 space-y-6 shadow-lg">
// // // //           <div className="flex flex-col space-y-4 text-center">
// // // //             {menuItems.map(({ name, path }) => (
// // // //               <Link
// // // //                 key={name}
// // // //                 to={path}
// // // //                 className="hover:text-[#C242DA] cursor-pointer py-2"
// // // //                 onClick={() => setIsOpen(false)} // optional: auto-close on mobile click
// // // //               >
// // // //                 {name}
// // // //               </Link>
// // // //             ))}
// // // //           </div>
          
// // // //           <div className="flex flex-col space-y-4">
// // // //             <button className="bg-[#B58700] text-white w-full py-2 rounded-full hover:bg-yellow-700 transition">
// // // //               Login
// // // //             </button>
// // // //             <button className="border border-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
// // // //               Sign up
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import { useState, useEffect } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import Logo from "../assets/easy-withdraw-logo.png"; 
// // // import { User, LogOut, Menu, X } from "lucide-react";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const menuItems = [
// // //   { name: "CashApp", path: "/cash-app" },
// // //   { name: "Nexo", path: "/nexon" },
// // //   { name: "Coinbase", path: "/coinbase" },
// // //   { name: "Paypal", path: "/paypal" },
// // //   { name: "Trustwallet", path: "/trustwallet" },
// // //   { name: "Robinhood", path: "/robinhood" },
// // // ];

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [user, setUser] = useState(null);
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   // Check if user is logged in on component mount and window focus
// // //   useEffect(() => {
// // //     checkUserAuth();
    
// // //     // Re-check auth status when window gains focus (user might have logged out in another tab)
// // //     window.addEventListener('focus', checkUserAuth);
// // //     return () => {
// // //       window.removeEventListener('focus', checkUserAuth);
// // //     };
// // //   }, []);

// // //   const checkUserAuth = () => {
// // //     const token = localStorage.getItem("token");
// // //     const userData = localStorage.getItem("userData");
    
// // //     if (token && userData) {
// // //       try {
// // //         setUser(JSON.parse(userData));
// // //       } catch (error) {
// // //         // Handle corrupted userData
// // //         handleLogout();
// // //       }
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     // Animation before logout
// // //     const userMenu = document.getElementById("userMenu");
// // //     if (userMenu) {
// // //       userMenu.classList.add("animate-fadeOut");
// // //       setTimeout(() => {
// // //         localStorage.removeItem("token");
// // //         localStorage.removeItem("userData");
// // //         setUser(null);
// // //         setDropdownOpen(false);
// // //         toast.success("Logged out successfully");
// // //         navigate("/");
// // //       }, 300);
// // //     } else {
// // //       localStorage.removeItem("token");
// // //       localStorage.removeItem("userData");
// // //       setUser(null);
// // //       toast.success("Logged out successfully");
// // //       navigate("/");
// // //     }
// // //   };

// // //   return (
// // //     <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#550665] to-[#27012F] opacity-95 text-white px-4 md:px-12 py-4 md:py-8 flex items-center justify-between shadow-md w-full">
      
// // //       {/* Left Side: Logo */}
// // //       <div className="flex items-center justify-between w-full md:w-auto">
// // //         <Link to="/">
// // //           <img 
// // //             src={Logo} 
// // //             alt="Logo" 
// // //             className="w-32 md:w-60 transition-transform duration-300 hover:scale-105"
// // //           />
// // //         </Link>

// // //         {/* Mobile Menu Button */}
// // //         <button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="md:hidden text-3xl ml-4 focus:outline-none flex items-center justify-center"
// // //           aria-label="Toggle menu"
// // //         >
// // //           {isOpen ? <X size={24} /> : <Menu size={24} />}
// // //         </button>
// // //       </div>

// // //       {/* Center: Menu Items - Desktop */}
// // //       <div className="hidden w-full md:w-auto md:flex space-x-6 lg:space-x-12 text-base lg:text-lg font-semibold salsa-font">
// // //         {menuItems.map(({ name, path }) => (
// // //           <Link
// // //             key={name}
// // //             to={path}
// // //             className="hover:text-[#C242DA] cursor-pointer transition-colors duration-200"
// // //           >
// // //             {name}
// // //           </Link>
// // //         ))}
// // //       </div>

// // //       {/* Right Side: Auth Buttons or User Profile - Desktop */}
// // //       <div className="hidden w-full md:w-auto md:flex space-x-4">
// // //         {user ? (
// // //           <div className="relative">
// // //             <button 
// // //               onClick={() => setDropdownOpen(!dropdownOpen)}
// // //               className="flex items-center space-x-2 bg-[#B58700] text-white px-4 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)]"
// // //             >
// // //               <User size={18} />
// // //               <span className="max-w-28 truncate">{user.firstName}</span>
// // //             </button>
            
// // //             {dropdownOpen && (
// // //               <div 
// // //                 id="userMenu"
// // //                 className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 animate-fadeIn"
// // //               >
// // //                 <div className="px-4 py-2 border-b border-gray-200">
// // //                   <p className="text-sm font-semibold">{user.firstName} {user.lastName}</p>
// // //                   <p className="text-xs text-gray-500 truncate">{user.email}</p>
// // //                 </div>
// // //                 <button
// // //                   onClick={handleLogout}
// // //                   className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
// // //                 >
// // //                   <LogOut size={16} />
// // //                   <span>Logout</span>
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <>
// // //             <Link to="/login">
// // //               <button className="bg-[#B58700] text-white px-6 lg:px-14 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)]">
// // //                 Login
// // //               </button>
// // //             </Link>
// // //             <Link to="/login?tab=register">
// // //               <button className="border border-[#B58700] text-white px-6 lg:px-14 py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
// // //                 Sign up
// // //               </button>
// // //             </Link>
// // //           </>
// // //         )}
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isOpen && (
// // //         <div className="w-full md:hidden absolute top-full left-0 bg-gradient-to-b from-[#550665] to-[#27012F] px-4 py-6 space-y-6 shadow-lg animate-slideDown">
// // //           <div className="flex flex-col space-y-4 text-center">
// // //             {menuItems.map(({ name, path }) => (
// // //               <Link
// // //                 key={name}
// // //                 to={path}
// // //                 className="hover:text-[#C242DA] cursor-pointer py-2 transition-colors duration-200"
// // //                 onClick={() => setIsOpen(false)}
// // //               >
// // //                 {name}
// // //               </Link>
// // //             ))}
// // //           </div>
          
// // //           <div className="flex flex-col space-y-4">
// // //             {user ? (
// // //               <>
// // //                 <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-md p-3 mb-2">
// // //                   <User size={18} className="text-[#B58700]" />
// // //                   <div className="text-left">
// // //                     <p className="font-semibold">{user.firstName} {user.lastName}</p>
// // //                     <p className="text-xs text-gray-300 truncate">{user.email}</p>
// // //                   </div>
// // //                 </div>
// // //                 <button 
// // //                   onClick={handleLogout}
// // //                   className="flex items-center justify-center space-x-2 w-full bg-[#B58700] text-white py-2 rounded-full hover:bg-[#9e7500] transition"
// // //                 >
// // //                   <LogOut size={16} />
// // //                   <span>Logout</span>
// // //                 </button>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <Link to="/login" onClick={() => setIsOpen(false)}>
// // //                   <button className="bg-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#9e7500] transition">
// // //                     Login
// // //                   </button>
// // //                 </Link>
// // //                 <Link to="/login?tab=register" onClick={() => setIsOpen(false)}>
// // //                   <button className="border border-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
// // //                     Sign up
// // //                   </button>
// // //                 </Link>
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Toast notifications container */}
// // //       <ToastContainer position="top-right" autoClose={3000} theme="dark" />
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/easy-withdraw-logo.png"; 
// import { User, LogOut, Menu, X } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const menuItems = [
//   { name: "CashApp", path: "/cash-app" },
//   { name: "Nexo", path: "/nexon" },
//   { name: "Coinbase", path: "/coinbase" },
//   { name: "Paypal", path: "/paypal" },
//   { name: "Trustwallet", path: "/trustwallet" },
//   { name: "Robinhood", path: "/robinhood" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // Check if user is logged in on component mount and window focus
//   useEffect(() => {
//     checkUserAuth();
    
//     // Re-check auth status when window gains focus (user might have logged out in another tab)
//     window.addEventListener('focus', checkUserAuth);
//     return () => {
//       window.removeEventListener('focus', checkUserAuth);
//     };
//   }, []);

//   const checkUserAuth = () => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("userData");
    
//     if (token && userData) {
//       try {
//         setUser(JSON.parse(userData));
//       } catch (error) {
//         // Handle corrupted userData
//         handleLogout();
//       }
//     }
//   };

//   const handleLogout = () => {
//     // Animation before logout
//     const userMenu = document.getElementById("userMenu");
//     if (userMenu) {
//       userMenu.classList.add("animate-fadeOut");
//       setTimeout(() => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("userData");
//         setUser(null);
//         setDropdownOpen(false);
//         toast.success("Logged out successfully");
//         navigate("/");
//       }, 300);
//     } else {
//       localStorage.removeItem("token");
//       localStorage.removeItem("userData");
//       setUser(null);
//       toast.success("Logged out successfully");
//       navigate("/");
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownOpen && !event.target.closest('#user-dropdown-container')) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [dropdownOpen]);

//   // Close mobile menu when resizing to larger screen
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && isOpen) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isOpen]);

//   return (
//     <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#550665] to-[#27012F] opacity-95 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 flex items-center justify-between shadow-md w-full">
      
//       {/* Left Side: Logo */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         <Link to="/">
//           <img 
//             src={Logo} 
//             alt="Logo" 
//             className="w-32 sm:w-40 md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105"
//           />
//         </Link>

//         {/* Mobile & Tablet Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-3xl ml-4 focus:outline-none flex items-center justify-center"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Center: Menu Items - Desktop */}
//       <div className="hidden md:flex flex-grow justify-center space-x-3 sm:space-x-4 lg:space-x-12 text-sm lg:text-lg font-semibold salsa-font">
//         {menuItems.map(({ name, path }) => (
//           <Link
//             key={name}
//             to={path}
//             className="hover:text-[#C242DA] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//           >
//             {name}
//           </Link>
//         ))}
//       </div>

//       {/* Right Side: Auth Buttons or User Profile - Desktop */}
//       <div className="hidden md:flex space-x-2 lg:space-x-4 ml-2">
//         {user ? (
//           <div className="relative" id="user-dropdown-container">
//             <button 
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center space-x-2 bg-[#B58700] text-white px-3 lg:px-4 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)]"
//             >
//               <User size={16} className="shrink-0" />
//               <span className="max-w-16 lg:max-w-28 truncate text-sm lg:text-base">{user.firstName}</span>
//             </button>
            
//             {dropdownOpen && (
//               <div 
//                 id="userMenu"
//                 className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 animate-fadeIn z-50"
//               >
//                 <div className="px-4 py-2 border-b border-gray-200">
//                   <p className="text-sm font-semibold">{user.firstName} {user.lastName}</p>
//                   <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
//                 >
//                   <LogOut size={16} />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <Link to="/login">
//               <button className="bg-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)] text-sm lg:text-base whitespace-nowrap">
//                 Login
//               </button>
//             </Link>
//             <Link to="/login?tab=register">
//               <button className="border border-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition text-sm lg:text-base whitespace-nowrap">
//                 Sign up
//               </button>
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Mobile & Tablet Menu */}
//       {isOpen && (
//         <div className="w-full md:hidden absolute top-full left-0 bg-gradient-to-b from-[#550665] to-[#27012F] px-4 py-6 space-y-6 shadow-lg animate-slideDown z-40">
//           <div className="flex flex-col space-y-4 text-center">
//             {menuItems.map(({ name, path }) => (
//               <Link
//                 key={name}
//                 to={path}
//                 className="hover:text-[#C242DA] cursor-pointer py-2 transition-colors duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>
          
//           <div className="flex flex-col space-y-4">
//             {user ? (
//               <>
//                 <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-md p-3 mb-2">
//                   <User size={18} className="text-[#B58700]" />
//                   <div className="text-left">
//                     <p className="font-semibold">{user.firstName} {user.lastName}</p>
//                     <p className="text-xs text-gray-300 truncate">{user.email}</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={handleLogout}
//                   className="flex items-center justify-center space-x-2 w-full bg-[#B58700] text-white py-2 rounded-full hover:bg-[#9e7500] transition"
//                 >
//                   <LogOut size={16} />
//                   <span>Logout</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" onClick={() => setIsOpen(false)}>
//                   <button className="bg-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#9e7500] transition">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/login?tab=register" onClick={() => setIsOpen(false)}>
//                   <button className="border border-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
//                     Sign up
//                   </button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Toast notifications container */}
//       <ToastContainer position="top-right" autoClose={3000} theme="dark" />
//     </nav>
//   );
// };

// export default Navbar;




// // import { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import Logo from "../assets/easy-withdraw-logo.png"; 
// // import { User, LogOut, Menu, X } from "lucide-react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const menuItems = [
// //   { name: "CashApp", path: "/cash-app" },
// //   { name: "Nexo", path: "/nexon" },
// //   { name: "Coinbase", path: "/coinbase" },
// //   { name: "Paypal", path: "/paypal" },
// //   { name: "Trustwallet", path: "/trustwallet" },
// //   { name: "Robinhood", path: "/robinhood" },
// // ];

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();

// //   // Check if user is logged in on component mount, window focus, and auth state changes
// //   useEffect(() => {
// //     // Function to check authentication status
// //     const checkUserAuth = () => {
// //       const token = localStorage.getItem("token");
// //       const userData = localStorage.getItem("userData");
      
// //       if (token && userData) {
// //         try {
// //           const parsedUserData = JSON.parse(userData);
// //           setUser(parsedUserData);
          
// //         } catch (error) {
// //           // Handle corrupted userData
// //           handleLogout();
// //         }
// //       } else {
// //         setUser(null);
        
// //       }
// //     };
    
// //     // Check auth status initially
// //     checkUserAuth();
    
// //     // Add event listeners for various auth state changes
// //     window.addEventListener('focus', checkUserAuth);
// //     window.addEventListener('authStateChanged', checkUserAuth);
    
// //     // Cleanup event listeners
// //     return () => {
// //       window.removeEventListener('focus', checkUserAuth);
// //       window.removeEventListener('authStateChanged', checkUserAuth);
// //     };
// //   }, []);

// //   const handleLogout = () => {
// //     // Animation before logout
// //     const userMenu = document.getElementById("userMenu");
// //     if (userMenu) {
// //       userMenu.classList.add("animate-fadeOut");
// //       setTimeout(() => {
// //         localStorage.removeItem("token");
// //         localStorage.removeItem("userData");
// //         setUser(null);
// //         setDropdownOpen(false);
// //         toast.success("Logged out successfully");
// //         navigate("/");
// //       }, 300);
// //     } else {
// //       localStorage.removeItem("token");
// //       localStorage.removeItem("userData");
// //       setUser(null);
// //       toast.success("Logged out successfully");
// //       navigate("/");
// //     }
// //   };

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownOpen && !event.target.closest('#user-dropdown-container')) {
// //         setDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [dropdownOpen]);

// //   // Close mobile menu when resizing to larger screen
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 768 && isOpen) {
// //         setIsOpen(false);
// //       }
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, [isOpen]);

// //   return (
// //     <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#550665] to-[#27012F] opacity-95 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 flex items-center justify-between shadow-md w-full">
      
// //       {/* Left Side: Logo */}
// //       <div className="flex items-center justify-between w-full md:w-auto">
// //         <Link to="/">
// //           <img 
// //             src={Logo} 
// //             alt="Logo" 
// //             className="w-32 sm:w-40 md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105"
// //           />
// //         </Link>
// //         {/* Mobile & Tablet Menu Button */}
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="md:hidden text-3xl ml-4 focus:outline-none flex items-center justify-center"
// //           aria-label="Toggle menu"
// //         >
// //           {isOpen ? <X size={24} /> : <Menu size={24} />}
// //         </button>
// //       </div>

// //       {/* Center: Menu Items - Desktop */}
// //       <div className="hidden md:flex flex-grow justify-center space-x-3 sm:space-x-4 lg:space-x-12 text-sm lg:text-lg font-semibold salsa-font">
// //         {menuItems.map(({ name, path }) => (
// //           <Link
// //             key={name}
// //             to={path}
// //             className="hover:text-[#C242DA] cursor-pointer transition-colors duration-200 whitespace-nowrap"
// //           >
// //             {name}
// //           </Link>
// //         ))}
// //       </div>

// //       {/* Right Side: Auth Buttons or User Profile - Desktop */}
// //       <div className="hidden md:flex space-x-2 lg:space-x-4 ml-2">
// //         {user ? (
// //           <div className="relative" id="user-dropdown-container">
// //             <button 
// //               onClick={() => setDropdownOpen(!dropdownOpen)}
// //               className="flex items-center space-x-2 bg-[#B58700] text-white px-3 lg:px-4 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)] animate-fadeIn"
// //             >
// //               <User size={16} className="shrink-0" />
// //               <span className="max-w-16 lg:max-w-28 truncate text-sm lg:text-base">{user.username}</span>
// //             </button>
// //             {dropdownOpen && (
// //               <div 
// //                 id="userMenu"
// //                 className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 animate-fadeIn z-50"
// //               >
// //                 <div className="px-4 py-2 border-b border-gray-200">
// //                   <p className="text-sm font-semibold">{user.username}</p>
// //                   <p className="text-xs text-gray-500 truncate">{user.email}</p>
// //                 </div>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
// //                 >
// //                   <LogOut size={16} />
// //                   <span>Logout</span>
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <>
// //             <Link to="/login">
// //               <button className="bg-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)] text-sm lg:text-base whitespace-nowrap">
// //                 Login
// //               </button>
// //             </Link>
// //             <Link to="/signup">
// //               <button className="border border-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition text-sm lg:text-base whitespace-nowrap">
// //                 Sign up
// //               </button>
// //             </Link>
// //           </>
// //         )}
// //       </div>

// //       {/* Mobile & Tablet Menu */}
// //       {isOpen && (
// //         <div className="w-full md:hidden absolute top-full left-0 bg-gradient-to-b from-[#550665] to-[#27012F] px-4 py-6 space-y-6 shadow-lg animate-slideDown z-40">
// //           <div className="flex flex-col space-y-4 text-center">
// //             {menuItems.map(({ name, path }) => (
// //               <Link
// //                 key={name}
// //                 to={path}
// //                 className="hover:text-[#C242DA] cursor-pointer py-2 transition-colors duration-200"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 {name}
// //               </Link>
// //             ))}
// //           </div>
          
// //           <div className="flex flex-col space-y-4">
// //             {user ? (
// //               <>
// //                 <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-md p-3 mb-2 animate-fadeIn">
// //                   <User size={18} className="text-[#B58700]" />
// //                   <div className="text-left">
// //                     <p className="font-semibold">{user.username}</p>
// //                     <p className="text-xs text-gray-300 truncate">{user.email}</p>
// //                   </div>
// //                 </div>
// //                 <button 
// //                   onClick={handleLogout}
// //                   className="flex items-center justify-center space-x-2 w-full bg-[#B58700] text-white py-2 rounded-full hover:bg-[#9e7500] transition"
// //                 >
// //                   <LogOut size={16} />
// //                   <span>Logout</span>
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/login" onClick={() => setIsOpen(false)}>
// //                   <button className="bg-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#9e7500] transition">
// //                     Login
// //                   </button>
// //                 </Link>
// //                 <Link to="/login?tab=register" onClick={() => setIsOpen(false)}>
// //                   <button className="border border-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
// //                     Sign up
// //                   </button>
// //                 </Link>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //       {/* Toast notifications container */}
// //       <ToastContainer position="top-right" autoClose={3000} theme="dark" />
// //     </nav>
// //   );
// // };
// // export default Navbar;




import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/easy-withdraw-logo.png";
import { User, LogOut, Menu, X } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const menuItems = [
  { name: "CashApp", path: "/cash-app" },
  { name: "Nexo", path: "/nexon" },
  { name: "Coinbase", path: "/coinbase" },
  { name: "Paypal", path: "/paypal" },
  { name: "Trustwallet", path: "/trustwallet" },
  { name: "Robinhood", path: "/robinhood" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const checkUserAuth = () => {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("userData");

      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        } catch (err) {
          handleLogout();
        }
      } else {
        setUser(null);
      }
    };

    checkUserAuth();

    window.addEventListener("focus", checkUserAuth);
    window.addEventListener("authStateChanged", checkUserAuth);

    return () => {
      window.removeEventListener("focus", checkUserAuth);
      window.removeEventListener("authStateChanged", checkUserAuth);
    };
  }, []);


  const handleLogout = () => {
    const userMenu = document.getElementById("userMenu");
    // toast.success("Logged out successfully");
    if (userMenu) {
      userMenu.classList.add("animate-fadeOut");
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setUser(null);
        setDropdownOpen(false);
        navigate("/");
        window.dispatchEvent(new Event("authStateChanged")); // <- make sure logout also updates navbar
      }, 300);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      setUser(null);
      navigate("/");
      window.dispatchEvent(new Event("authStateChanged")); // fallback logout
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest("#user-dropdown-container")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#550665] to-[#27012F] opacity-95 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 flex items-center justify-between shadow-md w-full">
      {/* Left: Logo + Toggle */}

      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl ml-4 focus:outline-none flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Center: Nav Links (desktop) */}
      <div className="hidden md:flex flex-grow justify-center space-x-3 sm:space-x-4 lg:space-x-12 text-sm lg:text-lg font-semibold salsa-font">
        {menuItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="hover:text-[#C242DA] cursor-pointer transition-colors duration-200 whitespace-nowrap"
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Right: Auth or User */}
      <div className="hidden md:flex space-x-2 lg:space-x-4 ml-2">
        {user ? (
          <div className="relative" id="user-dropdown-container">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 bg-[#B58700] text-white px-3 lg:px-4 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)] animate-fadeIn"
            >
              <User size={16} className="shrink-0" />
              <span className="max-w-16 lg:max-w-28 truncate text-sm lg:text-base">
                {user.username}
              </span>
            </button>
            {dropdownOpen && (
              <div
                id="userMenu"
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 animate-fadeIn z-50"
              >
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#9e7500] transition [box-shadow:inset_0_8px_8px_rgba(0,0,0,0.2)] text-sm lg:text-base whitespace-nowrap">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="border border-[#B58700] text-white px-3 sm:px-4 md:px-6 lg:px-14 py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition text-sm lg:text-base whitespace-nowrap">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full md:hidden absolute top-full left-0 bg-gradient-to-b from-[#550665] to-[#27012F] px-4 py-6 space-y-6 shadow-lg animate-slideDown z-40">
          <div className="flex flex-col space-y-4 text-center">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:text-[#C242DA] cursor-pointer py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            {user ? (
              <>
                <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-md p-3 mb-2 animate-fadeIn">
                  <User size={18} className="text-[#B58700]" />
                  <div className="text-left">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-xs text-gray-300 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 w-full bg-[#B58700] text-white py-2 rounded-full hover:bg-[#9e7500] transition"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="bg-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#9e7500] transition">
                    Login
                  </button>
                </Link>
                <Link to="/login?tab=register" onClick={() => setIsOpen(false)}>
                  <button className="border border-[#B58700] text-white w-full py-2 rounded-full hover:bg-[#B58700] hover:border-transparent transition">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
{/* 
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
      /> */}
    </nav>
  );
};
export default Navbar;