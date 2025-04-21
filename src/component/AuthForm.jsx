// /* eslint-disable no-unused-vars */
// // // /* eslint-disable no-unused-vars */
// // // // /* eslint-disable no-unused-vars */
// // // // // /* eslint-disable no-unused-vars */
// import { useState } from "react"
// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { Mail, Lock, User, Phone, KeyRound } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useLocation, useNavigate } from "react-router-dom"

// export default function AuthForms() {
//   const [loading, setLoading] = useState(false)
//   const [showOtpInput, setShowOtpInput] = useState(false)
//   const [registrationData, setRegistrationData] = useState(null)
//   const navigate = useNavigate()
//   const location = useLocation();


//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formData = new FormData(e.target);
//     const data = {
//       email: formData.get("loginEmail"),
//       password: formData.get("loginPassword"),
//     };
  
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         toast.success("Login Successful! Welcome back!");
//         localStorage.setItem("token", result.token);
  
//         // 👇 Redirect to original page after login
//         const redirectTo = location.state?.from || "/dashboard-for-user";
//         const images = location.state?.images || {};
  
//         navigate(redirectTo, {
//           state: { images },
//         });
//       } else {
//         toast.error(result.msg || "Invalid credentials");
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server");
//     } finally {
//       setLoading(false);
//     }
//   };
  


//   // const handleRegister = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
  
//   //   const formData = new FormData(e.target);
//   //   const password = formData.get("password");
//   //   const phoneNumber = formData.get("phoneNumber");
  
//   //   const data = {
//   //     firstName: formData.get("firstName"),
//   //     lastName: formData.get("lastName"),
//   //     email: formData.get("email"),
//   //     phoneNumber: formData.get("phoneNumber"),
//   //     password: password,
//   //   };
  
//   //   const passwordRegex =
//   //     /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{7,}$/;
  
//   //   if (!passwordRegex.test(password)) {
//   //     toast.error(
//   //       "Password must be at least 7 characters long and include uppercase, lowercase, number, and special character."
//   //     );
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   if (!/^\d{10}$/.test(phoneNumber)) {
//   //     toast.warning("Phone number should contain exactly 10 digits without any symbols or spaces.")
//   //     setLoading(false)
//   //     return
//   //   }
  
//   //   try {
//   //     const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/register", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(data),
//   //     });
  
//   //     const result = await response.json();
  
//   //     if (result.success) {
//   //       toast.success("Registration Successful! Please enter the OTP sent to your email.");
//   //       setShowOtpInput(true);
//   //       setRegistrationData(data);
//   //     } else {
//   //       toast.error(result.msg || "Registration Failed");
//   //     }
//   //   } catch (error) {
//   //     toast.error("Failed to connect to the server");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     const otp = e.target.otp.value

//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: registrationData.email,
//           password: registrationData.password,
//           otp: otp
//         }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("Email verified successfully! You can now login.")
//         // Store the token if needed
//         localStorage.setItem("token", result.token)
//         setShowOtpInput(false)
//         // Switch to login tab
//         document.querySelector('[value="login"]').click()
//       } else {
//         toast.error(result.msg || "OTP verification failed")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formData = new FormData(e.target);
//     const data = {
//       email: formData.get("loginEmail"),
//       password: formData.get("loginPassword"),
//     };
  
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         toast.success("Login Successful! Welcome back!");
//         localStorage.setItem("token", result.token);
  
//         // ✅ Redirection logic
//         const redirectTo = location.state?.from || "/dashboard-for-user"; // fallback if not present
//         const images = location.state?.images || {};
  
//         navigate(redirectTo, {
//           state: { images },
//         });
//       } else {
//         toast.error(result.msg || "Invalid credentials");
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server");
//     } finally {
//       setLoading(false);
//     }
//   };
  



//   // const handleLogin = async (e) => {
//   //   e.preventDefault()
//   //   setLoading(true)

//   //   const formData = new FormData(e.target)
//   //   const data = {
//   //     email: formData.get("loginEmail"),
//   //     password: formData.get("loginPassword"),
//   //   }

//   //   try {
//   //     const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(data),
//   //     })

//   //     const result = await response.json()

//   //     if (result.success) {
//   //       toast.success("Login Successful! Welcome back!")
//   //     } else {
//   //       toast.error(result.msg || "Invalid credentials")
//   //     }
//   //     navigate("/dashboard-for-user")
//   //   } catch (error) {
//   //     toast.error("Failed to connect to the server")
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }

