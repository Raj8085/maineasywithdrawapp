// import KeyImg from "../../assets/mockup-key.png";
// import ShieldImg from "../../assets/mockup-shield.png";
// import CoinImg from "../../assets/mockup-coin.png";

const features = [
  {
    title: "Decentralized-first.",
    description: "You don’t need a bank account.",
    bg: "bg-red-100",
    titleColor: "text-red-600",
    icon: "/mockup-key.png"
  },
  {
    title: "Crypto-native",
    description: "Not crypto-on-top-of-fiat. This is built from scratch.",
    bg: "bg-purple-100",
    titleColor: "text-purple-700",
    icon: "/mockup-coin.png"
  },
  {
    title: "Privacy-obsessed.",
    description: "No KYC required for core wallets.",
    bg: "bg-[#ACF2FF]",
    titleColor: "text-sky-700",
    icon: "/mockup-shield.png"
  },
  {
    title: "Sovereignty focused.",
    description: "You hold keys. You authorize every spend.",
    bg: "bg-[#E4FFBE]",
    titleColor: "text-[#467800]",
    icon: "/mockup-key.png"
  }
];

const RobinhoodFeatureSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-green-800 mb-8">
        What Makes Robin Hood Different ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-20 justify-items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start ${item.bg} rounded-xl p-6 md:p-8 w-80 text-left shadow-md`}
          >
            <img src={item.icon} alt="icon" className="w-10 h-10 mb-4" />
            <h3 className={`font-semibold text-lg mb-2 ${item.titleColor}`}>{item.title}</h3>
            <p className="text-gray-800 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RobinhoodFeatureSection;