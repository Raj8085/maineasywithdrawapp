import cardImage from '../../../assets/nexon-hero.png';
import cardImage2 from '../../../assets/nexon-hero2.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="m-4 md:m-12 p-4 md:p-6 bg-gradient-to-bl from-[#D7F3E5] to-[#F2F2F2] rounded-2xl h-full md:h-[80vh]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 h-full">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 text-center md:text-left font-popins flex flex-col justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Nexo Wallet,<br />
              Now in Your{' '}
              <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
                Pocket
              </span>
            </h1>
            <p className="text-gray-700 mt-4 md:mt-6 text-base sm:text-lg md:text-xl">
              Nexo is your all-in-one platform to access the full potential of your crypto—without ever needing to sell it.
            </p>
            <Link to="/login">
            <button className="mt-6 md:mt-8 bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-white w-full sm:w-auto px-10 md:px-16 py-3 md:py-4 rounded-2xl shadow-lg hover:brightness-110 transition-all">
              Sign Up
            </button>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full  md:w-1/2 h-[30vh] md:h-full flex flex-col justify-end items-center rounded-2xl p-4 relative">
            <img
              src={cardImage2}
              alt="Crypto Cards"
              className="w-[50%] md:w-[70%] absolute top-0 left-1/2 transform -translate-x-1/2 floating-card"
            />
            <img
              src={cardImage}
              alt="Crypto Cards"
              className="w-[50%] md:w-[70%]"
            />
          </div>

        </div>
      </section>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes floatY {
          0%   { transform: translate(-50%, 0); }
          25%  { transform: translate(-50%, -20px); }
          50%  { transform: translate(-50%, -10px); }
          75%  { transform: translate(-50%, -20px); }
          100% { transform: translate(-50%, 0); }
        }

        .floating-card {
          animation: floatY 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
