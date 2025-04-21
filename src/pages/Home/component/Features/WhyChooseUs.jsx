/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { Wallet, CreditCard, Globe2, Shield, Layout } from 'lucide-react';

// function FeatureCard({ icon: Icon, title, description }) {
//   return (
//     <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 hover:bg-black/30 transition-all cursor-pointer group">
//       <div className="rounded-full bg-purple-500/20 p-3">
//         <Icon className="w-6 h-6 text-purple-400" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//         <p className="text-gray-300">{description}</p>
//       </div>
//       <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
//         →
//       </div>
//     </div>
//   );
// }

// function WhyChooseUs() {
//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{
//       backgroundImage: 'url(YOUR_BACKGROUND_IMAGE_URL_HERE)' // Replace with your image URL
//     }}>
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#27012F] to-[#550665]"></div>
      
//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-salsa text-center text-white mb-12">
//           Why Choose Our Platform?
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//           <FeatureCard
//             icon={Wallet}
//             title="All-in-One Convenience"
//             description="No need to visit multiple providers"
//           />
          
//           <FeatureCard
//             icon={Shield}
//             title="Secure & Instant Transactions"
//             description="Fast, encrypted payments—even with Bitcoin"
//           />
          
//           <FeatureCard
//             icon={CreditCard}
//             title="Flexible Credit Solutions"
//             description="Expand your financial options"
//           />
          
//           <FeatureCard
//             icon={Layout}
//             title="User-Friendly Experience"
//             description="Easy navigation and quick setup"
//           />
//         </div>

//         <div className="mt-6 max-w-6xl mx-auto">
//           <FeatureCard
//             icon={Globe2}
//             title="Global Accessibility"
//             description="Use your cards anywhere, anytime"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhyChooseUs;



import { ShoppingBag, Shield, CreditCard, Settings, Globe, ArrowRight } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="relative  rounded-2xl p-6 flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:bg-[#2a1b3e]">
      <div className=" p-2 rounded-lg group-hover:bg-[#3a2b4e]">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <div className="w-8 h-8 rounded-full bg-[#8a2be2] flex items-center justify-center group-hover:bg-[#9d3cf8]">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-16">
          Why Choose Our<br />Platform?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={ShoppingBag}
            title="All-in-One Convenience"
            description="No need to visit multiple providers"
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Instant Transactions"
            description="Fast, encrypted payments—even with Bitcoin"
          />
          <FeatureCard
            icon={CreditCard}
            title="Flexible Credit Solutions"
            description="Expand your financial options"
          />
          <FeatureCard
            icon={Settings}
            title="User-Friendly Experience"
            description="Easy navigation and quick setup"
          />
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="max-w-lg w-full">
            <FeatureCard
              icon={Globe}
              title="Global Accessibility"
              description="Use your cards anywhere, anytime"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;