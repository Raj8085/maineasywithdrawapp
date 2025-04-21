
const cardData = [
  {
    title: "RH Start Card",
    subtitle: "Start Strong. Stack BTC",
    description: "Begin your journey to better credit",
    bullets: [
      "Approval with credit-building focus.",
      "Earn BTC rewards on everyday spends",
      "Zero annual fees, no hidden costs"
    ],
    color: "from-orange-400 to-yellow-400",
    border: "border-orange-400",
    hover: "hover:bg-orange-400"
  },
  {
    title: "RH Grow Card",
    subtitle: "Backup That’s Build Build",
    description: "A secondary storage card for backup or emergency recovery use.",
    bullets: [
      "Record a duplicate recovery phrase",
      "Use as a cold storage fallback",
      "Designed for long-term protection."
    ],
    color: "from-pink-500 to-purple-500",
    border: "border-pink-500",
    hover: "hover:bg-pink-400"
  },
  {
    title: "RH Prime Card",
    subtitle: "Premium Credit, Premium",
    description: "Top-tier access to elite credit tools, enhanced privacy, and real BTC rewards",
    bullets: [
      "High-limit credit backed by BTC assets value.",
      "Priority transaction routing & reduced .",
      "24/7 Prime member support with BTC."
    ],
    color: "from-green-500 to-emerald-500",
    border: "border-green-500",
    hover: "hover:bg-green-300"
  }
];

const RobinhoodCardSection = () => {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        The Robinhood Card <span className="text-green-600">Series</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Three Ways to Flex Your Financial Freedom.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {cardData.map((card, index) => (
          <div 
            key={index}
            className={`rounded-xl border ${card.border} p-6 flex flex-col shadow-sm transition ${card.hover} hover:shadow-lg bg-white`}
          >
            <h3 className="text-2xl font-semibold text-black mb-2 philosopher-font text-center">
              {card.title}
            </h3>
            <h4 className="text-lg font-bold text-black mb-2">
              {card.subtitle}
            </h4>
            <p className="text-gray-700 mb-4 text-left">
              {card.description}
            </p>

            <ul className="space-y-3 text-left">
              {card.bullets.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="relative mt-1">
                    <span className={`block w-3 h-3 rounded-full bg-gradient-to-br ${card.color}`}></span>
                    <span className={`absolute w-5 h-5 rounded-full border-2 border-gradient-to-br ${card.color} opacity-50 -top-1 -left-1`}></span>
                  </span>
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RobinhoodCardSection;
