import { Link } from 'react-router-dom'
import Card1 from '../../../assets/nexon-card1.png'
import Card2 from '../../../assets/nexon-card2.png'
import Card3 from '../../../assets/nexon-card3.png'

const Cards = () => {
    return (
        <div>
            <style jsx>{`
                @keyframes bounceEffect {
                    0% {
                        transform: translateY(0) translateX(-50%);
                    }
                    50% {
                        transform: translateY(-20px) translateX(-50%);
                    }
                    75% {
                        transform: translateY(-10px) translateX(-50%);
                    }
                    100% {
                        transform: translateY(0) translateX(-50%);
                    }
                }

                .card-image {
                    position: absolute;
                    top: -6rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20rem;
                    border-radius: 1.5rem;
                    animation: bounceEffect 2s ease infinite;
                }

                .card-image-1 {
                    animation-delay: 0s;
                }
                
                .card-image-2 {
                    animation-delay: 0s;
                }
                
                .card-image-3 {
                    animation-delay: 0s;
                }
            `}</style>

            <section className="bg-white py-16 px-4 md:px-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-32 mb-30">
                    Borrow <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">Smarter</span>. Spend <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">Freer</span>. Stay <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">Invested</span>.
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-44 md:gap-10">

                    {/* Card 1 - Classic */}
                    <div className="relative bg-[#F3EBFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl">
                        <img
                            src={Card1}
                            alt="Classic Card"
                            className="card-image card-image-1"
                        />
                        <h3 className="bg-gradient-to-b from-[#734DD9] to-[#0B021B] text-transparent bg-clip-text text-2xl font-bold mb-1">Nexo Classic Card</h3>
                        <p className="font-medium mb-4">Simple, Secure, Smart.</p>
                        <p className="text-gray-600 text-sm">
                            Ideal for everyday use, the Nexo Classic Card gives you seamless access to your crypto credit line with no fees, no complication, and full controls.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Instant access to liquidity</li>
                            <li>No monthly or hidden fees</li>
                            <li>Earn crypto rewards on every purchase</li>
                            <li>Spend without selling your crypto</li>
                        </ul>
                        <Link to="/login">
                        <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                            Get Started
                        </button>
                        </Link>
                    </div>

                    {/* Card 2 - Premium (lowered) */}
                    <div className="relative bg-[#EAFFDA] rounded-xl w-full max-w-sm pt-32 pb-24 px-6 text-center mt-12 md:mt-36">
                        <img
                            src={Card2}
                            alt="Premium Card"
                            className="card-image card-image-2"
                        />
                        <h3 className="bg-gradient-to-b from-[#5EBE17] to-[#1D1A1A] text-transparent bg-clip-text text-2xl font-bold mb-1">Nexo Premium Card</h3>
                        <p className="font-medium mb-4">More Flexibility, More Rewards</p>
                        <p className="text-gray-600 text-sm">
                            Advanced features, higher limits, and priority benefits. The Premium Card is perfect for users who want more from every transaction.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Higher spending limits</li>
                            <li>Flexible repayment options</li>
                            <li>Priority customer support</li>
                            <li>Enhanced cashback in NEXO or BTC</li>
                        </ul>
                        <Link to="/login">
                        <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                            Get Started
                        </button>
                        </Link>
                    </div>

                    {/* Card 3 - Infinite */}
                    <div className="relative bg-[#DBFCFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl">
                        <img
                            src={Card3}
                            alt="Infinite Card"
                            className="card-image card-image-3"
                        />
                        <h3 className="bg-gradient-to-b from-[#025E67] to-[#1D1A1A] text-transparent bg-clip-text text-2xl font-bold mb-1">Nexo Infinite Card</h3>
                        <p className="font-medium mb-4">Unlimited Potential. Total Control.</p>
                        <p className="text-gray-600 text-sm">
                            Built for high-value users and visionaries, the Infinite Card unlocks Nexo's most exclusive benefits and spending power.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Customized credit terms</li>
                            <li>White-glove concierge service</li>
                            <li>Access to Nexo Private & OTC services</li>
                            <li>Top-tier loyalty rewards</li>
                        </ul>
                        <Link to="/login">
                        <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                            Get Started
                        </button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Cards