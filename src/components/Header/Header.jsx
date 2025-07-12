import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='nav-section'>
                <h2 className='nav-link'>Home</h2>
                <h2 className='nav-link'>Collection</h2>
            </div>
            
            <div className='logo-section'>
                <img src='/assets/rotating-logo.gif' alt='Rotating Logo' className='logo' />
            </div>
            
            <div className='nav-section'>
                <h2 className='nav-link'>Contact</h2>
                <h2 className='nav-link'>About</h2>
            </div>
        </div>
    </div>
  )
}

export default Header