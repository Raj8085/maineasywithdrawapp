// // // import React from "react"
// // // import {  ChevronLeft, ChevronRight, Grid2X2, LayoutList } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // // class CardDashboard extends React.Component {
// // //   constructor(props) {
// // //     super(props)
// // //     this.state = {
// // //       cards: [
// // //         { id: 1, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
// // //         { id: 2, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
// // //         { id: 3, status: "Inactive", imageUrl: "/in-visa-gold-card-498x280.png" },
// // //       ],
// // //       filter: "all",
// // //       isGridView: false,
// // //     }
// // //   }

// // //   setFilter = (value) => {
// // //     this.setState({ filter: value })
// // //   }

// // //   setIsGridView = (value) => {
// // //     this.setState({ isGridView: value })
// // //   }

// // //   scroll = (direction) => {
// // //     const container = document.getElementById("card-container")
// // //     if (container) {
// // //       const scrollAmount = direction === "left" ? -300 : 300
// // //       container.scrollBy({ left: scrollAmount, behavior: "smooth" })
// // //     }
// // //   }

// // //   handleAddCard = () => {
// // //     // Implement your add card logic here
// // //     console.log("Add new card")
// // //   }

// // //   render() {
// // //     const { cards, filter, isGridView } = this.state

// // //     const filteredCards = cards.filter((card) => {
// // //       if (filter === "all") return true
// // //       return card.status.toLowerCase() === filter
// // //     })

// // //     return (
// // //       <div className="container mx-auto p-4 space-y-6 md:px-44">
// // //         {/* Header with controls */}
// // //         <div className="flex flex-col sm:flex-row justify-between gap-4">
// // //           <h1 className="text-xl font-semibold">Card List</h1>
// // //           <div className="flex items-center gap-4">
// // //             <Select value={filter} onValueChange={this.setFilter}>
// // //               <SelectTrigger className="w-[100px]">
// // //                 <SelectValue placeholder="Filter" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 <SelectItem value="all">All</SelectItem>
// // //                 <SelectItem value="active">Active</SelectItem>
// // //                 <SelectItem value="inactive">Inactive</SelectItem>
// // //               </SelectContent>
// // //             </Select>

// // //             <div className="flex items-center border rounded-lg">
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className={!isGridView ? "bg-muted" : ""}
// // //                 onClick={() => this.setIsGridView(false)}
// // //               >
// // //                 <LayoutList className="h-4 w-4" />
// // //               </Button>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className={isGridView ? "bg-muted" : ""}
// // //                 onClick={() => this.setIsGridView(true)}
// // //               >
// // //                 <Grid2X2 className="h-4 w-4" />
// // //               </Button>
// // //             </div>

// // //             <Button onClick={this.handleAddCard}>New Card</Button>
// // //           </div>
// // //         </div>

// // //         {/* Cards container */}
// // //         <div className="relative">
// // //           <div
// // //             id="card-container"
// // //             className={`
// // //               ${isGridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex overflow-x-auto gap-4"}
// // //               scroll-smooth py-2 md:px-20
// // //             `}
// // //           >
// // //             {filteredCards.map((card) => (
// // //               <div
// // //                 key={card.id}
// // //                 className={`
// // //                   ${isGridView ? "" : "flex-none"}
// // //                   w-[320px] h-[200px] rounded-xl overflow-hidden
// // //                   transition-transform hover:scale-105 cursor-pointer
// // //                 `}
// // //               >
// // //                 {/* Replace this div with your card image */}
// // //                 <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 relative">
// // //                   {/* Add your card image here */}
// // //                   <img
// // //                     src={card.imageUrl || "/placeholder.svg"}
// // //                     alt={`Card ${card.id}`}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   {/* Status badge */}
// // //                   <span
// // //                     className={`
// // //                       absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
// // //                       ${card.status === "Active" ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-500"}
// // //                     `}
// // //                   >
// // //                     {card.status}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Scroll buttons - only show in list view and on larger screens */}
// // //           {!isGridView && (
// // //             <>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
// // //                 onClick={() => this.scroll("left")}
// // //               >
// // //                 <ChevronLeft className="h-4 w-4" />
// // //               </Button>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
// // //                 onClick={() => this.scroll("right")}
// // //               >
// // //                 <ChevronRight className="h-4 w-4" />
// // //               </Button>
// // //             </>
// // //           )}
// // //         </div>

