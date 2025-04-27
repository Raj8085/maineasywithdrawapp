import Hero from './components/Hero'
import Video from '../../assets/cash-app-video.mp4'
import Mobile from '../../assets/cash-app-mobile.png'
import Card1 from '../../assets/cash-app-card1.png'
import Card2 from '../../assets/cash-app-card2.png'
import Card3 from '../../assets/cash-app-card3.png'
import CardOverlay from './components/CardOverlay'
import FeaturesSection from './components/FeaturesSection'
import Feature1 from '../../assets/cash-app-feature1.png'
import Feature2 from '../../assets/cash-app-feature2.png'
import Feature3 from '../../assets/cash-app-feature3.png'
import Feature4 from '../../assets/cash-app-feature4.png'
import FeaturesSectionReversed from './components/FeaturesSectionReversed'
import FAQAccordion from './components/FAQAccordion'
import CallToAction from './components/CallToAction'
import { Link } from 'react-router-dom'
// import ShinyButton from '@/components/ui/ShinyButton'

const CashApp = () => {
    return (
        <div>
            <Hero />


            <div className="px-8 md:px-32 mx-auto py-16 bg-white">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight exo-font">
                        Your Credit. Your Control.<br />
                        Your Crypto.
                    </h1>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 exo-font">
                    {/* Left column: Text content */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-medium mb-6">Grow Your Score. Grow Your Stack</h2>

                        <p className="text-lg mb-6 md:max-w-[70%]">
                            Cashaap is your all-in-one gateway to smarter money and crypto moves.
                            With three powerful card tiers, you get more control, more credit, and the
                            power to stack sats while you build your financial future.
                            Whether you&apos;re just getting started or you&apos;re deep in the crypto game,
                            Cashaap helps you grow your credit and your Bitcoin—seamlessly.
                        </p>
                        <p className="text-lg">

                        </p>
                    </div>

                    {/* Right column: Video with green glow effect */}
                    <div className="md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-green-600 rounded-full blur-3xl opacity-40"></div>
                        <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl h-[50vh] md:h-[60vh]">
                            <video
                                className="w-full h-[50vh] md:h-[60vh] object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={Video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-medium">Own It. Spend It. Stack It.</h2>
                </div>
            </div>



            <div className="px-8 md:px-32 mx-auto py-0 md:py-16 bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left side - Phone with pulse animation */}
                    <div className="md:w-1/2">
                        <div className="relative rounded-3xl bg-blue-600 p-8 flex items-center justify-center h-[50vh] md:h-[60vh]">
                            <img
                                src={Mobile}
                                alt="Mobile"
                                className="rounded-3xl animate-[pulse_5s_ease-in-out_infinite] h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="md:w-1/2 flex flex-col items-center justify-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-medium mb-6">Buy, sell, and send bitcoin</h2>

                            <div className="space-y-4 mb-8">
                                <p className="text-lg">Turn your cash into Bitcoin instantly
                                    <br />
                                    Send BTC on-chain or with Lightning
                                    <br />
                                    Lightning payments are fast and secure
                                    <br />
                                    Zero fees when you use Lightning on CASHAAP
                                </p>
                                {/* <p className="text-lg">Send BTC on-chain or with Lightning</p>
    <p className="text-lg">Lightning payments are fast and secure</p>
    <p className="text-lg">Zero fees when you use Lightning on CASHAAP</p> */}
                            </div>
                            <Link to="/login">
                            <button className="bg-black text-white rounded-full px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
                                Learn More
                            </button>
                            </Link>

                            {/* <ShinyButton>Learn More</ShinyButton> */}
                        </div>
                    </div>
                </div>
            </div>



            <div className="relative w-full py-24 px-6 overflow-hidden h-[60vh]">
                {/* Blurry pink effect at top-left corner */}
                <div className="absolute top-[50%] left-0 w-64 h-56 bg-[#A616BE] rounded-full opacity-30 md:opacity-70 blur-[90px] transform -translate-x-1/4 -translate-y-1/4"></div>

                {/* Blurry pink effect at bottom-right corner */}
                <div className="absolute bottom-[25%] right-0 w-64 h-56 bg-[#A616BE] rounded-full opacity-30 md:opacity-70 blur-[90px] transform translate-x-1/4 translate-y-1/4"></div>

                {/* Content container with max width */}
                <div className="relative max-w-4xl mx-auto text-center z-10">
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        Introducing the CASHAAP Card Series
                    </h2>

                    {/* Sub-heading */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-8">
                        Three Cards. One Mission: Total Financial + Crypto Power.
                    </h3>

                    {/* Paragraph */}
                    <p className="text-lg mx-auto max-w-3xl">
                        No matter where you are in your credit or crypto journey, there&apos;s a Cashaap card to level you up. From getting
                        your score back on track to maximizing your BTC rewards—we&apos;ve got a tier that matches your grind.
                    </p>
                </div>
            </div>


<div className=''>
<CardOverlay heading={'CASHAPP CORE'} subheading={'Start Strong. Stack BTC.'} paragraph={'Start building credit—and your Bitcoin stash—today.'} cardImage={Card1} background={'#F2EFEF'} headingColor1={'#330921'} headingColor2={'#EE5347'}/>


<FeaturesSection image={Feature1} features={[
    'Credit builder card with near-instant approval',
'Buy Bitcoin directly in-app, anytime',
'Earn BTC rewards with every swipe',
'Monthly credit bureau reporting helps boost your score',
'Zero annual fees, always'
]}/>

<CardOverlay heading={'CASHAPP PLUS'} subheading={'Boost Credit. Stack More Sats'} paragraph={'Next-level credit and next-level stacking'} cardImage={Card2} background={'#e5e7fe'} headingColor1={'#330921'} headingColor2={'#016A81'}/>

<FeaturesSection image={Feature2} features={[
    'Higher credit limits + flexible usage',
'Earn cashback in BTC on every purchase',
'Real-time Bitcoin price tracking in your dashboard',
'Tools to boost and monitor your credit',
'Exclusive BTC buy/sell/spend options'
]}/>

<CardOverlay heading={'CASHAPP ELITE'} subheading={'Premium Credit. Premium Crypto'} paragraph={'Serious card. Serious stacking power'} cardImage={Card3} background={'#FFE2DD'} headingColor1={'#330921'} headingColor2={'#EE5347'}/>

<FeaturesSectionReversed image={Feature3} features={[
    'High-limit credit backed by your BTC assets',
'Priority BTC access with lower fees',
'Crypto cashback + travel + lifestyle perks',
'Advanced credit tools to boost and repair your score',
'24/7 Elite support and Bitcoin market intel'
]}/>

<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center mt-8">Cashaap: For the Bitcoin-Built Life</h2>

<FeaturesSection image={Feature4} features={[
    'Buy BTC instantly through your dashboard',
'Earn sats back with every transaction',
'Manage your Bitcoin and credit in one sleek platform',
'Build financial strength—on-chain and off',
'Secure, regulated, and fully crypto-aligned'
]}/>

<FAQAccordion />

<CallToAction />
</div>
            
        </div>
    )
}

export default CashApp
