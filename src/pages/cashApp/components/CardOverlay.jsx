import React from 'react'

const CardOverlay = ({ heading, subheading, paragraph, cardImage, background, headingColor1, headingColor2 }) => {



  return (
    // <div>
        <div className="flex flex-col items-center justify-center px-4 max-w-[85%] mx-auto">
                        {/* Heading with gradient */}
                        <h1 
  className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent mt-8"
  style={{ 
    backgroundImage: `linear-gradient(to bottom, ${headingColor1}, ${headingColor2})`
  }}
>
  {heading}
</h1>
        
                        {/* Subheading */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {subheading}
                        </h2>
        
                        {/* Paragraph */}
                        <p className="text-gray-700 text-center mb-10">
                            {paragraph}
                        </p>
        
                        {/* Card container with background */}
                        <div className={`rounded-xl w-full flex justify-center items-center h-[50vh] md:h-[60vh]`} style={{ background: background || 'white' }}>
                            {/* Credit cards container */}
                            <img src={cardImage} alt="" className='w-[80%] h-[50%] md:w-[50%] md:h-[75%]' />
                        </div>
                    </div>
    // </div>
  )
}

export default CardOverlay