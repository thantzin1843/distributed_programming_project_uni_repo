import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/University/Sidebar'

function UniversityLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default UniversityLayout