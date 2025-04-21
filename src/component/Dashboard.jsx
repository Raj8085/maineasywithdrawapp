// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   Crown,
// //   CreditCard,
// //   Zap,
// //   Shield,
// //   ArrowLeft,
// //   QrCode,
// // } from "lucide-react";
// // import { Link, useNavigate } from "react-router-dom";

// // // import { Link } from "react-router-dom";

// // const Dashboard = () => {
// //   const [showPayment, setShowPayment] = useState(false);
// //   const [selectedPlan, setSelectedPlan] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   const plans = [
// //     {
// //       title: "core",
// //       price: "$300",
// //       period: "month",
// //       description: "Perfect for starters",
// //       features: "/cashcore.png",
// //       icon: <Shield className="w-8 h-8 text-blue-500" />,
// //       color: "bg-blue-50",
// //       borderColor: "border-blue-200",
      
// //     },
// //     {
// //       title: "Plus",
// //       price: "$500",
// //       period: "month",
// //       description: "Most popular choice",
// //       features: "/cashappplus.png",
// //       icon: <Zap className="w-8 h-8 text-purple-500" />,
// //       color: "bg-purple-50",
// //       borderColor: "border-purple-200",
// //       popular: true,
// //     },
// //     {
// //       title: "Elite",
// //       price: "$1000",
// //       period: "month",
// //       description: "For large teams",
// //       features: "/cashappelite.png",
// //       icon: <Crown className="w-8 h-8 text-amber-500" />,
// //       color: "bg-amber-50",
// //       borderColor: "border-amber-200",
// //     },
// //   ];

// //   const handleSelectPlan = (plan) => {
// //     setSelectedPlan(plan);
// //     navigate("/card-list", { state: { selectedPlan: plan } });
// //     // setShowPayment(true);
// //   };

// //   const PaymentPage = () => (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="w-full max-w-2xl mx-auto p-6"
// //     >
// //       <Button
// //         variant="ghost"
// //         onClick={() => setShowPayment(false)}
// //         className="mb-6"
// //       >
// //         <ArrowLeft className="mr-2 h-4 w-4" />
// //         Back to Plans
// //       </Button>

// //       <Card className="w-full">
// //         <CardHeader>
// //           <CardTitle className="flex items-center justify-between">
// //             Payment Details
// //             <Badge variant="secondary" className="text-sm">
// //               {selectedPlan?.title} Plan
// //             </Badge>
// //           </CardTitle>
// //           <CardDescription>
// //             Complete your subscription to {selectedPlan?.title} plan
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-6">
// //           <div className="border rounded-lg p-6 bg-muted/50">
// //             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// //             <div className="flex justify-between mb-2">
// //               <span>Plan Price</span>
// //               <span>{selectedPlan?.price}/month</span>
// //             </div>
// //             <div className="flex justify-between mb-2">
// //               <span>Tax</span>
// //               <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
// //             </div>
// //             <div className="border-t pt-2 mt-2">
// //               <div className="flex justify-between font-semibold">
// //                 <span>Total</span>
// //                 <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="border rounded-lg p-6 bg-muted/50">
// //             <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
// //             <div className="flex flex-col items-center space-y-4">
// //               <QrCode className="w-48 h-48" />
// //               <p className="text-sm text-muted-foreground text-center">
// //                 Scan this QR code with your preferred payment app to complete
// //                 the transaction
// //               </p>
// //             </div>
// //           </div>
// //         </CardContent>
// //         <CardFooter className="flex flex-col space-y-4">
// //           <Button className="w-full" size="lg">
// //             <CreditCard className="mr-2 h-4 w-4" />
// //             Confirm Payment
// //           </Button>
// //           <p className="text-xs text-center text-muted-foreground">
// //             By confirming payment, you agree to our Terms of Service and Privacy
// //             Policy
// //           </p>
// //         </CardFooter>
// //       </Card>
// //     </motion.div>
// //   );

