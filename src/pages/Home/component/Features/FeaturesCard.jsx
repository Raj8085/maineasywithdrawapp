import { PieChart } from "lucide-react"

const FeatureCards = () => {
  return (
    <div className="bg-gradient-to-br from-[#550665] to-[#A98C18] w-full min-h-screen  py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Grow your Saving */}
        {/* <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-8 flex flex-col justify-between shadow-lg border border-purple-800/30 h-[400px] transition-transform hover:scale-[1.02]"> */}
        <div
  style={{
    background: "linear-gradient(to bottom right, #130432 0%, #31064D 50%, #52006D 100%)"
  }}
  className="rounded-xl p-8 flex flex-col justify-between shadow-lg border h-[600px] transition-transform hover:scale-[1.02]"
>
          <h2 className="text-amber-400 text-3xl font-bold mb-8">Grow your Saving</h2>
          {/* <img src="" alt=""/> */}
          <div className="flex items-end justify-center h-48 space-x-4">
            <div className="w-12 h-32 bg-indigo-500 rounded-t-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
            <div className="w-12 h-16 bg-indigo-500 rounded-t-md"></div>
            <div className="w-12 h-24 bg-indigo-500 rounded-t-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
            <div className="w-12 h-8 bg-indigo-500 rounded-t-md"></div>
            <div className="w-12 h-40 bg-indigo-500 rounded-t-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-indigo-500/50 mt-2"></div>
        </div>
        {/* Card 2 - Manage your assets */}
        <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border border-purple-800/30 h-[600px] transition-transform hover:scale-[1.02]" style={{
  background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)"
}}>
          <h2 className="text-amber-400 text-3xl font-bold text-center">Manage your assets</h2>
          <div className="mt-8">
            <PieChart className="w-24 h-24 text-indigo-400 opacity-70" />
          </div>
        </div>
        {/* Card 3 - Spend anywhere */}
        <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-8 flex flex-col justify-center items-center shadow-lg border border-purple-800/30 h-[600px] transition-transform hover:scale-[1.02]" style={{
  background: "linear-gradient(135deg, #130432 0%, #31064D 50%, #60097D 100%)"
}}>
          <h2 className="text-amber-400 text-3xl font-bold text-center">Spend anywhere</h2>
          <div className="mt-8 relative">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
              <span className="text-purple-900 text-2xl font-bold">€</span>
            </div>
            <div className="absolute top-1/2 left-full w-16 h-[2px] bg-amber-400/30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCards

