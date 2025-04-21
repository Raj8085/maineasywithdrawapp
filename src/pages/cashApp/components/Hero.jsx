// import React, { useEffect, useState } from "react";
// import phoneImage from "../../../assets/cash-app-hero-phone.png";
// import cardImage from "../../../assets/cash-app-hero-card.png";
// import ScrollDOwn from "../../../assets/scroll-down.gif";

// const Hero = () => {
//     const [gradientIndex, setGradientIndex] = useState(0);
    
//     const gradients = [
//         "linear-gradient(90deg, #FFC000 0%, #4D2EAD 100%)",   // Combo 1
//         "linear-gradient(90deg, #B71A54 0%, #A4C457 43%)",   // Combo 2
//         "linear-gradient(90deg, #E04A81 0%, #6C53C4 100%)"    // Combo 3
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setGradientIndex((prev) => (prev + 1) % 3);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="bg-[#F2EFEF] rounded-3xl m-4 md:m-8 h-full md:h-[80vh] relative">
//             <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 h-full">
//                 {/* Left Section */}
//                 <div className="w-full lg:w-1/2 text-left h-full flex flex-col">
//                     <div className="p-6 md:p-12 flex-1">
//                     <h1 className="text-5xl md:text-8xl font-bold mb-8">
//                             <span className="text-black">Power Over</span> <br />
//                             <div className="relative inline-block">
//                                 {gradients.map((gradient, index) => (
//                                     <span
//                                         key={index}
//                                         className={`absolute top-0 left-0 bg-clip-text text-transparent transition-all duration-1000 ${
//                                             gradientIndex === index ? 'opacity-100' : 'opacity-0'
//                                         }`}
//                                         style={{
//                                             backgroundImage: gradient,
//                                             WebkitBackgroundClip: 'text',
//                                             backgroundClip: 'text',
//                                             transform: `translateY(${
//                                                 gradientIndex === index && index === 1 ? '-10px' : '0'
//                                             })`
//                                         }}
//                                     >
//                                         Every Dollar
//                                     </span>
//                                 ))}
//                                 <span className="invisible">Every Dollar</span>
//                             </div>
//                         </h1>
//                         <h2 className="text-2xl md:text-3xl font-medium mb-4">
//                             Banking, without the
//                             <br /> baggage
//                         </h2>
//                         <p className="text-gray-800 text-lg mb-8">
//                             Send it. Spend it. Stack it. Your money, your rules- with zero <br />
//                             hidden fees.
//                         </p>
//                     </div>
//                     <div className="relative flex-1">
//                         <div className="w-[40vw] h-[110%] absolute bottom-0 left-0 overflow-hidden rounded-3xl">
//                             <img 
//                                 src={cardImage} 
//                                 alt="Crypto Card" 
//                                 className="w-full h-full object-cover absolute bottom-[-5%] left-[-25%]"
//                             />
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* Right Section */}
//                 <div className="w-full lg:w-[60%] h-full flex justify-center">
//                     <img 
//                         src={phoneImage} 
//                         alt="Mobile app interface" 
//                         className="h-full w-auto object-contain animate-float"
//                         style={{
//                             animation: "float 4s ease-in-out infinite"
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* Scroll Down - Absolute positioned and hidden on mobile */}
//             <div className="hidden md:flex flex-col items-center absolute bottom-6 left-1/2 transform -translate-x-1/2">
//                 <h3 className="text-center font-medium mb-1">Scroll Down</h3>
//                 <img src={ScrollDOwn} alt="Scroll Down" className="w-10 h-10" />
//                 <div className="text-center text-xs text-gray-600 px-4 py-2 ">
//                 <p>CASHAAP is a financial technology platform,<br /> not a bank. Banking services are provided by <br /> our licensed banking partners. CASHAAP Cards <br /> are issued by Sutton Bank, Member FDIC.</p>
//                 </div>
//             </div>
            
