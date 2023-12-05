import React from 'react'

const Shimmer = () => {
    
  return (
   
    <div className='flex flex-wrap m-2 my-2'>
    {Array.from({ length: 10 }, (_, index) => (
      <div className="animate-pulse " key={index}>
        <div className="bg-gray-300 h-60 w-60 rounded p-2 m-2 my-3"></div>
        
      </div>
  ))}
  </div>

  )
}

export default Shimmer
