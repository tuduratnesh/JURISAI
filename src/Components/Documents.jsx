import React from 'react'

function Documents() {
  return (
    <>
    <div className="p-6">
    <div className='w-full flex items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
      <input
        type="text"
        id="name"
        placeholder="Search documents...."
         className="w-full outline-none"
      />
      <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
    </div>
    </div>
    <div className='w-full m-3 p-2 border-2 border-black rounded-2xl'>
      <div className='h-20'></div>
    </div>
    </div>
    </>
  )
}

export default Documents