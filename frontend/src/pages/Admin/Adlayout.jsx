import React from 'react'
import { Outlet } from 'react-router-dom'
import AdSidebar from '../../components/Admin/AdSidebar'

const AdLayout= () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdSidebar />
      <Outlet/>
    </div>
  )
}

export default AdLayout