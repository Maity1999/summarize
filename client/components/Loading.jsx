import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center py-12'>
        <div className='animate-spin rounded-full h-12 w-12 border-4 border-t-indigo-600 border-gray-300'></div>
        <p className="ml-4 mt-6 text-purple-600">Generating summary...</p>
    </div>
  )
}

export default Loading