import React, { useState } from 'react'
import { SquareMenu } from 'lucide-react';
import { FaGraduationCap } from "react-icons/fa6";

function AdSidebar() {
    const [open , setOpen] = useState(true);
  return (
    <div>
        <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg w-fit md:w-fit flex flex-col p-15
            transform duration-300 transition-transform ${!open ? '-translate-x-full' :'translate-x-0'}
            `}>
       
       {/* menu content */}
       <div className='text-blue-500 font-bold text-3xl mb-8 mt-5'>
        <div className='flex items-center gap-2 w-fit'>
        <FaGraduationCap className='text-blue-500 '/>
        UniRepo</div>
       </div>

        <nav className='flex flex-col space-y-6 mt-5 p-2 w-fit'>
            <a href="/admin/dashboard" className='text-lg text-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Dashboard</a>
            <a href="/admin/projects" className='text-lg text-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Projects</a>
            <a href="/admin/universities" className='text-lg text-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Universities</a>
            <a href="/admin/settings" className='text-lg text-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white'>Settings</a>
        </nav>

    <button onClick={()=>setOpen(!open)} className='absolute top-3 -right-12 bg-white p-1 rounded-tr-md rounded-br-md '> 
      <SquareMenu className='text-blue-500' size={40}/>
    </button>
    </div>
    </div>
  )
}

export default AdSidebar