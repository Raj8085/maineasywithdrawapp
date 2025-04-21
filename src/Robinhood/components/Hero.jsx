
// const Hero = () => {
//     return (
//         <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FFF7B9]">
//             {/* Text Section */}
//             <div className="flex flex-col justify-start h-full p-10 md:p-20 box-border overflow-hidden">
//                 <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-14 text-[#675B00]">
//                     Banking is Broken. <br />
//                     We’re Not Here to Fix It — <br />
//                     We’re Replacing It.
//                 </h1>
//                 <p className="text-lg md:text-2xl text-gray-700 mb-10 md:mb-14">
//                     Introducing Robin Hood — Cards that give you control, not limits.
//                 </p>
//                 <button className="flex items-center justify-between w-40 md:w-1/3 px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
//                     Sign Up
//                     <span className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full ml-3">
//                         ➔
//                     </span>
//                 </button>
//             </div>

import { Link } from "react-router-dom"

//             {/* Image Section */}
//             <div className="flex items-center justify-center h-full overflow-hidden">
//                 <img
//                     src="/robinhood-hero.png"
//                     alt="Banking Cards"
//                     className="max-h-[90%] w-auto object-contain"
//                 />
//             </div>
//         </div>
//     )
// }

// export default Hero





const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-[#FFF7B9]">
            {/* Text Section */}
            <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 pt-16 pb-8 sm:py-16 md:py-20 box-border">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-14 text-[#675B00]">
                    Banking is Broken. <br />
                    We're Not Here to Fix It — <br />
                    We're Replacing It.
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-8 sm:mb-10 lg:mb-14">
                    Introducing Robin Hood — Cards that give you control, not limits.
                </p>
                <Link to="/login">
                <button className="flex items-center justify-between w-40 sm:w-48 md:w-52 lg:w-64 px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
                    Sign Up
                    <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white text-black rounded-full ml-2 sm:ml-3">
                        ➔
                    </span>
                </button>
                </Link>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center py-6 sm:py-10 px-4 sm:px-6">
                <img
                    src="/robinhood-hero.png"
                    alt="Banking Cards"
                    className="max-w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[90%] object-contain"
                />
            </div>
        </div>
    )
}

export default Hero