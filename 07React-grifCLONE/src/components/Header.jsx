import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignRight } from "react-icons/fi";



function Header() {
  return (
    <nav>
    <div className='w-full h-20 flex items-center justify-between px-4 bg-gray-900 text-white'>
        <Link to="/">
          <img src='logo.svg' className='w-8' alt='Gify' />
          <h1  className='text-5xl font-bold  tracking-tight cursor-pointer'>Gify</h1>
          
        </Link>

        <Link to="/favorite" className='text-2xl font-bold  tracking-tight cursor-pointer border-2'>
        Favorite gif
        </Link>
        <button onClick={} >
          <FiAlignRight/>
      </button>
        
    </div>
        </nav >
  )
}

export default Header