// // //         {/* CTA Section */}
// // //         <div className="bg-gray-50 rounded-lg p-6 mt-8">
// // //           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
// // //             <div className="text-center md:text-left">
// // //               <h2 className="text-2xl font-bold mb-4">Get a card to control your expenses</h2>
// // //               <Button variant="outline" onClick={this.handleAddCard}>
// // //                 Issue a new card
// // //               </Button>
// // //             </div>
// // //             {/* Add your card stack illustration here */}
// // //             <img src="/iBlog_1060X400_1-1.jpg" alt="" className="w-full max-w-sm aspect-video bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl" />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }
// // // }
// // // export default CardDashboard

// // import React from "react";
// // import { ChevronLeft, ChevronRight, Grid2X2, LayoutList } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { ArrowLeft, CreditCard, QrCode } from "lucide-react";

// // const CardDashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const selectedPlan = location.state?.selectedPlan;

// //   const [cards] = React.useState([
// //     { id: 1, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
// //     { id: 2, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
// //     { id: 3, status: "Inactive", imageUrl: "/in-visa-gold-card-498x280.png" },
// //   ]);
// //   const [filter, setFilter] = React.useState("all");
// //   const [isGridView, setIsGridView] = React.useState(false);
// //   const [showPayment, setShowPayment] = React.useState(true);
// //   const [selectedCard, setSelectedCard] = React.useState(null);

// //   const handleCardSelect = (card) => {
// //     setSelectedCard(card);
// //     setShowPayment(true);

// //   };

// //   const scroll = (direction) => {
// //     const container = document.getElementById("card-container");
// //     if (container) {
// //       const scrollAmount = direction === "left" ? -300 : 300;
// //       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
// //     }
// //   };

// //   const handleAddCard = () => {
// //     console.log("Add new card");
// //   };

// //   const filteredCards = cards.filter((card) => {
// //     if (filter === "all") return true;
// //     return card.status.toLowerCase() === filter.toLowerCase();
// //   });

// //   const PaymentPage = () => (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="w-full max-w-2xl mx-auto p-6 "
// //     >
// //       {/* <Button
// //         variant="ghost"
// //         onClick={() => setShowPayment(false)}
// //         className="mb-6"
// //       >
// //         <ArrowLeft className="mr-2 h-4 w-4" />
// //         Back to Cards
// //       </Button> */}

// //       <Card className="w-full">
// //         <CardHeader>
// //           <CardTitle className="flex items-center justify-between">
// //             Payment Details
// //             <Badge variant="secondary" className="text-sm">
// //               Card #{selectedCard?.id}
// //             </Badge>
// //           </CardTitle>
// //           <CardDescription>
// //             Complete your {selectedPlan?.title || "Plan"} subscription
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
// //               <span>
// //                 ₹{selectedPlan?.price ? parseInt(selectedPlan.price) * 0.18 : 0}
// //               </span>
// //             </div>
// //             <div className="border-t pt-2 mt-2">
// //               <div className="flex justify-between font-semibold">
// //                 <span>Total</span>
// //                 <span>
// //                   ₹
// //                   {selectedPlan?.price
// //                     ? parseInt(selectedPlan.price) * 1.18
// //                     : 0}
// //                 </span>
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
// //           <Button
// //             className="w-full"
// //             size="lg"
// //             onClick={() => navigate("/payment-confirmation")}
// //           >
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

// //   if (showPayment) {
// //     return <PaymentPage />;
// //   }

// //   return (
// //     <div className="container mx-auto p-4 space-y-6 md:px-44  min-h-[100vh]">
// //       <div className="flex flex-col sm:flex-row justify-between gap-4">
// //         <div className="flex items-center gap-4">
// //           <Button
// //             variant="ghost"
// //             onClick={() => navigate("/dashboard-for-user")}
// //             className="mr-4"
// //           >
// //             <ArrowLeft className="h-4 w-4 mr-2" />
// //             Back to Plans
// //           </Button>
// //           <h1 className="text-xl font-semibold">Card List</h1>
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <Select value={filter} onValueChange={setFilter}>
// //             <SelectTrigger className="w-[100px]">
// //               <SelectValue placeholder="Filter" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All</SelectItem>
// //               <SelectItem value="active">Active</SelectItem>
// //               <SelectItem value="inactive">Inactive</SelectItem>
// //             </SelectContent>
// //           </Select>

