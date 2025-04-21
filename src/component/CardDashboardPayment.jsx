import { ChevronLeft, ChevronRight, Grid2X2, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, QrCode } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CardDashboardPayment = () => {
  const navigate = useNavigate()

  const [cards] = useState([
    { id: 1, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
    { id: 2, status: "Active", imageUrl: "/in-visa-gold-card-498x280.png" },
    { id: 3, status: "Inactive", imageUrl: "/in-visa-gold-card-498x280.png" },
  ])
  const [filter, setFilter] = useState("all")
  const [isGridView, setIsGridView] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedPlan] = useState({
    title: "Premium Plan",
    price: "999",
  })

  const handleCardSelect = (card) => {
    setSelectedCard(card)
    setShowPayment(true)
  }

  const scroll = (direction) => {
    const container = document.getElementById("card-container")
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleAddCard = () => {
    console.log("Add new card")
  }

  const handleConfirmPayment = () => {
    // Store selected card and plan in localStorage for access in the upload page
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard))
    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan))

    // Redirect to the payment confirmation page
    navigate("/payment-confirmation")
  }

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true
    return card.status.toLowerCase() === filter.toLowerCase()
  })

  const PaymentPage = () => (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Button variant="ghost" onClick={() => setShowPayment(false)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cards
      </Button>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Payment Details
            <Badge variant="secondary" className="text-sm">
              Card #{selectedCard?.id}
            </Badge>
          </CardTitle>
          <CardDescription>Complete your {selectedPlan?.title || "Plan"} subscription</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Plan Price</span>
              <span>₹{selectedPlan?.price}/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹{selectedPlan?.price ? Number.parseInt(selectedPlan.price) * 0.18 : 0}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{selectedPlan?.price ? Number.parseInt(selectedPlan.price) * 1.18 : 0}</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
            <div className="flex flex-col items-center space-y-4">
              <QrCode className="w-48 h-48" />
              <p className="text-sm text-muted-foreground text-center">
                Scan this QR code with your preferred payment app to complete the transaction
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" size="lg" onClick={handleConfirmPayment}>
            <CreditCard className="mr-2 h-4 w-4" />
            Confirm Payment
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By confirming payment, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardFooter>
      </Card>
    </div>
  )

  if (showPayment) {
    return <PaymentPage />
  }

  return (
    <div className="container mx-auto p-4 space-y-6 md:px-44">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard-for-user")} className="mr-4">
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
            ${isGridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex overflow-x-auto gap-4"}
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
                  src={card.imageUrl || "/placeholder.svg"}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                    ${card.status === "Active" ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-500"}
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
            <h2 className="text-2xl font-bold mb-4">Get a card to control your expenses</h2>
            <Button variant="outline" onClick={handleAddCard}>
              Issue a new card
            </Button>
          </div>
          <img
            src="/placeholder.svg?height=400&width=1060"
            alt="Card stack illustration"
            className="w-full max-w-sm aspect-video bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default CardDashboardPayment