//   const handleResendOTP = async (email) => {
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, resendOtp: true }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("OTP sent! Please check your email")
//       } else {
//         toast.error(result.msg || "Failed to send OTP")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <Tabs defaultValue="login" className="w-full">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="login">Login</TabsTrigger>
//             <TabsTrigger value="register">Register</TabsTrigger>
//           </TabsList>
//           <TabsContent value="login">
//             <form onSubmit={handleLogin}>
//               <CardHeader>
//                 <CardTitle>Login</CardTitle>
//                 <CardDescription>Enter your credentials to access your account</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="loginEmail">Email</Label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="loginEmail"
//                       name="loginEmail"
//                       type="email"
//                       placeholder="m@example.com"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="loginPassword">Password</Label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input id="loginPassword" name="loginPassword" type="password" className="pl-10" required />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" className="w-full" disabled={loading}>
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>
//               </CardFooter>
//             </form>
//           </TabsContent>

//           <TabsContent value="register">
//             {!showOtpInput ? (
//               <form onSubmit={handleRegister}>
//                 <CardHeader>
//                   <CardTitle>Register</CardTitle>
//                   <CardDescription>Create a new account</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="firstName" name="firstName" className="pl-10" required />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="lastName" name="lastName" className="pl-10" required />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="m@example.com"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phoneNumber">Phone Number</Label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input id="phoneNumber" name="phoneNumber" type="tel" className="pl-10" required />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="password">Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input id="password" name="password" type="password" className="pl-10" required />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button type="submit" className="w-full" disabled={loading}>
//                     {loading ? "Registering..." : "Register"}
//                   </Button>
//                 </CardFooter>
//               </form>
//             ) : (
//               <form onSubmit={handleVerifyOTP}>
//                 <CardHeader>
//                   <CardTitle>Verify OTP</CardTitle>
//                   <CardDescription>Enter the OTP sent to your email</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="otp">OTP</Label>
//                     <div className="relative">
//                       <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="otp"
//                         name="otp"
//                         type="text"
//                         placeholder="Enter OTP"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col gap-4">
//                   <Button type="submit" className="w-full" disabled={loading}>
//                     {loading ? "Verifying..." : "Verify OTP"}
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => handleResendOTP(registrationData?.email)}
//                     className="w-full"
//                   >
//                     Resend OTP
//                   </Button>
//                 </CardFooter>
//               </form>
//             )}
//           </TabsContent>
//         </Tabs>
//       </Card>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   )
// }



import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Mail, Lock, User, Phone, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"

