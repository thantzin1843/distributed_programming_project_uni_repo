import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <>
      <Navbar/>
      <div className="bg-blue-50 min-h-screen p-6">
          <Outlet/>
      </div>
    </>
  )
}

export default Layout