//             {/* Disclaimer text - positioned at the bottom */}
//             {/* <div className="text-center text-xs text-gray-600 px-4 py-2 absolute bottom-0 left-0 right-0">
//                 <p>CASHAAP is a financial technology platform,<br /> not a bank. Banking services are provided by <br /> our licensed banking partners. CASHAAP Cards <br /> are issued by Sutton Bank, Member FDIC.</p>
//             </div> */}
            
//             <style jsx>{`
//                 @keyframes float {
//                     0% { transform: translateY(0px); }
//                     50% { transform: translateY(-20px); }
//                     100% { transform: translateY(0px); }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Hero;




import React, { useEffect, useState } from "react";
import phoneImage from "../../../assets/cash-app-hero-phone.png";
import cardImage from "../../../assets/cash-app-hero-card.png";
import ScrollDOwn from "../../../assets/scroll-down.gif";

const Hero = () => {
    const [gradientIndex, setGradientIndex] = useState(0);
    
    const gradients = [
        "linear-gradient(90deg, #FFC000 0%, #4D2EAD 100%)",   // Combo 1
        "linear-gradient(90deg, #B71A54 0%, #A4C457 43%)",   // Combo 2
        "linear-gradient(90deg, #E04A81 0%, #6C53C4 100%)"    // Combo 3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setGradientIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#F2EFEF] rounded-3xl m-4 md:m-8 h-full md:h-[80vh] relative">
            
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 h-full">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 text-left h-full flex flex-col">
                    <div className="p-6 md:p-12 flex-1">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8">
                            <span className="text-black">Power Over</span> <br />
                            <div className="relative inline-block">
                                {gradients.map((gradient, index) => (
                                    <span
                                        key={index}
                                        className={`absolute top-0 left-0 bg-clip-text text-transparent transition-all duration-1000 ${
                                            gradientIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        style={{
                                            backgroundImage: gradient,
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            transform: `translateY(${
                                                gradientIndex === index && index === 1 ? '-10px' : '0'
                                            })`
                                        }}
                                    >
                                        Every Dollar
                                    </span>
                                ))}
                                <span className="invisible">Every Dollar</span>
                            </div>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mb-4">
                            Banking, without the
                            <br /> baggage
                        </h2>
                        <p className="text-gray-800 text-lg mb-8">
                            Send it. Spend it. Stack it. Your money, your rules- with zero <br />
                            hidden fees.
                        </p>
                    </div>
                    <div className="relative flex-1">
                        <div className="w-[40vw] h-[110%] absolute bottom-0 left-0 overflow-hidden rounded-3xl">
                            {/* <img 
                                src={cardImage} 
                                alt="Crypto Card" 
                                className="w-full h-full object-cover absolute bottom-[-5%] left-[-25%]"
                            /> */}
                        </div>
                    </div>
                </div>
                
                {/* Right Section */}
                <div className="w-full lg:w-[60%] h-full flex justify-center">
                    <img 
                        src={phoneImage} 
                        alt="Mobile app interface" 
                        className="h-full w-auto object-contain animate-float"
                        style={{
                            animation: "float 4s ease-in-out infinite"
                        }}
                    />
                </div>
            </div>

            {/* Scroll Down - Absolute positioned and hidden on mobile */}
            <div className="hidden md:flex flex-col items-center absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <h3 className="text-center font-medium mb-1">Scroll Down</h3>
                <img src={ScrollDOwn} alt="Scroll Down" className="w-10 h-10" />
                <div className="text-center text-xs text-gray-600 px-4 py-2 ">
                <p>CASHAAP is a financial technology platform,<br /> not a bank. Banking services are provided by <br /> our licensed banking partners. CASHAAP Cards <br /> are issued by Sutton Bank, Member FDIC.</p>
                </div>
            </div>
            
            {/* Disclaimer text - positioned at the bottom */}
            {/* <div className="text-center text-xs text-gray-600 px-4 py-2 absolute bottom-0 left-0 right-0">
                <p>CASHAAP is a financial technology platform,<br /> not a bank. Banking services are provided by <br /> our licensed banking partners. CASHAAP Cards <br /> are issued by Sutton Bank, Member FDIC.</p>
            </div> */}
            
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </section>
    );
};

export default Hero;