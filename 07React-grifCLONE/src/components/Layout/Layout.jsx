import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

function Layout() {
  return (
    <div className='bg-gray-950 text-white min-h-screen'>
      <Header/>
      {/* header */}
      <main>
      
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout