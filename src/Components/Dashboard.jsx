import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="p-6">
    <div className='w-full flex items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
      <input
        type="text"
        id="name"
        placeholder="Upload documents with prompt"
         className="w-full outline-none"
      />
      <div className='flex space-x-2'>
      <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
      <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard