import React from 'react'

const FeaturesSectionReversed = ({ image, features }) => {
  return (
    <div>
      <div className="max-w-[85%] px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10">
        
        {/* Bullet Points - Now First and Slightly Centered */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <ul className="space-y-5 text-lg text-gray-800 max-w-md">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="relative mr-3 flex-shrink-0">
                  {/* Outer ring */}
                  <div className="w-6 h-6 rounded-full border-2 border-green-500"></div>
                  {/* Inner dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-lg font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </ul>
        </div>

        {/* Image - Now Second */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={image}
            alt="App Preview"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturesSectionReversed
