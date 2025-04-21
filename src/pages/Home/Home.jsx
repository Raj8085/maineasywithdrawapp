import HeroSection from './component/HeroSection/HeroSection'
import CryptoCardLanding from './component/Features/FeaturesSection'
import BoostCard from './component/Features/BoostCard'
import CardCarousel from './component/Features/CardCarousel'
import GetStarted from './component/Features/GetStarted'
import LoginPage from './component/Features/LoginPage'
import Subscription from './component/Features/Subscription'
import CreditCardScore from '@/component/CheckCreditCardScore'


function Home() {
  return (
    <div>
      <HeroSection/>
      <CryptoCardLanding/>
      <BoostCard/>
      <CardCarousel/>
      <CreditCardScore/>
      <GetStarted/> 
      <LoginPage/>
      <Subscription/>
    </div>
  )
}
export default Home