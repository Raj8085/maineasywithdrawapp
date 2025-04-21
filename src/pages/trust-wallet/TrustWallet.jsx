import CallToAction from "../cashApp/components/CallToAction"
import CardSet from "./component/CardSet"
import CoreFeatures from "./component/CoreFearutes"
import CryptoCardShowcase from "./component/CryptoCardShowCase"
import FAQ from "./component/FAQ"
import HeroSection from "./component/HeroSection"

const TrustWallet = () => {
  return (
    <div>
              <HeroSection/>
      <CoreFeatures/>
      <CardSet/>
      <CryptoCardShowcase/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}

export default TrustWallet