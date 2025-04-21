import { Link } from 'react-router-dom'
import Card1 from '../../../assets/paypal-card1.png'
import Card2 from '../../../assets/paypal-card2.png'
import Card3 from '../../../assets/paypal-card3.png'

const Cards = () => {
    return (
        <div>
            <style jsx>{`
                .card-container {
                    position: relative;
                }

                .card-image {
                    position: absolute;
                    top: -6rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20rem;
                    border-radius: 1.5rem;
                    transition: top 0.3s ease; /* Add smooth transition */
                }

                .card-container:hover .card-image {
                    top: 0; /* Move image to top: 0 on hover */
                }
            `}</style>

            <section className="bg-white py-16 px-4 md:px-12">
                <h2 className="text-2xl md:text-4xl font-medium text-center mb-16 md:mb-32">
                Introduction Our Three Signature Cards
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                    {/* Card 1 - Classic */}
                    <div className="card-container relative bg-[#D0CEFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl mt-36 md:mt-0">
                        <img
                            src={Card1}
                            alt="Classic Card"
                            className="card-image card-image-1"
                        />
                        <h3 className="bg-gradient-to-b from-[#000024] to-[#5F30EA] text-transparent bg-clip-text text-2xl font-bold mb-1">PayLite Card</h3>
                        <p className="font-medium mb-4">Spend anywhere,instantly.</p>
                        <p className="text-gray-600 text-sm">
                        Spend anywhere, instantly.
                        Your go-to card for everyday purchases. Use crypto or fiat—seamlessly and globally. Simple, fast, and always reliable.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Automatic conversion at point of sale</li>
                            <li>Works globally (online & in-store)</li>
                            <li>Virtual and physical card options</li>
                        </ul>
                        <Link to="/login">
                        <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                            Get Started
                        </button>
                        </Link>
                    </div>

                    {/* Card 2 - Premium (lowered) */}
                   
                    <div className="card-container relative bg-[#EDEEFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl mt-36 md:mt-0">
                        <img
                            src={Card2}
                            alt="Premium Card"
                            className="card-image card-image-2"
                        />
                        <h3 className="bg-gradient-to-b from-[#0D0E1C] to-[#683FE3] text-transparent bg-clip-text text-2xl font-bold mb-1">PayPlus Card</h3>
                        <p className="font-medium mb-4">Earn more with every swipe.</p>
                        <p className="text-gray-600 text-sm">
                        Get cashback, rewards, and access to lifestyle perks. Perfect for frequent users who want more from their money.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Up to 3% cashback in crypto or fiat</li>
                            <li>Exclusive discounts with partner brand </li>
                            <li>Travel and purchase protection</li>
                        </ul>
                        <Link to="/login">
                        <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                            Get Started
                        </button>
                        </Link>
                    </div>

                    {/* Card 3 - Infinite */}
                    <div className="card-container relative bg-[#D2E7F6] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl mt-36 md:mt-0">
                        <img
                            src={Card3}
                            alt="Infinite Card"
                            className="card-image card-image-3"
                        />
                        <h3 className="bg-gradient-to-b from-[#000024] to-[#5F30EA] text-transparent bg-clip-text text-2xl font-bold mb-1">PaySecure Card</h3>
                        <p className="font-medium mb-4">Protect what matters.</p>
                        <p className="text-gray-600 text-sm">
                        For long-term holders who value security, savings, and stability. Includes advanced protection and optional staking features.
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Cold storage wallet integration</li>
                            <li>High-yield staking (up to 10% APY)</li>
                            <li>Biometric authentication & 2FA</li>
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