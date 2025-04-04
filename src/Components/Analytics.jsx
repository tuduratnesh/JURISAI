import React from 'react'

function Analytics() {
  return (
    <>
    <div className="p-6">
    <div className='w-full flex items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
      <input
        type="text"
        id="name"
        placeholder="Search documents..."
         className="w-full outline-none"
      />
      <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    </div>
    </div>
    <div>
      <div className='px-6 font-semibold text-2xl'>DOCUMENT QUEUE</div>
      <ol className='px-11 py-2 list-disc'>
        <li className='py-1'>Pending</li>
        <li className='py-1'>In progress</li>
        <li className='py-1'>Completed</li>
      </ol>
    </div>
    <div>
      <div className='px-6 font-semibold text-2xl'>DOCUMENT TYPES</div>
      <ol className='px-11 py-2 list-disc'>
        <li className='py-1'>Landing Agreements</li>
        <li className='py-1'>Urban Agreements</li>
        <li className='py-1'>Mining Site Documents</li>
        <li className='py-1'>Power Plant Plans</li>
      </ol>
    </div>
    <div>
    <div className='px-6 font-semibold text-2xl'>Quick Filters</div>
      <ol className='px-11 py-2 list-disc'>
        <li className='py-1'>Critical Issues</li>
        <li className='py-1'>Recent activity</li>
        <li className='py-1'>Pending Approval</li>
      </ol>
    </div>
    <hr/>
    <div className='space-y-3'>
    <div className='px-6 font-bold text-2xl pt-3'>WELCOME ADMINISTRATOR</div>
    <div className='px-6 py-1.5'>Here’s your document processing overview for today</div>
    <div className='mx-6 p-3 border-2 border-black rounded-2xl'>
      <div>DOCUMENTS RETRIEVED</div>
      <div className='h-20'></div>
    </div>
    <div className='mx-6 p-3 border-2 border-black rounded-2xl'>
      <div>PENDING OBJECTIONS</div>
      <div className='h-20'></div>
    </div>
    <div className='mx-6 mb-3 p-3 border-2 border-black rounded-2xl'>
      <div>AVG. TIME</div>
      <div className='h-20'></div>
    </div>
    </div>
    </>
  )
}

export default Analytics