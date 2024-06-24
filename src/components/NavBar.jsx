import React from 'react'
import Logo from "../assets/logosinletras.png"

const NavBar = () => {
  return (
    <div className='relative w-full z-50 bg-blue-500 flex justify-around items-center'>
        <img src={Logo} alt="" className='w-16'/>
        <ul className='flex w-1/2 justify-around text-xl text-yellow-300 font-body font-bold'>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
        </ul>
    </div>
  )
}

export default NavBar