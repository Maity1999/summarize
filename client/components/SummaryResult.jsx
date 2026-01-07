import React from 'react'

const SummaryResult = ({result}) => {
  return (
    <div className="mt-8 w-full">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 text-center">Summary</h2>
            <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
                <p className="text-gray-100 leading-relaxed">{result}</p>
            </div>
        </div>
    </div>
  )
}

export default SummaryResult