import React, { useState } from 'react'
import { SquareMenu } from 'lucide-react';
function Sidebar() {
    const [open , setOpen] = useState(true);
  return (
    <div>
        <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg w-2/3 md:w-1/5 z-50 flex flex-col p-15
            transform duration-300 transition-transform ${!open ? '-translate-x-full' :'translate-x-0'}
            `}>
       
       {/* menu content */}
       <div className='text-blue-500 font-bold text-3xl mb-8 mt-5'>
        UniRepo
       </div>

        <nav className='flex flex-col space-y-6 mt-5'>
            <a href="/university/dashboard" className='text-lg text-gray-700 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Dashboard</a>
            <a href="/university/courses" className='text-lg text-gray-700 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Courses</a>
            <a href="/university/students" className='text-lg text-gray-700 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Students</a>
            <a href="/university/profile" className='text-lg text-gray-700 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Profile</a>
            <a href="/university/settings" className='text-lg text-gray-700 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-500 hover:text-white'>Settings</a>
        </nav>

    <button onClick={()=>setOpen(!open)} className='absolute top-3 -right-12 bg-white p-1 rounded-tr-md rounded-br-md '> 
      <SquareMenu className='text-blue-500' size={40}/>
    </button>
    </div>
    </div>
  )
}

export default Sidebar