// //           <div className="flex items-center border rounded-lg">
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className={!isGridView ? "bg-muted" : ""}
// //               onClick={() => setIsGridView(false)}
// //             >
// //               <LayoutList className="h-4 w-4" />
// //             </Button>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className={isGridView ? "bg-muted" : ""}
// //               onClick={() => setIsGridView(true)}
// //             >
// //               <Grid2X2 className="h-4 w-4" />
// //             </Button>
// //           </div>

// //           <Button onClick={handleAddCard}>New Card</Button>
// //         </div>
// //       </div>

// //       <div className="relative">
// //         <div
// //           id="card-container"
// //           className={`
// //             ${
// //               isGridView
// //                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
// //                 : "flex overflow-x-auto gap-4"
// //             }
// //             scroll-smooth py-2 md:px-20
// //           `}
// //         >
// //           {filteredCards.map((card) => (
// //             <div
// //               key={card.id}
// //               className={`
// //                 ${isGridView ? "" : "flex-none"}
// //                 w-[320px] h-[200px] rounded-xl overflow-hidden
// //                 transition-transform hover:scale-105 cursor-pointer
// //               `}
// //               onClick={() => handleCardSelect(card)}
// //             >
// //               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 relative">
// //                 <img
// //                   src={card.imageUrl}
// //                   alt={`Card ${card.id}`}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <span
// //                   className={`
// //                     absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
// //                     ${
// //                       card.status === "Active"
// //                         ? "bg-green-500/20 text-green-500"
// //                         : "bg-gray-500/20 text-gray-500"
// //                     }
// //                   `}
// //                 >
// //                   {card.status}
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {!isGridView && (
// //           <>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
// //               onClick={() => scroll("left")}
// //             >
// //               <ChevronLeft className="h-4 w-4" />
// //             </Button>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
// //               onClick={() => scroll("right")}
// //             >
// //               <ChevronRight className="h-4 w-4" />
// //             </Button>
// //           </>
// //         )}
// //       </div>

// //       <div className="bg-gray-50 rounded-lg p-6 mt-8">
// //         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
// //           <div className="text-center md:text-left">
// //             <h2 className="text-2xl font-bold mb-4">
// //               Get a card to control your expenses
// //             </h2>
// //             <Button variant="outline" onClick={handleAddCard}>
// //               Issue a new card
// //             </Button>
// //           </div>
// //           <img
// //             src="/iBlog_1060X400_1-1.jpg"
// //             alt="Card stack illustration"
// //             className="w-full max-w-sm aspect-video bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardDashboard;



// import React from "react";
// import { ChevronLeft, ChevronRight, Grid2X2, LayoutList } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, CreditCard, QrCode } from "lucide-react";

// const CardDashboard = () => {
//   const navigate = useNavigate();

//   const plan = JSON.parse(localStorage.getItem("selectedPlan"));



//   const [cards] = React.useState([
//     { id: 1, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
//     { id: 2, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
//     { id: 3, status: "Inactive", imageUrl: "/in-visa-gold-card-498x280.png" },
//   ]);
//   const [filter, setFilter] = React.useState("all");
//   const [isGridView, setIsGridView] = React.useState(false);
//   const [showPayment, setShowPayment] = React.useState(true);
//   const [selectedCard, setSelectedCard] = React.useState(null);

//   const handleCardSelect = (card) => {
//     setSelectedCard(card);
//     setShowPayment(true);

//   };

//   const scroll = (direction) => {
//     const container = document.getElementById("card-container");
//     if (container) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const handleAddCard = () => {
//     console.log("Add new card");
//   };

//   const filteredCards = cards.filter((card) => {
//     if (filter === "all") return true;
//     return card.status.toLowerCase() === filter.toLowerCase();
//   });

//   const PaymentPage = () => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl mx-auto p-6 "
//     >
//       {/* <Button
//         variant="ghost"
//         onClick={() => setShowPayment(false)}
//         className="mb-6"
//       >
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Cards
//       </Button> */}

//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             Payment Details
//             <Badge variant="secondary" className="text-sm">
//               Card #{selectedCard?.id}
//             </Badge>
//           </CardTitle>
//           <CardDescription>
//             Complete your {plan?.title || "Plan"} subscription
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="border rounded-lg p-6 bg-muted/50">
//             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//             <div className="flex justify-between mb-2">
//               <span>Plan Price</span>
//               <span>{plan?.price}/month</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Tax</span>
//               <span>
//                 ₹{plan?.price ? parseInt(plan.price) * 0.18 : 0}
//               </span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-semibold">
//                 <span>Total</span>
//                 <span>
//                   ₹
//                   {plan?.price
//                     ? parseInt(plan.price) * 1.18
//                     : 0}
//                 </span>
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
//           <Button
//             className="w-full"
//             size="lg"
//             onClick={() => navigate("/payment-confirmation")}
//           >
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

//   if (showPayment) {
//     return <PaymentPage />;
//   }

//   return (
//     <div className="container mx-auto p-4 space-y-6 md:px-44  min-h-[100vh]">
//       <div className="flex flex-col sm:flex-row justify-between gap-4">
//         <div className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/dashboard-for-user")}
//             className="mr-4"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Plans
//           </Button>
//           <h1 className="text-xl font-semibold">Card List</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <Select value={filter} onValueChange={setFilter}>
//             <SelectTrigger className="w-[100px]">
//               <SelectValue placeholder="Filter" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="active">Active</SelectItem>
//               <SelectItem value="inactive">Inactive</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="flex items-center border rounded-lg">
//             <Button
//               variant="ghost"
//               size="icon"
//               className={!isGridView ? "bg-muted" : ""}
//               onClick={() => setIsGridView(false)}
//             >
//               <LayoutList className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className={isGridView ? "bg-muted" : ""}
//               onClick={() => setIsGridView(true)}
//             >
//               <Grid2X2 className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button onClick={handleAddCard}>New Card</Button>
//         </div>
//       </div>

//       <div className="relative">
//         <div
//           id="card-container"
//           className={`
//             ${
//               isGridView
//                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//                 : "flex overflow-x-auto gap-4"
//             }
//             scroll-smooth py-2 md:px-20
//           `}
//         >
//           {filteredCards.map((card) => (
//             <div
//               key={card.id}
//               className={`
//                 ${isGridView ? "" : "flex-none"}
//                 w-[320px] h-[200px] rounded-xl overflow-hidden
//                 transition-transform hover:scale-105 cursor-pointer
//               `}
//               onClick={() => handleCardSelect(card)}
//             >
//               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 relative">
//                 <img
//                   src={card.imageUrl}
//                   alt={`Card ${card.id}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <span
//                   className={`
//                     absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
//                     ${
//                       card.status === "Active"
//                         ? "bg-green-500/20 text-green-500"
//                         : "bg-gray-500/20 text-gray-500"
//                     }
//                   `}
//                 >
//                   {card.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {!isGridView && (
//           <>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
//               onClick={() => scroll("left")}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
//               onClick={() => scroll("right")}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </>
//         )}
//       </div>

//       <div className="bg-gray-50 rounded-lg p-6 mt-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold mb-4">
//               Get a card to control your expenses
//             </h2>
//             <Button variant="outline" onClick={handleAddCard}>
//               Issue a new card
//             </Button>
//           </div>
//           <img
//             src="/iBlog_1060X400_1-1.jpg"
//             alt="Card stack illustration"
//             className="w-full max-w-sm aspect-video bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDashboard;




import React from "react";
import { ChevronLeft, ChevronRight, Grid2X2, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, QrCode } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardDashboard = () => {
  const navigate = useNavigate();

  const plan = JSON.parse(localStorage.getItem("selectedPlan"));



  const [cards] = React.useState([
    { id: 1, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
    { id: 2, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
    { id: 3, status: "Inactive", imageUrl: "/in-visa-gold-card-498x280.png" },
  ]);
  const [filter, setFilter] = React.useState("all");
  const [isGridView, setIsGridView] = React.useState(false);
  const [showPayment, setShowPayment] = React.useState(true);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    setShowPayment(true);

  };

  const calculateTotal = (price) => {
    const basePrice = Number.parseInt(price)
    const tax = basePrice * 0.18
    return (basePrice + tax).toFixed(2)
  }

  const scroll = (direction) => {
    const container = document.getElementById("card-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAddCard = () => {
    console.log("Add new card");
  };

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    return card.status.toLowerCase() === filter.toLowerCase();
  });

  const PaymentPage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6 "
    >
      {/* <Button
        variant="ghost"
        onClick={() => setShowPayment(false)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cards
      </Button> */}

      {/* <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Payment Details
            <Badge variant="secondary" className="text-sm">
              Card #{selectedCard?.id}
            </Badge>
          </CardTitle>
          <CardDescription>
            Complete your {plan?.title || "Plan"} subscription
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Plan Price</span>
              <span>{plan?.price}/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>
                ₹{plan?.price ? parseInt(plan.price) * 0.18 : 0}
              </span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  ₹
                  {plan?.price
                    ? parseInt(plan.price) * 1.18
                    : 0}
                </span>
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
          <Button
            className="w-full"
            size="lg"
            onClick={() => navigate("/payment-confirmation")}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Confirm Payment
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By confirming payment, you agree to our Terms of Service and Privacy
            Policy
          </p>
        </CardFooter>
      </Card> */}

<Card className="w-full shadow-lg border-none bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Payment Details</CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Card #{selectedCard?.id}
                  </Badge>
                </div>
                <CardDescription>Complete your {plan?.title || "Premium"} subscription</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="summary">Order Summary</TabsTrigger>
                    <TabsTrigger value="payment">Payment Method</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="space-y-4">
                    <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 border">
                      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Plan</span>
                          <span className="font-medium">{plan?.title || "Premium"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Price</span>
                          <span>${plan?.price || "999"}/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Tax (18%)</span>
                          <span>${plan?.price ? (Number.parseInt(plan.price) * 0.18).toFixed(2) : "179.82"}</span>
                        </div>
                        <div className="border-t pt-3 mt-3">
                          <div className="flex justify-between items-center font-semibold">
                            <span>Total</span>
                            <span>${plan?.price ? calculateTotal(plan.price) : "1178.82"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 border">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </div>
                        <div>
                          <p className="font-medium">{selectedCard?.type || "Visa Gold"}</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedCard?.number || "•••• •••• •••• 4321"}
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </TabsContent>

                  <TabsContent value="payment" className="space-y-4">
                    <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 border">
                      <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-48 h-48 bg-white p-4 rounded-lg flex items-center justify-center">
                          <QrCode className="w-full h-full" />
                        </div>
                        <p className="text-sm text-muted-foreground text-center max-w-md">
                          Scan this QR code with your preferred payment app to complete the transaction
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4 pt-2 pb-6">
                <Button className="w-full" size="lg" onClick={() => navigate("/payment-confirmation")}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Confirm Payment
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By confirming payment, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardFooter>
            </Card>
    </motion.div>
  );

  if (showPayment) {
    return <PaymentPage />;
  }

 


  return (
    <div className="container mx-auto p-4 space-y-6 md:px-44  min-h-[100vh]">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard-for-user")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Plans
          </Button>
          <h1 className="text-xl font-semibold">Card List</h1>
        </div>
        <div className="flex items-center gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className={!isGridView ? "bg-muted" : ""}
              onClick={() => setIsGridView(false)}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={isGridView ? "bg-muted" : ""}
              onClick={() => setIsGridView(true)}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
          </div>

          <Button onClick={handleAddCard}>New Card</Button>
        </div>
      </div>

      <div className="relative">
        <div
          id="card-container"
          className={`
            ${
              isGridView
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "flex overflow-x-auto gap-4"
            }
            scroll-smooth py-2 md:px-20
          `}
        >
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className={`
                ${isGridView ? "" : "flex-none"}
                w-[320px] h-[200px] rounded-xl overflow-hidden
                transition-transform hover:scale-105 cursor-pointer
              `}
              onClick={() => handleCardSelect(card)}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 relative">
                <img
                  src={card.imageUrl}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                    ${
                      card.status === "Active"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-gray-500/20 text-gray-500"
                    }
                  `}
                >
                  {card.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {!isGridView && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg hidden md:flex"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Get a card to control your expenses
            </h2>
            <Button variant="outline" onClick={handleAddCard}>
              Issue a new card
            </Button>
          </div>
          <img
            src="/iBlog_1060X400_1-1.jpg"
            alt="Card stack illustration"
            className="w-full max-w-sm aspect-video bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default CardDashboard;