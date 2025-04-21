import CallToAction from "../cashApp/components/CallToAction"
import CircleOfBalls from "./component/AnimatedCoinSection"
import CryptoCards from "./component/CryptoCardSection"
import FAQ from "./component/FAQ"
import FeatureCards from "./component/FeaturesCard"
import HeroSection from "./component/HeroSection"

const Coinbase = () => {
  return (
    <div>
      <HeroSection/>
      <CircleOfBalls/>
      {/* <PricingCards/> */}
      {/* <CryptoCards/> */}
      <FeatureCards/>
      <CryptoCards/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}

export default Coinbase