// //   const PlanCards = () => (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
// //     >
// //       {plans.map((plan, index) => (
// //         <motion.div
// //           key={plan.title}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: index * 0.1 }}
// //         >
// //           <Card
// //             className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
// //           >
// //             {plan.popular && (
// //               <Badge
// //                 className="absolute -top-2 -right-2 bg-purple-500"
// //                 variant="secondary"
// //               >
// //                 Most Popular
// //               </Badge>
// //             )}
// //             <CardHeader>
// //               <div className="flex items-center justify-between mb-2">
// //                 {plan.icon}
// //                 <span className="text-2xl font-bold">{plan.price}</span>
// //               </div>
// //               <CardTitle>{plan.title}</CardTitle>
// //               <CardDescription>{plan.description}</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="flex justify-center my-4">
// //                 <img
// //                   src={plan.features}
// //                   alt={plan.title}
// //                   className="w-full rounded-lg"
// //                 />
// //               </div>
// //             </CardContent>
// //             <CardFooter>
// //               <Link to="/card-list">
// //               <Button
// //                 className="w-full"
// //                 variant={plan.popular ? "default" : "outline"}
// //                 onClick={() => handleSelectPlan(plan)}
// //               >
// //                 Select {plan.title}
// //               </Button>
// //               </Link>
// //             </CardFooter>
// //           </Card>
// //         </motion.div>
// //       ))}
// //     </motion.div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
// //       <div className="container mx-auto px-4">
// //         {!showPayment ? (
// //           <>
// //             <div className="text-center mb-12">
// //               <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
// //               <p className="text-muted-foreground">
// //                 Select the perfect plan for your needs. Upgrade or downgrade at
// //                 any time.
// //               </p>
// //             </div>
// //             <PlanCards />
// //           </>
// //         ) : (
// //           <PaymentPage />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Dashboard;
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Crown,
//   CreditCard,
//   Zap,
//   Shield,
//   ArrowLeft,
//   QrCode,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const plans = [
//     {
//       title: "core",
//       price: "$300",
//       period: "month",
//       description: "Perfect for starters",
//       features: "/cashcore.png",
//       icon: <Shield className="w-8 h-8 text-blue-500" />,
//       color: "bg-blue-50",
//       borderColor: "border-blue-200",
//       limit: "$10,000 credit limit"
      
//     },
//     {
//       title: "Plus",
//       price: "$500",
//       period: "month",
//       description: "Most popular choice",
//       features: "/cashappplus.png",
//       icon: <Zap className="w-8 h-8 text-purple-500" />,
//       color: "bg-purple-50",
//       borderColor: "border-purple-200",
//       popular: true,
//       limit: "$20,000 credit limit"
//     },
//     {
//       title: "Elite",
//       price: "$1000",
//       period: "month",
//       description: "For large teams",
//       features: "/cashappelite.png",
//       icon: <Crown className="w-8 h-8 text-amber-500" />,
//       color: "bg-amber-50",
//       borderColor: "border-amber-200",
//       limit: "$30,000 credit limit"
//     },
//   ];

//   const handleSelectPlan = (plan) => {
//     setSelectedPlan(plan);
//     navigate("/card-list", { state: { selectedPlan: plan } });
//     // setShowPayment(true);
//   };

//   const PaymentPage = () => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl mx-auto p-6"
//     >
//       <Button
//         variant="ghost"
//         onClick={() => setShowPayment(false)}
//         className="mb-6"
//       >
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Plans
//       </Button>

//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             Payment Details
//             <Badge variant="secondary" className="text-sm">
//               {selectedPlan?.title} Plan
//             </Badge>
//           </CardTitle>
//           <CardDescription>
//             Complete your subscription to {selectedPlan?.title} plan
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="border rounded-lg p-6 bg-muted/50">
//             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//             <div className="flex justify-between mb-2">
//               <span>Plan Price</span>
//               <span>{selectedPlan?.price}/month</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Tax</span>
//               <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-semibold">
//                 <span>Total</span>
//                 <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
//               </div>
//             </div>
//           </div>

//           <div className="border rounded-lg p-6 bg-muted/50">
//             <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
//             <div className="flex flex-col items-center space-y-4">
//               <QrCode className="w-48 h-48" />
//               <p className="text-sm text-muted-foreground text-center">
//                 Scan this QR code with your preferred payment app to complete
//                 the transaction
//               </p>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4">
//           <Button className="w-full" size="lg">
//             <CreditCard className="mr-2 h-4 w-4" />
//             Confirm Payment
//           </Button>
//           <p className="text-xs text-center text-muted-foreground">
//             By confirming payment, you agree to our Terms of Service and Privacy
//             Policy
//           </p>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );

