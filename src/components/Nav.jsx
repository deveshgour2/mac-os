import React from 'react'
import "./Nav.scss"
import Date from './Date'

const Nav = () => {
  return (
    <nav>
        <div className='left'>
            <img src="/nav-icons/applel.svg" alt="" />
            <p>Devesh Gour</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className='right'>
             <img src="/nav-icons/wifi.svg" alt="" />
             <Date/>
        </div>
    </nav>
  )
}

export default Nav
