import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import CashApp from "./pages/cashApp/CashApp"
import { Route, Routes } from "react-router-dom"
// import AuthForms from "./component/AuthForm"
import Dashboard from "./component/Dashboard"
import CardDashboard from "./component/CardList"
// import AdminDashboard from "./component/AdminDashboard"
import PaymentConfirmation from "./component/Payment-Confirmation"
import Home from "./pages/Home/Home"
import Nexon from "./pages/Nexon/Nexon"
import Coinbase from "./pages/coinbase/Coinbase"
import TrustWallet from "./pages/trust-wallet/TrustWallet"
import Paypal from "./pages/Paypal/Paypal"
import Robinhood from "./Robinhood/Robinhood"
import TawkToChat from "./component/TawkToChat"
import CreditScoreChecker from "./pages/Home/component/Features/CreditCardScoreChecker"
import Login from "./LoginAndSignup/pages/login"
import Signup from "./LoginAndSignup/pages/register"


const App = () => {
  return (
    <div>
      {/* <Navbar />
      <CashApp />
      <Footer /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cash-app" element={<CashApp />} />
        <Route path="/nexon" element={<Nexon />} />
        <Route path="/coinbase" element={<Coinbase />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/trustwallet" element={<TrustWallet />} />
        <Route path="/robinhood" element={<Robinhood />} />
        {/* <Route path="/login" element={<AuthForms />} /> */}
        <Route path="/dashboard-for-user" element={<Dashboard />} />
        <Route path="/card-list" element={<CardDashboard />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/check" element={<CreditScoreChecker/>}/>
      </Routes>
      <TawkToChat/>
      <Footer />
    </div>
  )
}
export default App