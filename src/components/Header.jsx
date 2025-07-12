import React from 'react'

function Header() {
  return (
    <div className='flex flex-row items-center justify-between h-20 bg-transparent text-white px-8 w-full' >
        <div className='flex flex-row items-center space-x-6'>
            <h2 className='cursor-pointer hover:text-gray-300 transition-colors !text-white'>
                Home
            </h2>
            <h2 className='cursor-pointer hover:text-gray-300 transition-colors !text-white'>
                About
            </h2>
        </div>
        
        <div className='flex-shrink-0'>
            <img src='/assets/rotating-logo.gif' alt='Rotating Logo' className='w-8 h-8' />
        </div>
        
        <div className='flex flex-row items-center space-x-6'>
            <h2 className='cursor-pointer hover:text-gray-300 transition-colors !text-white'>
                Contact
            </h2>
            <h2 className='cursor-pointer hover:text-gray-300 transition-colors !text-white'>
                Collection
            </h2>
        </div>
    </div>
  )
}

export default Header