//   const PlanCards = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
//     >
//       {plans.map((plan, index) => (
//         <motion.div
//           key={plan.title}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         >
//           <Card
//             className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
//           >
//             {plan.popular && (
//               <Badge
//                 className="absolute -top-2 -right-2 bg-purple-500"
//                 variant="secondary"
//               >
//                 Most Popular
//               </Badge>
//             )}
//             <CardHeader>
//               <div className="flex items-center justify-between mb-2">
//                 {plan.icon}
//                 <div className="text-end">
//                 <span className="text-2xl font-bold">{plan.price}</span>
//                 <br />
//                 <span className="text-sm text-muted-foreground">{plan.limit}</span>
//                 </div>
//               </div>
//               <CardTitle>{plan.title}</CardTitle>
//               <CardDescription>{plan.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex justify-center my-4">
//                 <img
//                   src={plan.features}
//                   alt={plan.title}
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Link to="/card-list">
//               <Button
//                 className="w-full"
//                 variant={plan.popular ? "default" : "outline"}
//                 onClick={() => handleSelectPlan(plan)}
//               >
//                 Select {plan.title}
//               </Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
//       <div className="container mx-auto px-4">
//         {!showPayment ? (
//           <>
//             <div className="text-center mb-12">
//               <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
//               <p className="text-muted-foreground">
//                 Select the perfect plan for your needs. Upgrade or downgrade at
//                 any time.
//               </p>
//             </div>
//             <PlanCards />
//           </>
//         ) : (
//           <PaymentPage />
//         )}
//       </div>
//     </div>
//   );
// };
// export default Dashboard;





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  CreditCard,
  Zap,
  Shield,
  ArrowLeft,
  QrCode,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const imageData = location.state?.images || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const plans = [
    {
      title: "core",
      price: "300",
      description: "Perfect for starters",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      limit: "$10,000 credit limit",
      imageKey: "core",
    },
    {
      title: "plus",
      price: "500",
      description: "Most popular choice",
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: true,
      limit: "$20,000 credit limit",
      imageKey: "plus",
    },
    {
      title: "elite",
      price: "1000",
      description: "For large teams",
      icon: <Crown className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      limit: "$30,000 credit limit",
      imageKey: "elite",
    },
  ];




  // const plans = [
  //   {
  //     title: "core",
  //     price: "300",
  //     period: "month",
  //     description: "Perfect for starters",
  //     features: "/cashcore.png",
  //     icon: <Shield className="w-8 h-8 text-blue-500" />,
  //     color: "bg-blue-50",
  //     borderColor: "border-blue-200",
  //     limit: "$10,000 credit limit"
      
  //   },
  //   {
  //     title: "Plus",
  //     price: "500",
  //     period: "month",
  //     description: "Most popular choice",
  //     features: "/cashappplus.png",
  //     icon: <Zap className="w-8 h-8 text-purple-500" />,
  //     color: "bg-purple-50",
  //     borderColor: "border-purple-200",
  //     popular: true,
  //     limit: "$20,000 credit limit"
  //   },
  //   {
  //     title: "Elite",
  //     price: "1000",
  //     period: "month",
  //     description: "For large teams",
  //     features: "/cashappelite.png",
  //     icon: <Crown className="w-8 h-8 text-amber-500" />,
  //     color: "bg-amber-50",
  //     borderColor: "border-amber-200",
  //     limit: "$30,000 credit limit"
  //   },
  // ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    let planData = {
      title: plan.title,
      price: plan.price,
      period: plan.period,
      description: plan.description,
    }

    localStorage.setItem("selectedPlan", JSON.stringify(planData));

    console.log(plan);
    navigate(`/card-list`);
    // setShowPayment(true);
  };

  const PaymentPage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <Button
        variant="ghost"
        onClick={() => setShowPayment(false)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Plans
      </Button>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Payment Details
            <Badge variant="secondary" className="text-sm">
              {selectedPlan?.title} Plan
            </Badge>
          </CardTitle>
          <CardDescription>
            Complete your subscription to {selectedPlan?.title} plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Plan Price</span>
              <span>{selectedPlan?.price}/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
            <div className="flex flex-col items-center space-y-4">
              <QrCode className="w-48 h-48" />
              <p className="text-sm text-muted-foreground text-center">
                Scan this QR code with your preferred payment app to complete
                the transaction
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" size="lg">
            <CreditCard className="mr-2 h-4 w-4" />
            Confirm Payment
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By confirming payment, you agree to our Terms of Service and Privacy
            Policy
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );

  const PlanCards = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
          >
            {plan.popular && (
              <Badge
                className="absolute -top-2 -right-2 bg-purple-500"
                variant="secondary"
              >
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {plan.icon}
                <div className="text-end">
                <span className="text-2xl font-bold">${plan.price}</span>
                <br />
                <span className="text-sm text-muted-foreground">{plan.limit}</span>
                </div>
              </div>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
            {imageData?.[plan.imageKey] && (
    <img
      src={imageData[plan.imageKey]} // ✅ CORRECT usage
      alt={`${plan.title} image`}
      className="w-full rounded-lg"
    />
  )}
            </CardContent>
            <CardFooter>
              <Link to="/card-list">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSelectPlan(plan)}
              >
                Select {plan.title}
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {!showPayment ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
              <p className="text-muted-foreground">
                Select the perfect plan for your needs. Upgrade or downgrade at
                any time.
              </p>
            </div>
            <PlanCards />
          </>
        ) : (
          <PaymentPage />
        )}
      </div>
    </div>
  );
};
export default Dashboard;