export default function AuthForms() {
  const [loading, setLoading] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [registrationData, setRegistrationData] = useState(null)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");
  
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      password: password,
    };
  
    

    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.warning("Phone number should contain exactly 10 digits without any symbols or spaces.")
      setLoading(false)
      return
    }
  
    try {
      const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success("Registration Successful! Please enter the OTP sent to your email.");
        setShowOtpInput(true);
        setRegistrationData(data);
      } else {
        toast.error(result.msg || "Registration Failed");
      }
    } catch (error) {
      toast.error("Failed to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    setLoading(true)

    const otp = e.target.otp.value

    try {
      const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registrationData.email,
          password: registrationData.password,
          otp: otp
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Email verified successfully! You can now login.")
        // Store the token if needed
        localStorage.setItem("token", result.token)
        setShowOtpInput(false)
        // Switch to login tab
        document.querySelector('[value="login"]').click()
      } else {
        toast.error(result.msg || "OTP verification failed")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = {
      email: formData.get("loginEmail"),
      password: formData.get("loginPassword"),
    }

    try {
      const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Login Successful! Welcome back!")
      } else {
        toast.error(result.msg || "Invalid credentials")
      }
      navigate("/")
    } catch (error) {
      toast.error("Failed to connect to the server")
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async (email) => {
    try {
      const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, resendOtp: true }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("OTP sent! Please check your email")
      } else {
        toast.error(result.msg || "Failed to send OTP")
      }
    } catch (error) {
      toast.error("Failed to connect to the server")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="loginEmail"
                      name="loginEmail"
                      type="email"
                      placeholder="m@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="loginPassword" name="loginPassword" type="password" className="pl-10" required />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="register">
            {!showOtpInput ? (
              <form onSubmit={handleRegister}>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>Create a new account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="firstName" name="firstName" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="lastName" name="lastName" className="pl-10" required />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phoneNumber" name="phoneNumber" type="tel" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password" name="password" type="password" className="pl-10" required />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                  </Button>
                </CardFooter>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP}>
                <CardHeader>
                  <CardTitle>Verify OTP</CardTitle>
                  <CardDescription>Enter the OTP sent to your email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">OTP</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="otp"
                        name="otp"
                        type="text"
                        placeholder="Enter OTP"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Verifying..." : "Verify OTP"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleResendOTP(registrationData?.email)}
                    className="w-full"
                  >
                    Resend OTP
                  </Button>
                </CardFooter>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}




// import { useState, useEffect } from "react"
// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { Mail, Lock, User, Phone, KeyRound } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useNavigate, useLocation } from "react-router-dom"

// export default function AuthForms() {
//   const [loading, setLoading] = useState(false)
//   const [showOtpInput, setShowOtpInput] = useState(false)
//   const [registrationData, setRegistrationData] = useState(null)
//   const navigate = useNavigate()
//   const location = useLocation()
  
//   // Check if we should start on the register tab
//   const [activeTab, setActiveTab] = useState("login")
  
//   useEffect(() => {
//     // Check if we're already logged in
//     const token = localStorage.getItem("token")
//     if (token) {
//       navigate("/")
//       return
//     }
    
//     // Extract tab from URL query parameter
//     const searchParams = new URLSearchParams(location.search)
//     const tab = searchParams.get("tab")
//     if (tab === "register") {
//       setActiveTab("register")
//     }
//   }, [location, navigate])

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formData = new FormData(e.target);
//     const password = formData.get("password");
//     const phoneNumber = formData.get("phoneNumber");
  
//     const data = {
//       firstName: formData.get("firstName"),
//       lastName: formData.get("lastName"),
//       email: formData.get("email"),
//       phoneNumber: formData.get("phoneNumber"),
//       password: password,
//     };
  
//     // Password validation
//     const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{7,}$/;
  
//     if (!passwordRegex.test(password)) {
//       toast.error(
//         "Password must be at least 7 characters long and include uppercase, lowercase, number, and special character."
//       );
//       setLoading(false);
//       return;
//     }

//     if (!/^\d{10}$/.test(phoneNumber)) {
//       toast.warning("Phone number should contain exactly 10 digits without any symbols or spaces.")
//       setLoading(false)
//       return
//     }
  
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         toast.success("Registration Successful! Please enter the OTP sent to your email.");
        
//         // Animate the transition to OTP form
//         const registerForm = document.querySelector('[data-tab="register-form"]');
//         if (registerForm) {
//           registerForm.classList.add("animate-fadeOut");
//           setTimeout(() => {
//             setShowOtpInput(true);
//             setRegistrationData(data);
//             setTimeout(() => {
//               const otpForm = document.querySelector('[data-tab="otp-form"]');
//               if (otpForm) otpForm.classList.add("animate-fadeIn");
//             }, 100);
//           }, 300);
//         } else {
//           setShowOtpInput(true);
//           setRegistrationData(data);
//         }
//       } else {
//         toast.error(result.msg || "Registration Failed");
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     const otp = e.target.otp.value

//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: registrationData.email,
//           password: registrationData.password,
//           otp: otp
//         }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("Email verified successfully! You can now login.")
//         // Store the token if needed
//         localStorage.setItem("token", result.token)
//         setShowOtpInput(false)
        
//         // Animate transition back to login tab
//         const otpForm = document.querySelector('[data-tab="otp-form"]');
//         if (otpForm) {
//           otpForm.classList.add("animate-fadeOut");
//           setTimeout(() => {
//             setActiveTab("login");
//             // Highlight login form
//             setTimeout(() => {
//               const loginForm = document.querySelector('[data-tab="login-form"]');
//               if (loginForm) loginForm.classList.add("animate-pulse-once");
//             }, 100);
//           }, 300);
//         } else {
//           setActiveTab("login");
//         }
//       } else {
//         toast.error(result.msg || "OTP verification failed")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     const formData = new FormData(e.target)
//     const data = {
//       email: formData.get("loginEmail"),
//       password: formData.get("loginPassword"),
//     }

//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })

//       const result = await response.json()

//       if (result.success) {
//         // Create userData object for persistent login
//         const userData = {
//           firstName: result.user?.firstName || "User",
//           lastName: result.user?.lastName || "",
//           email: data.email,
//           phoneNumber: result.user?.phoneNumber || ""
//         }
        
//         // Store token and user data
//         localStorage.setItem("token", result.token)
//         localStorage.setItem("userData", JSON.stringify(userData))
        
//         // Show success toast with animation
//         toast.success("Login Successful! Welcome back!", {
//           onOpen: () => {
//             // Apply fade out animation to login form
//             const loginForm = document.querySelector('[data-tab="login-form"]');
//             if (loginForm) loginForm.classList.add("animate-fadeOut");
//           }
//         })
        
//         // Redirect to homepage after a short delay
//         setTimeout(() => {
//           navigate("/")
//           window.location.reload();
//         }, 1500)
//       } else {
//         toast.error(result.msg || "Invalid credentials")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleResendOTP = async () => {
//     if (!registrationData?.email) {
//       toast.error("Email information is missing")
//       return
//     }
    
//     toast.info("Sending OTP...", { autoClose: 2000 })
    
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/resend-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: registrationData.email }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("OTP sent! Please check your email")
//       } else {
//         toast.error(result.msg || "Failed to send OTP")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#27012F] to-[#550665]">
//       <Card className="w-full max-w-md shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(181,135,0,0.3)]">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="login">Login</TabsTrigger>
//             <TabsTrigger value="register">Register</TabsTrigger>
//           </TabsList>
//           <TabsContent value="login">
//             <form onSubmit={handleLogin} data-tab="login-form" className="transition-all duration-300">
//               <CardHeader className="space-y-1">
//                 <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
//                 <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="loginEmail">Email</Label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="loginEmail"
//                       name="loginEmail"
//                       type="email"
//                       placeholder="m@example.com"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center">
//                     <Label htmlFor="loginPassword">Password</Label>
//                     <a href="#" className="text-xs text-[#B58700] hover:underline">Forgot password?</a>
//                   </div>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input id="loginPassword" name="loginPassword" type="password" className="pl-10" required />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                   {loading ? (
//                     <div className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       <span>Logging in...</span>
//                     </div>
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </CardFooter>
//             </form>
//           </TabsContent>

//           <TabsContent value="register">
//             {!showOtpInput ? (
//               <form onSubmit={handleRegister} data-tab="register-form" className="transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-center">Create Account</CardTitle>
//                   <CardDescription className="text-center">Enter your details to sign up</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="firstName" name="firstName" className="pl-10" required />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="lastName" name="lastName" className="pl-10" required />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="m@example.com"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phoneNumber">Phone Number</Label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input 
//                         id="phoneNumber" 
//                         name="phoneNumber" 
//                         type="tel" 
//                         className="pl-10" 
//                         placeholder="10 digits only" 
//                         required 
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="password">Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input 
//                         id="password" 
//                         name="password" 
//                         type="password" 
//                         className="pl-10" 
//                         required 
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Password must be at least 7 characters with uppercase, lowercase, number, and special character
//                     </p>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         <span>Registering...</span>
//                       </div>
//                     ) : (
//                       "Register"
//                     )}
//                   </Button>
//                 </CardFooter>
//               </form>
//             ) : (
//               <form onSubmit={handleVerifyOTP} data-tab="otp-form" className="transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-center">Verify OTP</CardTitle>
//                   <CardDescription className="text-center">
//                     We've sent a one-time password to 
//                     <span className="font-semibold text-[#B58700]"> {registrationData?.email}</span>
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="otp">Enter OTP</Label>
//                     <div className="relative">
//                       <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="otp"
//                         name="otp"
//                         type="text"
//                         placeholder="Enter OTP"
//                         className="pl-10 text-center text-lg tracking-widest"
//                         required
//                         maxLength="6"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col gap-4">
//                   <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         <span>Verifying...</span>
//                       </div>
//                     ) : (
//                       "Verify OTP"
//                     )}
//                   </Button>
//                   <div className="text-center w-full text-sm">
//                     Didn't receive the code?{" "}
//                     <button
//                       type="button"
//                       onClick={handleResendOTP}
//                       className="text-[#B58700] hover:underline"
//                     >
//                       Resend OTP
//                     </button>
//                   </div>
//                 </CardFooter>
//               </form>
//             )}
//           </TabsContent>
//         </Tabs>
//       </Card>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { Mail, Lock, User, Phone, KeyRound } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useNavigate, useLocation } from "react-router-dom"

// export default function AuthForms() {
//   const [loading, setLoading] = useState(false)
//   const [showOtpInput, setShowOtpInput] = useState(false)
//   const [registrationData, setRegistrationData] = useState(null)
//   const navigate = useNavigate()
//   const location = useLocation()
  
//   // Check if we should start on the register tab
//   const [activeTab, setActiveTab] = useState("login")
  
//   useEffect(() => {
//     // Check if we're already logged in
//     const token = localStorage.getItem("token")
//     if (token) {
//       navigate("/")
//       return
//     }
    
//     // Extract tab from URL query parameter
//     const searchParams = new URLSearchParams(location.search)
//     const tab = searchParams.get("tab")
//     if (tab === "register") {
//       setActiveTab("register")
//     }
//   }, [location, navigate])

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formData = new FormData(e.target);
//     const password = formData.get("password");
//     const phoneNumber = formData.get("phoneNumber");
  
//     const data = {
//       firstName: formData.get("firstName"),
//       lastName: formData.get("lastName"),
//       email: formData.get("email"),
//       phoneNumber: formData.get("phoneNumber"),
//       password: password,
//     };
  
//     // Password validation
//     const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{7,}$/;
  
//     if (!passwordRegex.test(password)) {
//       toast.error(
//         "Password must be at least 7 characters long and include uppercase, lowercase, number, and special character."
//       );
//       setLoading(false);
//       return;
//     }

//     if (!/^\d{10}$/.test(phoneNumber)) {
//       toast.warning("Phone number should contain exactly 10 digits without any symbols or spaces.")
//       setLoading(false)
//       return
//     }
  
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         toast.success("Registration Successful! Please enter the OTP sent to your email.");
        
//         // Animate the transition to OTP form
//         const registerForm = document.querySelector('[data-tab="register-form"]');
//         if (registerForm) {
//           registerForm.classList.add("animate-fadeOut");
//           setTimeout(() => {
//             setShowOtpInput(true);
//             setRegistrationData(data);
//             setTimeout(() => {
//               const otpForm = document.querySelector('[data-tab="otp-form"]');
//               if (otpForm) otpForm.classList.add("animate-fadeIn");
//             }, 100);
//           }, 300);
//         } else {
//           setShowOtpInput(true);
//           setRegistrationData(data);
//         }
//       } else {
//         toast.error(result.msg || "Registration Failed");
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     const otp = e.target.otp.value

//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: registrationData.email,
//           password: registrationData.password,
//           otp: otp
//         }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("Email verified successfully! You can now login.")
//         // Store the token if needed
//         localStorage.setItem("token", result.token)
//         setShowOtpInput(false)
        
//         // Animate transition back to login tab
//         const otpForm = document.querySelector('[data-tab="otp-form"]');
//         if (otpForm) {
//           otpForm.classList.add("animate-fadeOut");
//           setTimeout(() => {
//             setActiveTab("login");
//             // Highlight login form
//             setTimeout(() => {
//               const loginForm = document.querySelector('[data-tab="login-form"]');
//               if (loginForm) loginForm.classList.add("animate-pulse-once");
//             }, 100);
//           }, 300);
//         } else {
//           setActiveTab("login");
//         }
//       } else {
//         toast.error(result.msg || "OTP verification failed")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     const formData = new FormData(e.target)
//     const data = {
//       email: formData.get("loginEmail"),
//       password: formData.get("loginPassword"),
//     }

//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })

//       const result = await response.json()

//       if (result.success) {
//         // Create userData object for persistent login
//         const userData = {
//           firstName: result.user?.firstName || "User",
//           lastName: result.user?.lastName || "",
//           email: data.email,
//           phoneNumber: result.user?.phoneNumber || ""
//         }
        
//         // Store token and user data
//         localStorage.setItem("token", result.token)
//         localStorage.setItem("userData", JSON.stringify(userData))
        
//         // Show success toast with animation
//         toast.success("Login Successful! Welcome back!", {
//           onOpen: () => {
//             // Apply fade out animation to login form
//             const loginForm = document.querySelector('[data-tab="login-form"]');
//             if (loginForm) loginForm.classList.add("animate-fadeOut");
//           }
//         })
        
//         // Redirect to homepage after a short delay
//         setTimeout(() => {
//           navigate("/")
//           window.location.reload();
//         }, 1500)
//       } else {
//         toast.error(result.msg || "Invalid credentials")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleResendOTP = async () => {
//     if (!registrationData?.email) {
//       toast.error("Email information is missing")
//       return
//     }
    
//     toast.info("Sending OTP...", { autoClose: 2000 })
    
//     try {
//       const response = await fetch("https://wallentcardwithauthentication.onrender.com/auth/resend-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: registrationData.email }),
//       })

//       const result = await response.json()

//       if (result.success) {
//         toast.success("OTP sent! Please check your email")
//       } else {
//         toast.error(result.msg || "Failed to send OTP")
//       }
//     } catch (error) {
//       toast.error("Failed to connect to the server")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#27012F] to-[#550665]">
//       <Card className="w-full max-w-md shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(181,135,0,0.3)]">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="login">Login</TabsTrigger>
//             <TabsTrigger value="register">Register</TabsTrigger>
//           </TabsList>
//           <TabsContent value="login">
//             <form onSubmit={handleLogin} data-tab="login-form" className="transition-all duration-300">
//               <CardHeader className="space-y-1">
//                 <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
//                 <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="loginEmail">Email</Label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="loginEmail"
//                       name="loginEmail"
//                       type="email"
//                       placeholder="m@example.com"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center">
//                     <Label htmlFor="loginPassword">Password</Label>
//                     <a href="#" className="text-xs text-[#B58700] hover:underline">Forgot password?</a>
//                   </div>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input id="loginPassword" name="loginPassword" type="password" className="pl-10" required />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                   {loading ? (
//                     <div className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       <span>Logging in...</span>
//                     </div>
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </CardFooter>
//             </form>
//           </TabsContent>

//           <TabsContent value="register">
//             {!showOtpInput ? (
//               <form onSubmit={handleRegister} data-tab="register-form" className="transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-center">Create Account</CardTitle>
//                   <CardDescription className="text-center">Enter your details to sign up</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="firstName" name="firstName" className="pl-10" required />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input id="lastName" name="lastName" className="pl-10" required />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="m@example.com"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phoneNumber">Phone Number</Label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input 
//                         id="phoneNumber" 
//                         name="phoneNumber" 
//                         type="tel" 
//                         className="pl-10" 
//                         placeholder="10 digits only" 
//                         required 
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="password">Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input 
//                         id="password" 
//                         name="password" 
//                         type="password" 
//                         className="pl-10" 
//                         required 
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Password must be at least 7 characters with uppercase, lowercase, number, and special character
//                     </p>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         <span>Registering...</span>
//                       </div>
//                     ) : (
//                       "Register"
//                     )}
//                   </Button>
//                 </CardFooter>
//               </form>
//             ) : (
//               <form onSubmit={handleVerifyOTP} data-tab="otp-form" className="transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-center">Verify OTP</CardTitle>
//                   <CardDescription className="text-center">
//                     We've sent a one-time password to 
//                     <span className="font-semibold text-[#B58700]"> {registrationData?.email}</span>
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="otp">Enter OTP</Label>
//                     <div className="relative">
//                       <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="otp"
//                         name="otp"
//                         type="text"
//                         placeholder="Enter OTP"
//                         className="pl-10 text-center text-lg tracking-widest"
//                         required
//                         maxLength="6"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col gap-4">
//                   <Button type="submit" className="w-full bg-[#B58700] hover:bg-[#9e7500]" disabled={loading}>
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         <span>Verifying...</span>
//                       </div>
//                     ) : (
//                       "Verify OTP"
//                     )}
//                   </Button>
//                   <div className="text-center w-full text-sm">
//                     Didn't receive the code?{" "}
//                     <button
//                       type="button"
//