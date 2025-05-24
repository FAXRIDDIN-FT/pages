import React from 'react'

const SkeletonPosts = ({count = 0}) => {
  return (
    <>
     <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {Array(count)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className='bg-gray-800 rounded-2xl shadow-lg p-6 animate-pulse flex flex-col'
          >
            <div className='w-3/4 h-5 bg-gray-600 mb-3 rounded' />
            <div className='h-16 bg-gray-700 mb-4 rounded' />

            <div className='space-y-2 mb-4'>
              <div className='w-1/2 h-3 bg-gray-600 rounded' />
              <div className='w-1/3 h-3 bg-gray-600 rounded' />
            </div>

            <div className='mt-auto flex gap-3 justify-center'>
              <div className='h-8 w-20 bg-gray-600 rounded' />
              <div className='h-8 w-20 bg-gray-600 rounded' />
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default SkeletonPosts